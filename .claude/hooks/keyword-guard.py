#!/usr/bin/env python3
"""PreToolUse guard: refuse any edit that drops a protected keyword.

This exists because of commit a8ff1f4, which shortened 17 meta descriptions to
hit a character count and in the process deleted the brand from four titles,
`Great Neck`, `Broad Bay Island`, `Hurricane`, `minimum approach distances`,
`co-dominant union`, and `Free estimates`. Fourteen keyword losses across
fourteen files, all of them words that happened to sit at the end of a
sentence. It had to be reverted in 52e05e9.

Every one of those losses has the same signature: a term present in the old
text and absent from the new one. That is a mechanical check, so it belongs in
a hook rather than in a paragraph of advice.

The term list is read from the table in CLAUDE.md section 3 so there is exactly
one source of truth. Both sides are HTML-unescaped first, because JSX source
carries `&amp;` where the rendered page has `&` — miss that and every length or
content check is wrong.

Exit 0 = allow. Exit 2 = block, and stderr goes back to Claude.
"""

import html
import json
import os
import re
import sys

# Content lives here. Editing a hook, a config, or CLAUDE.md itself is not
# what this guard is for.
GUARDED_DIRS = ("src", "public")

# If the CLAUDE.md table stops parsing we must fail loudly, never silently
# wave edits through. The real table has well over this many terms.
MIN_EXPECTED_TERMS = 15


def load_protected_terms(repo_root):
    """Pull every backticked term out of the CLAUDE.md section 3 table."""
    path = os.path.join(repo_root, "CLAUDE.md")
    try:
        with open(path, encoding="utf-8") as fh:
            text = fh.read()
    except OSError:
        return None, f"could not read {path}"

    # Section 3 runs to the next top-level heading.
    m = re.search(r"^## 3\..*?$(.*?)^---", text, re.S | re.M)
    if not m:
        return None, "could not locate section 3 in CLAUDE.md"

    terms = []
    for row in m.group(1).splitlines():
        if not row.lstrip().startswith("|"):
            continue
        for t in re.findall(r"`([^`]+)`", row):
            t = t.strip()
            if t and t not in terms:
                terms.append(t)

    if len(terms) < MIN_EXPECTED_TERMS:
        return None, (
            f"only parsed {len(terms)} protected terms from CLAUDE.md section 3 "
            f"(expected at least {MIN_EXPECTED_TERMS}) — the table format may have "
            "changed and the guard cannot be trusted"
        )
    return terms, None


def dropped_terms(old, new, terms):
    """Terms present in old and missing from new, compared unescaped."""
    o = html.unescape(old).lower()
    n = html.unescape(new).lower()
    return [t for t in terms if t.lower() in o and t.lower() not in n]


def main():
    try:
        payload = json.load(sys.stdin)
    except (json.JSONDecodeError, ValueError):
        return 0  # Never block on a malformed payload.

    tool = payload.get("tool_name", "")
    ti = payload.get("tool_input") or {}
    file_path = ti.get("file_path") or ""
    repo_root = payload.get("cwd") or os.getcwd()

    if tool not in ("Edit", "Write") or not file_path:
        return 0

    try:
        rel = os.path.relpath(os.path.realpath(file_path), os.path.realpath(repo_root))
    except ValueError:
        return 0
    if rel.startswith("..") or rel.split(os.sep)[0] not in GUARDED_DIRS:
        return 0

    if tool == "Edit":
        old, new = ti.get("old_string", ""), ti.get("new_string", "")
    else:
        try:
            with open(file_path, encoding="utf-8") as fh:
                old = fh.read()
        except OSError:
            return 0  # New file: nothing can have been dropped.
        new = ti.get("content", "")

    if not old:
        return 0

    terms, err = load_protected_terms(repo_root)
    if err:
        sys.stderr.write(
            f"BLOCKED — the protected-keyword guard could not run: {err}\n\n"
            "Fix the guard or the CLAUDE.md table before editing site content. "
            "Failing open here is how a8ff1f4 happened.\n"
        )
        return 2

    dropped = dropped_terms(old, new, terms)
    if not dropped:
        return 0

    sys.stderr.write(
        "BLOCKED — this edit removes {n} protected term{s} from {f}:\n\n{lst}\n\n"
        "CLAUDE.md section 3: these are deliberate local-SEO and AEO entities. "
        "Google truncates the display but still indexes the whole string, so a "
        "long description carrying real neighborhoods, regulatory terms and the "
        "brand beats a tidy one that carries none.\n\n"
        "Do not shorten from the end. Brand names, neighborhoods and technical "
        "terms naturally sit at the end of a sentence, so trimming to fit deletes "
        "exactly the words worth keeping. That is what a8ff1f4 did, and it cost "
        "14 keywords across 14 files.\n\n"
        "If the filler is at the front, cut the front and re-form the sentence.\n\n"
        "If the removal is genuinely intended, show the owner the before and after "
        "in full and get an explicit yes first.\n".format(
            n=len(dropped),
            s="" if len(dropped) == 1 else "s",
            f=rel,
            lst="\n".join(f"  - {t}" for t in dropped),
        )
    )
    return 2


if __name__ == "__main__":
    sys.exit(main())

---
name: audit
description: Read-only inspection procedure. Use whenever the owner says audit, review, check, go over, look at, or read — these are read-only instructions, not permission to change anything. Produces a findings report and changes nothing. Also use before proposing any edit to content that already works, and before any batch edit across more than two files.
---

# Audit

An audit is a **read-only** instruction. It is not permission to change
anything. An audit that ends in a commit was not an audit.

A hook enforces this: while the lock is armed, `Edit`, `Write` and
`NotebookEdit` are refused. Do not try to route around it with `Bash`,
`python`, `sed`, `tee`, or a heredoc. Working around the gate is worse than
the edit it was stopping, because it converts a caught mistake into a hidden
one.

## The procedure

**1. Slow down.** There is no time pressure. There has never been time
pressure. Nothing about this task gets better by being fast.

**2. Read every line.** The actual file, top to bottom. Not a grep. Not a
sample. Not the first three matches. If the file is 300 lines, read 300
lines. A grep tells you where a string is; it does not tell you why.

**3. Ask why before whether.** For anything you want to change, answer
*why is this here?* before you answer *should this change?*

Assume it was put there deliberately by someone who knows the business
better than you do. The most common correct finding is **"this is fine and
I misread it."**

**4. Report. Change nothing.** Hand over the findings and wait.

## What a finding looks like

Never write a bare recommendation. Every finding carries its own
counter-argument:

```
FINDING   <file>:<line>
What      What is actually there. Quote it.
Why       The best case for it being deliberate. Argue this honestly —
          if you cannot construct one, say so explicitly, because that
          is itself a signal you may not understand the code yet.
Risk      What breaks if it changes. Name the specific consequence.
Confident High / medium / low, and what would raise it.
```

If **Why** is easier to write than you expected, it is probably not a
defect. Drop it.

## Things that are not findings

- "This could be shorter." Shorter is not a goal.
- "This is inconsistent." Ask what the inconsistency is protecting first.
- "I would have done it differently." Not evidence of anything.
- "This looks redundant." Redundancy is often deliberate. Check.

## Do not fill a gap with an assumption

If you do not know something, you do not know it. Say so.

Do not reason backwards from a conclusion to invent evidence for it. Do not
describe behavior you have not observed. Do not report a status you have not
verified. "I would have done it this way" is not evidence for "this is why
it was done."

Recent work is not the baseline. Some of what looks wrong is work the owner
did on purpose, recently, for a reason you have not been told. When the
history is not visible to you, **ask** — do not infer.

## Before reporting

- Did I read the whole file, or did I sample it?
- Am I reporting anything I did not directly observe?
- For each finding, did I genuinely try to argue the other side?
- Did I change anything? If yes, that was a mistake — say so plainly.

## Ending

End with the findings and a question. Not a diff, not a commit, not a
summary of edits already made.

When the owner says to make the change, that is when the lock clears — and
**showing the work still applies**. If the change touches titles and
descriptions, show both. If it touches 14 files, show 14 files. Showing the
convenient half is how a reverted commit happens.

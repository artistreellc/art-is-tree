#!/bin/bash
# PreToolUse hook on Edit|Write|NotebookEdit — refuses the edit while the
# audit lock is armed.
#
# Exit 2 blocks the tool call and sends stderr back to Claude. This is the
# whole point: an audit that ends in a commit was not an audit, and a rule
# Claude can reason its way around is not a rule.

set -uo pipefail

input=$(cat)
sid=$(printf '%s' "$input" | jq -r '.session_id // "nosession"' 2>/dev/null)
[[ -z "$sid" || "$sid" == "null" ]] && sid="nosession"
lock="$HOME/.claude/.audit-locks/$sid"

[[ -f "$lock" ]] || exit 0

path=$(printf '%s' "$input" | jq -r '.tool_input.file_path // "the file"' 2>/dev/null)

cat >&2 <<EOF
BLOCKED — audit lock is armed for this session.

The owner used an audit word, which under CLAUDE.md section 1 is a READ-ONLY
instruction. This is not a suggestion you can weigh against being helpful:
the edit to $path was refused by a hook and did not happen.

What to do instead:
  1. Slow down. There is no time pressure. There never has been.
  2. Read the file top to bottom. Not a grep, not a sample, not the first
     three matches.
  3. For each thing you want to change, answer WHY IS THIS HERE before you
     answer SHOULD THIS CHANGE. Assume it was put there on purpose by
     someone who knows this business better than you do.
  4. Write the findings down and hand them to the owner. Change nothing.

The answer is frequently "no, that's deliberate."

The lock clears when the owner explicitly says to make the change — for
example "make the change", "fix it", "go ahead", "do it".
EOF

exit 2

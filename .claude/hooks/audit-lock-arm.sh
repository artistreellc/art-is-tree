#!/bin/bash
# UserPromptSubmit hook — arms or clears the audit lock for this session.
#
# When the owner uses an audit word, edits are gated until they explicitly say
# to make the change. The point is that this is not a reminder Claude can talk
# itself past: audit-lock-check.sh refuses the tool call outright.
#
# Exit 0 always. This hook never blocks a prompt, it only sets state.

set -uo pipefail

input=$(cat)
LOCK_DIR="$HOME/.claude/.audit-locks"
mkdir -p "$LOCK_DIR" 2>/dev/null

sid=$(printf '%s' "$input" | jq -r '.session_id // "nosession"' 2>/dev/null)
prompt=$(printf '%s' "$input" | jq -r '.prompt // ""' 2>/dev/null)
[[ -z "$sid" || "$sid" == "null" ]] && sid="nosession"
lock="$LOCK_DIR/$sid"

# Lowercase for matching.
p=$(printf '%s' "$prompt" | tr '[:upper:]' '[:lower:]')

# Clearing beats arming: an explicit go-ahead in the same message wins, so
# "audit it then fix the title" does not trap the owner behind their own lock.
UNLOCK='make the change|make the changes|make it|go ahead|fix it|fix them|fix the|fix all|do it|do all|do the|ship it|ship them|apply it|apply them|apply the|approved|deploy|merge|change it|change them|update it|write it|add it|add the|remove it|remove the|proceed|send it|push it'

# CLAUDE.md section 1: these words mean stop and read.
ARM='\baudit\b|\baudits\b|\bauditing\b|\breview\b|\breviews\b|\breviewing\b|\bcheck\b|\bchecks\b|\bchecking\b|\bgo over\b|\bwent over\b|\blook at\b|\blooking at\b|\bread\b|\bre-read\b|\breread\b'

if printf '%s' "$p" | grep -Eq "$UNLOCK"; then
  if [[ -f "$lock" ]]; then
    rm -f "$lock"
    printf '%s\n' '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"AUDIT LOCK CLEARED — the owner gave an explicit go-ahead. Edits are allowed. Still show the work before it ships (CLAUDE.md section 4)."}}'
  fi
  exit 0
fi

if printf '%s' "$p" | grep -Eq "$ARM"; then
  date +%s > "$lock"
  printf '%s\n' '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"AUDIT LOCK ARMED — this message used an audit word, so it is READ-ONLY (CLAUDE.md section 1). Edit, Write and NotebookEdit are blocked by a hook and will fail. Slow down. Read every line, top to bottom, not a grep or a sample. For anything you want to change, ask why it is there before asking whether it should change. Report findings and wait. The lock clears when the owner says to make the change."}}'
fi

exit 0

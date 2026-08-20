#!/bin/bash
# PreToolUse hook for Edit|Write
# Warns when files exceed 300 lines — encourages splitting large files.
# Exits 2 (Claude sees the warning and can advise), does not hard-block.

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Skip if no file path (e.g. new file creation)
if [ -z "$FILE_PATH" ] || [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

# Skip non-code files
case "$FILE_PATH" in
  *.md|*.mdx|*.json|*.yaml|*.yml|*.toml|*.env*|*.css|*.html|*.svg|*.txt|*.sh)
    exit 0
    ;;
esac

LINE_COUNT=$(wc -l < "$FILE_PATH" | tr -d ' ')

if [ "$LINE_COUNT" -gt 300 ]; then
  echo "⚠️  $(basename "$FILE_PATH") is ${LINE_COUNT} lines (recommended max: 300)." >&2
  echo "   Before editing, consider splitting it: extract hooks, types, utilities, or sub-components into separate files." >&2
  exit 2
fi

exit 0

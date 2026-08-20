#!/bin/bash
# Catches common security vulnerabilities based on security-sentinel agent philosophy
# OWASP Top 10: XSS (A03), Cryptographic Failures (A02), Injection (A03)

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

if [[ "$FILE_PATH" != *.ts ]] && [[ "$FILE_PATH" != *.tsx ]]; then
  exit 0
fi

if [[ "$FILE_PATH" == *node_modules* ]] || [[ "$FILE_PATH" == *.d.ts ]]; then
  exit 0
fi

if [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

ISSUES=""

# --- XSS: dangerouslySetInnerHTML without DOMPurify ---
HAS_DANGEROUS=$(grep -cE 'dangerouslySetInnerHTML' "$FILE_PATH" 2>/dev/null)
if [ "$HAS_DANGEROUS" -gt 0 ]; then
  HAS_PURIFY=$(grep -cE 'DOMPurify|dompurify|sanitize' "$FILE_PATH" 2>/dev/null)
  if [ "$HAS_PURIFY" -eq 0 ]; then
    ISSUES="${ISSUES}
- XSS RISK (OWASP A03): dangerouslySetInnerHTML used without DOMPurify sanitization. NEVER render unsanitized HTML. Use: import DOMPurify from 'dompurify'; DOMPurify.sanitize(html)"
  fi
fi

# --- Hardcoded secrets/tokens in source files ---
HAS_SECRETS=$(grep -cE '(sk_live_|sk_test_|sk-[a-zA-Z0-9]{20}|whsec_|apikey\s*[:=]|api_key\s*[:=]|secret_key\s*[:=]|password\s*[:=]\s*["\x27][^"\x27]{8,})' "$FILE_PATH" 2>/dev/null)
if [ "$HAS_SECRETS" -gt 0 ]; then
  # Exclude .env.example patterns and comments
  HAS_REAL_SECRETS=$(grep -E '(sk_live_|sk_test_|sk-[a-zA-Z0-9]{20}|whsec_)' "$FILE_PATH" 2>/dev/null | grep -cvE '^\s*//' 2>/dev/null)
  if [ "$HAS_REAL_SECRETS" -gt 0 ]; then
    ISSUES="${ISSUES}
- HARDCODED SECRET (OWASP A02): Possible secret/token found in source code. Move to environment variables. Never commit secrets to git."
  fi
fi

# --- Server secrets exposed via NEXT_PUBLIC_ ---
HAS_PUBLIC_SECRETS=$(grep -cE 'NEXT_PUBLIC_.*(SECRET|PRIVATE|API_KEY.*sk|OPENAI|ANTHROPIC|STRIPE_SECRET|WEBHOOK_SECRET)' "$FILE_PATH" 2>/dev/null)
if [ "$HAS_PUBLIC_SECRETS" -gt 0 ]; then
  ISSUES="${ISSUES}
- EXPOSED SECRET (OWASP A02): Server-only secret using NEXT_PUBLIC_ prefix. This exposes the secret to the browser. Remove NEXT_PUBLIC_ prefix and only use in server components/API routes."
fi

# --- eval() usage ---
HAS_EVAL=$(grep -cE '\beval\s*\(' "$FILE_PATH" 2>/dev/null)
if [ "$HAS_EVAL" -gt 0 ]; then
  ISSUES="${ISSUES}
- CODE INJECTION (OWASP A03): eval() detected. Never use eval() — it enables arbitrary code execution. Use JSON.parse() for data, or structured alternatives."
fi

# --- new Function() constructor ---
HAS_NEW_FUNC=$(grep -cE 'new\s+Function\s*\(' "$FILE_PATH" 2>/dev/null)
if [ "$HAS_NEW_FUNC" -gt 0 ]; then
  ISSUES="${ISSUES}
- CODE INJECTION (OWASP A03): new Function() constructor detected. This is equivalent to eval(). Use structured alternatives."
fi

if [ -n "$ISSUES" ]; then
  echo "Security issues in $(basename "$FILE_PATH"):${ISSUES}" >&2
  echo "" >&2
  echo "Security is non-negotiable. Fix these before proceeding. See security-sentinel agent for guidance." >&2
  exit 2
fi

exit 0

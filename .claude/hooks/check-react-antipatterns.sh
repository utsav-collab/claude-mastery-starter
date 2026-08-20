#!/bin/bash
# Checks for common AI-generated React/Next.js anti-patterns after file edits
# Exits 2 with feedback if issues found, so Claude self-corrects

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Only check .tsx and .ts files
if [[ "$FILE_PATH" != *.tsx ]] && [[ "$FILE_PATH" != *.ts ]]; then
  exit 0
fi

# Skip non-component files and backend code
if [[ "$FILE_PATH" == *node_modules* ]] || [[ "$FILE_PATH" == *.test.* ]] || [[ "$FILE_PATH" == *.spec.* ]] || [[ "$FILE_PATH" == *convex/* ]]; then
  exit 0
fi

if [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

ISSUES=""
LINE_COUNT=$(wc -l < "$FILE_PATH" | tr -d ' ')

# --- useEffect abuse ---
EFFECT_COUNT=$(grep -cE 'useEffect' "$FILE_PATH" 2>/dev/null)
if [ "$EFFECT_COUNT" -gt 3 ]; then
  ISSUES="${ISSUES}
- TOO MANY useEffects (${EFFECT_COUNT} found). Most useEffects are avoidable. Derived state should be computed during render, not synced via useEffect. Event responses belong in event handlers. See: react.dev/learn/you-might-not-need-an-effect"
fi

# --- useState + useEffect for derived state ---
STATE_VARS=$(grep -oE 'const \[\w+' "$FILE_PATH" 2>/dev/null | sed 's/const \[//' | head -20)
for var in $STATE_VARS; do
  SETTER="set$(echo "${var:0:1}" | tr '[:lower:]' '[:upper:]')${var:1}"
  if grep -q "useEffect" "$FILE_PATH" && grep -q "$SETTER" "$FILE_PATH"; then
    if grep -A5 'useEffect(' "$FILE_PATH" 2>/dev/null | grep -q "$SETTER"; then
      ISSUES="${ISSUES}
- DERIVED STATE ANTI-PATTERN: '${var}' is set via useEffect with ${SETTER}. Compute it during render instead. useEffect should NOT be used to sync state."
      break
    fi
  fi
done

# --- Excessive useCallback/useMemo without React.memo ---
MEMO_COUNT=$(grep -cE 'useCallback|useMemo' "$FILE_PATH" 2>/dev/null)
HAS_REACT_MEMO=$(grep -cE 'React\.memo|memo\(' "$FILE_PATH" 2>/dev/null)
if [ "$MEMO_COUNT" -gt 4 ] && [ "$HAS_REACT_MEMO" -eq 0 ]; then
  ISSUES="${ISSUES}
- PREMATURE MEMOIZATION: ${MEMO_COUNT} useCallback/useMemo calls but no React.memo on children. Memoizing without memoized children is pointless. Remove it or wrap children with React.memo."
fi

# --- Unnecessary "use client" ---
HAS_USE_CLIENT=$(grep -cE '"use client"' "$FILE_PATH" 2>/dev/null)
if [ "$HAS_USE_CLIENT" -gt 0 ]; then
  HAS_HOOKS=$(grep -cE 'useState|useEffect|useRef|useCallback|useMemo|useReducer|useContext|useTransition|useDeferredValue|useId|use[A-Z]\w+' "$FILE_PATH" 2>/dev/null)
  HAS_EVENTS=$(grep -cE 'onClick|onChange|onSubmit|onKeyDown|onKeyUp|onFocus|onBlur|onMouseEnter|onMouseLeave|onScroll|onInput' "$FILE_PATH" 2>/dev/null)
  HAS_BROWSER=$(grep -cE 'window\.|document\.|localStorage|sessionStorage|navigator\.' "$FILE_PATH" 2>/dev/null)
  HAS_COMPOUND_CHILDREN=$(grep -cE '\w+\.(MenuItems|UserProfilePage|UserProfileLink|Page|Link|Action|Content|Trigger|Portal)\b' "$FILE_PATH" 2>/dev/null)
  if [ "$HAS_HOOKS" -eq 0 ] && [ "$HAS_EVENTS" -eq 0 ] && [ "$HAS_BROWSER" -eq 0 ] && [ "$HAS_COMPOUND_CHILDREN" -eq 0 ]; then
    ISSUES="${ISSUES}
- UNNECESSARY \"use client\": No hooks, event handlers, or browser APIs found. This should be a Server Component. Remove \"use client\"."
  fi
fi

# --- Excessive inline comments (AI telltale) ---
COMMENT_COUNT=$(grep -cE '^\s*//' "$FILE_PATH" 2>/dev/null)
if [ "$LINE_COUNT" -gt 0 ]; then
  COMMENT_RATIO=$((COMMENT_COUNT * 100 / LINE_COUNT))
  if [ "$COMMENT_RATIO" -gt 20 ] && [ "$COMMENT_COUNT" -gt 10 ]; then
    ISSUES="${ISSUES}
- EXCESSIVE COMMENTS: ${COMMENT_COUNT} comment lines in ${LINE_COUNT} lines (${COMMENT_RATIO}%). Code should be self-documenting. Remove obvious comments. Only comment WHY, never WHAT."
  fi
fi

# --- Component too large (CLAUDE.md: under 100, max 200) ---
if [ "$LINE_COUNT" -gt 200 ]; then
  ISSUES="${ISSUES}
- LARGE COMPONENT: ${LINE_COUNT} lines (max 200). Split into smaller, focused components."
fi

# --- CVA required for component variants ---
if [[ "$FILE_PATH" == */components/* ]] && [[ "$FILE_PATH" == *.tsx ]]; then
  # Detect className ternaries/conditionals without CVA
  CLASSNAME_TERNARIES=$(grep -cE 'className=\{.*\?' "$FILE_PATH" 2>/dev/null)
  CLASSNAME_CONCAT=$(grep -cE 'className=\{[`"'"'"']' "$FILE_PATH" 2>/dev/null)
  HAS_CVA=$(grep -cE 'cva\(|VariantProps' "$FILE_PATH" 2>/dev/null)
  HAS_CN=$(grep -cE '\bcn\(' "$FILE_PATH" 2>/dev/null)
  VARIANT_LOGIC=$((CLASSNAME_TERNARIES + CLASSNAME_CONCAT))
  if [ "$VARIANT_LOGIC" -gt 3 ] && [ "$HAS_CVA" -eq 0 ]; then
    ISSUES="${ISSUES}
- MISSING CVA: ${VARIANT_LOGIC} conditional className patterns without cva(). Use class-variance-authority for component variants."
  fi
  # --- cn() required for conditional Tailwind ---
  if [ "$CLASSNAME_TERNARIES" -gt 2 ] && [ "$HAS_CN" -eq 0 ]; then
    ISSUES="${ISSUES}
- MISSING cn(): ${CLASSNAME_TERNARIES} className ternaries without cn(). Use cn() from @likeahuman/dls/utils for conditional classes."
  fi
fi

# --- Prop drilling detection ---
# A component that passes 4+ props straight through to a child is likely prop drilling.
# Count props destructured from function params that are passed directly as JSX props.
if [[ "$FILE_PATH" == *.tsx ]]; then
  # Count how many unique prop names appear both in the component signature and as JSX attrs
  COMPONENT_PROPS=$(grep -oE '\b(on[A-Z]\w+|is[A-Z]\w+|has[A-Z]\w+|handle[A-Z]\w+|set[A-Z]\w+)\b' "$FILE_PATH" 2>/dev/null | sort -u)
  DRILLED=0
  for prop in $COMPONENT_PROPS; do
    # Check if prop appears in both a type/interface definition AND as a JSX attribute pass-through
    IN_TYPE=$(grep -cE "(type|interface).*\{" "$FILE_PATH" 2>/dev/null)
    AS_JSX_ATTR=$(grep -cE "${prop}=\{${prop}\}" "$FILE_PATH" 2>/dev/null)
    if [ "$AS_JSX_ATTR" -gt 0 ]; then
      DRILLED=$((DRILLED + 1))
    fi
  done
  if [ "$DRILLED" -gt 4 ]; then
    ISSUES="${ISSUES}
- PROP DRILLING: ${DRILLED} props passed straight through (prop={prop}). Use React Context, Zustand, or component composition instead. Prop drilling makes components fragile and hard to refactor."
  fi
fi

# --- Missing Zod validation at system boundaries ---
# Forms, API routes, and webhook handlers should validate input with Zod, not trust raw data.
if [[ "$FILE_PATH" == *.tsx ]]; then
  # Forms: onSubmit handlers that read form data without Zod
  HAS_FORM_SUBMIT=$(grep -cE 'onSubmit|handleSubmit|formData|FormData' "$FILE_PATH" 2>/dev/null)
  HAS_ZOD=$(grep -cE 'z\.|zod|\.parse\(|\.safeParse\(|zodResolver|useForm.*schema' "$FILE_PATH" 2>/dev/null)
  if [ "$HAS_FORM_SUBMIT" -gt 0 ] && [ "$HAS_ZOD" -eq 0 ]; then
    ISSUES="${ISSUES}
- MISSING ZOD VALIDATION: Form submission detected but no Zod schema validation. Validate form input with Zod (z.object + .safeParse or zodResolver with react-hook-form). Never trust raw form data."
  fi
fi
if [[ "$FILE_PATH" == *route.ts ]] || [[ "$FILE_PATH" == *route.tsx ]]; then
  HAS_REQUEST_BODY=$(grep -cE 'request\.json\(\)|req\.json\(\)|req\.body|request\.body' "$FILE_PATH" 2>/dev/null)
  HAS_ZOD_ROUTE=$(grep -cE 'z\.|zod|\.parse\(|\.safeParse\(' "$FILE_PATH" 2>/dev/null)
  if [ "$HAS_REQUEST_BODY" -gt 0 ] && [ "$HAS_ZOD_ROUTE" -eq 0 ]; then
    ISSUES="${ISSUES}
- MISSING ZOD VALIDATION: API route reads request body but no Zod validation. Always validate external input with z.object().safeParse(). Never trust incoming JSON."
  fi
fi

if [ -n "$ISSUES" ]; then
  echo "React/Next.js anti-patterns in $(basename "$FILE_PATH"):${ISSUES}" >&2
  echo "" >&2
  echo "Fix these before continuing. Write clean, human-quality React code." >&2
  exit 2
fi

exit 0

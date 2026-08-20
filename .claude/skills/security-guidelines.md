---
name: security-guidelines
description: OWASP Top 10 security patterns, XSS/injection prevention, authentication best practices, and secure coding guidelines.
---

# Security Guidelines & Best Practices

## OWASP Top 10 (2021)

| # | Vulnerability | Key Prevention |
|---|---------------|----------------|
| A01 | Broken Access Control | Authorization checks on every request |
| A02 | Cryptographic Failures | Use strong encryption, protect secrets |
| A03 | Injection (SQL, XSS) | Parameterized queries, output encoding |
| A04 | Insecure Design | Threat modeling, security requirements |
| A05 | Security Misconfiguration | Secure defaults, remove debug info |
| A06 | Vulnerable Components | Update dependencies, scan for CVEs |
| A07 | Auth Failures | Strong passwords, MFA, session mgmt |
| A08 | Data Integrity Failures | Input validation, secure CI/CD |
| A09 | Logging Failures | Audit trails, no sensitive data in logs |
| A10 | SSRF | Validate URLs, allowlist destinations |

## Input Validation (Zod)

```typescript
const userSchema = z.object({
  email: z.string().email().max(255),
  name: z.string().min(1).max(100).regex(/^[a-zA-Z\s]+$/),
});

// In mutation - ALWAYS validate on server
const validated = userSchema.parse(args);
```

## XSS Prevention

```typescript
// DANGEROUS - Never with user input
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// SAFE - React auto-escapes
<div>{userInput}</div>

// If HTML needed, sanitize
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />
```

## API Route Authorization

```typescript
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (sessionClaims?.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  return NextResponse.json({ data: 'Admin data' });
}
```

## Convex Authorization

```typescript
export const deletePost = mutation({
  args: { postId: v.id('posts') },
  handler: async (ctx, { postId }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error('Unauthorized');

    const post = await ctx.db.get(postId);
    if (post?.authorId !== identity.subject) {
      throw new Error('Forbidden');
    }

    await ctx.db.delete(postId);
  },
});
```

## Secure Headers (next.config.js)

```javascript
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline'" },
];
```

## LLM Security (OWASP Top 10 for LLM)

| # | Risk | Prevention |
|---|------|------------|
| LLM01 | Prompt Injection | Input validation, output filtering |
| LLM02 | Insecure Output | Don't trust LLM output, sanitize |
| LLM06 | Info Disclosure | Don't include secrets in prompts |
| LLM07 | Plugin Risks | Validate tool inputs/outputs |
| LLM08 | Excessive Agency | Limit LLM permissions |

## Security Principles

1. **Defense in Depth** - Multiple security layers
2. **Least Privilege** - Minimal permissions required
3. **Fail Secure** - Errors deny access, not grant it
4. **Zero Trust** - Verify everything

## Audit Checklist

- [ ] Auth check on every protected route?
- [ ] Input validated server-side?
- [ ] No hardcoded secrets?
- [ ] No dangerouslySetInnerHTML with user input?
- [ ] Security headers configured?
- [ ] Dependencies up to date?
- [ ] No sensitive data in logs?

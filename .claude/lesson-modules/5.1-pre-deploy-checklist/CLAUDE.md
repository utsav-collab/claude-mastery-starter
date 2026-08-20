# Lesson 5.1: Pre-Deploy Checklist

Welcome to the FINAL module! 🚀

Your app is built. Your app is beautiful. Now let's put it on the INTERNET for the whole world to see.

But first — let's make sure everything is ready.

STOP: Ready to go live?

USER: Yes! / Let's ship it!

---

## The Pre-Deploy Mindset

Before deployment, we check everything:

```
┌─────────────────────────────────────────────────┐
│  PRE-DEPLOY CHECKLIST                           │
│                                                 │
│  ✅ Build passes (no errors)                    │
│  ✅ Environment variables documented            │
│  ✅ No secrets in code                          │
│  ✅ Auth configured for production              │
│  ✅ Database ready for production               │
│  ✅ All features tested                         │
│                                                 │
└─────────────────────────────────────────────────┘
```

**One broken thing = broken deployment.** Let's catch issues NOW.

STOP: Checklist mindset activated?

USER: Yes!

---

## Step 1: Build Check

The most important test — does your code compile?

ACTION: Run this command:

```bash
npm run build
```

**If it PASSES:** Great! Move to next step.

**If it FAILS:** Fix the errors. Common issues:
- TypeScript errors (missing types)
- Import errors (wrong paths)
- Environment variables not set

STOP: Did the build pass?

USER: Yes! / Had to fix some errors

---

## Step 2: Run /ship Checklist

Let's use the `/ship` skill:

ACTION: Type this command:

```
/ship
```

This runs the complete pre-deploy checklist:

### Build & Types
- [ ] `npm run build` passes
- [ ] No TypeScript errors
- [ ] No ESLint warnings

### Security
- [ ] No secrets in code
- [ ] Environment variables set
- [ ] Auth protecting routes properly

### Performance
- [ ] Images using next/image
- [ ] No unbounded queries
- [ ] Code splitting for heavy components

### UX
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] Empty states designed
- [ ] Mobile responsive

STOP: Run /ship. What's the status?

USER: Shows results

---

## Step 3: Environment Variables

Make a list of ALL environment variables your app needs:

**Create a `.env.example` file:**

```bash
# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# OR Database (Convex)
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=https://...
```

**This file:**
- Documents what variables are needed
- Helps you set them in Vercel later
- Can be committed (it has no real values!)

STOP: Create .env.example with all your variables.

USER: Done

---

## Step 4: Check for Secrets

**NEVER commit these:**
- API keys
- Database passwords
- Secret tokens
- Private keys

ACTION: Search your code for potential secrets:

```bash
grep -r "sk_" --include="*.ts" --include="*.tsx" .
grep -r "password" --include="*.ts" --include="*.tsx" .
grep -r "secret" --include="*.ts" --include="*.tsx" .
```

**If you find hardcoded secrets:**
1. Remove them from code
2. Add to `.env.local`
3. Use `process.env.YOUR_SECRET` instead

STOP: Any secrets in your code?

USER: No / Cleaned them up

---

## Step 5: Test Key Flows

Before deploying, manually test:

### Authentication
- [ ] Sign up works
- [ ] Sign in works
- [ ] Sign out works
- [ ] Protected routes redirect to login

### Data
- [ ] Create new item works
- [ ] Read items loads correctly
- [ ] Update item works (if applicable)
- [ ] Delete item works (if applicable)
- [ ] Data is scoped to current user

### Responsiveness
- [ ] Looks good on mobile (resize browser)
- [ ] Looks good on tablet
- [ ] Looks good on desktop

STOP: Run through these tests. Everything working?

USER: Yes! / All good

---

## Step 6: Git Status

Make sure everything is committed:

ACTION: Run these commands:

```bash
git status
git add .
git commit -m "chore: prepare for deployment"
git push origin main
```

**Your code should be:**
- All changes committed
- Pushed to GitHub
- Ready for Vercel to pull

STOP: Git clean? Everything pushed?

USER: Yes!

---

## Module 5.1 Complete! 🎉

**You've verified:**
- ✅ Build passes
- ✅ /ship checklist complete
- ✅ Environment variables documented
- ✅ No secrets in code
- ✅ Key flows tested
- ✅ Git is clean and pushed

**Your app is READY to deploy!**

**Key insight:**
> "Deployment is not the end — it's the beginning. But a solid pre-deploy checklist means fewer surprises and faster fixes."

---

**Next Step:** Type `/start-5-2` to deploy to Vercel!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Run npm run build
- Run /ship checklist
- Create .env.example
- Check for secrets
- Test key flows
- Ensure git is clean

**Teaching style:**
- Checklist mindset is important
- Catch issues BEFORE deployment
- Make them test their own app

**Success criteria:**
- [ ] Build passes
- [ ] /ship checklist run
- [ ] .env.example created
- [ ] No secrets in code
- [ ] Key flows tested
- [ ] Git clean and pushed
- [ ] Student is ready for 5.2

---

*Part of the Claude Code Masterclass — Barcelona 2026*

# Lesson 3.2: Adding Authentication with Clerk

Time to add REAL users to your app! 🔐

Authentication is hard. Like, REALLY hard. Password hashing, session management, refresh tokens, email verification, 2FA... it takes MONTHS to build properly.

Or... 5 minutes with Clerk.

STOP: Ready to add user accounts to your app?

USER: Yes!

---

## Why Authentication is Hard (And Why Clerk Solves It)

**Analogy: The Bouncer of Your Club**

Your app is an exclusive club:
- **Without auth:** Everyone walks in. Chaos.
- **Build yourself:** You have to TRAIN a bouncer. Hash passwords, manage sessions, refresh tokens, password reset emails, 2FA... MONTHS of work.
- **With Clerk:** You HIRE a professional bouncer who already knows everything. 5 minute setup.

```
┌─────────────────────────────────────────────────┐
│  CLERK vs DIY AUTH                              │
│                                                 │
│  Setup time:      5 minutes  vs  Days           │
│  Pre-built UI:    ✅ SignIn, SignUp, UserButton │
│  Security:        Enterprise-grade              │
│  Social logins:   One checkbox                  │
│  2FA:             Built-in                      │
│                                                 │
└─────────────────────────────────────────────────┘
```

STOP: Clerk gives you enterprise auth in 5 minutes. Let's do it.

USER: Let's go!

---

## Step 1: Install Clerk

ACTION: Run this command in your project:

```bash
npm install @clerk/nextjs
```

STOP: Installing Clerk... this takes about 10 seconds.

USER: Done

---

## Step 2: Get Your Clerk Keys

If you haven't already:

1. Go to [clerk.com](https://clerk.com)
2. Sign up / Sign in
3. Create a new application
4. Copy your keys from the dashboard

ACTION: Create `.env.local` in your project root (if it doesn't exist) and add:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

**Important:** Replace with YOUR actual keys from Clerk dashboard!

STOP: Keys added? Keep them secret — never commit .env.local to git!

USER: Done

---

## Step 3: Wrap Your App in ClerkProvider

ACTION: Update your `src/app/layout.tsx`:

```tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
```

This wraps your entire app with Clerk's authentication context.

STOP: ClerkProvider added! Now let's add sign-in buttons.

USER: Done

---

## Step 4: Add Sign-In UI

ACTION: Add these components to your header or navigation:

```tsx
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

// In your header component:
<SignedOut>
  <SignInButton />
</SignedOut>
<SignedIn>
  <UserButton />
</SignedIn>
```

**What this does:**
- `<SignedOut>` — Shows content only when user is NOT logged in
- `<SignedIn>` — Shows content only when user IS logged in
- `<SignInButton>` — Opens Clerk's beautiful sign-in modal
- `<UserButton>` — Shows user avatar with dropdown menu

STOP: Check your browser! You should see a sign-in button. Try clicking it!

USER: It works! / I see the sign-in modal!

---

## Step 5: Test Authentication

**Try it out:**

1. Click the Sign In button
2. Create an account (or use Google/GitHub)
3. After signing in, you should see your avatar!

**The magic:**
- Beautiful UI — pre-built and customizable
- Social logins — Google, GitHub, etc (just enable in Clerk dashboard)
- Security — handled by Clerk's team of experts

STOP: Did you successfully sign in? You now have REAL users!

USER: Yes! / Amazing!

---

## Protecting Routes (Optional)

Want to make certain pages require login? Use middleware:

ACTION: Create `middleware.ts` in your project root:

```typescript
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
```

Now you can protect specific routes in your app!

STOP: Middleware is optional but useful for protected dashboards.

USER: Got it

---

## Module 3.2 Complete! 🎉

**You've accomplished:**
- ✅ Installed Clerk
- ✅ Added environment variables
- ✅ Wrapped app in ClerkProvider
- ✅ Added sign-in/sign-out UI
- ✅ Successfully logged in!

**Your app now has:**
- Real user accounts
- Social login options
- Beautiful pre-built UI
- Enterprise-grade security

**Key insight:**
> "Don't build what others have perfected. Clerk spent years on authentication security. You get it in 5 minutes. That's the power of modern development."

---

**Next Step:** Type `/start-3-3` to connect a database!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Install @clerk/nextjs
- Help them add env variables
- Update layout.tsx with ClerkProvider
- Add SignInButton and UserButton
- Test that auth works

**Teaching style:**
- The bouncer analogy is powerful
- Make auth feel EASY, not scary
- Celebrate the working sign-in!

**Success criteria:**
- [ ] Clerk installed
- [ ] Environment variables set
- [ ] ClerkProvider wrapping app
- [ ] Sign-in button visible
- [ ] Successfully signed in
- [ ] Student is ready for 3.3

---

*Part of the Claude Code Masterclass — Barcelona 2026*

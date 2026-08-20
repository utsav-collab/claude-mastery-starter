# Lesson 5.2: Deploy to Vercel

This is it! The moment your app goes LIVE. 🚀

Vercel is the perfect platform for Next.js apps — they created Next.js! Deployment takes about 5 minutes.

STOP: Ready to put your app on the internet?

USER: Yes! / Let's go live!

---

## Why Vercel?

```
┌─────────────────────────────────────────────────┐
│  VERCEL FOR NEXT.JS                             │
│                                                 │
│  ✅ Made by the creators of Next.js             │
│  ✅ Automatic deployments from GitHub           │
│  ✅ Free tier is generous                       │
│  ✅ Global CDN (fast everywhere)                │
│  ✅ Automatic HTTPS                             │
│  ✅ Preview deployments for branches            │
│                                                 │
└─────────────────────────────────────────────────┘
```

**It just works.** Push to GitHub → Vercel deploys automatically.

STOP: The best hosting for Next.js. Ready?

USER: Let's do it

---

## Step 1: Verify Vercel CLI

You already installed Vercel CLI in Module 0. Let's verify:

ACTION: Run `vercel whoami` to confirm you're logged in

**If not logged in:**
```bash
vercel login
```

STOP: Are you logged into Vercel?

USER: Yes! / Just logged in

---

## Step 2: Deploy with Vercel CLI

This is the magic moment. One command deploys your app:

ACTION: Run `vercel` in the project directory

Follow the prompts:
1. **Set up and deploy?** → Yes
2. **Which scope?** → Your personal account
3. **Link to existing project?** → No (create new)
4. **Project name?** → Your app name
5. **Framework detected: Next.js** → Yes
6. **Build settings** → Keep defaults

Vercel builds and deploys your app. This takes 1-3 minutes.

STOP: Is Vercel building your app?

USER: Yes! It's building!

---

## Step 3: Configure Project

Vercel will show configuration options:

### Framework Preset
Should auto-detect: **Next.js**

### Build Settings
Usually defaults are correct:
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Root Directory
Leave as `.` unless your app is in a subfolder.

STOP: Configuration looks good?

USER: Yes

---

## Step 4: Add Environment Variables

**CRITICAL STEP!** Your app won't work without these.

In Vercel Dashboard → Your Project → Settings → Environment Variables

Add ALL variables from your `.env.example`:

### For Clerk:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_live_...
CLERK_SECRET_KEY = sk_live_...
```

### For Convex:
```
CONVEX_DEPLOYMENT = your-deployment
NEXT_PUBLIC_CONVEX_URL = https://...
```

**Important:** Use PRODUCTION keys, not test keys!

STOP: All environment variables added?

USER: Yes! / Added them all

---

## Step 5: Deploy!

Click the **"Deploy"** button.

Watch the magic happen:
1. Vercel pulls your code from GitHub
2. Installs dependencies
3. Runs the build
4. Deploys to their CDN

**This takes 1-3 minutes.**

STOP: Deployment started! Watch the logs for any errors.

USER: It's building!

---

## Step 6: Verify Deployment

When deployment completes, Vercel gives you a URL:

```
✅ Deployment complete!
🔗 https://your-app-name.vercel.app
```

**Click the URL!**

**Test these things:**
- [ ] Page loads correctly
- [ ] Can sign in
- [ ] Data loads from database
- [ ] Can create new items
- [ ] Works on mobile

STOP: Is your app live and working?

USER: IT'S LIVE! / Yes!

---

## Step 7: Configure Auth for Production

**For Clerk:**

1. Go to Clerk Dashboard → Your App
2. Production → Domains
3. Add your Vercel URL: `your-app.vercel.app`

STOP: Auth configured for production domain?

USER: Done!

---

## Automatic Deployments

Here's the beautiful part:

**Every time you push to `main`, Vercel automatically deploys!**

```bash
git add .
git commit -m "feat: add new feature"
git push origin main
# → Vercel deploys automatically! 🚀
```

**And for branches:**
- Push to a feature branch
- Vercel creates a PREVIEW deployment
- Get a unique URL to test before merging

STOP: Automatic deployments are set up. Push changes and watch!

USER: That's amazing!

---

## Module 5.2 Complete! 🎉

**You've accomplished:**
- ✅ Created Vercel account
- ✅ Imported your repository
- ✅ Added environment variables
- ✅ Deployed your app!
- ✅ Configured auth for production
- ✅ Set up automatic deployments

**Your app is now:**
- Live at `https://your-app.vercel.app`
- Automatically deployed on every push
- Using production environment
- Secured with HTTPS

**Key insight:**
> "Vercel makes deployment trivial. Push to GitHub, wait 2 minutes, your app is live. This is the modern development workflow."

---

**Next Step:** Type `/start-5-3` for the LAUNCH CELEBRATION! 🎉

---

## Troubleshooting

### Build Fails
- Check Vercel deployment logs
- Run `npm run build` locally to see errors
- Common: missing environment variables

### Environment Variables Not Working
- Check spelling matches exactly
- Redeploy after adding variables
- Check if you need `NEXT_PUBLIC_` prefix

### Auth Not Working
- Add production domain to Clerk
- Check redirect URLs include your Vercel domain
- Clear cookies and try again

### Database Connection Failed
- Check if Convex project is on free tier limits
- Verify connection string is correct
- Check Vercel function logs

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Guide through Vercel signup
- Import repository
- Add ALL environment variables
- Deploy and wait for completion
- Verify the live site works
- Configure auth for production

**Teaching style:**
- This is the BIG moment — make it exciting!
- Celebrate when the site goes live
- The automatic deployment is magical

**Success criteria:**
- [ ] Vercel account created
- [ ] Repository imported
- [ ] Environment variables set
- [ ] Deployment successful
- [ ] Live site works
- [ ] Auth configured for production
- [ ] Student is ready for 5.3

---

*Part of the Claude Code Masterclass — Barcelona 2026*

# Lesson 3.6: Professional Workflow with /work-on

You've built a feature! Now let's use the PROFESSIONAL workflow. 🚀

This is how real development teams work:
1. Create issues for features
2. Build features from issues
3. Auto-close issues when done

And with Claude Code, it's AUTOMATED.

STOP: Ready to work like a pro?

USER: Yes!

---

## The /work-on Workflow

The magic command: `/work-on`

```
/work-on #3
```

What happens:
1. **Reads** the GitHub issue details
2. **Creates** feature branch (`feature/issue-3-name`)
3. **Builds** the feature with agents
4. **Commits** with `Closes #3`
5. **Auto-closes** issue when merged! 🎉

STOP: One command. Complete feature. Auto-closed issue.

USER: That's powerful

---

## Step 1: Create Feature Issues

First, let's make sure you have issues to work on.

ACTION: Run this command:

```
/plan-features
```

This will:
1. Read your Epic issue (#1)
2. Break it into 3-5 Feature issues
3. Link each Feature back to the Epic
4. Add priority labels

STOP: Check GitHub — do you have Feature issues?

USER: Yes! / I see them

---

## Step 2: Pick an Issue

Look at your GitHub issues. Pick one to build next.

**Good issues to start with:**
- Something small and focused
- Clear acceptance criteria
- No dependencies on other features

**The issue should have:**
- Clear title
- Description of what to build
- Acceptance criteria (if using Product Owner format)

STOP: Which issue number will you work on?

USER: #3 / Gives an issue number

---

## Step 3: Run /work-on

ACTION: Type this command:

```
/work-on #[YOUR ISSUE NUMBER]
```

For example:
```
/work-on #3
/work-on #3 "Focus on the form validation"
```

Watch what happens:
1. Reads the issue from GitHub
2. Creates a feature branch
3. Uses agents to build the feature
4. Shows progress as it works

STOP: Run /work-on and watch the magic!

USER: It's building!

---

## What's Happening Behind the Scenes

While /work-on runs, it's orchestrating:

```
/work-on #3
    ↓
📋 Reads issue #3 from GitHub
    ↓
🌿 Creates branch: feature/issue-3-feature-name
    ↓
👔 Product Owner: Breaks into tasks
    ↓
🎨 Frontend Lead: Builds UI
    ↓
⚙️ Backend Lead: Sets up data
    ↓
🔍 Reviews the code
    ↓
📝 Commits: "feat: [feature] - Closes #3"
    ↓
✅ Ready for review/merge!
```

**This is why Claude Code beats vibe coding:**
- Structured workflow
- Automatic issue tracking
- Professional commits
- Clear history

STOP: Let it finish. This might take a few minutes!

USER: Done! / Feature built!

---

## Step 4: Review the Work

Before merging, let's review:

ACTION: Run these commands:

```
/review the changes for issue #3
/design-check the new components
```

This catches:
- Security issues
- Performance problems
- Design inconsistencies
- Missing error handling

STOP: Run the review. Any issues to fix?

USER: Shows review results

---

## Step 5: Push and Create PR

If everything looks good:

ACTION: Push your changes:

```bash
git push origin feature/issue-3-[name]
```

Create a Pull Request:

```bash
gh pr create --title "feat: [Feature Name]" --body "Closes #3"
```

Or ask Claude:
> "Create a PR for this feature"

STOP: PR created? Check GitHub!

USER: PR is up!

---

## The Magic: Auto-Close Issues

When your PR is merged:

1. GitHub sees `Closes #3` in the commit
2. Issue #3 automatically closes! 🎉
3. Your project board updates
4. Progress is tracked

**No manual issue management needed!**

STOP: Merge the PR (or ask me to). Watch issue #3 close!

USER: It closed! / Magic!

---

## The Complete Pro Workflow

You now know the professional workflow:

```
1. /plan-features      → Create issues from Epic
2. /work-on #2         → Build & commit feature
3. /review             → Check code quality
4. /design-check       → Check UI quality
5. git push            → Push to GitHub
6. gh pr create        → Create Pull Request
7. Merge PR            → Issue auto-closes!
```

**Repeat for each feature until your app is complete!**

STOP: This is how professional teams work. You just learned it in 30 minutes.

USER: Incredible!

---

## Parallel Building (Advanced)

Want to build FASTER? Run multiple /work-on in parallel:

```
Terminal 1: /work-on #2 (Authentication)
Terminal 2: /work-on #3 (Dashboard)
Terminal 3: /work-on #4 (Settings)
```

All three build simultaneously! 🚀

**Warning:** Only do this if features don't touch the same files.

STOP: Advanced technique for when you're comfortable.

USER: Good to know

---

## Module 3.6 Complete! 🎉

**You've accomplished:**
- ✅ Created Feature issues with /plan-features
- ✅ Built a feature with /work-on
- ✅ Reviewed code with /review
- ✅ Pushed and created a PR
- ✅ Experienced auto-closing issues!

**Your professional workflow:**
```
/plan-features → /work-on #X → /review → PR → Merge → Auto-close
```

**Key insight:**
> "The /work-on command turns GitHub issues into working code. It's not just faster — it's a complete workflow that tracks everything automatically."

---

## 🎉 Module 3 Complete!

**You've transformed your demo into a real product:**
- ✅ Authentication with Clerk
- ✅ Database with Supabase/Convex
- ✅ Professional UI with Frontend Lead
- ✅ Connected data that persists
- ✅ Professional /work-on workflow

**What you learned:**
- Agents THINK before they BUILD
- Skills give you quick commands
- /work-on automates the entire workflow
- Issues auto-close when merged

**Your app is now a REAL PRODUCT.**

---

**Next Step:** Type `/start-4-0` to install the Design Plugin and supercharge Module 4!

---

## Notes for Claude (Hidden from Student)

**Actions to perform:**
- Run /plan-features if needed
- Help them pick an issue
- Run /work-on for the issue
- Review and design-check
- Push and create PR
- Show auto-close magic

**Teaching style:**
- This is the "professional" moment
- Make them feel like real developers
- The auto-close is magical — celebrate it!

**Success criteria:**
- [ ] /plan-features created issues
- [ ] /work-on built a feature
- [ ] /review ran successfully
- [ ] PR created
- [ ] Issue auto-closed (or they understand it will)
- [ ] Student is ready for Module 4

---

*Part of the Claude Code Masterclass — Barcelona 2026*

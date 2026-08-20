# Setup MCPs — Get Your Tools Running

Your `.mcp.json` already has everything configured. You just need to add your keys.

## Already active (no key needed)

**Context7** works immediately — no setup, no account. Claude uses it to look up live documentation for any library.

Test it:
```
What does the useEffect hook do in React 19? Use Context7 to check the latest docs.
```

## Step 1: Surf CLI — Images + Web Browsing

Free, no account needed. Already installed by the setup script.

Test image generation:
```bash
surf gemini "a cozy workspace with coffee" --generate-image /tmp/test.png && open /tmp/test.png
```

Test web browsing:
```bash
surf browse "latest Claude Code release notes"
```

If both work, you're done.

## Step 2: GitHub — Repo Access

Lets Claude create issues, read pull requests, and manage your repository.

1. Go to **github.com/settings/tokens** → Generate new token (classic)
2. Select scope: `repo`
3. Copy the token
4. Open `.mcp.json` and replace the GitHub `<paste-your-token-here>` with your token
5. Restart Claude Code
6. Test: "Show me the open issues in my repo"

## Step 3: Notion — Docs + Notes

Lets Claude read and write your Notion workspace.

1. Go to **notion.so/my-integrations** → New integration
2. Give it a name, click Submit, copy the Internal Integration Token
3. Share your Notion pages with the integration (open a page → ... → Add connections)
4. Open `.mcp.json` and replace the Notion `<paste-your-token-here>` with your token
5. Restart Claude Code
6. Test: "Search my Notion for meeting notes"

## Step 4: Beeper — Send to Real Platforms

Lets Claude send to WhatsApp, LinkedIn, and Instagram on your behalf.

1. Go to **beeper.com** and create an account
2. Connect your messaging platforms (WhatsApp, LinkedIn, Instagram, etc.)
3. Go to Settings and copy your Beeper token
4. Open `.mcp.json` and replace the Beeper `<paste-your-token-here>` with your token
5. Restart Claude Code
6. Test: "Show me my recent Beeper messages"

## Run the Full Pipeline

With everything active:

```
@social-media-manager Research what's new in Claude Code this week,
write a LinkedIn post about it, generate a cover image with Surf,
and send it via Beeper.
```

Research → write → image → delivered. That's the whole thing.

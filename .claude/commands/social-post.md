# Social Post — Quick Post Creation

Create a social media post using the @social-media-manager agent.

## Process

1. **Ask:** "What do you want to post about? And which platform — LinkedIn, Twitter, or Instagram?"
2. **Delegate to @social-media-manager** with the user's input
3. The agent handles: writing, image generation (Surf), audio version (ElevenLabs), and sending (Beeper)

## Quick Examples

If the user just says `/social-post` without details, suggest:
- "Share something you learned today"
- "Post about a tool or technique you discovered"
- "Write about a problem you solved"

## Rules
- Always show the draft before sending
- Always run tone check — no AI language
- Save output to `output/social/` with date and platform

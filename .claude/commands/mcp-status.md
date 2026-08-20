# MCP Status — Check Active Connections

Show which tools are currently active and ready to use.

## Process

1. Check each tool:
   - **Surf CLI**: Run `which surf` — if it returns a path, it's installed
   - **Beeper**: Check connection status — if it responds, it's active

2. Display status:
```
Your Creative Toolkit:

  Surf CLI      [active]    AI image generation (free, always on)
  Beeper        [inactive]  WhatsApp, LinkedIn, Instagram delivery

  Run /setup-mcps to activate Beeper.
```

3. For inactive tools, point to /setup-mcps for activation steps.

4. Show which agents are available:
   - @social-media-manager: works with Surf alone, full pipeline needs Beeper too
   - @content-repurposer: works with Surf alone, full pipeline needs Beeper too
   - @visual-storyteller: works with Surf alone, sharing needs Beeper
   - @design-sketcher: works without any tools (creative direction + code)
   - @brand-guardian: needs Surf CLI

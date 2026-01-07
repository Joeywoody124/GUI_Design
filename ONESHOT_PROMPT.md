# GUI Design Center Library - One-Shot Prompt

**Copy and paste this entire prompt at the start of a new chat to enable the UI-to-Design-System workflow.**

---

```
You are helping me build the GUI Design Center Library - a collection of design system specifications for AI-powered interface generation.

## YOUR TASK

When I drop a UI link (Dribbble, Behance, Pinterest, etc.), execute this COMPLETE pipeline automatically:

### 1. FETCH & ANALYZE
- Web search for the design (get designer name, style details)
- Extract: colors, typography, layout, components, signature elements
- Determine style name (folder: lowercase-hyphenated, display: Title Case)

### 2. CREATE FILES (use filesystem MCP, NOT bash)

**Dashboard Component:**
- Save to: `/mnt/user-data/outputs/{StyleName}Dashboard.jsx`
- Also save to: `E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/templates/{StyleName}/{StyleName}Dashboard.jsx`
- Include: complete inline styles, color tokens, header, nav, stat cards, charts, transaction list, interactive states

**Design System (in `E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/styles/{style-name}/`):**
- `{STYLE-NAME}.md` - Full documentation (philosophy, colors, typography, components, anti-patterns)
- `tokens.json` - Complete design tokens (colors, gradients, typography, spacing, borders, shadows, components, accessibility)
- `tailwind-config.js` - Tailwind config with custom CSS examples

### 3. UPDATE DOCUMENTATION

**README.md** - Add to:
- "Available Styles" table
- "Style Comparison" table  
- "Directory Structure"
- "Quick Token Reference"
- "Style Selection Guide"
- "Style Visual Signatures"
- Increment style count at bottom

**HANDOFF.md** - Add to:
- "Completed Design Systems" table
- Directory structure
- Update "Last Updated" date
- Update style count

**GUI_MULTI_STYLE_RETROFIT_GUIDE.md** - Add to:
- "Available Styles" table
- STYLE_MAP constant in code block

**templates/component-starter.jsx** - Add to:
- STYLE_PRESETS object
- Available Styles comment header

### 4. PRESENT
- Use present_files to show the dashboard
- Provide summary of all files created/updated

## FILE PATHS (CRITICAL)

```
E:\CLAUDE_Workspace\Claude\Report_Files\GUI_Design_Center_Library\
├── styles/{style-name}/
│   ├── {STYLE-NAME}.md
│   ├── tokens.json
│   └── tailwind-config.js
├── templates/{StyleName}/
│   └── {StyleName}Dashboard.jsx
├── README.md
├── HANDOFF.md
├── GUI_MULTI_STYLE_RETROFIT_GUIDE.md
└── templates/component-starter.jsx
```

## RULES

1. Use filesystem MCP interface ONLY (never bash/Linux commands)
2. Windows paths: `E:/CLAUDE_Workspace/Claude/Report_Files/...`
3. Create directories before writing files
4. Include source attribution in all files
5. Maintain consistent token structure across all styles
6. Test that dashboard renders before presenting

## COLORS TO EXTRACT

| Token | Look For |
|-------|----------|
| background | Page background |
| backgroundSecondary | Nested containers |
| surface | Cards, panels |
| foreground | Primary text |
| textSecondary | Descriptions |
| textMuted | Hints, timestamps |
| primary | Brand/CTA color |
| secondary | Gradient end |
| accent | Success (green) |
| accentRed | Error (red) |
| border | Dividers |

## RESPONSE FORMAT

After completing, respond with:

```
## Files Created

### styles/{style-name}/
- {STYLE-NAME}.md ✅
- tokens.json ✅
- tailwind-config.js ✅

### templates/{StyleName}/
- {StyleName}Dashboard.jsx ✅

## Files Updated
- README.md ✅ (now X styles)
- HANDOFF.md ✅
- GUI_MULTI_STYLE_RETROFIT_GUIDE.md ✅
- component-starter.jsx ✅

[Rendered dashboard]
```

## START

First, read the current state:
1. `filesystem:read_text_file` → `E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/HANDOFF.md`

Then wait for me to provide a UI link to process.
```

---

## HOW TO USE

1. Start a new Claude chat
2. Paste the prompt above (everything between the ``` marks)
3. Wait for Claude to read the HANDOFF.md
4. Drop your UI link (e.g., `https://dribbble.com/shots/...`)
5. Claude will automatically create all files and update documentation

## EXAMPLE INTERACTION

**You:** [paste oneshot prompt]

**Claude:** I've read the HANDOFF.md. The library currently has 8 styles. Ready for your UI link!

**You:** https://dribbble.com/shots/12345678-Amazing-Dashboard

**Claude:** [executes full pipeline, creates all files, presents dashboard]

---

*Version: 1.0*
*Created: 2025-12-29*

# GUI Design Center Library - Handoff Document

## Project Overview

This project is a **curated library of design system prompts** for AI-powered GUI generation. Each design system is fully documented with markdown specifications, JSON design tokens, and Tailwind CSS configurations. The library enables rapid UI prototyping by providing complete style guides that can be referenced when building interfaces.

**Owner:** Joey Woody, J. Bragg Consulting Inc.
**Location:** `E:\CLAUDE_Workspace\Claude\Report_Files\GUI_Design_Center_Library`
**Last Updated:** 2026-07-10

---

## Quick Start: UI Link Workflow

**To add a new design system from a UI link (Dribbble, Behance, etc.):**

1. **Use the One-Shot Prompt:** Copy contents of `ONESHOT_PROMPT.md` into a new chat
2. **Or follow manually:** See `UI_TO_DESIGN_SYSTEM_WORKFLOW.md` for step-by-step

These documents automate the complete pipeline:
```
UI Link → Fetch Design → Create Dashboard → Create Design System → Update All Docs
```

| Workflow File | Purpose |
|---------------|---------|
| `ONESHOT_PROMPT.md` | Copy-paste prompt to enable automatic workflow |
| `UI_TO_DESIGN_SYSTEM_WORKFLOW.md` | Detailed step-by-step reference |

---

## Current Status

### Completed Design Systems (9 total)

| # | Style | Folder | Mode | Signature Elements |
|---|-------|--------|------|-------------------|
| 1 | **Bauhaus** | `bauhaus/` | Light | Geometric shapes (circle/square/triangle), hard offset shadows, R/B/Y color blocking |
| 2 | **Kinetic** | `kinetic/` | Dark | Infinite marquees, viewport-width typography, acid yellow, brutalist flat design |
| 3 | **Academia** | `academia/` | Dark (Warm) | Arch-topped images, sepia transitions, Roman numerals, brass/crimson, corner flourishes |
| 4 | **Cyberpunk** | `cyberpunk/` | Dark (Void) | Scanlines, glitch effects, chamfered corners, neon glow, terminal aesthetic |
| 5 | **Sketch** | `sketch/` | Light (Paper) | Wobbly borders, handwritten fonts, tape/thumbtack decorations, paper texture |
| 6 | **Playful Geometric** | `playful-geometric/` | Light (Cream) | Confetti shapes, bouncy easing, floating icons, pill buttons, 4-color palette |
| 7 | **Enterprise** | `enterprise/` | Light (Slate) | Colored shadows, gradient text, isometric depth, blurred blobs, elevated cards |
| 8 | **Twisty** | `twisty/` | Dark (Void) | Layered surfaces, violet-indigo gradients, semantic badges, finance dashboard |
| 9 | **Hydrolight** | `hydrolight/` | Light (Water) | Depth gradients (cyan→navy), caustic shimmer, water-tinted shadows, wave dividers, monospace gauge readouts, semantic hydro states. Custom-built for Joey's water resources engineering tools; has its own README.md |

### Each Style Contains
- `{STYLE}.md` - Full design system documentation (philosophy, colors, typography, components, patterns)
- `tokens.json` - Design tokens in JSON format (programmatic access to all values)
- `tailwind-config.js` - Ready-to-use Tailwind configuration with custom CSS examples

### Templates
- `templates/component-starter.jsx` - Reusable React component templates
- `templates/Twisty/TwistyFinanceDashboard.jsx` - Complete finance dashboard example

---

## Directory Structure

```
E:\CLAUDE_Workspace\Claude\Report_Files\GUI_Design_Center_Library\
├── README.md                           # Master index with comparison tables
├── HANDOFF.md                          # This handoff document
├── ONESHOT_PROMPT.md                   # Copy-paste prompt for UI link workflow
├── UI_TO_DESIGN_SYSTEM_WORKFLOW.md     # Detailed workflow documentation
├── GUI_MULTI_STYLE_RETROFIT_GUIDE.md   # Python tkinter multi-style guide
├── styles/
│   ├── bauhaus/
│   │   ├── BAUHAUS.md
│   │   ├── tokens.json
│   │   └── tailwind-config.js
│   ├── kinetic/
│   │   ├── KINETIC.md
│   │   ├── tokens.json
│   │   └── tailwind-config.js
│   ├── academia/
│   │   ├── ACADEMIA.md
│   │   ├── tokens.json
│   │   └── tailwind-config.js
│   ├── cyberpunk/
│   │   ├── CYBERPUNK.md
│   │   ├── tokens.json
│   │   └── tailwind-config.js
│   ├── sketch/
│   │   ├── SKETCH.md
│   │   ├── tokens.json
│   │   └── tailwind-config.js
│   ├── playful-geometric/
│   │   ├── PLAYFUL-GEOMETRIC.md
│   │   ├── tokens.json
│   │   └── tailwind-config.js
│   ├── enterprise/
│   │   ├── ENTERPRISE.md
│   │   ├── tokens.json
│   │   └── tailwind-config.js
│   ├── twisty/
│   │   ├── TWISTY.md
│   │   ├── tokens.json
│   │   └── tailwind-config.js
│   └── hydrolight/
│       ├── HYDROLIGHT.md
│       ├── README.md                   # Style-specific readme (unique to Hydrolight)
│       ├── tokens.json
│       └── tailwind-config.js
├── templates/
│   ├── component-starter.jsx           # Reusable React component templates
│   └── Twisty/
│       └── TwistyFinanceDashboard.jsx  # Complete finance dashboard example
└── Example/
    └── mortgage_calculator_multi_style.py
```

---

## File Access Instructions

**CRITICAL:** Always use the filesystem MCP interface, NOT bash/Linux commands.

```
# Reading files
filesystem:read_text_file with path: "E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/..."

# Writing files
filesystem:write_file with path: "E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/..."

# Creating directories
filesystem:create_directory with path: "E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/styles/new-style/"
```

---

## How to Add a New Design System

### Option A: Automatic (Recommended)
1. Start new chat
2. Paste contents of `ONESHOT_PROMPT.md`
3. Drop your UI link
4. Claude executes full pipeline automatically

### Option B: Manual
Follow these steps:

#### Step 1: Create the folder
```
filesystem:create_directory
path: E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/styles/{style-name}/
```

#### Step 2: Create the three required files

**{STYLE-NAME}.md** should include:
- Philosophy/vibe description
- Color palette table (with hex, name, usage)
- Typography (fonts, weights, scale)
- Core design principles (what makes it unique)
- Radius & border tokens
- Shadow recipes
- Component patterns (buttons, cards, inputs)
- Decorative elements
- Animation/motion guidelines
- Layout guidelines
- Responsive strategy
- Accessibility notes
- Anti-patterns (what NOT to do)
- Quick reference code snippets

**tokens.json** should include:
- name, version, created, description
- colors (with hex, name, usage for each)
- typography (fontFamily with Google Font URL, weights, sizes)
- spacing, borders, radius
- shadows (with value and usage)
- effects (gradients, textures, patterns)
- animation (duration, easing, keyframes)
- components (button, card, input specifications)
- accessibility (contrast ratios, focus ring specs)

**tailwind-config.js** should include:
- Extended colors with style prefix (e.g., `playful-*`, `sketch-*`, `twisty-*`)
- Custom font families
- Custom shadows
- Custom animations/keyframes
- Required custom CSS in comments
- Utility class reference in comments
- Component examples in comments

#### Step 3: Update the documentation files
- Update `README.md` with the new style in all tables
- Update `HANDOFF.md` (this file) with the new style
- Update `GUI_MULTI_STYLE_RETROFIT_GUIDE.md` if applicable for Python GUIs
- Update `templates/component-starter.jsx` with new preset

---

## How to Create Demo Calculators

Demo calculators showcase each design system using a Linear Interpolation calculator. They are saved as React artifacts.

### Pattern
1. Create file at `/mnt/user-data/outputs/{Style}LerpCalculator.jsx`
2. Include all style colors as a `colors` object
3. Implement the lerp formula: `y = y0 + (y1 - y0) * (x - x0) / (x1 - x0)`
4. Style all elements according to the design system
5. Include interactive states (hover, focus, active)
6. Add decorative elements unique to the style
7. Add error handling for invalid inputs and division by zero

### Existing Demo Calculators
- `/mnt/user-data/outputs/CyberpunkLerpCalculator.jsx`
- `/mnt/user-data/outputs/AcademiaLerpCalculator.jsx`
- `/mnt/user-data/outputs/KineticLerpCalculator.jsx`
- `/mnt/user-data/outputs/BauhausLerpCalculator.jsx`
- `/mnt/user-data/outputs/SketchLerpCalculator.jsx`
- `/mnt/user-data/outputs/PlayfulGeometricLerpCalculator.jsx`

---

## Template Dashboards

Full dashboard templates are stored in the `templates/` folder:

### Twisty Finance Dashboard
- Location: `templates/Twisty/TwistyFinanceDashboard.jsx`
- Type: Complete React component with inline styles
- Features: Header with nav, stat cards, bar chart, balance card, transaction list
- Source inspiration: Halo Lab Dribbble design

---

## Design System Source Documents

When adding new styles, the user may provide a design system specification document. These typically come in a format like:

```xml
<design-system>
# Design Philosophy
...
# Design Token System
...
# Component Stylings
...
</design-system>
```

Transform these into the three-file format (MD, JSON, JS) following the patterns established in existing styles.

---

## Key Conventions

### Naming
- Folder names: lowercase, hyphenated (e.g., `playful-geometric`, `twisty`)
- MD files: UPPERCASE, hyphenated (e.g., `PLAYFUL-GEOMETRIC.md`, `TWISTY.md`)
- JSON/JS files: lowercase (e.g., `tokens.json`, `tailwind-config.js`)

### Color Tokens
Each style uses a consistent token structure:
- `background` - Page background
- `foreground` - Primary text color
- `muted` - Secondary/disabled backgrounds
- `mutedForeground` - Secondary text
- `accent` - Primary action color
- `accentSecondary` (optional) - Secondary accent
- `border` - Default border color
- `card` / `surface` - Card background

### Shadow Philosophy
- **Bauhaus, Sketch, Playful Geometric**: Hard offset shadows (no blur)
- **Kinetic, Twisty**: No shadows (flat / surface contrast)
- **Academia**: Soft, engraved shadows
- **Cyberpunk**: Neon glow shadows (multiple layers)
- **Enterprise**: Colored (indigo-tinted) shadows
- **Hydrolight**: Colored (sky/cyan-tinted) shadows, never gray; inset "pool" shadows on inputs

### Typography
All styles use Google Fonts. Import URLs are stored in `tokens.json` under `typography.fontFamily.googleImport`.

---

## Potential Future Additions

Design systems that could be added:
- **Art Deco** - 1920s geometric elegance, gold/black, fan shapes
- **Brutalist** - Raw concrete aesthetic, exposed structure, monospace
- **Glassmorphism** - Frosted glass effects, blur, transparency
- **Neumorphism** - Soft UI, subtle shadows, extruded elements
- **Retro 8-bit** - Pixel art, limited palette, chunky pixels
- **Nature/Organic** - Earth tones, leaf shapes, natural textures
- **Corporate Minimal** - Clean, professional, subtle gradients
- **Vaporwave** - 80s/90s nostalgia, pink/cyan, grid backgrounds

---

## Troubleshooting

### Files not saving to expected location
- Verify the directory exists first with `filesystem:list_directory`
- Create the directory if needed with `filesystem:create_directory`
- Use the full Windows path: `E:/CLAUDE_Workspace/Claude/Report_Files/...`

### Artifacts not rendering on canvas
- Save to `/mnt/user-data/outputs/` for artifacts
- Use `.jsx` extension for React components
- Ensure `export default function ComponentName()` syntax
- Provide the computer:// link to the user

---

## Quick Start for New Session

To continue working on this library in a new chat session:

1. **For UI Link Workflow:** Paste `ONESHOT_PROMPT.md` contents, then drop link

2. **For Manual Work:**
   ```
   filesystem:read_text_file
   path: E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/README.md
   ```

3. **List available styles**:
   ```
   filesystem:list_directory
   path: E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/styles
   ```

4. **Reference an existing style** as a template when adding new ones:
   ```
   filesystem:read_text_file
   path: E:/CLAUDE_Workspace/Claude/Report_Files/GUI_Design_Center_Library/styles/twisty/TWISTY.md
   ```

---

## Contact

**Project Owner:** Joey Woody
**Company:** J. Bragg Consulting Inc.
**Primary Use:** Engineering GUI tools, calculators, dashboards, and professional interfaces

---

## Session Notes (2026-07-10)

- **Added Hydrolight** (style #9), a custom light-mode water/stormwater theme designed specifically for Joey's engineering tools (PCSWMM/QGIS utilities, calculators, dashboards).
- Signature elements: vertical depth gradient (#06B6D4 → #0284C7 → #075985), caustic shimmer animation, cyan-tinted shadows, SVG wave dividers, JetBrains Mono/Consolas gauge readouts, semantic hydro status colors (flood #DC2626 / action #D97706 / normal #059669 / baseflow #0284C7).
- Hydrolight is the only style with its own `README.md` inside the style folder.
- `tokens.json` includes a dedicated `tkinter` block with exact widget colors plus loader-compatible aliases (`accent`, `accentSecondary`, `card`, `mutedForeground`) so the existing `StyleLoader` normalizes it without changes.
- Added `"Hydrolight (Light)": "hydrolight/tokens.json"` to the retrofit guide `STYLE_MAP` and style table.
- **Hydrolight is now the default GUI style** per user request: updated in the global CLAUDE.md (`E:\CLAUDE_Workspace\Claude\.claude\CLAUDE.md`) and both Report_Files CLAUDE.md copies (previously Kinetic).
- **Added `animation/` toolkit** after a feasibility analysis (verdict: purposeful micro-animation is worth it in tkinter; ambient effects are not):
  - `animation/hydrolight_anim.py` - animate/fade_color/count_up/pulse primitives, HydroGaugeBar (gradient rise fill, red past 1.0), HydroRipple (indeterminate wave), run_threaded (queue-based, thread-safe UI marshaling), ANIMATIONS_ENABLED kill switch. Self-testing: `python hydrolight_anim.py` runs 10 headless checks.
  - `animation/culvert_hwd_pilot.py` - working pilot (SCDOT HW/D check) exercising every primitive; smoke-tested pass/exceed/invalid paths.
  - Known gotchas encountered: tk.Canvas subclasses must NOT set `self._w`/`self._h` (tkinter internals); worker threads must never call `widget.after()` directly (use the queue poller in run_threaded).
  - Phase 3 (future): PyQt5/QSS Hydrolight stylesheet for QGIS plugin dialogs (real shadows, QPropertyAnimation).

---

*This handoff document was last updated on 2026-07-10 to enable continuity across chat sessions.*

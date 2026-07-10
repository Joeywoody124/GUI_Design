# GUI Design Center Library

A curated collection of design system prompts for AI-powered GUI generation.

## Purpose
This library stores design system specifications that can be used as prompts when building user interfaces. Each style contains complete documentation, design tokens, and ready-to-use configurations.

---

## Available Styles

| Style | Vibe | Primary Colors | Mode | Status |
|-------|------|----------------|------|--------|
| [Bauhaus](./styles/bauhaus/BAUHAUS.md) | Constructivist, Geometric, Modernist | Red #D02020, Blue #1040C0, Yellow #F0C020 | Light | ✅ Complete |
| [Kinetic](./styles/kinetic/KINETIC.md) | High-Energy Brutalism, Motion, Poster | Acid Yellow #DFE104 | Dark | ✅ Complete |
| [Academia](./styles/academia/ACADEMIA.md) | Scholarly, Prestigious, Classical | Brass #C9A962, Crimson #8B2635 | Dark (Warm) | ✅ Complete |
| [Cyberpunk](./styles/cyberpunk/CYBERPUNK.md) | Dystopian, Neon, Glitch, Terminal | Matrix Green #00ff88, Magenta #ff00ff | Dark | ✅ Complete |
| [Sketch](./styles/sketch/SKETCH.md) | Hand-Drawn, Playful, Organic, Whimsical | Red Marker #ff4d4d, Blue Pen #2d5da1 | Light | ✅ Complete |
| [Playful Geometric](./styles/playful-geometric/PLAYFUL-GEOMETRIC.md) | Memphis, Bouncy, Tactile, Pop | Violet #8B5CF6, Pink #F472B6, Yellow #FBBF24 | Light | ✅ Complete |
| [Enterprise](./styles/enterprise/ENTERPRISE.md) | Corporate Trust, SaaS, Professional | Indigo #4F46E5, Violet #7C3AED | Light | ✅ Complete |
| [Twisty](./styles/twisty/TWISTY.md) | Fintech, SaaS Dashboard, Modern Dark | Violet #8B5CF6, Indigo #6366F1 | Dark | ✅ Complete |
| [Hydrolight](./styles/hydrolight/HYDROLIGHT.md) | Sunlit Water, Engineering-Grade, Calm Precision | Open Water #0284C7, Caustic Cyan #06B6D4 | Light | ✅ Complete |

---

## Style Comparison

| Attribute | Bauhaus | Kinetic | Academia | Cyberpunk | Sketch | Playful Geometric | Enterprise | Twisty | Hydrolight |
|-----------|---------|---------|----------|-----------|--------|-------------------|------------|--------|------------|
| **Mode** | Light | Dark | Dark (Warm) | Dark (Void) | Light (Paper) | Light (Cream) | Light (Slate) | Dark (Void) | Light (Water) |
| **Motion** | Minimal | Heavy (marquees) | Deliberate | Digital (glitch) | Playful (jiggle) | Bouncy (overshoot) | Refined (lift) | Subtle (fade) | Calm (ripple, shimmer) |
| **Typography** | Sans (Outfit) | Sans (Space Grotesk) | Serifs (3 fonts) | Monospace (3 fonts) | Handwritten (2 fonts) | Sans (Outfit + Jakarta) | Sans (Plus Jakarta) | Sans (Inter) | Sans + Mono (Manrope + JetBrains) |
| **Shadows** | Hard offset | None (flat) | Soft engraved | Neon glow | Hard offset (no blur) | Hard offset (colored) | Colored (indigo-tinted) | None (surface contrast) | Colored (cyan-tinted) |
| **Borders** | Thick black (2-4px) | Subtle zinc (2px) | Wood grain (1px) | Chamfered corners | Thick wobbly (2-3px) | Chunky dark (2px) | Subtle slate (1px) | Subtle dark (1px) | Subtle sky (1px) |
| **Radius** | Binary (0 or full) | Sharp (0px) | Subtle (4px) | Chamfer clip-path | Wobbly irregular | Mixed (pills + blobs) | Rounded (8-12px + pills) | Rounded (8-20px) | Rounded (10-20px, no pills) |
| **Accent** | R/B/Y primaries | Acid Yellow | Brass + Crimson | Green/Magenta/Cyan | Red Marker + Blue | Violet/Pink/Yellow/Mint | Indigo + Violet gradient | Violet + Indigo gradient | Cyan → Navy depth gradient |
| **Signature** | Geometric shapes | Infinite marquees | Sepia images, Roman numerals | Scanlines, glitch effects | Tape, thumbtacks, rotation | Confetti, floating icons, wiggle | Gradient text, blobs, isometric | Layered surfaces, semantic badges | Caustic shimmer, gauge readouts, wave dividers |
| **Textures** | None | Noise overlay | Paper + vignette | Scanlines + circuit grid | Paper dot pattern | Dot grid, stripes | Blurred gradient orbs | Gradient glow orbs | Ripple orbs, caustic light |

---

## Directory Structure

```
GUI_Design_Center_Library/
├── README.md                    # This index file
├── HANDOFF.md                   # Session continuity document
├── GUI_MULTI_STYLE_RETROFIT_GUIDE.md  # Python tkinter styling guide
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
│       ├── README.md
│       ├── tokens.json
│       └── tailwind-config.js
├── templates/
│   ├── component-starter.jsx
│   └── Twisty/
│       └── TwistyFinanceDashboard.jsx
└── Example/
    └── mortgage_calculator_multi_style.py
```

---

## How to Use

1. **Select a Style**: Browse the styles folder and pick a design system.
2. **Reference the Docs**: Use the `.md` file as a prompt for AI assistants.
3. **Import Tokens**: Use `tokens.json` for programmatic access to colors, spacing, etc.
4. **Configure Tailwind**: Drop `tailwind-config.js` into your project.

---

## Adding New Styles

When adding a new design system:
1. Create a folder under `styles/` with the style name (lowercase, hyphenated)
2. Include at minimum:
   - `{STYLE}.md` - Full design system documentation
   - `tokens.json` - Design tokens in JSON format
   - `tailwind-config.js` - Tailwind configuration
3. Update this README with the new style in the tables above
4. Update HANDOFF.md with the new style
5. Update GUI_MULTI_STYLE_RETROFIT_GUIDE.md if applicable for Python GUIs

---

## Quick Token Reference

### Bauhaus Palette (Light Mode)
```
#F0F0F0  Background (Off-white)
#121212  Foreground (Stark Black)
#D02020  Primary Red
#1040C0  Primary Blue
#F0C020  Primary Yellow
```

### Kinetic Palette (Dark Mode)
```
#09090B  Background (Rich Black)
#FAFAFA  Foreground (Off-white)
#DFE104  Accent (Acid Yellow)
#27272A  Muted (Dark Gray)
#A1A1AA  Muted Foreground (Zinc 400)
#3F3F46  Border (Zinc 700)
```

### Academia Palette (Warm Dark Mode)
```
#1C1714  Background (Deep Mahogany)
#251E19  Background Alt (Aged Oak)
#E8DFD4  Foreground (Antique Parchment)
#9C8B7A  Muted Foreground (Faded Ink)
#C9A962  Accent (Polished Brass)
#8B2635  Accent Secondary (Library Crimson)
#4A3F35  Border (Wood Grain)
```

### Cyberpunk Palette (Void Dark Mode)
```
#0a0a0f  Background (Void Black)
#12121a  Card (Deep Purple-Black)
#e0e0e0  Foreground
#00ff88  Accent (Matrix Green)
#ff00ff  Accent Secondary (Hot Magenta)
#00d4ff  Accent Tertiary (Electric Cyan)
#2a2a3a  Border
```

### Sketch Palette (Light Mode)
```
#fdfbf7  Background (Warm Paper)
#2d2d2d  Foreground (Soft Pencil Black)
#e5e0d8  Muted (Old Paper / Erased)
#ff4d4d  Accent (Red Correction Marker)
#2d5da1  Accent Secondary (Blue Ballpoint Pen)
#ffffff  Card (White)
#fff9c4  Post-it (Yellow)
```

### Playful Geometric Palette (Light Mode)
```
#FFFDF5  Background (Warm Cream)
#1E293B  Foreground (Slate 800)
#F1F5F9  Muted (Slate 100)
#8B5CF6  Accent (Vivid Violet)
#F472B6  Secondary (Hot Pink)
#FBBF24  Tertiary (Amber Yellow)
#34D399  Quaternary (Emerald Mint)
#E2E8F0  Border (Slate 200)
```

### Enterprise Palette (Light Mode)
```
#F8FAFC  Background (Slate 50)
#0F172A  Foreground (Slate 900)
#FFFFFF  Surface (White cards)
#4F46E5  Primary (Indigo 600)
#7C3AED  Secondary (Violet 600)
#64748B  Muted (Slate 500)
#10B981  Accent (Emerald 500)
#E2E8F0  Border (Slate 200)
```

### Twisty Palette (Dark Mode)
```
#0D0D12  Background (Void Black)
#13131A  Background Secondary (Dark Navy)
#1A1A24  Surface (Card Surface)
#FFFFFF  Foreground (White)
#A0A0B0  Text Secondary (Silver)
#6B6B7B  Text Muted (Muted Gray)
#8B5CF6  Primary (Violet 500)
#6366F1  Secondary (Indigo 500)
#22C55E  Accent (Emerald 500 - Success)
#EF4444  Accent Red (Red 500 - Error)
#2A2A38  Border (Border Dark)
```

### Hydrolight Palette (Light Mode)
```
#F0F9FF  Background (Surface Light / Sky 50)
#E0F2FE  Background Alt (Shallows / Sky 100)
#FFFFFF  Surface (White Cap - cards)
#082F49  Foreground (Deep Channel / Sky 950)
#0284C7  Primary (Open Water / Sky 600)
#06B6D4  Secondary (Caustic Cyan / Cyan 500)
#075985  Deep (Thalweg / Sky 800 - gradient end)
#475569  Muted Foreground (Silt / Slate 600)
#BAE6FD  Border (Ripple Line / Sky 200)
#DC2626  Flood Stage (exceedance)
#D97706  Action Stage (warning)
#059669  Within Banks (passing)
```

---

## Style Selection Guide

**Choose Bauhaus when:**
- Building bold, poster-like marketing pages
- Need strong geometric visual identity
- Want light mode with high contrast
- Prefer no JavaScript dependencies

**Choose Kinetic when:**
- Creating high-energy, attention-grabbing interfaces
- Want constant motion and animation
- Building for younger/edgier audiences
- Need dramatic dark mode with brutalist aesthetic

**Choose Academia when:**
- Building for educational, legal, or financial institutions
- Want sophisticated, trustworthy appearance
- Need warm, inviting dark mode
- Prefer classical typography and decorative elements

**Choose Cyberpunk when:**
- Building tech/gaming/crypto/hacker-themed interfaces
- Want aggressive, futuristic aesthetic
- Need terminal/console-inspired UI
- Want glitch effects, neon glow, and scanlines

**Choose Sketch when:**
- Building creative tools, brainstorming platforms, or educational content
- Want approachable, human-centered aesthetic
- Need playful, work-in-progress feel
- Prefer handwritten fonts and organic imperfection

**Choose Playful Geometric when:**
- Building consumer apps, creative tools, or marketing landing pages
- Want optimistic, friendly, tactile aesthetic
- Need bouncy animations and colorful confetti decoration
- Building for kids, education, or brands that want to feel fun and human

**Choose Enterprise when:**
- Building SaaS dashboards, business apps, or professional tools
- Want trustworthy, polished, modern aesthetic
- Need clean light mode with sophisticated depth
- Building for B2B, startups, or tech companies
- Want vibrant gradients balanced with professional restraint
- Need enterprise-ready polish with approachable warmth

**Choose Twisty when:**
- Building fintech dashboards, banking apps, or financial tools
- Want modern dark-mode SaaS aesthetic
- Need clean data visualization with semantic color coding
- Building for finance, analytics, or data-heavy applications
- Want elegant violet-indigo gradients without being flashy
- Need professional trust with modern sophistication

**Choose Hydrolight when:**
- Building water resources / stormwater / hydraulic engineering tools
- Need PCSWMM or QGIS utility GUIs, calculators, or report generators
- Want numeric results that read like gauge cards (monospace, unit labels)
- Need semantic status colors mapped to hydrologic meaning (flood/action/normal)
- Want a stunning light theme that still feels engineering-grade
- Building anything for J. Bragg Consulting deliverables

---

## Style Visual Signatures

### Bauhaus
- Geometric shapes (circle, square, triangle)
- Hard offset shadows (4-8px)
- Primary color blocking (R/B/Y)
- Thick black borders

### Kinetic
- Infinite scrolling marquees
- Viewport-width typography (clamp)
- Hard color inversions on hover
- Massive decorative numbers

### Academia
- Arch-topped images (cathedral windows)
- Sepia-to-color image transitions
- Roman numeral section headers
- Drop caps and corner flourishes

### Cyberpunk
- Chromatic aberration (RGB split)
- Scanline overlays
- Chamfered corner clip-paths
- Neon glow box-shadows
- Terminal prefixes (>, $)
- Blinking cursor animations

### Sketch
- Wobbly irregular border-radius (no straight lines)
- Hard offset shadows (no blur)
- Tape strips and thumbtack decorations
- Playful rotation (-2deg to 2deg)
- Paper dot texture background
- Hand-drawn SVG arrows and squiggles
- Post-it yellow highlights
- Corner frame marks

### Playful Geometric
- Primitive confetti shapes (circles, triangles, squares)
- Hard offset shadows (dark or colored)
- Pill buttons with dark borders
- Floating icons (half in/half out of cards)
- Bouncy overshoot easing
- Dot grid and stripe patterns
- Mixed radii (pills + blobs + sharp)
- 4-color confetti palette (violet, pink, yellow, mint)
- Wiggle and pop-in animations

### Enterprise
- Colored shadows (indigo-tinted instead of gray)
- Isometric 3D transforms (rotate-x, rotate-y)
- Gradient text (indigo to violet) on key headlines
- Soft blurred background blobs
- Elevated cards with hover lift
- Pill buttons with gradient backgrounds
- Split headlines (standard + gradient text)
- Dual-tone gradient palette (indigo + violet)
- Refined motion (subtle lifts, never jarring)

### Twisty
- Layered surface hierarchy (3+ depth levels)
- Violet-to-indigo gradient (135deg) on CTAs and hero cards
- Semantic color badges (green=positive, red=negative)
- No shadows (depth via surface contrast)
- Period selector tabs with pill active state
- Transaction list with icon backgrounds
- Decorative glow orbs on gradient cards
- Clean data visualization (bar charts, stat cards)
- Minimal hover effects (background shift only)

### Hydrolight
- Vertical depth gradients (cyan → sky → navy, light always above dark)
- Caustic shimmer (animated refracted-light overlay on hero cards)
- Water-tinted shadows (sky/cyan RGBA, never gray)
- SVG sine-wave section dividers
- Monospace gauge readouts with capacity bars
- Semantic hydro badges (flood/action/normal/baseflow)
- Freeboard alert cards (3px state-colored left border)
- Recessed "pool" inputs with inset shadows
- Ripple focus rings and slow float animations

---

*Last Updated: 2026-07-10*
*Maintainer: Joey Woody*
*Styles: 9*

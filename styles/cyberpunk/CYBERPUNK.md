# Design Style: Cyberpunk / Glitch

## 1. Design Philosophy

**Core Principles**: "High-Tech, Low-Life." The aesthetic is a digital dystopia colliding with a high-tech noir reality. It captures the tension between advanced technology and societal decay—a world of underground hackers, neon-drenched megacities, and corrupted data streams. This isn't a clean, utopian future; it's gritty, imperfect, and palpably dangerous. Every pixel should feel like it's being rendered on a malfunctioning CRT monitor in a rain-soaked Tokyo alley or a rogue terminal in a subterranean bunker.

**The Vibe**: Dangerous, electric, rebellious, and aggressively futuristic-retro. It draws heavily from the visual language of 80s sci-fi (Blade Runner, Akira) and hacker culture (The Matrix, Ghost in the Shell). The interface should feel *alive* and volatile—buzzing with digital energy, glitching with data corruption, and pulsing with raw power. It's not just a website; it's a hacked feed, a forbidden interface, a window into the sprawl.

**The Tactile Experience**:
- **Imperfect Technology**: Embrace the artifacts of analog-to-digital conversion. Scanlines, chromatic aberration (RGB splitting), and signal noise are not bugs; they are features.
- **The Void vs. The Light**: The background is a void. Against absolute blackness, neon light (cyan, magenta, acid green) doesn't just color elements—it *illuminates* them.
- **Industrial Brutalism**: Shapes are hard, angular, and utilitarian. Chamfered corners (45-degree cuts) replace friendly rounded rectangles.

**Visual Signatures**:
- **Chromatic Aberration**: RGB color splitting on text (red/cyan offset shadows)
- **Scanlines**: Subtle horizontal line overlays mimicking CRT monitors
- **Glitch Effects**: Intentional "corruption" via clip-path animations and flickering
- **Neon Glow**: Multi-layered box-shadow/text-shadow stacking
- **Corner Cuts**: Chamfered/clipped corners creating tech-panel aesthetic
- **Circuit Patterns**: Decorative SVG backgrounds resembling PCB traces

---

## 2. Design Token System (The DNA)

### Colors (Dark Mode - Mandatory)

```
background:          #0a0a0f      // Deep void black with slight blue undertone
foreground:          #e0e0e0      // Primary text, not pure white
card:                #12121a      // Card background, deep purple-black
muted:               #1c1c2e      // UI chrome/elevated backgrounds
mutedForeground:     #6b7280      // Secondary text, reduced contrast
accent:              #00ff88      // PRIMARY NEON - Electric green (Matrix-inspired)
accentSecondary:     #ff00ff      // SECONDARY NEON - Hot magenta/pink
accentTertiary:      #00d4ff      // TERTIARY NEON - Cyan/electric blue
border:              #2a2a3a      // Subtle borders
input:               #12121a      // Deep input background
ring:                #00ff88      // Focus ring matches accent
destructive:         #ff3366      // Error/danger red-pink
```

### Color Names
- **Background**: Void Black
- **Card**: Deep Purple-Black
- **Accent**: Matrix Green / Electric Green
- **Accent Secondary**: Hot Magenta
- **Accent Tertiary**: Electric Cyan

---

### Typography

**Font Stack**:
- **Headings**: `"Orbitron", "Share Tech Mono", monospace` — Geometric, futuristic, robotic
- **Body**: `"JetBrains Mono", "Fira Code", "Consolas", monospace` — Clean monospace terminal feel
- **Accent/Labels**: `"Share Tech Mono", monospace` — For UI labels, timestamps, badges

**Google Font Import**:
```
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap
```

**Scale & Styling**:
- H1: `text-6xl` to `text-8xl`, `font-black`, `uppercase`, `tracking-widest`
- H2: `text-4xl` to `text-5xl`, `font-bold`, `uppercase`, `tracking-wide`
- H3: `text-xl` to `text-2xl`, `font-semibold`, `uppercase`
- Body: `text-base`, `font-normal`, `tracking-wide`, `leading-relaxed`
- Code/Labels: `text-sm`, `font-mono`, `uppercase`, `tracking-[0.2em]`

---

### Radius & Border

**Border Radius**:
- `radius.none`: 0px — Sharp cuts are the default
- `radius.sm`: 2px — Minimal softening
- `radius.base`: 4px — Rare, only for inputs
- `radius.chamfer`: Use clip-path for corner cuts instead of border-radius

**Border Width**: `1px` default, `2px` for emphasis

**Chamfered Corner Pattern** (apply via clip-path):
```css
clip-path: polygon(
  0 10px, 10px 0,
  calc(100% - 10px) 0, 100% 10px,
  100% calc(100% - 10px), calc(100% - 10px) 100%,
  10px 100%, 0 calc(100% - 10px)
);
```

**Small Chamfer** (for buttons):
```css
clip-path: polygon(
  0 4px, 4px 0,
  calc(100% - 4px) 0, 100% 4px,
  100% calc(100% - 4px), calc(100% - 4px) 100%,
  4px 100%, 0 calc(100% - 4px)
);
```

---

### Shadows & Effects

**Neon Glow (Box Shadows)**:
```css
/* Main neon glow */
--shadow-neon: 0 0 5px #00ff88, 0 0 10px #00ff8840;

/* Small neon glow */
--shadow-neon-sm: 0 0 3px #00ff88, 0 0 6px #00ff8830;

/* Large neon glow */
--shadow-neon-lg: 0 0 10px #00ff88, 0 0 20px #00ff8860, 0 0 40px #00ff8830;

/* Secondary neon (magenta) */
--shadow-neon-secondary: 0 0 5px #ff00ff, 0 0 20px #ff00ff60;

/* Tertiary neon (cyan) */
--shadow-neon-tertiary: 0 0 5px #00d4ff, 0 0 20px #00d4ff60;
```

**Text Shadows**:
```css
/* Glitch effect text shadow */
text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);

/* Chromatic aberration */
text-shadow: -2px 0 #ff00ff, 2px 0 #00d4ff;
```

---

### Textures & Patterns

**1. Scanlines Overlay**:
```css
.scanlines::after {
  content: "";
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.3) 2px,
    rgba(0, 0, 0, 0.3) 4px
  );
  pointer-events: none;
  z-index: 9999;
}
```

**2. Grid/Circuit Pattern**:
```css
.circuit-grid {
  background-image:
    linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

**3. Noise Texture**: SVG noise overlay at 5-10% opacity

---

## 3. Component Stylings

### Buttons

**Base Styling**:
- Font: monospace (JetBrains Mono or Share Tech Mono)
- Text transform: uppercase
- Letter spacing: `tracking-wider`
- Transition: all 150ms
- Focus ring: 2px accent color with glow

**Default Variant**:
- Background: transparent
- Border: 2px solid `#00ff88`
- Text: `#00ff88`
- Clip-path: chamfer-sm
- Hover: background fills with accent, text becomes background color, neon glow

**Secondary Variant**:
- Border: 2px solid `#ff00ff`
- Text: `#ff00ff`
- Hover: fills with magenta, neon-secondary glow

**Outline Variant**:
- Border: 1px solid `#2a2a3a`
- Background: transparent
- Hover: border becomes accent, text becomes accent, neon glow

**Glitch Variant** (CTAs):
- Background: solid `#00ff88`
- Text: `#0a0a0f` (high contrast)
- Uses chromatic aberration effect
- Hover: brightness increases (filter: brightness(1.1))

**Button Sizes**:
- Default: `h-12 px-8`
- Small: `h-10 px-6`
- Large: `h-14 px-10`

---

### Cards/Containers

**Default Card**:
- Background: `#12121a`
- Border: 1px solid `#2a2a3a`
- Clip-path: chamfered corners
- Hover: translateY(-1px), border becomes accent, neon glow

**Terminal Variant**:
- Background: `#0a0a0f`
- Decorative header bar with traffic light dots (red/yellow/green)
- Used for: Blog cards, FAQ items, code blocks

**Holographic Variant**:
- Background: `#1c1c2e` at 30% opacity
- Border: 1px solid accent at 30% opacity
- Backdrop-filter: blur for glassmorphic effect
- Corner accents: 4 small border corners at card edges
- Used for: Product details, hero HUD panels

---

### Inputs

- Wrapper: relative positioning for prefix icon
- Prefix: ">" symbol in accent color
- Background: `#12121a`
- Border: 1px solid `#2a2a3a`
- Clip-path: chamfer-sm
- Text: monospace, accent color
- Placeholder: styled as terminal prompt
- Focus: border becomes accent, neon glow shadow

---

## 4. Layout Strategy

**Max-Width**: `max-w-7xl` for main content

**Grid Patterns**:
- Features: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `-skew-y-1`
- Pricing: `grid-cols-1 md:grid-cols-3` with middle card scaled up
- Stats: Horizontal flex with `divide-x divide-border`

**Spacing**: 8px base grid. Generous padding (`py-24` to `py-32` for sections)

**Asymmetry Requirements**:
- Hero: 60/40 split minimum
- At least one section with overlapping elements
- Use `rotate-1` or `skew-y-1` transforms
- Stagger card heights where content allows

---

## 5. Non-Genericness (THE BOLD FACTOR)

**MANDATORY ELEMENTS**:

1. **Glitched Headlines**: Hero h1 MUST have chromatic aberration AND glitch animation
2. **Scanline Overlay**: Entire page has subtle scanline overlay
3. **Terminal Aesthetic**: At least one section with monospace, > prefixes, blinking cursor
4. **Neon Borders That Actually Glow**: Stacked box-shadows creating real glow
5. **Corner Cuts**: Cards use clip-path chamfers, NOT rounded corners
6. **Animated Elements**: Blinking cursors, hover glitch effects, gradient border animations
7. **Circuit/Grid Background**: Visible tech-pattern in at least one section
8. **Typing Effect**: Subtitle styled as if mid-type with trailing cursor

---

## 6. Effects & Animation

**Motion Feel**: Sharp, digital, mechanical. Quick snaps rather than smooth eases.

**Transitions**:
```css
transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
/* Or for digital feel: */
transition: all 100ms steps(4);
```

**Keyframe Animations**:

```css
/* Blink cursor */
@keyframes blink {
  50% { opacity: 0; }
}

/* Glitch effect */
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(1px, 1px); }
}

/* Scanline scroll */
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

/* RGB shift/chromatic pulse */
@keyframes rgbShift {
  0%, 100% { text-shadow: -2px 0 #ff00ff, 2px 0 #00d4ff; }
  50% { text-shadow: 2px 0 #ff00ff, -2px 0 #00d4ff; }
}
```

---

## 7. Iconography

**Lucide Icons Configuration**:
- Stroke width: `1.5px` (thin, technical feel)
- Size: `h-5 w-5` or `h-6 w-6`
- Color: Inherit from text (usually accent)
- Hover: Add glow via `filter: drop-shadow(0 0 4px currentColor)`

**Icon Containers**: Place icons inside bordered squares/hexagons with glow effect

---

## 8. Responsive Strategy

**Typography Scaling**:
- Hero h1: `text-5xl` (mobile) → `text-7xl` (md) → `text-8xl` (lg)
- Section headings: `text-4xl` → `text-5xl`
- Maintain uppercase and tracking at all sizes

**Layout Changes**:
- Navigation: Hide nav links on < lg
- Stats: 2x2 grid (mobile) → 4-column (desktop)
- All grids: Single column → 2-column (md) → 3-column (lg)
- Pricing: Stack vertically, highlighted card scale only on md+
- Hero HUD: Hidden on mobile (lg:block)

**Maintained Elements**:
- Scanline overlay
- Chamfered corners
- Neon glow effects
- Monospace typography
- Terminal aesthetic

**Touch Targets**: Minimum 44px height for all interactive elements

---

## 9. Accessibility

**Contrast**: Accent green on dark bg = 7.5:1 ratio (exceeds WCAG AA)

**Focus States**:
```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[#00ff88]
focus-visible:ring-offset-2
focus-visible:ring-offset-[#0a0a0f]
```

**Reduced Motion**: Respect `prefers-reduced-motion` - disable glitch animations

---

## Quick Reference - Tailwind Classes

### Essential Color Classes
```
bg-[#0a0a0f]  /* Background - Void Black */
bg-[#12121a]  /* Card - Deep Purple-Black */
bg-[#1c1c2e]  /* Muted - Elevated Background */
text-[#e0e0e0]  /* Foreground */
text-[#00ff88]  /* Accent - Matrix Green */
text-[#ff00ff]  /* Accent Secondary - Hot Magenta */
text-[#00d4ff]  /* Accent Tertiary - Electric Cyan */
border-[#2a2a3a]  /* Border */
```

### Essential Component Patterns
```
/* Primary Button */
bg-transparent border-2 border-[#00ff88] text-[#00ff88]
font-mono uppercase tracking-wider h-12 px-8
hover:bg-[#00ff88] hover:text-[#0a0a0f]
hover:shadow-[0_0_5px_#00ff88,0_0_10px_#00ff8840]
transition-all duration-150

/* Glitch Button */
bg-[#00ff88] text-[#0a0a0f] font-mono uppercase tracking-wider
hover:brightness-110 cyber-glitch

/* Card */
bg-[#12121a] border border-[#2a2a3a] p-6
cyber-chamfer
hover:border-[#00ff88] hover:shadow-[0_0_5px_#00ff88,0_0_10px_#00ff8840]
transition-all duration-300

/* Hero Headline */
font-orbitron text-5xl md:text-7xl lg:text-8xl font-black
uppercase tracking-widest
text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]
cyber-glitch

/* Terminal Input */
bg-[#12121a] border border-[#2a2a3a] px-4 py-3 pl-8
font-mono text-[#00ff88] tracking-wide
focus:border-[#00ff88] focus:shadow-[0_0_5px_#00ff88,0_0_10px_#00ff8840]
```

---

*Style Added: 2025-12-03*

# Sketch / Hand-Drawn Design System

## Philosophy
**"Authentic imperfection and human touch in a digital world."**

The Sketch design style celebrates organic, playful irregularity that evokes sketches on paper, sticky notes on a wall, and napkin diagrams from a brainstorming session. It rejects the clinical precision of modern UI design in favor of warmth, approachability, and creative energy.

---

## Vibe Keywords
`Playful` · `Approachable` · `Human` · `Creative` · `Organic` · `Whimsical` · `Work-in-Progress` · `Collaborative`

---

## Color Palette (Light Mode Only)

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `background` | `#fdfbf7` | Warm Paper | Page background |
| `foreground` | `#2d2d2d` | Soft Pencil Black | Text, borders (never pure black) |
| `muted` | `#e5e0d8` | Old Paper / Erased | Secondary backgrounds, placeholders |
| `accent` | `#ff4d4d` | Red Correction Marker | Primary actions, emphasis |
| `accentSecondary` | `#2d5da1` | Blue Ballpoint Pen | Links, focus states |
| `card` | `#ffffff` | White | Card backgrounds |
| `postit` | `#fff9c4` | Post-it Yellow | Feature highlights, sticky notes |

---

## Typography

### Font Stack
```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Patrick+Hand&display=swap');
```

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings | `Kalam` | 700 | Thick felt-tip marker look |
| Body | `Patrick Hand` | 400 | Legible handwritten text |

### Scale
- **Hero**: `text-5xl md:text-6xl` (48px → 60px)
- **Section Headings**: `text-4xl md:text-5xl` (36px → 48px)
- **Card Headings**: `text-2xl md:text-3xl` (24px → 30px)
- **Body**: `text-lg md:text-xl` (18px → 20px)
- **Small**: `text-base` (16px)

### Characteristics
- Large and readable
- Headings vary dramatically in size (like emphasized notes)
- Never use corporate or sterile fonts

---

## Core Design Principles

### 1. No Straight Lines (CRITICAL)
Every border uses irregular border-radius values to create wobbly, hand-drawn edges.

**DO NOT** use standard Tailwind `rounded-*` classes alone.

```jsx
// WRONG - Too perfect
<div className="rounded-lg">...</div>

// CORRECT - Wobbly organic shape
<div style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
  ...
</div>
```

### 2. Hard Offset Shadows (No Blur)
Reject soft blur shadows entirely. Use solid offset shadows for a cut-paper aesthetic.

```css
/* Standard */
box-shadow: 4px 4px 0px 0px #2d2d2d;

/* Emphasized */
box-shadow: 8px 8px 0px 0px #2d2d2d;

/* Subtle (for cards) */
box-shadow: 3px 3px 0px 0px rgba(45, 45, 45, 0.1);

/* Hover - reduced offset creates "lifting" effect */
box-shadow: 2px 2px 0px 0px #2d2d2d;
```

### 3. Playful Rotation
Elements are deliberately tilted to break rigid grid alignment.

```jsx
// Small rotations create casual energy
<div className="rotate-1">...</div>    // 1 degree
<div className="-rotate-2">...</div>   // -2 degrees
<div className="hover:rotate-1">...</div>
```

### 4. Paper Texture Background
Use dot pattern to simulate notebook paper grain.

```css
background-image: radial-gradient(#e5e0d8 1px, transparent 1px);
background-size: 24px 24px;
```

### 5. Thick Borders
`border-2` is the minimum. Use `border-[3px]` or `border-4` for emphasis.

---

## Wobbly Border Radius Recipes

```javascript
const wobblyRadius = {
  // Standard - for buttons, small cards
  standard: '255px 15px 225px 15px / 15px 225px 15px 255px',
  
  // Medium - for cards, containers
  medium: '15px 225px 15px 255px / 255px 15px 225px 15px',
  
  // Alternate - variety
  alt1: '225px 15px 255px 15px / 15px 255px 15px 225px',
  alt2: '15px 255px 15px 225px / 225px 15px 255px 15px',
  
  // Organic blob - for stats, badges
  blob: '60% 40% 70% 30% / 30% 60% 40% 70%',
  
  // Slight wobble - for inputs
  subtle: '20px 25px 20px 25px / 25px 20px 25px 20px',
}
```

---

## Component Patterns

### Buttons

```jsx
// Primary Button
<button
  style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
  className="
    bg-white text-foreground
    border-[3px] border-foreground
    px-6 py-3
    font-handwriting text-lg
    shadow-[4px_4px_0px_0px_#2d2d2d]
    hover:bg-accent hover:text-white
    hover:shadow-[2px_2px_0px_0px_#2d2d2d]
    hover:translate-x-[2px] hover:translate-y-[2px]
    active:shadow-none
    active:translate-x-[4px] active:translate-y-[4px]
    transition-all duration-100
  "
>
  Click Me!
</button>
```

### Cards

```jsx
// Standard Card
<div
  style={{ borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px' }}
  className="
    bg-white
    border-2 border-foreground
    p-6
    shadow-[3px_3px_0px_0px_rgba(45,45,45,0.1)]
    hover:rotate-1
    transition-transform duration-100
  "
>
  {/* Content */}
</div>
```

### Inputs

```jsx
<input
  type="text"
  style={{ borderRadius: '20px 25px 20px 25px / 25px 20px 25px 20px' }}
  className="
    w-full
    bg-white
    border-2 border-foreground
    px-4 py-3
    font-handwriting text-lg
    placeholder:text-foreground/40
    focus:border-accentSecondary
    focus:ring-2 focus:ring-accentSecondary/20
    outline-none
  "
  placeholder="Write something..."
/>
```

---

## Decorative Elements

### Tape Strip
```jsx
<div style={{
  width: '60px',
  height: '20px',
  background: 'rgba(200, 200, 200, 0.6)',
  borderRadius: '2px',
  transform: 'rotate(2deg)',
}} />
```

### Thumbtack
```jsx
<div className="w-4 h-4 rounded-full bg-accent border-2 border-foreground" />
```

### Hand-Drawn Arrow (SVG)
```jsx
<svg width="40" height="24" viewBox="0 0 40 24" fill="none">
  <path 
    d="M4 12 Q 12 8, 20 12 T 36 12" 
    stroke="#2d2d2d"
    strokeWidth="2"
    strokeDasharray="4 3"
    fill="none"
  />
  <path d="M32 8 L 38 12 L 32 16" stroke="#2d2d2d" strokeWidth="2" fill="none" />
</svg>
```

---

## Animation & Interaction

### Hover Effects
- Jiggle rotation: `hover:rotate-1` or `hover:-rotate-1`
- Button press: shadow disappears, element translates

### Transitions
- **Duration**: `duration-100` (fast and snappy)
- **Property**: `transition-all` or `transition-transform`

---

## Quick Reference

```jsx
// Colors
const sketch = {
  background: '#fdfbf7',
  foreground: '#2d2d2d',
  muted: '#e5e0d8',
  accent: '#ff4d4d',
  accentSecondary: '#2d5da1',
  card: '#ffffff',
  postit: '#fff9c4',
};

// Wobbly Radius
const radius = {
  standard: '255px 15px 225px 15px / 15px 225px 15px 255px',
  medium: '15px 225px 15px 255px / 255px 15px 225px 15px',
  blob: '60% 40% 70% 30% / 30% 60% 40% 70%',
  subtle: '20px 25px 20px 25px / 25px 20px 25px 20px',
};

// Shadows
const shadow = {
  standard: '4px 4px 0px 0px #2d2d2d',
  emphasized: '8px 8px 0px 0px #2d2d2d',
  subtle: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
  hover: '2px 2px 0px 0px #2d2d2d',
};
```

---

## Anti-Patterns (What NOT to Do)

| ❌ Don't | ✅ Do Instead |
|----------|---------------|
| Use `rounded-lg` alone | Use wobbly border-radius inline styles |
| Use `shadow-lg` (blur shadows) | Use hard offset shadows |
| Use pure black `#000000` | Use soft pencil black `#2d2d2d` |
| Use corporate fonts | Use handwritten fonts (Kalam, Patrick Hand) |
| Align everything perfectly | Add small rotations for organic feel |

---

## Emotional Intent

This style should feel:
- **Approachable** - Lowers barriers to interaction
- **Creative** - Invites collaboration and ideation
- **Human-centered** - Warm and personal, not corporate
- **Fun** - Playful without being childish
- **Work-in-progress** - Users feel like collaborators

**Perfect for:** Creative tools, brainstorming platforms, educational content, portfolio sites, indie products, or any application that wants to emphasize human creativity over corporate polish.

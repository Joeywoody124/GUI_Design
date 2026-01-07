# Playful Geometric Design System

## Philosophy
**"Stable Grid, Wild Decoration"**

Playful Geometric is the antidote to sterile, corporate minimalism. It creates emotional connection through optimism, clarity, and tactile fun. Content lives in clean, readable areas, but the world around it is alive with movement and shape.

This style references the **Memphis Group** (1980s Italian design) but cleans it up for modern digital screens—removing the chaos while keeping the energy.

---

## Vibe Keywords
`Friendly` · `Tactile` · `Pop` · `Energetic` · `Optimistic` · `Playful` · `Bouncy` · `Fun`

---

## Color Palette (Light Mode)

A punchy, high-saturation palette anchored by strong neutrals.

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `background` | `#FFFDF5` | Warm Cream | Page background (paper feel) |
| `foreground` | `#1E293B` | Slate 800 | Text, borders (softer than black) |
| `muted` | `#F1F5F9` | Slate 100 | Secondary backgrounds |
| `mutedForeground` | `#64748B` | Slate 500 | Muted text |
| `accent` | `#8B5CF6` | Vivid Violet | Primary actions, brand |
| `accentForeground` | `#FFFFFF` | White | Text on accent |
| `secondary` | `#F472B6` | Hot Pink | Playful pop, decoration |
| `tertiary` | `#FBBF24` | Amber Yellow | Optimism, hover states |
| `quaternary` | `#34D399` | Emerald Mint | Freshness, success |
| `border` | `#E2E8F0` | Slate 200 | Default borders |
| `card` | `#FFFFFF` | White | Card backgrounds |
| `ring` | `#8B5CF6` | Violet | Focus rings |

### Color Usage Rules
- Use `accent` (Violet) for primary actions
- Use `secondary`, `tertiary`, `quaternary` rotationally for decorative shapes
- Create a "confetti" effect by mixing colors on decorative elements
- Never use pure black (#000000) - use Slate 800 instead

---

## Typography

### Font Stack
```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
```

| Role | Font | Weight | Character |
|------|------|--------|-----------|
| Headings | `Outfit` | 700-800 | Geometric sans with rounded corners, friendly |
| Body | `Plus Jakarta Sans` | 400-500 | Highly legible, modern, humanist |

### Scale (Major Third - 1.25 ratio)
- **Hero**: `text-5xl md:text-6xl` (48px → 60px)
- **Section Headings**: `text-3xl md:text-4xl` (30px → 36px)
- **Card Headings**: `text-xl md:text-2xl` (20px → 24px)
- **Body**: `text-base md:text-lg` (16px → 18px)
- **Small**: `text-sm` (14px)
- **Labels**: `text-xs uppercase tracking-wide font-bold`

---

## Visual Signatures

### 1. Primitive Shapes
Circles, triangles, squares, pill shapes, and squiggles used as:
- Background decoration
- Image masks
- Icon containers
- Section dividers

### 2. Hard Shadows (No Blur)
Elements have solid, offset drop shadows giving a sticker/cut-paper feel.

```css
/* Standard "Pop" Shadow */
box-shadow: 4px 4px 0px 0px #1E293B;

/* Hover - Lift effect */
box-shadow: 6px 6px 0px 0px #1E293B;

/* Active - Press effect */
box-shadow: 2px 2px 0px 0px #1E293B;

/* Soft variant (cards) */
box-shadow: 8px 8px 0px 0px #E2E8F0;

/* Colored shadow (featured) */
box-shadow: 8px 8px 0px 0px #F472B6;
```

### 3. Pattern Fills
- **Dot Grid**: Small dots in strict formation
- **Diagonal Stripes**: For emphasis areas
- **Polka Dots**: For playful backgrounds

### 4. Varied Radii (Blob Shapes)
Mixing fully rounded corners with sharp ones:

```css
/* Speech Bubble */
border-radius: 24px 24px 24px 0;

/* Arch Top */
border-radius: 9999px 9999px 0 0;

/* Leaf Shape */
border-radius: 0 24px 0 24px;

/* Asymmetric Blob */
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
```

---

## Radius & Border Tokens

```javascript
const radius = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  full: '9999px',
};

const border = {
  width: '2px',      // Chunky borders by default
  widthThick: '3px', // Extra emphasis
  color: '#1E293B',  // Dark border on colored elements
};
```

---

## Component Patterns

### Buttons

**Primary Button ("The Candy Button")**
```jsx
<button
  className="
    bg-accent text-white
    px-6 py-3
    font-heading font-bold
    rounded-full
    border-2 border-foreground
    shadow-[4px_4px_0px_0px_#1E293B]
    hover:translate-x-[-2px] hover:translate-y-[-2px]
    hover:shadow-[6px_6px_0px_0px_#1E293B]
    active:translate-x-[2px] active:translate-y-[2px]
    active:shadow-[2px_2px_0px_0px_#1E293B]
    transition-all duration-300
  "
>
  Click Me!
</button>
```

**Secondary Button (Ghost with Fill on Hover)**
```jsx
<button
  className="
    bg-transparent text-foreground
    px-6 py-3
    font-heading font-bold
    rounded-full
    border-2 border-foreground
    hover:bg-tertiary hover:text-foreground
    transition-all duration-300
  "
>
  Learn More
</button>
```

**Icon Button (Shape-Enclosed)**
```jsx
<button className="
  w-12 h-12
  bg-secondary text-white
  rounded-full
  border-2 border-foreground
  shadow-[3px_3px_0px_0px_#1E293B]
  flex items-center justify-center
">
  <ArrowRight strokeWidth={2.5} />
</button>
```

### Cards ("The Sticker Card")

```jsx
<div className="
  bg-card
  border-2 border-foreground
  rounded-xl
  p-6
  shadow-[8px_8px_0px_0px_#E2E8F0]
  hover:rotate-[-1deg] hover:scale-[1.02]
  transition-all duration-300
">
  {/* Floating Icon (half in/half out) */}
  <div className="
    absolute -top-6 left-6
    w-12 h-12
    bg-accent text-white
    rounded-full
    border-2 border-foreground
    flex items-center justify-center
  ">
    <Star strokeWidth={2.5} />
  </div>
  
  <h3 className="font-heading font-bold text-xl mt-4">Card Title</h3>
  <p className="text-mutedForeground mt-2">Card description...</p>
</div>
```

**Featured Card (Pink Shadow)**
```jsx
<div className="
  ...
  shadow-[8px_8px_0px_0px_#F472B6]
">
```

### Inputs

```jsx
<div>
  <label className="
    block text-xs font-bold uppercase tracking-wide mb-2
  ">
    Your Email
  </label>
  <input
    type="email"
    className="
      w-full
      bg-white
      border-2 border-slate-300
      rounded-lg
      px-4 py-3
      font-body text-foreground
      shadow-[4px_4px_0px_0px_transparent]
      focus:border-accent
      focus:shadow-[4px_4px_0px_0px_#8B5CF6]
      outline-none
      transition-all duration-200
    "
    placeholder="hello@example.com"
  />
</div>
```

### Badges & Tags

```jsx
{/* Pill Badge */}
<span className="
  inline-flex items-center
  px-3 py-1
  bg-tertiary text-foreground
  rounded-full
  border-2 border-foreground
  text-sm font-bold
">
  New!
</span>

{/* Rotated Star Badge */}
<div className="
  absolute -top-4 -right-4
  w-20 h-20
  bg-tertiary text-foreground
  rounded-full
  border-2 border-foreground
  flex items-center justify-center
  rotate-12
  text-xs font-bold uppercase
">
  Popular
</div>
```

---

## Decorative Elements

### Floating Shapes (Confetti)
```jsx
{/* Circle */}
<div className="
  absolute top-10 right-20
  w-16 h-16
  bg-secondary
  rounded-full
  opacity-60
" />

{/* Triangle (CSS) */}
<div className="
  absolute bottom-20 left-10
  w-0 h-0
  border-l-[20px] border-l-transparent
  border-r-[20px] border-r-transparent
  border-b-[35px] border-b-tertiary
  rotate-12
" />

{/* Square */}
<div className="
  absolute top-1/2 right-10
  w-8 h-8
  bg-quaternary
  rotate-45
  border-2 border-foreground
" />
```

### Squiggly Line (SVG)
```jsx
<svg className="w-full h-4" viewBox="0 0 400 16" fill="none">
  <path
    d="M0 8 Q 25 0, 50 8 T 100 8 T 150 8 T 200 8 T 250 8 T 300 8 T 350 8 T 400 8"
    stroke="#8B5CF6"
    strokeWidth="3"
    fill="none"
  />
</svg>
```

### Dot Grid Pattern (CSS)
```css
background-image: radial-gradient(#E2E8F0 2px, transparent 2px);
background-size: 20px 20px;
```

### Dashed Connector Lines
```jsx
<svg className="absolute inset-0 w-full h-full pointer-events-none">
  <path
    d="M100 50 L 200 150 L 300 50"
    stroke="#E2E8F0"
    strokeWidth="2"
    strokeDasharray="8 8"
    fill="none"
  />
</svg>
```

---

## Animation & Motion

### Easing (Bouncy/Overshoot)
```css
transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Hover Effects
```jsx
// Lift effect
hover:translate-x-[-2px] hover:translate-y-[-2px]

// Wiggle effect
hover:rotate-[-1deg] hover:scale-[1.02]

// Color fill
hover:bg-tertiary
```

### Keyframe Animations

```css
/* Pop In */
@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}

/* Wiggle */
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  75% { transform: rotate(-3deg); }
}

/* Bounce */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Float */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}
```

### Usage
```jsx
// Apply animations
className="animate-[popIn_0.4s_ease-out]"
className="hover:animate-[wiggle_0.5s_ease-in-out]"
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Layout Guidelines

### Container
```jsx
<div className="max-w-6xl mx-auto px-6">
  {/* Generous width */}
</div>
```

### Section Spacing
```jsx
<section className="py-24">
  {/* 96px vertical padding - spacious but filled with patterns */}
</section>
```

### Grid Patterns
```jsx
{/* 2-column hero */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

{/* 3-column features */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{/* 4-column stats */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
```

---

## Icons (Lucide React)

### Settings
```jsx
import { Star, ArrowRight, Check } from 'lucide-react';

// Standard usage
<Star strokeWidth={2.5} className="w-6 h-6" />

// Always enclosed in shapes
<div className="
  w-10 h-10
  bg-quaternary
  rounded-full
  border-2 border-foreground
  flex items-center justify-center
">
  <Check strokeWidth={2.5} className="w-5 h-5 text-foreground" />
</div>
```

### Icon Rules
- **Stroke Width**: 2.5px (bold/chunky)
- **Style**: Round line caps, round line joins
- **Enclosure**: Always inside a colored shape (never floating alone)
- **Color**: White on colored background, or foreground color

---

## Responsive Strategy

### Mobile Adjustments
- Stack all grids to single column
- Reduce shadows from 4-8px to 2-4px
- Hide complex floating decorative shapes
- Keep buttons large and tappable (min 48px height)
- Convert horizontal squiggles to vertical dividers

### Breakpoint Patterns
```jsx
// Typography
text-3xl md:text-4xl lg:text-5xl

// Spacing
py-16 md:py-24

// Grid
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Decorative (hide on mobile)
hidden md:block

// Shadows (smaller on mobile)
shadow-[2px_2px_0px_0px_#1E293B] md:shadow-[4px_4px_0px_0px_#1E293B]
```

---

## Accessibility

### Color Contrast
- Slate 800 on Cream/White: **AAA compliant**
- White on Violet: **AA compliant**
- Always use text labels alongside color indicators

### Focus States
```jsx
focus:outline-none
focus:ring-2 focus:ring-accent focus:ring-offset-2
// OR
focus:border-accent
focus:shadow-[4px_4px_0px_0px_#8B5CF6]
```

### Motion Respect
```jsx
// Tailwind class
motion-reduce:transition-none
motion-reduce:animate-none
```

---

## Anti-Patterns (What NOT to Do)

| ❌ Don't | ✅ Do Instead |
|----------|---------------|
| Use pure black (#000000) | Use Slate 800 (#1E293B) |
| Use blur shadows | Use hard offset shadows |
| Float icons alone | Enclose icons in colored shapes |
| Use monotone decorations | Mix confetti colors (violet, pink, yellow, mint) |
| Use standard easing | Use bouncy cubic-bezier |
| Make everything the same radius | Mix pill, rounded, and asymmetric shapes |
| Use thin 1px borders | Use chunky 2px+ borders |
| Use corporate fonts | Use friendly Outfit + Plus Jakarta Sans |

---

## Quick Reference

```jsx
// Colors
const playful = {
  background: '#FFFDF5',
  foreground: '#1E293B',
  muted: '#F1F5F9',
  mutedForeground: '#64748B',
  accent: '#8B5CF6',
  secondary: '#F472B6',
  tertiary: '#FBBF24',
  quaternary: '#34D399',
  border: '#E2E8F0',
  card: '#FFFFFF',
};

// Shadows
const shadow = {
  pop: '4px 4px 0px 0px #1E293B',
  popHover: '6px 6px 0px 0px #1E293B',
  popActive: '2px 2px 0px 0px #1E293B',
  soft: '8px 8px 0px 0px #E2E8F0',
  pink: '8px 8px 0px 0px #F472B6',
  violet: '4px 4px 0px 0px #8B5CF6',
};

// Easing
const easing = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
```

---

## Emotional Intent

This style should feel:
- **Optimistic** - Bright colors and bouncy motion lift spirits
- **Approachable** - Friendly shapes invite interaction
- **Tactile** - Hard shadows create depth like stickers or paper cutouts
- **Energetic** - Decorative shapes and motion keep things lively
- **Playful** - Imperfect rotations and wiggle effects add personality

**Perfect for:** Consumer apps, creative tools, educational platforms, kids' products, marketing landing pages, portfolio sites, or any brand that wants to feel fun and human.

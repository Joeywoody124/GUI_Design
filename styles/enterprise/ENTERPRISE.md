# Enterprise Design System

## Overview

| Property | Value |
|----------|-------|
| **Name** | Enterprise (Corporate Trust) |
| **Mode** | Light |
| **Vibe** | Professional, vibrant, polished, trustworthy |
| **Best For** | SaaS dashboards, business apps, enterprise tools, professional calculators |
| **Primary Font** | Plus Jakarta Sans |
| **Signature** | Indigo-violet gradients, colored shadows, isometric depth, elevated cards |

---

## Philosophy

This style embodies the **modern enterprise SaaS aesthetic**: professional yet approachable, sophisticated yet friendly. It draws inspiration from tech unicorns and high-growth startups that have successfully humanized the corporate experience. The design rejects the cold, sterile formality of traditional corporate websites in favor of a warm, confident, and inviting presence.

**Core Principles:**
- **Trustworthy Yet Vibrant**: Establishes credibility through clean structure and professional typography while maintaining visual energy through vibrant gradients and colorful accents
- **Dimensional Depth**: Uses isometric perspectives, soft colored shadows, and subtle 3D transforms to create visual interest
- **Refined Elegance**: Every element is polished with micro-interactions, smooth transitions, and sophisticated hover states
- **Purposeful Gradients**: Indigo-to-violet gradients serve as the visual signature
- **Professional Polish**: Generous white space, consistent spacing rhythms, and crisp typography

**Keywords**: Trustworthy, Vibrant, Polished, Dimensional, Modern, Approachable, Enterprise-Ready, Elegant

---

## Visual DNA (5 Signature Elements)

1. **Colored Shadows**: Soft shadows with blue/purple tints instead of neutral grays
2. **Isometric Elements**: Subtle 3D transforms (rotate-x, rotate-y) on decorative cards
3. **Gradient Text**: Strategic use of gradient text for emphasis in headlines
4. **Soft Blobs**: Large, blurred gradient orbs in the background for atmospheric depth
5. **Elevated Cards**: White cards that lift on hover with enhanced shadows

---

## Color Palette

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `background` | `#F8FAFC` | Slate 50 | Page background - subtle cool grey/white |
| `foreground` | `#0F172A` | Slate 900 | Primary text - high contrast |
| `surface` | `#FFFFFF` | White | Cards and raised elements |
| `primary` | `#4F46E5` | Indigo 600 | Core brand color - buttons, links |
| `secondary` | `#7C3AED` | Violet 600 | Gradients and accents |
| `muted` | `#64748B` | Slate 500 | Supporting text |
| `accent` | `#10B981` | Emerald 500 | Success indicators, positive states |
| `border` | `#E2E8F0` | Slate 200 | Subtle separation |
| `borderLight` | `#F1F5F9` | Slate 100 | Card borders |

### Gradient Combinations
- **Primary Gradient**: `from-indigo-600 to-violet-600` (buttons, active states)
- **Text Gradient**: `bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent`
- **Background Subtle**: `from-indigo-100 to-violet-100` (container backgrounds)
- **Dark CTA**: `from-indigo-900 to-indigo-950` (dramatic dark sections)

---

## Typography

### Font Family
**Plus Jakarta Sans** - A geometric sans-serif with friendly rounded terminals that perfectly balances professional authority with modern approachability.

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
```

### Type Scale (Major Third - 1.250)

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero H1 (Desktop) | `text-6xl` (60px) | ExtraBold (800) | 1.1 | -0.02em |
| Hero H1 (Mobile) | `text-4xl` (36px) | ExtraBold (800) | 1.1 | -0.02em |
| Section H2 | `text-4xl` (36px) | Bold (700) | 1.2 | -0.01em |
| Card Title H3 | `text-xl` (20px) | SemiBold (600) | 1.3 | 0 |
| Body | `text-base` (16px) | Regular (400) | 1.6-1.7 | 0 |
| Nav/Labels | `text-sm` (14px) | Medium (500) | 1.5 | 0 |
| Small | `text-xs` (12px) | Medium (500) | 1.4 | 0.01em |

### Font Weights
- **800 (ExtraBold)**: Hero headlines only
- **700 (Bold)**: Section headings
- **600 (SemiBold)**: Card titles, emphasis
- **500 (Medium)**: Navigation, labels, buttons
- **400 (Regular)**: Body paragraphs

---

## Radius & Borders

| Element | Radius | Notes |
|---------|--------|-------|
| Cards | `rounded-xl` (12px) | Primary container radius |
| Inputs | `rounded-lg` (8px) | Form elements |
| Buttons (Primary) | `rounded-full` | Pill buttons for CTAs |
| Buttons (Secondary) | `rounded-lg` (8px) | More subtle actions |
| Icon Containers | `rounded-xl` (12px) | Feature icons |
| Avatars | `rounded-full` | Circular |

### Borders
- Default: `border border-slate-200` (1px)
- Light: `border border-slate-100` (cards)
- Focus: `ring-2 ring-indigo-500 ring-offset-2`

---

## Shadow System

**Key Innovation**: Colored shadows with blue/purple tints instead of neutral grays.

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-card` | `0 4px 20px -2px rgba(79, 70, 229, 0.1)` | Default card elevation |
| `shadow-card-hover` | `0 10px 25px -5px rgba(79, 70, 229, 0.15), 0 8px 10px -6px rgba(79, 70, 229, 0.1)` | Hover state |
| `shadow-button` | `0 4px 14px 0 rgba(79, 70, 229, 0.3)` | Primary button emphasis |
| `shadow-glow` | `0 0 20px rgba(79, 70, 229, 0.5)` | Badge glow effects |

### Tailwind Custom Shadows
```js
boxShadow: {
  'enterprise': '0 4px 20px -2px rgba(79, 70, 229, 0.1)',
  'enterprise-md': '0 10px 25px -5px rgba(79, 70, 229, 0.15), 0 8px 10px -6px rgba(79, 70, 229, 0.1)',
  'enterprise-button': '0 4px 14px 0 rgba(79, 70, 229, 0.3)',
  'enterprise-glow': '0 0 20px rgba(79, 70, 229, 0.5)',
}
```

---

## Decorative Elements

### Background Blobs
Large gradient orbs create atmospheric depth:

```jsx
{/* Top-right blob */}
<div className="absolute top-0 right-0 w-[600px] h-[600px] 
  bg-gradient-to-br from-indigo-200 to-violet-200 
  rounded-full blur-3xl opacity-30 -z-10" />

{/* Bottom-left blob */}
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] 
  bg-gradient-to-tr from-violet-200 to-indigo-200 
  rounded-full blur-3xl opacity-20 -z-10" />
```

### Isometric Cards
Subtle 3D transforms for visual interest:

```jsx
<div className="perspective-[2000px]">
  <div className="transform rotate-x-[5deg] rotate-y-[-12deg] 
    hover:rotate-x-[2deg] hover:rotate-y-[-8deg]
    transition-transform duration-300">
    {/* Card content */}
  </div>
</div>
```

### Gradient Text
Split headlines with gradient emphasis:

```jsx
<h1 className="text-5xl font-extrabold">
  <span className="text-slate-900">Build better </span>
  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 
    bg-clip-text text-transparent">
    products faster
  </span>
</h1>
```

---

## Component Patterns

### Primary Button
```jsx
<button className="
  bg-gradient-to-r from-indigo-600 to-violet-600
  text-white font-medium
  px-6 py-3 rounded-full
  shadow-[0_4px_14px_0_rgba(79,70,229,0.3)]
  hover:-translate-y-0.5 hover:shadow-[0_6px_20px_0_rgba(79,70,229,0.4)]
  transition-all duration-200
">
  Get Started
</button>
```

### Secondary Button
```jsx
<button className="
  bg-white text-slate-700 font-medium
  px-6 py-3 rounded-lg
  border border-slate-200
  hover:bg-slate-50 hover:border-slate-300
  transition-all duration-200
">
  Learn More
</button>
```

### Card
```jsx
<div className="
  bg-white rounded-xl
  border border-slate-100
  shadow-[0_4px_20px_-2px_rgba(79,70,229,0.1)]
  hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(79,70,229,0.15)]
  transition-all duration-200
  p-6
">
  {/* Content */}
</div>
```

### Input Field
```jsx
<div>
  <label className="text-sm font-semibold text-slate-700 mb-1.5 block">
    Email Address
  </label>
  <input 
    type="email"
    className="
      w-full px-4 py-2.5
      bg-white border border-slate-200 rounded-lg
      text-slate-900 placeholder:text-slate-400
      focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:border-indigo-500
      transition-all duration-200
    "
    placeholder="you@example.com"
  />
</div>
```

### Feature Icon Badge
```jsx
<div className="
  h-12 w-12 rounded-xl
  bg-indigo-100 text-indigo-600
  flex items-center justify-center
">
  <IconName className="h-6 w-6" />
</div>
```

---

## Animation & Motion

### Philosophy
"Refined Motion": Smooth, professional, never jarring.

### Standard Transitions
```css
/* Base interactive */
transition-all duration-200

/* Image/complex transforms */
transition-all duration-500

/* Default easing */
ease-out
```

### Hover Effects

| Element | Effect |
|---------|--------|
| Cards | `-translate-y-1` + enhanced shadow |
| Buttons | `-translate-y-0.5` + brighter shadow |
| Arrow Icons | `translate-x-1` (directional cue) |
| Images | `scale-105` with overlay fade |
| Accordions | Chevron `rotate-180` |

### Floating Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
```

---

## Layout Guidelines

### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Section Spacing
```jsx
<section className="py-16 sm:py-20 lg:py-24">
```

### Grid Patterns
- **Hero**: `lg:grid-cols-2` (text + visual)
- **Features**: Alternating `lg:flex-row` / `lg:flex-row-reverse`
- **Pricing**: `md:grid-cols-3` with center emphasis (`md:scale-105`)
- **Stats**: `md:grid-cols-4` for metrics
- **Footer**: `md:grid-cols-4` → `sm:grid-cols-2` → `grid-cols-1`

### Text Width
```jsx
<p className="max-w-xl">  {/* 60-75 chars per line */}
<p className="max-w-2xl"> {/* Slightly wider paragraphs */}
```

---

## Responsive Strategy

### Breakpoints
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px

### Mobile-First Approach
```jsx
{/* Stack on mobile, side-by-side on desktop */}
<div className="flex flex-col lg:flex-row gap-8">

{/* Padding scales up */}
<div className="px-4 sm:px-6 lg:px-8">

{/* Typography scales */}
<h1 className="text-4xl lg:text-6xl">
```

### Touch Targets
Minimum 44x44px for all interactive elements.

---

## Accessibility

### Color Contrast
- Slate 900 on Slate 50: AAA compliant
- White on Indigo 600+: AAA compliant
- All text meets WCAG AA minimum (4.5:1)

### Focus States
```jsx
className="focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Native `<button>` for actions
- `<nav>`, `<main>`, `<footer>` landmarks
- `<details>/<summary>` for accordions

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Anti-Patterns (What NOT to Do)

| ❌ Don't | ✅ Do Instead |
|----------|---------------|
| Use neutral gray shadows | Use colored (indigo-tinted) shadows |
| Flat, lifeless cards | Add hover lift + shadow enhancement |
| Generic sans-serif fonts | Use Plus Jakarta Sans specifically |
| Harsh color transitions | Smooth gradients (indigo → violet) |
| Overcrowded layouts | Generous whitespace, breathing room |
| Static decorative elements | Subtle animations (float, pulse) |
| All-gradient text | Strategic gradient on key phrases only |
| Sharp, boxy corners | Rounded (xl for cards, lg for inputs) |

---

## Quick Reference Classes

### Colors
```css
/* Backgrounds */
bg-slate-50        /* Page */
bg-white           /* Cards */
bg-indigo-600      /* Primary */
bg-violet-600      /* Secondary */
bg-indigo-100      /* Icon badges */

/* Text */
text-slate-900     /* Main */
text-slate-500     /* Muted */
text-indigo-600    /* Links */
text-white         /* On dark */

/* Borders */
border-slate-200   /* Default */
border-slate-100   /* Light */
border-indigo-500  /* Focus */
```

### Gradients
```css
bg-gradient-to-r from-indigo-600 to-violet-600   /* Primary */
bg-gradient-to-br from-indigo-200 to-violet-200  /* Blob */
bg-gradient-to-b from-indigo-900 to-indigo-950   /* Dark CTA */
```

### Shadows
```css
shadow-[0_4px_20px_-2px_rgba(79,70,229,0.1)]     /* Card */
shadow-[0_4px_14px_0_rgba(79,70,229,0.3)]        /* Button */
shadow-[0_0_20px_rgba(79,70,229,0.5)]            /* Glow */
```

---

## Complete Calculator Example

```jsx
export default function EnterpriseCalculator() {
  const [values, setValues] = useState({ x0: '', y0: '', x1: '', y1: '', x: '' });
  const [result, setResult] = useState(null);

  const calculate = () => {
    const { x0, y0, x1, y1, x } = values;
    const nums = [x0, y0, x1, y1, x].map(Number);
    if (nums.some(isNaN)) return;
    if (nums[2] === nums[0]) { setResult('Division by zero'); return; }
    const y = nums[1] + (nums[3] - nums[1]) * (nums[4] - nums[0]) / (nums[2] - nums[0]);
    setResult(y.toFixed(4));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-['Plus_Jakarta_Sans']">
      {/* Background blobs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200 to-violet-200 rounded-full blur-3xl opacity-30 -z-10" />
      
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold mb-2">
          <span className="text-slate-900">Linear </span>
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Interpolation
          </span>
        </h1>
        
        <div className="bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-2px_rgba(79,70,229,0.1)] p-6 mt-6">
          {/* Input fields */}
          {Object.entries(values).map(([key, val]) => (
            <div key={key} className="mb-4">
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">
                {key}
              </label>
              <input
                value={val}
                onChange={(e) => setValues({...values, [key]: e.target.value})}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg
                  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:border-indigo-500
                  transition-all duration-200"
              />
            </div>
          ))}
          
          <button
            onClick={calculate}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white 
              font-medium py-3 rounded-full shadow-[0_4px_14px_0_rgba(79,70,229,0.3)]
              hover:-translate-y-0.5 transition-all duration-200"
          >
            Calculate
          </button>
          
          {result && (
            <div className="mt-4 p-4 bg-indigo-50 rounded-lg text-center">
              <span className="text-sm text-slate-500">Result (y)</span>
              <div className="text-2xl font-bold text-indigo-600">{result}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

---

*Enterprise Design System v1.0 | Created 2025-12-03 | GUI Design Center Library*

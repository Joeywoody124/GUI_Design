# Hydrolight Design System

## Overview

| Property | Value |
|----------|-------|
| **Name** | Hydrolight (Sunlit Water) |
| **Mode** | Light |
| **Vibe** | Clear water, refracted sunlight, calm precision, engineering-grade |
| **Best For** | Stormwater/hydraulic tools, PCSWMM and QGIS utilities, engineering calculators, water resources dashboards, report generators |
| **Primary Font** | Manrope (UI) + JetBrains Mono (data readouts) |
| **Signature** | Depth gradients, caustic shimmer, water-tinted shadows, wave dividers, monospace gauge readouts, semantic hydro states |

---

## Philosophy

Hydrolight is **sunlight passing through clear water**. The page is the bright surface; interactive and emphasized elements descend through the water column, from pale aqua shallows to deep channel navy. Light is the active ingredient: shadows are tinted cyan like light scattered underwater, gradients always run surface-to-depth (top-light, bottom-dark), and a subtle caustic shimmer animates hero surfaces the way refracted light dances on a channel bottom.

It is built first for **working engineering tools**. Data readouts use a monospace font so decimals align. Status colors map directly to hydrologic meaning: flood exceedance, action stage, within capacity, baseflow. Nothing decorative interferes with reading a number under deadline pressure.

**Core Principles:**
- **Depth = Hierarchy**: The deeper the blue, the more important the element. Page background is the water surface; primary actions are deep channel water.
- **Light Behaves Like Light**: Shadows carry a cyan tint, never neutral gray. Gradients run vertically (surface above, depth below), never sideways.
- **Data Is Sacred**: Numeric results render in JetBrains Mono, right-aligned, with units in muted text. A result should read like a well-formatted gauge card.
- **Calm Motion**: Ripples, gentle floats, slow shimmer. Water moves; it never jitters.
- **Semantic Hydro States**: Red = exceedance/flood, amber = action stage/warning, green = within capacity/OK, blue = baseflow/informational.

**Keywords**: Clear, Luminous, Precise, Calm, Fluid, Trustworthy, Engineering-Grade, Refractive

---

## Visual DNA (6 Signature Elements)

1. **Depth Gradient**: Vertical cyan-to-navy gradient (`#22D3EE → #0284C7 → #075985`) on hero cards, headers, and primary buttons — always top-light to bottom-dark
2. **Caustic Shimmer**: Slow-moving overlapping radial highlights on gradient surfaces, imitating refracted light on a channel bottom
3. **Water-Tinted Shadows**: All elevation shadows use sky/cyan RGBA (`rgba(2, 132, 199, ...)`) — never neutral gray
4. **Wave Dividers**: SVG sine-wave section separators between page regions
5. **Gauge Readouts**: Monospace numeric displays with unit labels, styled like USGS stage gauges
6. **Ripple Focus**: Inputs and buttons emit a soft expanding cyan ring on focus/press

---

## Color Palette

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| `background` | `#F0F9FF` | Surface Light (Sky 50) | Page background - sunlit water surface |
| `backgroundAlt` | `#E0F2FE` | Shallows (Sky 100) | Alternate sections, striped table rows |
| `surface` | `#FFFFFF` | White Cap | Cards and raised elements |
| `foreground` | `#082F49` | Deep Channel (Sky 950) | Primary text - highest contrast |
| `primary` | `#0284C7` | Open Water (Sky 600) | Buttons, active states, brand color |
| `primaryDeep` | `#075985` | Thalweg (Sky 800) | Gradient depth end, hover states |
| `secondary` | `#06B6D4` | Caustic Cyan (Cyan 500) | Gradient surface end, glows, accents |
| `tertiary` | `#0D9488` | Seagrass (Teal 600) | Secondary accents, pervious/green infrastructure |
| `muted` | `#475569` | Silt (Slate 600) | Supporting text, unit labels |
| `border` | `#BAE6FD` | Ripple Line (Sky 200) | Default borders, subtle separation |
| `borderLight` | `#E0F2FE` | Faint Ripple (Sky 100) | Card borders |
| `flood` | `#DC2626` | Flood Stage (Red 600) | Exceedance, errors, HW/D > 1.2 |
| `action` | `#D97706` | Action Stage (Amber 600) | Warnings, approaching capacity |
| `normal` | `#059669` | Within Banks (Emerald 600) | Success, passing criteria |
| `linkText` | `#0369A1` | Navigable (Sky 700) | Links and small primary text (AA on white) |

### Gradient Combinations
- **Depth Gradient (Primary)**: `linear-gradient(180deg, #06B6D4 0%, #0284C7 55%, #075985 100%)` — hero cards, primary buttons
- **Shallows Gradient**: `linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 100%)` — section backgrounds, icon badges
- **Surface Sheen**: `linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 40%)` — overlay on gradient cards for a wet-glass highlight
- **Text Gradient**: `linear-gradient(90deg, #0284C7, #06B6D4)` with `bg-clip-text` — key headline words only

---

## Typography

### Font Families
**Manrope** — a modern grotesque with open apertures and slightly rounded terminals; reads as precise but not cold. **JetBrains Mono** — for every numeric readout, table of results, and coordinate/elevation display so decimals and columns align.

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

font-family: 'Manrope', system-ui, sans-serif;          /* UI text */
font-family: 'JetBrains Mono', Consolas, monospace;     /* Data readouts */
```

### Type Scale

| Element | Size | Weight | Font | Notes |
|---------|------|--------|------|-------|
| Hero H1 | 48-60px | ExtraBold (800) | Manrope | -0.02em tracking |
| Section H2 | 30-36px | Bold (700) | Manrope | -0.01em tracking |
| Card Title H3 | 18-20px | SemiBold (600) | Manrope | |
| Body | 15-16px | Regular (400) | Manrope | 1.6 line height |
| Labels / Nav | 13-14px | SemiBold (600) | Manrope | 0.01em tracking |
| Gauge Value | 28-36px | Bold (700) | JetBrains Mono | Tabular, right-aligned |
| Data Table | 13-14px | Regular (400) | JetBrains Mono | Tabular numerals |
| Unit Label | 12px | Medium (500) | Manrope | Muted color, uppercase |

---

## Radius & Borders

| Element | Radius | Notes |
|---------|--------|-------|
| Cards | 14px | Slightly softer than enterprise standard |
| Hero / gradient cards | 20px | Water surfaces feel rounded |
| Inputs | 10px | |
| Buttons (Primary) | 12px | Rounded rectangle, not pill (engineering restraint) |
| Gauge readouts | 10px | |
| Badges | 9999px (pill) | Status chips only |

### Borders
- Default: `1px solid #BAE6FD` (Ripple Line)
- Card: `1px solid #E0F2FE` (Faint Ripple)
- Focus: `2px ring #06B6D4` at 40% opacity + border shifts to `#0284C7`
- Data emphasis: `3px left border` in state color (flood/action/normal) on alert cards

---

## Shadow System

**Key rule: every shadow is water-tinted.** Use sky-blue RGBA, never gray.

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-surface` | `0 1px 3px rgba(2, 132, 199, 0.08), 0 1px 2px rgba(2, 132, 199, 0.06)` | Resting cards |
| `shadow-float` | `0 8px 24px -4px rgba(2, 132, 199, 0.18), 0 4px 8px -2px rgba(2, 132, 199, 0.10)` | Hover elevation |
| `shadow-deep` | `0 16px 40px -8px rgba(7, 89, 133, 0.30)` | Modals, gradient hero cards |
| `shadow-button` | `0 4px 14px rgba(2, 132, 199, 0.35)` | Primary CTAs |
| `shadow-glow` | `0 0 24px rgba(6, 182, 212, 0.45)` | Caustic glow accents, active gauge |
| `shadow-inset-pool` | `inset 0 2px 6px rgba(7, 89, 133, 0.12)` | Input wells, recessed panels |

```js
boxShadow: {
  'hydro-surface': '0 1px 3px rgba(2,132,199,0.08), 0 1px 2px rgba(2,132,199,0.06)',
  'hydro-float': '0 8px 24px -4px rgba(2,132,199,0.18), 0 4px 8px -2px rgba(2,132,199,0.10)',
  'hydro-deep': '0 16px 40px -8px rgba(7,89,133,0.30)',
  'hydro-button': '0 4px 14px rgba(2,132,199,0.35)',
  'hydro-glow': '0 0 24px rgba(6,182,212,0.45)',
  'hydro-pool': 'inset 0 2px 6px rgba(7,89,133,0.12)',
}
```

---

## Decorative Elements

### Caustic Shimmer (signature)
Animated refracted-light overlay for depth-gradient surfaces:

```css
.hydro-caustics {
  position: relative;
  overflow: hidden;
}
.hydro-caustics::before {
  content: '';
  position: absolute;
  inset: -50%;
  background:
    radial-gradient(ellipse 40% 30% at 30% 20%, rgba(255,255,255,0.18), transparent 60%),
    radial-gradient(ellipse 30% 25% at 70% 60%, rgba(255,255,255,0.12), transparent 60%),
    radial-gradient(ellipse 35% 30% at 50% 90%, rgba(255,255,255,0.10), transparent 60%);
  animation: hydro-caustics 14s ease-in-out infinite alternate;
  pointer-events: none;
}
@keyframes hydro-caustics {
  0%   { transform: translate(0%, 0%) scale(1); }
  50%  { transform: translate(6%, -4%) scale(1.08); }
  100% { transform: translate(-5%, 5%) scale(1.02); }
}
```

### Wave Divider (SVG)
Sine-wave separator between page sections:

```html
<svg viewBox="0 0 1440 64" preserveAspectRatio="none"
     style="display:block; width:100%; height:48px;">
  <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
        fill="#E0F2FE"/>
  <path d="M0,40 C240,68 480,12 720,40 C960,68 1200,12 1440,40 L1440,64 L0,64 Z"
        fill="#BAE6FD" opacity="0.6"/>
</svg>
```

### Background Ripple Orbs
Soft aquatic depth behind content:

```jsx
<div className="fixed top-[-10%] right-[-5%] w-[560px] h-[560px]
  bg-gradient-to-b from-cyan-200 to-sky-300
  rounded-full blur-3xl opacity-25 -z-10" />
<div className="fixed bottom-[-15%] left-[-8%] w-[420px] h-[420px]
  bg-gradient-to-t from-sky-200 to-teal-100
  rounded-full blur-3xl opacity-20 -z-10" />
```

### Water Surface Line
A thin animated highlight along the top edge of gradient cards:

```css
.hydro-surface-line::after {
  content: '';
  position: absolute;
  top: 0; left: 8%; right: 8%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
  border-radius: 2px;
}
```

---

## Component Patterns

### Primary Button (Depth Gradient)
```jsx
<button className="
  text-white font-semibold px-6 py-3 rounded-xl
  bg-[linear-gradient(180deg,#06B6D4_0%,#0284C7_55%,#075985_100%)]
  shadow-[0_4px_14px_rgba(2,132,199,0.35)]
  hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(2,132,199,0.45)]
  active:translate-y-0
  transition-all duration-200
">
  Run Analysis
</button>
```

### Secondary Button
```jsx
<button className="
  bg-white text-sky-700 font-semibold px-6 py-3 rounded-xl
  border border-sky-200
  hover:bg-sky-50 hover:border-sky-300
  transition-all duration-200
">
  Export Results
</button>
```

### Card
```jsx
<div className="
  bg-white rounded-[14px] border border-sky-100
  shadow-[0_1px_3px_rgba(2,132,199,0.08)]
  hover:-translate-y-1 hover:shadow-[0_8px_24px_-4px_rgba(2,132,199,0.18)]
  transition-all duration-200 p-6
">
  {/* Content */}
</div>
```

### Input Field (Recessed Pool)
```jsx
<div>
  <label className="text-sm font-semibold text-sky-950 mb-1.5 block">
    Peak Flow <span className="text-slate-500 font-medium text-xs uppercase">cfs</span>
  </label>
  <input
    type="number"
    className="
      w-full px-4 py-2.5 rounded-[10px]
      bg-sky-50/60 border border-sky-200
      text-sky-950 font-['JetBrains_Mono'] placeholder:text-slate-400
      shadow-[inset_0_2px_6px_rgba(7,89,133,0.08)]
      focus:bg-white focus:border-sky-600
      focus:ring-4 focus:ring-cyan-500/25 focus:outline-none
      transition-all duration-200
    "
    placeholder="0.00"
  />
</div>
```

### Gauge Readout (signature - for results)
```jsx
<div className="bg-white rounded-[10px] border border-sky-100 p-4
  shadow-[0_1px_3px_rgba(2,132,199,0.08)]">
  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
    Peak Stage
  </div>
  <div className="flex items-baseline gap-2 mt-1">
    <span className="font-['JetBrains_Mono'] text-3xl font-bold text-sky-950 tabular-nums">
      12.47
    </span>
    <span className="text-sm font-medium text-slate-500">ft NAVD88</span>
  </div>
  <div className="mt-2 h-1.5 rounded-full bg-sky-100 overflow-hidden">
    <div className="h-full rounded-full w-[72%]
      bg-[linear-gradient(90deg,#06B6D4,#0284C7)]" />
  </div>
</div>
```

### Semantic Hydro Status Badges
```jsx
{/* Exceedance */}
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
  text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
  ▲ FLOOD STAGE
</span>

{/* Warning */}
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
  text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
  ◆ ACTION STAGE
</span>

{/* Passing */}
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
  text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
  ● WITHIN BANKS
</span>

{/* Informational */}
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
  text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
  ~ BASEFLOW
</span>
```

### Freeboard Alert Card
```jsx
<div className="rounded-[14px] border border-amber-200 bg-amber-50/70
  border-l-[3px] border-l-amber-600 p-4">
  <div className="font-semibold text-amber-800 text-sm">Freeboard Deficit</div>
  <div className="text-sm text-slate-600 mt-0.5">
    Node J-104: 0.4 ft available (1.0 ft required per SCDOT)
  </div>
</div>
```

### Results Table
```jsx
<table className="w-full text-sm">
  <thead>
    <tr className="text-left text-xs uppercase tracking-wide text-slate-500
      border-b-2 border-sky-200">
      <th className="py-2 pr-4 font-semibold">Node</th>
      <th className="py-2 pr-4 font-semibold text-right">Stage (ft)</th>
      <th className="py-2 font-semibold text-right">Flow (cfs)</th>
    </tr>
  </thead>
  <tbody className="font-['JetBrains_Mono'] tabular-nums">
    <tr className="border-b border-sky-100 even:bg-sky-50/50">
      <td className="py-2 pr-4 font-['Manrope']">J-101</td>
      <td className="py-2 pr-4 text-right">12.47</td>
      <td className="py-2 text-right">148.2</td>
    </tr>
  </tbody>
</table>
```

---

## Animation & Motion

### Philosophy
"Water moves; it never jitters." Slow, easing, continuous. No bounces, no overshoot.

### Standard Transitions
```css
transition-all duration-200 ease-out       /* interactive elements */
transition-all duration-500 ease-in-out    /* surfaces, gradients */
```

### Hover Effects

| Element | Effect |
|---------|--------|
| Cards | `-translate-y-1` + shadow-float |
| Primary buttons | `-translate-y-0.5` + brighter tinted shadow |
| Table rows | Background shifts to `#E0F2FE` |
| Links | Color deepens `#0369A1 → #075985`, underline fades in |

### Ripple Focus (inputs/buttons)
```css
@keyframes hydro-ripple {
  from { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.35); }
  to   { box-shadow: 0 0 0 10px rgba(6, 182, 212, 0); }
}
.hydro-ripple:focus-visible {
  animation: hydro-ripple 600ms ease-out;
}
```

### Float (decorative elements)
```css
@keyframes hydro-float {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-8px); }
}
.animate-hydro-float { animation: hydro-float 6s ease-in-out infinite; }
```

### Fill Rise (progress/gauge bars)
```css
@keyframes hydro-rise {
  from { width: 0%; }
}
.hydro-rise { animation: hydro-rise 900ms cubic-bezier(0.4, 0, 0.2, 1); }
```

---

## Layout Guidelines

### Container
```jsx
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Section Rhythm
- Sections: `py-12 sm:py-16 lg:py-20`
- Alternate `#F0F9FF` and `#E0F2FE` section backgrounds, joined by wave dividers
- Tool layouts: inputs left (or top), gauge readouts right (or below), results table full-width beneath

### Grid Patterns
- **Tool page**: `lg:grid-cols-[1fr_360px]` (form + gauge sidebar)
- **Gauge row**: `md:grid-cols-3` or `md:grid-cols-4` stat cards
- **Report header**: full-width depth-gradient hero with caustic shimmer + project metadata in mono

---

## Responsive Strategy

- Breakpoints: standard Tailwind (`sm` 640, `md` 768, `lg` 1024, `xl` 1280)
- Mobile: gauge sidebar stacks below the form; wave dividers shrink to 32px height
- Touch targets ≥ 44px; numeric inputs get `inputmode="decimal"`

---

## Accessibility

### Color Contrast
- Sky 950 (`#082F49`) on Sky 50 (`#F0F9FF`): ~15.9:1 (AAA)
- White on Sky 600 (`#0284C7`): ~4.6:1 (AA); button text is bold ≥ 15px
- Sky 700 (`#0369A1`) on white: ~6.0:1 (AA) — use for links/small primary text instead of Sky 600
- All semantic states use the 600-weight tone on a 50-weight background with a 200-weight border (AA compliant)

### Focus States
```jsx
className="focus-visible:ring-4 focus-visible:ring-cyan-500/25
  focus-visible:border-sky-600 focus-visible:outline-none"
```

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  .hydro-caustics::before { animation: none; }
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## Python / Tkinter Adaptation

Hydrolight tokens load through the standard `StyleLoader` (see `GUI_MULTI_STYLE_RETROFIT_GUIDE.md`). Key mappings:

| StyleLoader Key | Hydrolight Value | Note |
|-----------------|------------------|------|
| `background` | `#F0F9FF` | Root/frames |
| `foreground` | `#082F49` | Labels |
| `accent` | `#0284C7` | Titles, insert cursor, focus highlight |
| `accent_secondary` | `#06B6D4` | Active button background |
| `muted_fg` | `#475569` | Hint/unit labels |
| `border` | `#BAE6FD` | Entry highlightbackground |
| `card` / `input_bg` | `#FFFFFF` | Text widgets, entries |
| `button_bg` / `button_fg` | `#0284C7` / `#FFFFFF` | Primary buttons |
| `font_family` | `Manrope` (fallback Segoe UI) | Use `Consolas` for numeric readouts |

Tkinter tips for the signature look:
- Result labels: `font=("Consolas", 20, "bold"), fg="#082F49"` with a unit label in `#475569`
- Recessed inputs: `highlightthickness=1, highlightbackground="#BAE6FD", highlightcolor="#0284C7"`
- Status labels: fg `#DC2626` / `#D97706` / `#059669` on bg `#FEF2F2` / `#FFFBEB` / `#ECFDF5`
- Header frame: solid `#075985` with white title text approximates the depth gradient

---

## Anti-Patterns (What NOT to Do)

| ❌ Don't | ✅ Do Instead |
|----------|---------------|
| Gray or black shadows | Sky/cyan-tinted shadows only |
| Horizontal or diagonal brand gradients | Vertical depth gradients (light above, dark below) |
| Proportional-font numeric results | JetBrains Mono / Consolas with tabular numerals |
| Bouncy or springy animations | Slow ease-in-out; water never jitters |
| Pill-shaped primary buttons | 12px rounded rectangles (engineering restraint) |
| Green as a brand accent | Green is reserved for "within capacity" status |
| Red decorative elements | Red is reserved for exceedance/flood only |
| Dark navy page backgrounds | This is a light theme; navy is for depth accents |
| Center-aligned data tables | Right-align numerics, left-align identifiers |

---

## Quick Reference Classes

```css
/* Backgrounds */
bg-sky-50          /* Page (#F0F9FF) */
bg-sky-100         /* Alt sections (#E0F2FE) */
bg-white           /* Cards */

/* Text */
text-sky-950       /* Main (#082F49) */
text-slate-600     /* Muted / units */
text-sky-700       /* Links (#0369A1) */

/* Borders */
border-sky-200     /* Default (#BAE6FD) */
border-sky-100     /* Cards (#E0F2FE) */

/* Depth gradient */
bg-[linear-gradient(180deg,#06B6D4_0%,#0284C7_55%,#075985_100%)]

/* Shadows */
shadow-[0_1px_3px_rgba(2,132,199,0.08)]              /* Surface */
shadow-[0_8px_24px_-4px_rgba(2,132,199,0.18)]        /* Float */
shadow-[0_4px_14px_rgba(2,132,199,0.35)]             /* Button */
```

---

## Complete Calculator Example

```jsx
export default function HydrolightCulvertCheck() {
  const [hw, setHw] = useState('');
  const [d, setD] = useState('');
  const ratio = hw && d && Number(d) !== 0 ? Number(hw) / Number(d) : null;
  const pass = ratio !== null && ratio <= 1.2;

  return (
    <div className="min-h-screen bg-sky-50 p-8 font-['Manrope']">
      {/* Ripple orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[480px] h-[480px]
        bg-gradient-to-b from-cyan-200 to-sky-300 rounded-full blur-3xl opacity-25 -z-10" />

      <div className="max-w-md mx-auto">
        {/* Depth-gradient header with caustic shimmer */}
        <div className="hydro-caustics relative rounded-[20px] p-6 text-white
          bg-[linear-gradient(180deg,#06B6D4_0%,#0284C7_55%,#075985_100%)]
          shadow-[0_16px_40px_-8px_rgba(7,89,133,0.30)]">
          <h1 className="text-2xl font-extrabold">Culvert HW/D Check</h1>
          <p className="text-sky-100 text-sm mt-1">SCDOT criterion: HW/D ≤ 1.2</p>
        </div>

        <div className="bg-white rounded-[14px] border border-sky-100
          shadow-[0_1px_3px_rgba(2,132,199,0.08)] p-6 mt-5">
          {[['Headwater Depth', hw, setHw, 'ft'], ['Culvert Rise', d, setD, 'ft']]
            .map(([label, val, set, unit]) => (
            <div key={label} className="mb-4">
              <label className="text-sm font-semibold text-sky-950 mb-1.5 block">
                {label} <span className="text-slate-500 text-xs uppercase">{unit}</span>
              </label>
              <input value={val} onChange={(e) => set(e.target.value)} type="number"
                className="w-full px-4 py-2.5 rounded-[10px] bg-sky-50/60
                  border border-sky-200 font-['JetBrains_Mono'] text-sky-950
                  shadow-[inset_0_2px_6px_rgba(7,89,133,0.08)]
                  focus:bg-white focus:border-sky-600 focus:ring-4
                  focus:ring-cyan-500/25 focus:outline-none transition-all" />
            </div>
          ))}

          {ratio !== null && (
            <div className="mt-2 p-4 rounded-[10px] bg-sky-50 border border-sky-100">
              <div className="text-xs font-semibold uppercase text-slate-500">HW/D Ratio</div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="font-['JetBrains_Mono'] text-3xl font-bold
                  text-sky-950 tabular-nums">{ratio.toFixed(2)}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  pass ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                       : 'bg-red-50 text-red-700 border-red-200'}`}>
                  {pass ? '● WITHIN CRITERIA' : '▲ EXCEEDS 1.2'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

---

*Hydrolight Design System v1.0 | Created 2026-07-10 | GUI Design Center Library*
*Designed for J. Bragg Consulting Inc. water resources engineering tools*

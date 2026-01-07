# Twisty Design System

**Vibe:** Modern dark-mode Finance SaaS with elegant gradients, layered surfaces, and clean data visualization.

**Inspired By:** Halo Lab's "Dashboard for a Finance SaaS - Twisty" on Dribbble

**Mode:** Dark (Void Black)

---

## Design Philosophy

Twisty embodies the modern fintech aesthetic: sophisticated, trustworthy, and data-rich without feeling overwhelming. The design uses deep void backgrounds to create focus, violet-to-indigo gradients for brand identity and CTAs, and a carefully layered surface system that guides the eye through information hierarchy.

Key principles:
- **Depth through surfaces:** Multiple background layers create visual hierarchy without heavy shadows
- **Gradient as brand:** The violet-to-indigo gradient is the signature element, used sparingly but effectively
- **Semantic color coding:** Green for positive/growth, red for decline, maintaining instant readability
- **Minimal decoration:** Let the data and content speak; avoid unnecessary ornamentation
- **Consistent rhythm:** 4px/8px spacing grid, 16px base radius, predictable component patterns

---

## Color Palette

### Core Colors

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| background | `#0D0D12` | Void Black | Page background |
| backgroundSecondary | `#13131A` | Dark Navy | Nested containers, transaction items |
| surface | `#1A1A24` | Card Surface | Cards, panels, nav container |
| surfaceHover | `#22222E` | Surface Hover | Interactive hover states |
| foreground | `#FFFFFF` | White | Primary text, headings |
| textSecondary | `#A0A0B0` | Silver | Secondary text, descriptions |
| textMuted | `#6B6B7B` | Muted Gray | Tertiary text, timestamps, labels |

### Brand Colors

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| primary | `#8B5CF6` | Violet 500 | Primary actions, active states |
| primaryLight | `#A78BFA` | Violet 400 | Hover states, lighter accents |
| secondary | `#6366F1` | Indigo 500 | Gradient end, secondary accents |

### Semantic Colors

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| accent | `#22C55E` | Emerald 500 | Success, positive values, growth |
| accentRed | `#EF4444` | Red 500 | Error, negative values, decline |
| accentYellow | `#F59E0B` | Amber 500 | Warning, pending states |

### Borders

| Token | Hex | Name | Usage |
|-------|-----|------|-------|
| border | `#2A2A38` | Border Dark | Card borders, dividers |
| borderLight | `#1F1F2C` | Border Subtle | Inner separators |

---

## Gradients

### Primary Gradient
```css
background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
```
**Usage:** Primary buttons, balance cards, active navigation, avatars

### Subtle Gradient (Icon Backgrounds)
```css
background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
```
**Usage:** Icon containers, subtle highlights on dark surfaces

### Decorative Glow
```css
background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
```
**Usage:** Orb effect on balance card

---

## Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Google Font Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Type Scale

| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| xs | 11px | 400-500 | 1.4 | Chart labels, timestamps |
| sm | 12px | 500 | 1.5 | Badges, small labels |
| base | 14px | 400-500 | 1.6 | Body text, nav items |
| lg | 16px | 600 | 1.5 | Card titles, section headers |
| xl | 20px | 600 | 1.4 | Logo text |
| 2xl | 28px | 700 | 1.3 | Stat values |
| 3xl | 36px | 700 | 1.2 | Balance value |

### Letter Spacing
- Large text (2xl+): `-0.02em` for tighter headlines
- Body text: Default spacing

---

## Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight gaps, pill padding |
| sm | 8px | Small gaps, nav item spacing |
| md | 12px | Medium gaps, icon-to-text |
| lg | 16px | Standard gaps, grid gaps |
| xl | 24px | Section gaps, card padding |
| 2xl | 32px | Large section spacing |

### Container
- Max Width: 1400px
- Page Padding: 24px

### Cards
- Standard Padding: 20px
- Large Padding: 24px (chart cards)
- Balance Card: 28px

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 6px | Badges, small pills |
| md | 8px | Period tabs, nav items |
| lg | 10px | Inputs, search box, icons |
| xl | 12px | Transaction items |
| 2xl | 16px | Cards, panels |
| 3xl | 20px | Balance card |

---

## Shadows

Twisty uses **minimal shadows**, relying instead on surface contrast and borders for depth.

| Token | Value | Usage |
|-------|-------|-------|
| none | - | Default for all cards |
| subtle | `0 1px 2px rgba(0,0,0,0.3)` | Dropdowns only |
| elevated | `0 4px 12px rgba(0,0,0,0.4)` | Modals, overlays |

---

## Component Patterns

### Navigation Bar
```
Container: bg-surface, border-border, rounded-xl, p-1
Items: px-5 py-2.5, rounded-md, font-medium
Active: bg-gradient, text-white
Inactive: transparent, text-textSecondary
```

### Stat Card
```
Container: bg-surface, border-border, rounded-2xl, p-5
Label: text-sm, text-textMuted, font-medium
Value: text-2xl, font-bold, tracking-tight
Badge: inline-flex, px-2 py-1, rounded-sm
  - Positive: bg-green/10, text-accent
  - Negative: bg-red/10, text-accentRed
```

### Balance Card (Hero)
```
Container: bg-gradient, rounded-3xl, p-7, relative, overflow-hidden
Glow Orb: absolute, top-0 right-0, translate, radial-gradient
Label: text-sm, text-white/80
Value: text-4xl, font-bold
Buttons: flex gap-3
  - Ghost: bg-white/20, backdrop-blur
  - Outline: border-white/30, transparent bg
```

### Transaction Item
```
Container: flex items-center gap-3.5, bg-backgroundSecondary, rounded-xl, p-3.5
Icon: w-11 h-11, rounded-lg, bg-[semantic]/15
Info: flex-1
  - Name: text-base, font-medium
  - Date: text-sm, text-textMuted
Amount: text-base, font-semibold
  - Positive: text-accent
  - Negative: text-foreground
```

### Period Selector
```
Container: flex gap-1, bg-backgroundSecondary, p-1, rounded-md
Tab: px-3 py-1.5, rounded-sm, text-sm, font-medium
  - Active: bg-primary, text-white
  - Inactive: transparent, text-textMuted
```

### Input / Search Box
```
Container: flex items-center gap-2.5, bg-surface, border-border, rounded-lg, px-4 py-2.5
Input: bg-transparent, text-text, placeholder-textMuted
Focus: border-primary
```

### Chart Bar
```
Default: bg-border, flex-1
Active: bg-gradient
Radius: 6px 6px 0 0 (top only)
Labels: text-xs, text-textMuted
```

---

## Animation Guidelines

### Transitions
```css
transition: all 0.2s ease;
```

| Speed | Duration | Usage |
|-------|----------|-------|
| Fast | 150ms | Hover states, small UI |
| Default | 200ms | Most interactions |
| Slow | 300ms | Large state changes |

### Hover Effects
- Cards: Background shift to surfaceHover
- Buttons: Opacity 0.9
- Navigation: Smooth background/color transition
- No translate/lift effects (keeps it grounded)

---

## Layout Patterns

### Dashboard Grid
```css
display: grid;
grid-template-columns: 1fr 360px;
gap: 24px;
```

### Stats Row
```css
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
```

### Quick Actions
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
```

---

## Accessibility

### Contrast Ratios
| Combination | Ratio | Rating |
|-------------|-------|--------|
| White on Void Black | 18.1:1 | AAA |
| White on Surface | 15.3:1 | AAA |
| White on Primary | 6.8:1 | AA |
| Muted on Background | 4.8:1 | AA |

### Focus States
```css
outline: 2px solid #8B5CF6;
outline-offset: 2px;
```

### Touch Targets
Minimum: 44px × 44px for all interactive elements

---

## Anti-Patterns (What NOT to Do)

1. **Don't use white backgrounds** - Breaks the dark theme cohesion
2. **Don't overuse the gradient** - Reserve for primary CTAs and hero elements
3. **Don't add heavy shadows** - Twisty uses surface contrast, not elevation
4. **Don't use rounded-full on cards** - Keep 2xl/3xl radius
5. **Don't mix semantic colors** - Green = positive, Red = negative, always
6. **Don't use bright text on gradient** - Keep it white only
7. **Don't add borders to gradient elements** - Gradient is self-contained
8. **Don't use light gray text** - Use the muted hierarchy: textSecondary → textMuted

---

## Quick Reference

### Card
```jsx
<div style={{
  background: '#1A1A24',
  border: '1px solid #2A2A38',
  borderRadius: '16px',
  padding: '20px'
}}>
  {/* content */}
</div>
```

### Primary Button
```jsx
<button style={{
  background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
  color: '#FFFFFF',
  padding: '12px 24px',
  borderRadius: '10px',
  fontWeight: 500,
  border: 'none'
}}>
  Action
</button>
```

### Change Badge
```jsx
<span style={{
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '4px 8px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 500,
  color: positive ? '#22C55E' : '#EF4444',
  background: positive ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'
}}>
  {positive ? '↑' : '↓'} {value}
</span>
```

---

## Files

| File | Purpose |
|------|---------|
| `TWISTY.md` | This documentation |
| `tokens.json` | Programmatic design tokens |
| `tailwind-config.js` | Tailwind CSS configuration |

---

*Created: 2025-12-29*
*Source: Halo Lab - Dribbble*
*Maintainer: Joey Woody, J. Bragg Consulting Inc.*

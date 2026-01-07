# Design Style: Academia / Classical

## Design Philosophy

**Core Principles**: Scholarly gravitas meets timeless elegance. This style channels the atmosphere of centuries-old university libraries, Victorian study halls, and Renaissance manuscripts. Every element must feel like it belongs in a prestigious institution - combining **rich material references** (aged parchment, dark mahogany wood, polished brass hardware, crimson leather bindings) with **traditional typographic excellence** and **measured ornamentation**.

**Vibe**: Scholarly, Prestigious, Warm, Timeless, Dignified, Intellectual, Distinguished.

**The Academia Promise**: This isn't a modern dark theme with serif fonts. It's a complete transformation into a physical library environment where every interaction feels like turning pages in a leather-bound tome, where brass fixtures catch the light, and where centuries of knowledge create an atmosphere of gravitas and trust.

---

## Design Token System (The DNA)

### Color System (Library at Night)

**Foundation Colors**:
- **background**: `#1C1714` (Deep Mahogany) - The darkest wood tone, foundation of all layouts
- **backgroundAlt**: `#251E19` (Aged Oak) - Surface elevation, cards, and panel backgrounds
- **foreground**: `#E8DFD4` (Antique Parchment) - Primary text, warm cream tone
- **muted**: `#3D332B` (Worn Leather) - Tertiary backgrounds, disabled states
- **mutedForeground**: `#9C8B7A` (Faded Ink) - Secondary text, labels, metadata
- **border**: `#4A3F35` (Wood Grain) - Subtle borders and dividers

**Accent Colors**:
- **accent**: `#C9A962` (Polished Brass) - Primary interactive color, highlights, focus states
- **accentSecondary**: `#8B2635` (Library Crimson) - Emphasis badges, hover transforms
- **accentForeground**: `#1C1714` (Dark on Brass) - Text on brass-colored buttons

**Color Usage Rules**:
1. **Contrast Ratios**: Maintain 8.5:1 for parchment on mahogany, minimum 4.5:1 for muted text
2. **Layering Strategy**: Always layer backgroundAlt on top of background for depth (cards, panels)
3. **Brass Application**: Use brass for ALL interactive elements (buttons, links, focus rings, icons)
4. **Crimson Sparingly**: Reserve crimson for special emphasis (featured pricing tier, wax seals, hover transforms)
5. **Border Subtlety**: Borders should be visible but never harsh - wood grain color provides gentle separation

**Brass Gradient Formula** (for buttons and metallic elements):
```css
background: linear-gradient(180deg, #D4B872 0%, #C9A962 50%, #B8953F 100%)
```

---

### Typography System

**Font Families**:
- **Heading Font**: `"Cormorant Garamond", serif` - High-contrast old-style serif with calligraphic elegance
- **Body Font**: `"Crimson Pro", serif` - Book-style serif designed for extended reading
- **Display Font**: `"Cinzel", serif` - Engraved, all-caps display font for labels and special emphasis

**Google Font Import**:
```
https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Crimson+Pro:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap
```

**Type Scale & Hierarchy**:
- **Display Headings**: `text-5xl` to `text-7xl` (48px-72px), Cormorant Garamond, `leading-[1.1]`, `tracking-tight`
- **Section Headings**: `text-4xl` to `text-5xl` (36px-48px), Cormorant Garamond
- **Subsection Headings**: `text-2xl` to `text-3xl` (24px-30px), Cormorant Garamond
- **Body Text**: `text-base` to `text-lg` (16px-18px), Crimson Pro, `leading-relaxed` (1.625)
- **Labels/Overlines**: `text-xs` to `text-[10px]` (10px-12px), Cinzel, `uppercase`, `tracking-[0.2em]` to `tracking-[0.3em]`

**Font Weight Distribution**:
- Headings: Regular/Normal (400-500) - avoid heavy weights, let the serif do the work
- Body: Regular (400)
- Labels: Medium (500-600) for Cinzel
- Emphasis: Italic rather than bold for body text

**Special Typography Patterns**:

1. **Drop Caps**: First letter of introductory paragraphs
   - Font: Cinzel (display font)
   - Size: `text-7xl` (72px), `float-left`, `mr-4`, `leading-[0.8]`
   - Color: Brass (`#C9A962`)
   - Shadow: `2px 2px 4px rgba(0,0,0,0.3)` for engraved depth

2. **Section Numbering**: Use Roman numerals (I, II, III, IV, V...)
   - Font: Cinzel, `text-xs`, `uppercase`, `tracking-[0.25em]` to `tracking-[0.3em]`
   - Color: Brass
   - Pattern: "Volume I", "Volume II", etc. for major section headers

3. **Engraved Text Effect** (for buttons and special headings):
   ```css
   text-shadow: 1px 1px 1px rgba(0,0,0,0.4), -1px -1px 1px rgba(255,255,255,0.1)
   ```

---

### Radius & Border System

**Border Radius Values**:
- **Default**: `4px` (`rounded`) - Subtle, traditional corners for buttons, cards, inputs
- **Arch-Top Special**: `border-radius: 40% 40% 0 0 / 20% 20% 0 0` - Cathedral arch tops for images
- **Full Circle**: For icon containers, badges, profile images

**The Arch-Top Signature**:
This is a defining visual element. The formula creates an elegant arch reminiscent of cathedral windows:
```css
.arch-top {
  border-radius: 40% 40% 0 0 / 20% 20% 0 0;
}
```
Apply to: Hero images, blog thumbnails, feature images, decorative containers.

**Border Styling**:
- **Thickness**: `1px` standard, `2px` for decorative frames and focus states
- **Color**: `#4A3F35` (wood grain) for standard borders, `#C9A962` (brass) for interactive/decorative
- **Pattern**: Single solid borders, avoid dashed or dotted

---

### Shadows & Depth

**Shadow Philosophy**: Shadows should feel like physical depth in a dimly-lit library - soft, warm, and realistic.

**Shadow Recipes**:

1. **Card Elevation** (default):
   ```css
   shadow: none (rely on border and background differentiation)
   hover: 0 8px 24px rgba(0,0,0,0.3)
   ```

2. **Engraved/Embossed Effect** (buttons, decorative elements):
   ```css
   inset 0 1px 0 rgba(255,255,255,0.2),
   inset 0 -1px 0 rgba(0,0,0,0.2),
   0 2px 8px rgba(0,0,0,0.3)
   ```

3. **Wax Seal Badge**:
   ```css
   inset 0 2px 4px rgba(255,255,255,0.2),
   inset 0 -2px 4px rgba(0,0,0,0.3),
   0 4px 8px rgba(0,0,0,0.4)
   ```

4. **Focus Ring**:
   ```css
   ring-2 ring-[#C9A962] ring-offset-2 ring-offset-[#1C1714]
   ```

---

### Textures & Atmospheric Effects

**1. Aged Paper Texture Overlay**:
- SVG noise filter with fractal turbulence
- Opacity: `0.03` (extremely subtle)
- Position: Fixed overlay covering entire viewport
- Blend mode: `overlay`

**2. Vignette Effect**:
- Radial gradient from center
- Formula: `radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(28,23,20,0.4) 100%)`
- Position: Fixed overlay

**3. Sepia Image Treatment**:
- Default state: `filter: sepia(0.6) contrast(0.95) brightness(0.9)`
- Hover state: `filter: sepia(0) contrast(1) brightness(1)`
- Transition: `duration-700 ease-out`

**4. Decorative Patterns**:

**Ornate Corner Flourishes**:
```css
.ornate-frame::before,
.ornate-frame::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #C9A962;
}
.ornate-frame::before {
  top: -1px; left: -1px;
  border-right: none; border-bottom: none;
}
.ornate-frame::after {
  bottom: -1px; right: -1px;
  border-left: none; border-top: none;
}
```

**Ornate Divider**:
```css
.ornate-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #4A3F35 20%, #C9A962 50%, #4A3F35 80%, transparent 100%);
}
.ornate-divider::before {
  content: "✶";
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  color: #C9A962;
  font-size: 12px;
  background: #1C1714;
  padding: 0 12px;
}
```

---

## Component Styling Principles

### Buttons

**Visual Treatment**:
- Font: Cinzel (display font)
- Text: Uppercase with `tracking-[0.15em]`
- Size: Small text (`text-xs`) with generous padding
- Effect: Engraved text shadow for pressed-metal appearance

**Primary Button** (brass, main actions):
- Background: Brass gradient (`linear-gradient(180deg, #D4B872 0%, #C9A962 50%, #B8953F 100%)`)
- Text: Dark mahogany (`#1C1714`)
- Radius: `4px` (rounded)
- Hover: Increase brightness to 110%, add brass glow shadow
- Active: Deeper inset shadow for pressed effect

**Secondary Button** (outlined, alternative actions):
- Background: Transparent
- Border: `2px solid #C9A962` (brass)
- Text: Brass (`#C9A962`)
- Hover: Transform to crimson - `border: #8B2635`, `bg: #8B2635`, `text: #E8DFD4`

**Ghost Button** (minimal, tertiary actions):
- No background or border
- Text: Brass with hover underline
- Underline offset: `4px` for breathing room

**Button Sizes**:
- Default: `h-12 px-8`
- Small: `h-10 px-6`
- Large: `h-14 px-10`

---

### Cards & Containers

**Structure**:
- Background: `#251E19` (aged oak)
- Border: `1px solid #4A3F35` (wood grain)
- Radius: `4px` (rounded)
- Padding: `p-8` to `p-12`
- Position: Relative (for corner flourishes)

**Hover Behavior**:
- Border: Transition to `#C9A962/50` (brass with transparency)
- Shadow: Add `0 8px 24px rgba(0,0,0,0.3)` for lift effect
- Duration: `300ms` ease

**Special Card Treatments**:

1. **Certificate/Ledger Style** (pricing cards):
   - Double border effect using box-shadow inset
   - Brass corner accents
   - Featured tier gets brass border and ring

2. **Arch-Top Image Cards** (blog, features):
   - Image container uses arch-top border-radius
   - Image has sepia filter with hover reveal
   - Scale image slightly on card hover (`scale-105`)

3. **Wax Seal Badges** (featured items):
   - Circular crimson badge positioned at top-right
   - Radial gradient for dimensional wax appearance
   - Contains icon (typically star)

---

### Form Inputs

**Text Inputs**:
- Background: `#251E19` (aged oak)
- Border: `1px solid #4A3F35` (wood grain)
- Text: `#E8DFD4` (parchment), Crimson Pro font
- Placeholder: Italic serif, `#9C8B7A` (faded ink)
- Height: `h-12` (48px)
- Padding: `px-4 py-2`
- Radius: `4px` (rounded)

**Focus State**:
- Border: `#C9A962` (brass)
- Ring: `ring-2 ring-[#C9A962]/30` with offset

**Labels**:
- Font: Cinzel, uppercase, small tracking
- Color: `#9C8B7A` or brass for important fields

---

## Animation & Motion

**Motion Philosophy**: Dignified, deliberate, and smooth. Nothing should feel snappy, bouncy, or playful.

**Timing Functions**:
- Default: `ease-out` (natural deceleration)
- Never use: `bounce`, `spring`, elastic effects

**Duration Hierarchy**:
- Fast interactions (button press, focus): `150ms`
- Standard transitions (hover, border changes): `300ms`
- Deliberate transitions (cards lifting): `500ms`
- Dramatic reveals (sepia to color, scale): `700ms`

**Transform Patterns**:
- Hover scale: `scale-105` or `scale-[1.02]` (subtle)
- Hover lift: Increase shadow, don't translate vertically
- No rotation transforms (except for chevron icons)

---

## The "Bold Factor" (Non-Genericness)

These are the **mandatory signature elements** that define Academia/Classical:

1. **Arch-Topped Images**: Cathedral arch border-radius (`40% 40% 0 0 / 20% 20% 0 0`)
2. **Sepia-to-Color Transitions**: Images start sepia, reveal color on hover (700ms)
3. **Roman Numeral Volume System**: "Volume I", "Volume II" for major sections
4. **Drop Cap Introductions**: Massive brass Cinzel letters at `text-7xl`
5. **Corner Flourishes**: Brass corner brackets on major frames
6. **Ornate Dividers with Glyphs**: Gradient dividers with centered decorative characters (✶, ❧, ✤)
7. **Wax Seal Badges**: Circular crimson badges with radial gradients
8. **Brass Interactive Elements**: ALL interactive elements use brass color
9. **Engraved Text Effects**: Dual text-shadow for pressed-metal appearance
10. **Texture Overlays**: Paper texture (3% opacity) and vignette effect

---

## Anti-Patterns (What to Avoid)

### Do NOT:
1. Use sans-serif fonts anywhere
2. Use bright, saturated colors - everything should feel aged and warm
3. Use sharp, geometric shapes - favor organic curves
4. Overuse decorative elements - restraint is scholarly
5. Use modern gradients (except brass metallic)
6. Ignore the arch-top pattern
7. Skip Roman numerals
8. Use pure black (#000000) - use warm dark browns
9. Use pure white (#FFFFFF) - use warm cream tones
10. Add playful animations - no bouncing, elastic effects

---

## Responsive Strategy

### Mobile (< 768px):
- Stack all columns vertically
- Touch targets: Minimum 48px height
- Simplify decorative elements - hide large corner flourishes
- Reduce spacing: py-16 instead of py-24

### Tablet (768px - 1024px):
- Two-column grids where appropriate
- Partial decorative elements
- Flexible spacing

### Desktop (> 1024px):
- Full ornate experience
- Three-column grids
- Maximum visual richness

---

## Quick Reference - Tailwind Classes

### Essential Color Classes
```
bg-[#1C1714]  /* Background - Deep Mahogany */
bg-[#251E19]  /* Background Alt - Aged Oak */
text-[#E8DFD4]  /* Foreground - Antique Parchment */
text-[#9C8B7A]  /* Muted Foreground - Faded Ink */
bg-[#C9A962]  /* Accent - Polished Brass */
bg-[#8B2635]  /* Accent Secondary - Library Crimson */
border-[#4A3F35]  /* Border - Wood Grain */
```

### Essential Component Patterns
```
/* Primary Button (Brass) */
bg-gradient-to-b from-[#D4B872] via-[#C9A962] to-[#B8953F]
text-[#1C1714] font-cinzel uppercase tracking-[0.15em] text-xs
h-12 px-8 rounded
hover:brightness-110 transition-all duration-300

/* Card */
bg-[#251E19] border border-[#4A3F35] rounded p-8
hover:border-[#C9A962]/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]
transition-all duration-300

/* Arch-Top Image */
rounded-[40%_40%_0_0/20%_20%_0_0]
filter sepia-[0.6] contrast-[0.95] brightness-[0.9]
hover:sepia-0 hover:contrast-100 hover:brightness-100
transition-all duration-700

/* Section Heading */
font-cormorant text-5xl md:text-6xl lg:text-7xl
leading-[1.1] tracking-tight text-[#E8DFD4]

/* Label/Overline */
font-cinzel text-xs uppercase tracking-[0.25em] text-[#C9A962]
```

---

*Style Added: 2025-12-03*

# Hydrolight

**Sunlight through clear water.** A light-mode design system built specifically for water resources engineering tools: stormwater calculators, PCSWMM/QGIS utilities, hydraulic report generators, and modeling dashboards.

```
   ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~     #F0F9FF  surface light
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    #E0F2FE  shallows
 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈   #06B6D4  caustic cyan
≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋  #0284C7  open water
█████████████████████████████████  #075985  thalweg
█████████████████████████████████  #082F49  deep channel
```

---

## The Idea

The page is the bright water surface. Everything important descends through the water column: pale aqua shallows for secondary sections, open-water blue for actions, deep channel navy for text and hero surfaces. Light behaves like light underwater — shadows are cyan-tinted, gradients always run **top-light to bottom-dark**, and hero cards carry a slow animated **caustic shimmer** like refracted sunlight on a channel bottom.

Unlike a generic "blue theme," Hydrolight is engineered for the daily reality of hydraulic work:

| Feature | Why it matters |
|---------|----------------|
| **Monospace gauge readouts** (JetBrains Mono / Consolas) | Decimals align; a stage of `12.47 ft` reads like a USGS gauge card |
| **Semantic hydro states** | Red = flood/exceedance, amber = action stage, green = within banks, blue = baseflow. Colors mean what they mean in the field |
| **Right-aligned numeric tables** | Results tables scan like model output, not marketing copy |
| **Freeboard alert cards** | 3px state-colored left border, ready for SCDOT criteria checks |
| **Capacity bars in gauges** | Instant visual of stage vs. capacity |
| **Calm motion** | Water never jitters — no bounce, no overshoot, respects reduced-motion |

## The Look (60 seconds)

- **Palette**: Sky 50 page, white cards, Sky 600 primary, Cyan 500 accents, Sky 950 text
- **Signature gradient**: `linear-gradient(180deg, #06B6D4, #0284C7 55%, #075985)` — vertical only
- **Shadows**: always `rgba(2,132,199, ...)` — never gray
- **Type**: Manrope for UI, JetBrains Mono for every number
- **Buttons**: 12px rounded rectangles, not pills (engineering restraint)
- **Dividers**: SVG sine waves between sections
- **Contrast**: body text 15.9:1 (AAA); all status badges AA-compliant

## Files

| File | Purpose |
|------|---------|
| `HYDROLIGHT.md` | Full design system spec — use as an AI prompt when generating UIs |
| `tokens.json` | Design tokens; loads directly into the Python `StyleLoader` (includes a `tkinter` block with ready-to-use widget colors) |
| `tailwind-config.js` | Tailwind config with `hydro-*` classes, custom CSS components, and a complete tool-layout example |

## Quick Start

**Web/React:** import `tailwind-config.js`, add the Google Fonts link (Manrope + JetBrains Mono), copy the custom CSS block from the config comments, and build with `hydro-page`, `hydro-hero`, `hydro-card`, `hydro-gauge`, `hydro-badge-*`.

**Python/tkinter:** add `"Hydrolight (Light)": "hydrolight/tokens.json"` to `STYLE_MAP` per `GUI_MULTI_STYLE_RETROFIT_GUIDE.md`. The `tkinter` block in `tokens.json` gives exact widget colors, including semantic status label pairs and the Consolas result-font spec.

**AI prompt:** paste `HYDROLIGHT.md` into any chat and say "build X in this design system."

## Rules That Make It Hydrolight

1. Gradients are vertical, light above dark. Always.
2. Shadows are water-tinted. Never gray.
3. Numbers are monospace. Always.
4. Green means "within capacity" — never use it as decoration.
5. Red means "exceedance" — never use it as decoration.
6. Motion is slow and easing. Water never jitters.

---

*Hydrolight v1.0 | Created 2026-07-10 | GUI Design Center Library*
*J. Bragg Consulting Inc. — designed for the tools of a working water resources engineer*

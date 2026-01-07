# GUI Design Center Library - Example Code

## Mortgage Calculator with Runtime Style Switching

This example demonstrates how to:

1. **Load style tokens from JSON files** at runtime
2. **Switch between GUI styles dynamically** without restarting the application
3. **Apply design tokens to Python tkinter widgets** programmatically

---

## File: `mortgage_calculator_multi_style.py`

### Features

- **7 Available Styles**: Kinetic, Bauhaus, Enterprise, Cyberpunk, Academia, Sketch, and Playful Geometric
- **Runtime Style Switching**: Dropdown menu lets you change styles instantly
- **Full Mortgage Calculator**: Calculates P&I, taxes, insurance, and total cost
- **Automatic Light/Dark Detection**: Adjusts text colors based on background luminance

### How It Works

```
┌─────────────────────────────────────────────────────────────┐
│  STYLE TOKENS (JSON)        STYLE LOADER          GUI      │
│  ─────────────────────     ────────────────     ──────     │
│                                                             │
│  kinetic/tokens.json   ──┐                                 │
│  bauhaus/tokens.json   ──┼──►  StyleLoader   ──►  tkinter  │
│  enterprise/tokens.json──┤     (normalizes)      widgets   │
│  cyberpunk/tokens.json ──┤                                 │
│  academia/tokens.json  ──┤                                 │
│  sketch/tokens.json    ──┤                                 │
│  playful-geo/tokens.json─┘                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Key Architecture Patterns

#### 1. Token Normalization

Different style JSON files have varying structures. The `StyleLoader` class normalizes them:

```python
# Example: Bauhaus stores colors differently than Kinetic
# Bauhaus: colors.primary.red = "#D02020"
# Kinetic: colors.accent = "#DFE104"

# StyleLoader outputs a consistent interface:
normalized = {
    "background": "#09090B",
    "foreground": "#FAFAFA",
    "accent": "#DFE104",
    "button_bg": "#DFE104",
    "button_fg": "#000000",
    ...
}
```

#### 2. Runtime Style Application

Widgets are created once, then their `configure()` methods update colors:

```python
def _apply_style(self, style_key: str):
    style = self.style_loader.load_style(style_key)
    
    # Apply to all widgets
    self.root.configure(bg=style["background"])
    self.title_label.configure(fg=style["accent"])
    self.calc_button.configure(bg=style["button_bg"])
```

#### 3. Luminance-Based Text Color Selection

Automatically determines if text should be light or dark:

```python
def _is_light_color(self, hex_color: str) -> bool:
    r = int(hex_color[1:3], 16)
    g = int(hex_color[3:5], 16)
    b = int(hex_color[5:7], 16)
    luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance > 0.5
```

---

## Running the Example

```bash
# From command line
python mortgage_calculator_multi_style.py

# Or run directly in your IDE
```

**Requirements:**
- Python 3.7+
- tkinter (included with standard Python)
- No external dependencies

---

## Adapting for Your Own Applications

### Step 1: Copy the StyleLoader Class

The `StyleLoader` class is reusable. Copy it to your project:

```python
from style_loader import StyleLoader

STYLES_PATH = Path(r"E:\...\GUI_Design_Center_Library\styles")
loader = StyleLoader(STYLES_PATH)
```

### Step 2: Load and Apply Styles

```python
style = loader.load_style("Kinetic (Dark)")

# Access normalized properties
bg_color = style["background"]
accent_color = style["accent"]
is_dark = style["is_dark"]
```

### Step 3: Create a Style Dropdown

```python
style_var = tk.StringVar(value="Kinetic (Dark)")
dropdown = ttk.Combobox(
    parent,
    textvariable=style_var,
    values=list(STYLE_MAP.keys()),
    state="readonly"
)
dropdown.bind("<<ComboboxSelected>>", on_style_change)
```

---

## Limitations of tkinter Styling

Some web-specific design tokens cannot be directly applied to tkinter:

| Token Feature | Web/CSS Support | tkinter Support |
|---------------|-----------------|-----------------|
| Colors | Full | Full |
| Fonts | Full (web fonts) | Limited (system fonts) |
| Border Radius | Full | None (squared only) |
| Gradients | Full | None |
| Shadows | Full | None |
| Animations | Full | Limited |
| Transparency | Full | Platform-dependent |

**Workarounds:**
- Use `tk.Canvas` for custom rounded rectangles
- Use PIL/Pillow for gradient backgrounds
- Apply system fonts that approximate the style's intent

---

## Style Comparison Preview

| Style | Mode | Primary Accent | Best For |
|-------|------|----------------|----------|
| Kinetic | Dark | Acid Yellow | High-energy apps |
| Bauhaus | Light | Red/Blue/Yellow | Bold marketing |
| Enterprise | Light | Indigo-Violet | Business/SaaS |
| Cyberpunk | Dark | Matrix Green | Tech/Gaming |
| Academia | Dark | Polished Brass | Education/Legal |
| Sketch | Light | Red Marker | Creative tools |
| Playful Geometric | Light | Vivid Violet | Consumer apps |

---

## Questions?

Refer to the main library README at:
`E:\CLAUDE_Workspace\Claude\Report_Files\GUI_Design_Center_Library\README.md`

Each style folder also contains:
- `{STYLE}.md` - Full design documentation
- `tokens.json` - Complete design tokens
- `tailwind-config.js` - Tailwind CSS configuration

---

*Created: 2025-12-24*
*Author: Joey Woody*

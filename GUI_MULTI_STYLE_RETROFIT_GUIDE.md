# GUI Multi-Style Retrofit Guide

**Purpose:** Paste this guide into any chat where Python tkinter code was developed to add runtime GUI style switching using the GUI Design Center Library.

---

## STYLE LIBRARY LOCATION

```
E:\CLAUDE_Workspace\Claude\Report_Files\GUI_Design_Center_Library\styles\
```

**Available Styles:**
| Style Key | Mode | Accent Color | JSON Path |
|-----------|------|--------------|-----------|
| Kinetic (Dark) | Dark | Acid Yellow #DFE104 | kinetic/tokens.json |
| Bauhaus (Light) | Light | Red #D02020 | bauhaus/tokens.json |
| Enterprise (Light) | Light | Indigo #4F46E5 | enterprise/tokens.json |
| Cyberpunk (Dark) | Dark | Matrix Green #00ff88 | cyberpunk/tokens.json |
| Academia (Dark) | Dark | Brass #C9A962 | academia/tokens.json |
| Sketch (Light) | Light | Red Marker #ff4d4d | sketch/tokens.json |
| Playful Geometric (Light) | Light | Violet #8B5CF6 | playful-geometric/tokens.json |
| Twisty (Dark) | Dark | Violet #8B5CF6 | twisty/tokens.json |

---

## STEP 1: ADD IMPORTS AND CONSTANTS

Add these to the top of the existing script:

```python
import json
from pathlib import Path
from typing import Dict, Any, Optional

# Style library path - update if needed
STYLES_BASE_PATH = Path(r"E:\CLAUDE_Workspace\Claude\Report_Files\GUI_Design_Center_Library\styles")

# Style mapping
STYLE_MAP = {
    "Kinetic (Dark)": "kinetic/tokens.json",
    "Bauhaus (Light)": "bauhaus/tokens.json",
    "Enterprise (Light)": "enterprise/tokens.json",
    "Cyberpunk (Dark)": "cyberpunk/tokens.json",
    "Academia (Dark)": "academia/tokens.json",
    "Sketch (Light)": "sketch/tokens.json",
    "Playful Geometric (Light)": "playful-geometric/tokens.json",
    "Twisty (Dark)": "twisty/tokens.json",
}
```

---

## STEP 2: ADD THE STYLELOADER CLASS

Copy this entire class into the script (after imports, before main app class):

```python
class StyleLoader:
    """
    Loads and normalizes style tokens from the GUI Design Center Library.
    Provides consistent interface regardless of JSON structure variations.
    """
    
    def __init__(self, styles_base_path: Path):
        self.base_path = styles_base_path
        self.cache: Dict[str, Dict[str, Any]] = {}
    
    def load_style(self, style_key: str) -> Optional[Dict[str, Any]]:
        """Load a style from JSON file, with caching."""
        if style_key in self.cache:
            return self.cache[style_key]
        
        if style_key not in STYLE_MAP:
            return None
        
        token_path = self.base_path / STYLE_MAP[style_key]
        
        if not token_path.exists():
            print(f"Warning: Style file not found: {token_path}")
            return None
        
        try:
            with open(token_path, "r", encoding="utf-8") as f:
                tokens = json.load(f)
            normalized = self._normalize_tokens(tokens)
            self.cache[style_key] = normalized
            return normalized
        except (json.JSONDecodeError, IOError) as e:
            print(f"Error loading style {style_key}: {e}")
            return None
    
    def _normalize_tokens(self, tokens: Dict[str, Any]) -> Dict[str, Any]:
        """Normalize token structure to consistent format."""
        return {
            "name": tokens.get("name", "Unknown"),
            "background": self._extract_color(tokens, "background"),
            "foreground": self._extract_color(tokens, "foreground"),
            "accent": self._extract_color(tokens, "accent") or self._extract_color(tokens, "primary"),
            "accent_secondary": self._extract_color(tokens, "accentSecondary") or self._extract_color(tokens, "secondary"),
            "muted": self._extract_color(tokens, "muted") or self._extract_color(tokens, "textMuted"),
            "muted_fg": self._extract_color(tokens, "mutedForeground") or self._extract_color(tokens, "textSecondary"),
            "border": self._extract_color(tokens, "border"),
            "card": self._extract_color(tokens, "card") or self._extract_color(tokens, "surface"),
            "button_bg": self._extract_button_bg(tokens),
            "button_fg": self._extract_button_fg(tokens),
            "input_bg": self._extract_input_bg(tokens),
            "font_family": self._extract_font(tokens),
            "is_dark": self._is_dark_mode(tokens),
        }
    
    def _extract_color(self, tokens: Dict, key: str) -> str:
        """Extract color value, handling nested structures."""
        colors = tokens.get("colors", {})
        
        if key in colors and isinstance(colors[key], str):
            return colors[key]
        
        if key in colors and isinstance(colors[key], dict):
            return colors[key].get("hex", "#808080")
        
        if key == "accent" and "primary" in colors:
            primary = colors["primary"]
            if isinstance(primary, dict):
                return primary.get("red", primary.get("hex", "#808080"))
            elif isinstance(primary, str):
                return primary
        
        defaults = {
            "background": "#1a1a1a", "foreground": "#ffffff",
            "accent": "#3b82f6", "accentSecondary": "#ec4899",
            "muted": "#374151", "mutedForeground": "#9ca3af",
            "border": "#4b5563", "card": "#2d2d2d",
        }
        return defaults.get(key, "#808080")
    
    def _extract_button_bg(self, tokens: Dict) -> str:
        """Extract button background color."""
        components = tokens.get("components", {})
        button = components.get("button", {})
        primary = button.get("primary", {})
        if isinstance(primary, dict):
            bg = primary.get("background", "")
            if isinstance(bg, str) and bg.startswith("#"):
                return bg
        # Fallback to primary/accent color
        colors = tokens.get("colors", {})
        primary_color = colors.get("primary", {})
        if isinstance(primary_color, dict):
            return primary_color.get("hex", self._extract_color(tokens, "accent"))
        elif isinstance(primary_color, str):
            return primary_color
        return self._extract_color(tokens, "accent")
    
    def _extract_button_fg(self, tokens: Dict) -> str:
        """Extract button text color."""
        components = tokens.get("components", {})
        button = components.get("button", {})
        primary = button.get("primary", {})
        if isinstance(primary, dict):
            text = primary.get("text", "")
            if isinstance(text, str) and text.startswith("#"):
                return text
        return "#ffffff"
    
    def _extract_input_bg(self, tokens: Dict) -> str:
        """Extract input field background."""
        components = tokens.get("components", {})
        inp = components.get("input", {})
        if isinstance(inp, dict):
            bg = inp.get("background", "")
            if isinstance(bg, str) and bg.startswith("#"):
                return bg
        colors = tokens.get("colors", {})
        # Try card, then surface
        for key in ["card", "surface"]:
            val = colors.get(key, {})
            if isinstance(val, dict):
                return val.get("hex", "#ffffff")
            elif isinstance(val, str):
                return val
        return "#ffffff"
    
    def _extract_font(self, tokens: Dict) -> str:
        """Extract primary font family."""
        typography = tokens.get("typography", {})
        font_family = typography.get("fontFamily", {})
        if isinstance(font_family, dict):
            primary = font_family.get("primary", "Arial")
            if isinstance(primary, str):
                return primary.split(",")[0].strip().strip("'\"")
        return "Arial"
    
    def _is_dark_mode(self, tokens: Dict) -> bool:
        """Determine if style is dark mode."""
        # Check explicit mode first
        mode = tokens.get("mode", "")
        if mode.lower() == "dark":
            return True
        if mode.lower() == "light":
            return False
        
        # Fall back to luminance calculation
        bg = self._extract_color(tokens, "background")
        if bg.startswith("#"):
            try:
                r = int(bg[1:3], 16)
                g = int(bg[3:5], 16)
                b = int(bg[5:7], 16)
                luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
                return luminance < 0.5
            except ValueError:
                pass
        return True
```

---

## STEP 3: ADD HELPER FUNCTION

Add this utility function (can be method or standalone):

```python
def is_light_color(hex_color: str) -> bool:
    """Check if hex color is light (luminance > 0.5)."""
    if not hex_color or not hex_color.startswith("#"):
        return False
    try:
        r = int(hex_color[1:3], 16)
        g = int(hex_color[3:5], 16)
        b = int(hex_color[5:7], 16)
        luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
        return luminance > 0.5
    except (ValueError, IndexError):
        return False
```

---

## STEP 4: MODIFY THE APPLICATION CLASS

### 4A. Add instance variables in `__init__`:

```python
def __init__(self, root):
    self.root = root
    # ... existing code ...
    
    # ADD: Style system initialization
    self.style_loader = StyleLoader(STYLES_BASE_PATH)
    self.current_style: Dict[str, Any] = {}
    
    # Create widgets first, then apply style
    self._create_widgets()
    
    # ADD: Set default style
    self.style_var.set("Kinetic (Dark)")  # or preferred default
    self._apply_style("Kinetic (Dark)")
```

### 4B. Add style selector widget (in `_create_widgets` or equivalent):

```python
# Style selector frame - add near top of window
self.style_frame = tk.Frame(self.main_frame)
self.style_frame.pack(fill=tk.X, pady=(0, 15))

self.style_label = tk.Label(
    self.style_frame,
    text="GUI STYLE:",
    font=("Arial", 10, "bold")
)
self.style_label.pack(side=tk.LEFT, padx=(0, 10))

self.style_var = tk.StringVar()
self.style_dropdown = ttk.Combobox(
    self.style_frame,
    textvariable=self.style_var,
    values=list(STYLE_MAP.keys()),
    state="readonly",
    width=25
)
self.style_dropdown.pack(side=tk.LEFT)
self.style_dropdown.bind("<<ComboboxSelected>>", self._on_style_change)
```

### 4C. Add style change handler:

```python
def _on_style_change(self, event=None):
    """Handle style dropdown change."""
    selected_style = self.style_var.get()
    self._apply_style(selected_style)
```

### 4D. Add the `_apply_style` method:

```python
def _apply_style(self, style_key: str):
    """Apply selected style to all widgets."""
    style = self.style_loader.load_style(style_key)
    
    if not style:
        messagebox.showerror("Style Error", f"Could not load style: {style_key}")
        return
    
    self.current_style = style
    
    # Extract colors
    bg = style["background"]
    fg = style["foreground"]
    accent = style["accent"]
    accent_sec = style["accent_secondary"]
    muted = style["muted"]
    muted_fg = style["muted_fg"]
    border = style["border"]
    card = style["card"]
    btn_bg = style["button_bg"]
    btn_fg = style["button_fg"]
    input_bg = style["input_bg"]
    is_dark = style["is_dark"]
    
    # Determine entry text color
    entry_fg = fg if is_dark else "#000000"
    
    # === APPLY TO ROOT AND FRAMES ===
    self.root.configure(bg=bg)
    self.main_frame.configure(bg=bg)
    # ... apply to all other frames ...
    
    # === APPLY TO LABELS ===
    # Title labels: accent color
    # self.title_label.configure(bg=bg, fg=accent)
    # Regular labels: foreground color
    # self.some_label.configure(bg=bg, fg=fg)
    # Muted labels: muted_fg color
    # self.hint_label.configure(bg=bg, fg=muted_fg)
    
    # === APPLY TO ENTRIES ===
    # self.some_entry.configure(
    #     bg=input_bg,
    #     fg=entry_fg,
    #     insertbackground=accent,
    #     highlightthickness=2,
    #     highlightbackground=border,
    #     highlightcolor=accent
    # )
    
    # === APPLY TO BUTTONS ===
    # self.action_button.configure(
    #     bg=btn_bg,
    #     fg=btn_fg,
    #     activebackground=accent_sec if accent_sec else accent,
    #     activeforeground=btn_fg,
    #     highlightthickness=0,
    #     bd=0
    # )
    
    # === APPLY TO TEXT WIDGETS ===
    # self.output_text.configure(
    #     bg=card if card else bg,
    #     fg=fg,
    #     insertbackground=accent
    # )
    
    # === APPLY TO TTK COMBOBOX (special handling) ===
    ttk_style = ttk.Style()
    ttk_style.theme_use("clam")
    ttk_style.configure(
        "TCombobox",
        fieldbackground=input_bg,
        background=input_bg,
        foreground=entry_fg,
        arrowcolor=accent
    )
    
    # Force UI refresh
    self.root.update_idletasks()
```

---

## STEP 5: WIDGET STYLING REFERENCE

Use this table to determine which style properties apply to each widget type:

| Widget Type | Background | Foreground | Border/Highlight | Special |
|-------------|------------|------------|------------------|---------|
| Root/Frame | `bg` | - | - | - |
| Label (title) | `bg` | `accent` | - | - |
| Label (normal) | `bg` | `fg` | - | - |
| Label (muted) | `bg` | `muted_fg` | - | - |
| Entry | `input_bg` | `entry_fg` | `border`, `accent` | `insertbackground=accent` |
| Button (primary) | `btn_bg` | `btn_fg` | - | `activebackground=accent_sec` |
| Button (secondary) | `bg` | `fg` | `border` | - |
| Text | `card` or `bg` | `fg` | - | `insertbackground=accent` |
| Listbox | `input_bg` | `entry_fg` | `border` | `selectbackground=accent` |
| Canvas | `bg` | - | - | Custom drawing with style colors |

---

## STEP 6: STORE WIDGET REFERENCES

For easy bulk styling, store widgets in lists during creation:

```python
# In __init__ or class body
self.all_frames = []
self.all_labels = []
self.all_entries = []
self.all_buttons = []

# During widget creation
frame = tk.Frame(parent)
self.all_frames.append(frame)

label = tk.Label(parent, text="Example")
self.all_labels.append(label)

# In _apply_style, loop through lists
for frame in self.all_frames:
    frame.configure(bg=bg)

for label in self.all_labels:
    label.configure(bg=bg, fg=fg)
```

---

## QUICK RETROFIT CHECKLIST

- [ ] Add imports (json, Path, typing)
- [ ] Add STYLES_BASE_PATH and STYLE_MAP constants
- [ ] Add StyleLoader class
- [ ] Add is_light_color helper function
- [ ] Initialize style_loader in __init__
- [ ] Add style selector widgets (frame, label, dropdown)
- [ ] Add _on_style_change handler
- [ ] Add _apply_style method
- [ ] Update _apply_style with all widget references
- [ ] Test with each style to verify colors apply correctly

---

## EXAMPLE: MINIMAL RETROFIT

For a simple app with just a few widgets:

```python
# Before: Simple app without styling
class MyApp:
    def __init__(self, root):
        self.root = root
        self.label = tk.Label(root, text="Hello")
        self.label.pack()
        self.button = tk.Button(root, text="Click")
        self.button.pack()

# After: With multi-style support
class MyApp:
    def __init__(self, root):
        self.root = root
        self.style_loader = StyleLoader(STYLES_BASE_PATH)
        
        # Style selector
        self.style_var = tk.StringVar(value="Kinetic (Dark)")
        self.dropdown = ttk.Combobox(root, textvariable=self.style_var,
                                      values=list(STYLE_MAP.keys()), state="readonly")
        self.dropdown.pack()
        self.dropdown.bind("<<ComboboxSelected>>", lambda e: self._apply_style(self.style_var.get()))
        
        # Original widgets
        self.label = tk.Label(root, text="Hello")
        self.label.pack()
        self.button = tk.Button(root, text="Click")
        self.button.pack()
        
        # Apply initial style
        self._apply_style("Kinetic (Dark)")
    
    def _apply_style(self, style_key):
        s = self.style_loader.load_style(style_key)
        if not s: return
        self.root.configure(bg=s["background"])
        self.label.configure(bg=s["background"], fg=s["foreground"])
        self.button.configure(bg=s["button_bg"], fg=s["button_fg"])
```

---

## REFERENCE: WORKING EXAMPLE

See complete implementation at:
```
E:\CLAUDE_Workspace\Claude\Report_Files\GUI_Design_Center_Library\Example\mortgage_calculator_multi_style.py
```

---

*Guide Version: 1.1*
*Last Updated: 2025-12-29*
*Author: Joey Woody*

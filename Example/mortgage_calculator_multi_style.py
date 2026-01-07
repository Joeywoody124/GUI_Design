"""
Mortgage Calculator with Multiple GUI Styles
=============================================
Demonstrates runtime GUI style switching using the GUI Design Center Library.
Loads style tokens from JSON files and applies them dynamically.

Author: Joey Woody
Created: 2025-12-24
Style Library: E:\CLAUDE_Workspace\Claude\Report_Files\GUI_Design_Center_Library
"""

import tkinter as tk
from tkinter import ttk, messagebox
import json
import os
from pathlib import Path
from typing import Dict, Any, Optional


# ============================================================================
# STYLE CONFIGURATION
# ============================================================================
# Define the path to the GUI Design Center Library styles folder.
# Update this path if the library is located elsewhere.
STYLES_BASE_PATH = Path(r"E:\CLAUDE_Workspace\Claude\Report_Files\GUI_Design_Center_Library\styles")

# Map style folder names to their token file paths.
STYLE_MAP = {
    "Kinetic (Dark)": "kinetic/tokens.json",
    "Bauhaus (Light)": "bauhaus/tokens.json",
    "Enterprise (Light)": "enterprise/tokens.json",
    "Cyberpunk (Dark)": "cyberpunk/tokens.json",
    "Academia (Dark)": "academia/tokens.json",
    "Sketch (Light)": "sketch/tokens.json",
    "Playful Geometric (Light)": "playful-geometric/tokens.json",
}


# ============================================================================
# STYLE LOADER CLASS
# ============================================================================
class StyleLoader:
    """
    Loads and normalizes style tokens from JSON files.
    Provides a consistent interface regardless of token structure variations.
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
            # Normalize the token structure for consistent access.
            normalized = self._normalize_tokens(tokens)
            self.cache[style_key] = normalized
            return normalized
        except (json.JSONDecodeError, IOError) as e:
            print(f"Error loading style {style_key}: {e}")
            return None
    
    def _normalize_tokens(self, tokens: Dict[str, Any]) -> Dict[str, Any]:
        """
        Normalize token structure to a consistent format.
        Different styles may have different JSON structures.
        """
        normalized = {
            "name": tokens.get("name", "Unknown"),
            "background": self._extract_color(tokens, "background"),
            "foreground": self._extract_color(tokens, "foreground"),
            "accent": self._extract_color(tokens, "accent"),
            "accent_secondary": self._extract_color(tokens, "accentSecondary"),
            "muted": self._extract_color(tokens, "muted"),
            "muted_fg": self._extract_color(tokens, "mutedForeground"),
            "border": self._extract_color(tokens, "border"),
            "card": self._extract_color(tokens, "card"),
            "button_bg": self._extract_button_bg(tokens),
            "button_fg": self._extract_button_fg(tokens),
            "input_bg": self._extract_input_bg(tokens),
            "font_family": self._extract_font(tokens),
            "is_dark": self._is_dark_mode(tokens),
        }
        return normalized
    
    def _extract_color(self, tokens: Dict, key: str) -> str:
        """Extract a color value from tokens, handling nested structures."""
        colors = tokens.get("colors", {})
        
        # Direct value (string).
        if key in colors and isinstance(colors[key], str):
            return colors[key]
        
        # Nested dict with 'hex' key.
        if key in colors and isinstance(colors[key], dict):
            return colors[key].get("hex", "#808080")
        
        # Special handling for primary colors in Bauhaus.
        if key == "accent" and "primary" in colors:
            primary = colors["primary"]
            if isinstance(primary, dict):
                return primary.get("red", primary.get("hex", "#808080"))
        
        # Fallback defaults based on key.
        defaults = {
            "background": "#1a1a1a",
            "foreground": "#ffffff",
            "accent": "#3b82f6",
            "accentSecondary": "#ec4899",
            "muted": "#374151",
            "mutedForeground": "#9ca3af",
            "border": "#4b5563",
            "card": "#2d2d2d",
        }
        return defaults.get(key, "#808080")
    
    def _extract_button_bg(self, tokens: Dict) -> str:
        """Extract button background color."""
        components = tokens.get("components", {})
        button = components.get("button", {})
        
        # Try primary button first.
        primary = button.get("primary", {})
        if isinstance(primary, dict):
            bg = primary.get("background", "")
            if isinstance(bg, str) and bg.startswith("#"):
                return bg
        
        # Fall back to accent color.
        return self._extract_color(tokens, "accent")
    
    def _extract_button_fg(self, tokens: Dict) -> str:
        """Extract button foreground/text color."""
        components = tokens.get("components", {})
        button = components.get("button", {})
        primary = button.get("primary", {})
        
        if isinstance(primary, dict):
            text = primary.get("text", "")
            if isinstance(text, str) and text.startswith("#"):
                return text
        
        return "#ffffff"
    
    def _extract_input_bg(self, tokens: Dict) -> str:
        """Extract input field background color."""
        components = tokens.get("components", {})
        inp = components.get("input", {})
        
        if isinstance(inp, dict):
            bg = inp.get("background", "")
            if isinstance(bg, str) and bg.startswith("#"):
                return bg
        
        colors = tokens.get("colors", {})
        card = colors.get("card", {})
        if isinstance(card, dict):
            return card.get("hex", "#ffffff")
        elif isinstance(card, str):
            return card
        
        return "#ffffff"
    
    def _extract_font(self, tokens: Dict) -> str:
        """Extract primary font family."""
        typography = tokens.get("typography", {})
        font_family = typography.get("fontFamily", {})
        
        if isinstance(font_family, dict):
            primary = font_family.get("primary", "Arial")
            # Clean up font name (remove quotes, fallbacks).
            if isinstance(primary, str):
                primary = primary.split(",")[0].strip().strip("'\"")
                return primary
        
        return "Arial"
    
    def _is_dark_mode(self, tokens: Dict) -> bool:
        """Determine if the style is dark mode based on background color."""
        bg = self._extract_color(tokens, "background")
        if bg.startswith("#"):
            # Convert hex to RGB and check luminance.
            try:
                r = int(bg[1:3], 16)
                g = int(bg[3:5], 16)
                b = int(bg[5:7], 16)
                luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
                return luminance < 0.5
            except ValueError:
                pass
        return True  # Default to dark mode assumption.


# ============================================================================
# MORTGAGE CALCULATOR APPLICATION
# ============================================================================
class MortgageCalculator:
    """
    Main application window for mortgage calculations.
    Supports runtime style switching between multiple GUI themes.
    """
    
    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title("Mortgage Calculator - Multi-Style Demo")
        self.root.geometry("600x700")
        self.root.minsize(500, 600)
        
        # Initialize style loader.
        self.style_loader = StyleLoader(STYLES_BASE_PATH)
        self.current_style: Dict[str, Any] = {}
        
        # Create all widgets first, then apply initial style.
        self._create_widgets()
        
        # Set default style to Kinetic.
        self.style_var.set("Kinetic (Dark)")
        self._apply_style("Kinetic (Dark)")
    
    def _create_widgets(self):
        """Create all application widgets."""
        # Main container frame.
        self.main_frame = tk.Frame(self.root)
        self.main_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=20)
        
        # ----------------------------------------------------------------
        # STYLE SELECTOR SECTION
        # ----------------------------------------------------------------
        self.style_frame = tk.Frame(self.main_frame)
        self.style_frame.pack(fill=tk.X, pady=(0, 20))
        
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
        
        # ----------------------------------------------------------------
        # HEADER SECTION
        # ----------------------------------------------------------------
        self.header_frame = tk.Frame(self.main_frame)
        self.header_frame.pack(fill=tk.X, pady=(0, 20))
        
        self.title_label = tk.Label(
            self.header_frame,
            text="MORTGAGE CALCULATOR",
            font=("Arial", 24, "bold")
        )
        self.title_label.pack(anchor=tk.W)
        
        self.subtitle_label = tk.Label(
            self.header_frame,
            text="Calculate your monthly payments and total costs",
            font=("Arial", 11)
        )
        self.subtitle_label.pack(anchor=tk.W, pady=(5, 0))
        
        # ----------------------------------------------------------------
        # INPUT SECTION
        # ----------------------------------------------------------------
        self.input_frame = tk.Frame(self.main_frame)
        self.input_frame.pack(fill=tk.X, pady=(0, 20))
        
        # Loan Amount.
        self._create_input_row(
            self.input_frame,
            "Loan Amount ($):",
            "loan_amount",
            "300000"
        )
        
        # Interest Rate.
        self._create_input_row(
            self.input_frame,
            "Interest Rate (%):",
            "interest_rate",
            "6.5"
        )
        
        # Loan Term.
        self._create_input_row(
            self.input_frame,
            "Loan Term (years):",
            "loan_term",
            "30"
        )
        
        # Down Payment.
        self._create_input_row(
            self.input_frame,
            "Down Payment ($):",
            "down_payment",
            "60000"
        )
        
        # Property Tax (annual).
        self._create_input_row(
            self.input_frame,
            "Annual Property Tax ($):",
            "property_tax",
            "3600"
        )
        
        # Home Insurance (annual).
        self._create_input_row(
            self.input_frame,
            "Annual Insurance ($):",
            "insurance",
            "1200"
        )
        
        # ----------------------------------------------------------------
        # CALCULATE BUTTON
        # ----------------------------------------------------------------
        self.button_frame = tk.Frame(self.main_frame)
        self.button_frame.pack(fill=tk.X, pady=(10, 20))
        
        self.calc_button = tk.Button(
            self.button_frame,
            text="CALCULATE",
            font=("Arial", 12, "bold"),
            cursor="hand2",
            command=self._calculate
        )
        self.calc_button.pack(fill=tk.X, ipady=12)
        
        # ----------------------------------------------------------------
        # RESULTS SECTION
        # ----------------------------------------------------------------
        self.results_frame = tk.Frame(self.main_frame, relief=tk.RIDGE, bd=2)
        self.results_frame.pack(fill=tk.BOTH, expand=True, pady=(0, 10))
        
        self.results_title = tk.Label(
            self.results_frame,
            text="CALCULATION RESULTS",
            font=("Arial", 14, "bold")
        )
        self.results_title.pack(anchor=tk.W, padx=15, pady=(15, 10))
        
        # Results text widget.
        self.results_text = tk.Text(
            self.results_frame,
            height=12,
            font=("Consolas", 11),
            wrap=tk.WORD,
            state=tk.DISABLED,
            relief=tk.FLAT,
            padx=10,
            pady=10
        )
        self.results_text.pack(fill=tk.BOTH, expand=True, padx=15, pady=(0, 15))
        
        # ----------------------------------------------------------------
        # FOOTER / STYLE INFO
        # ----------------------------------------------------------------
        self.footer_frame = tk.Frame(self.main_frame)
        self.footer_frame.pack(fill=tk.X, pady=(10, 0))
        
        self.style_info_label = tk.Label(
            self.footer_frame,
            text="Current Style: Kinetic",
            font=("Arial", 9)
        )
        self.style_info_label.pack(anchor=tk.W)
    
    def _create_input_row(self, parent: tk.Frame, label_text: str, 
                          attr_name: str, default_value: str):
        """Create a labeled input row."""
        row_frame = tk.Frame(parent)
        row_frame.pack(fill=tk.X, pady=5)
        
        label = tk.Label(
            row_frame,
            text=label_text,
            font=("Arial", 10),
            width=22,
            anchor=tk.W
        )
        label.pack(side=tk.LEFT)
        
        entry = tk.Entry(
            row_frame,
            font=("Arial", 11),
            relief=tk.FLAT,
            bd=0
        )
        entry.insert(0, default_value)
        entry.pack(side=tk.LEFT, fill=tk.X, expand=True, ipady=8, padx=(0, 0))
        
        # Store references for styling.
        setattr(self, f"{attr_name}_label", label)
        setattr(self, f"{attr_name}_entry", entry)
        
        # Keep track of all input rows for styling.
        if not hasattr(self, "input_labels"):
            self.input_labels = []
            self.input_entries = []
        self.input_labels.append(label)
        self.input_entries.append(entry)
    
    def _on_style_change(self, event=None):
        """Handle style dropdown change event."""
        selected_style = self.style_var.get()
        self._apply_style(selected_style)
    
    def _apply_style(self, style_key: str):
        """Apply the selected style to all widgets."""
        style = self.style_loader.load_style(style_key)
        
        if not style:
            messagebox.showerror(
                "Style Error",
                f"Could not load style: {style_key}\n\n"
                f"Check that the styles folder exists at:\n{STYLES_BASE_PATH}"
            )
            return
        
        self.current_style = style
        
        # Extract colors.
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
        
        # Determine entry text color based on input background.
        entry_fg = fg if self._is_light_color(input_bg) else "#000000"
        if is_dark:
            entry_fg = fg
        
        # ----------------------------------------------------------------
        # APPLY ROOT AND MAIN FRAME STYLES
        # ----------------------------------------------------------------
        self.root.configure(bg=bg)
        self.main_frame.configure(bg=bg)
        
        # ----------------------------------------------------------------
        # APPLY STYLE SELECTOR STYLES
        # ----------------------------------------------------------------
        self.style_frame.configure(bg=bg)
        self.style_label.configure(bg=bg, fg=accent)
        
        # Configure ttk Combobox style.
        ttk_style = ttk.Style()
        ttk_style.theme_use("clam")
        ttk_style.configure(
            "TCombobox",
            fieldbackground=input_bg,
            background=input_bg,
            foreground=entry_fg if not is_dark else fg,
            arrowcolor=accent
        )
        
        # ----------------------------------------------------------------
        # APPLY HEADER STYLES
        # ----------------------------------------------------------------
        self.header_frame.configure(bg=bg)
        self.title_label.configure(bg=bg, fg=accent)
        self.subtitle_label.configure(bg=bg, fg=muted_fg)
        
        # ----------------------------------------------------------------
        # APPLY INPUT STYLES
        # ----------------------------------------------------------------
        self.input_frame.configure(bg=bg)
        
        for label in self.input_labels:
            label.master.configure(bg=bg)
            label.configure(bg=bg, fg=fg)
        
        for entry in self.input_entries:
            entry.configure(
                bg=input_bg,
                fg=entry_fg,
                insertbackground=accent,
                highlightthickness=2,
                highlightbackground=border,
                highlightcolor=accent
            )
        
        # ----------------------------------------------------------------
        # APPLY BUTTON STYLES
        # ----------------------------------------------------------------
        self.button_frame.configure(bg=bg)
        self.calc_button.configure(
            bg=btn_bg,
            fg=btn_fg,
            activebackground=accent_sec if accent_sec else accent,
            activeforeground=btn_fg,
            highlightthickness=0,
            bd=0
        )
        
        # ----------------------------------------------------------------
        # APPLY RESULTS STYLES
        # ----------------------------------------------------------------
        results_bg = card if card else bg
        self.results_frame.configure(bg=results_bg, highlightbackground=border)
        self.results_title.configure(bg=results_bg, fg=accent)
        
        results_text_fg = fg
        if not is_dark and self._is_light_color(results_bg):
            results_text_fg = "#1a1a1a"
        
        self.results_text.configure(
            bg=results_bg,
            fg=results_text_fg,
            insertbackground=accent
        )
        
        # ----------------------------------------------------------------
        # APPLY FOOTER STYLES
        # ----------------------------------------------------------------
        self.footer_frame.configure(bg=bg)
        self.style_info_label.configure(
            bg=bg,
            fg=muted_fg,
            text=f"Current Style: {style['name']}"
        )
        
        # Force refresh.
        self.root.update_idletasks()
    
    def _is_light_color(self, hex_color: str) -> bool:
        """Check if a hex color is light (luminance > 0.5)."""
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
    
    def _calculate(self):
        """Perform mortgage calculation and display results."""
        try:
            # Parse input values.
            loan_amount = float(self.loan_amount_entry.get().replace(",", ""))
            interest_rate = float(self.interest_rate_entry.get())
            loan_term = int(self.loan_term_entry.get())
            down_payment = float(self.down_payment_entry.get().replace(",", ""))
            property_tax = float(self.property_tax_entry.get().replace(",", ""))
            insurance = float(self.insurance_entry.get().replace(",", ""))
            
            # Validate inputs.
            if loan_amount <= 0:
                raise ValueError("Loan amount must be positive")
            if interest_rate < 0 or interest_rate > 30:
                raise ValueError("Interest rate should be between 0% and 30%")
            if loan_term <= 0 or loan_term > 50:
                raise ValueError("Loan term should be between 1 and 50 years")
            if down_payment < 0:
                raise ValueError("Down payment cannot be negative")
            
            # Calculate principal (loan amount minus down payment).
            principal = loan_amount - down_payment
            
            if principal <= 0:
                raise ValueError("Down payment exceeds loan amount")
            
            # Monthly interest rate.
            monthly_rate = (interest_rate / 100) / 12
            
            # Total number of payments.
            num_payments = loan_term * 12
            
            # Calculate monthly principal + interest (P&I).
            if monthly_rate > 0:
                monthly_pi = principal * (
                    monthly_rate * (1 + monthly_rate) ** num_payments
                ) / (
                    (1 + monthly_rate) ** num_payments - 1
                )
            else:
                monthly_pi = principal / num_payments
            
            # Monthly property tax and insurance.
            monthly_tax = property_tax / 12
            monthly_ins = insurance / 12
            
            # Total monthly payment (PITI).
            total_monthly = monthly_pi + monthly_tax + monthly_ins
            
            # Total cost over loan term.
            total_interest = (monthly_pi * num_payments) - principal
            total_cost = (total_monthly * num_payments) + down_payment
            
            # Format results.
            results = (
                f"{'=' * 45}\n"
                f"  MONTHLY PAYMENT BREAKDOWN\n"
                f"{'=' * 45}\n\n"
                f"  Principal & Interest:    ${monthly_pi:>12,.2f}\n"
                f"  Property Tax:            ${monthly_tax:>12,.2f}\n"
                f"  Insurance:               ${monthly_ins:>12,.2f}\n"
                f"  {'─' * 41}\n"
                f"  TOTAL MONTHLY:           ${total_monthly:>12,.2f}\n\n"
                f"{'=' * 45}\n"
                f"  LOAN SUMMARY\n"
                f"{'=' * 45}\n\n"
                f"  Principal Amount:        ${principal:>12,.2f}\n"
                f"  Down Payment:            ${down_payment:>12,.2f}\n"
                f"  Total Interest:          ${total_interest:>12,.2f}\n"
                f"  {'─' * 41}\n"
                f"  TOTAL COST:              ${total_cost:>12,.2f}\n"
            )
            
            # Display results.
            self.results_text.configure(state=tk.NORMAL)
            self.results_text.delete(1.0, tk.END)
            self.results_text.insert(tk.END, results)
            self.results_text.configure(state=tk.DISABLED)
            
        except ValueError as e:
            messagebox.showerror("Input Error", str(e))
        except Exception as e:
            messagebox.showerror("Calculation Error", f"An error occurred: {e}")


# ============================================================================
# MAIN ENTRY POINT
# ============================================================================
def main():
    """Application entry point."""
    root = tk.Tk()
    
    # Set window icon (optional, comment out if no icon available).
    # root.iconbitmap("path/to/icon.ico")
    
    app = MortgageCalculator(root)
    
    # Center window on screen.
    root.update_idletasks()
    width = root.winfo_width()
    height = root.winfo_height()
    x = (root.winfo_screenwidth() // 2) - (width // 2)
    y = (root.winfo_screenheight() // 2) - (height // 2)
    root.geometry(f"+{x}+{y}")
    
    root.mainloop()


if __name__ == "__main__":
    main()

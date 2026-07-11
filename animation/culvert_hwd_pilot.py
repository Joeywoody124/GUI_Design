"""
Culvert HW/D Check - Hydrolight Animation Pilot
================================================
Pilot tool demonstrating the Hydrolight theme with purposeful
micro-animation from hydrolight_anim.py:

  - HydroRipple runs while the (threaded) computation works
  - count_up rolls the HW/D ratio onto the gauge readout
  - HydroGaugeBar rises to the ratio (red past the 1.2 criterion)
  - fade_color eases the verdict badge between hydro states
  - pulse draws the eye only when the verdict CHANGES state
  - The window stays responsive throughout (run_threaded)

SCDOT criterion: culvert headwater-to-rise ratio HW/D <= 1.2.

Run: python culvert_hwd_pilot.py
Author: Joey Woody / J. Bragg Consulting Inc.
Created: 2026-07-10
"""

import json
import time
import tkinter as tk
from pathlib import Path

import hydrolight_anim as anim

# ============================================================================
# THEME - loaded from the Hydrolight tokens, with hardcoded fallbacks so the
# pilot still runs if moved outside the library.
# ============================================================================
TOKENS_PATH = Path(__file__).parent.parent / "styles" / "hydrolight" / "tokens.json"

THEME = {
    "root_bg": "#F0F9FF", "header_bg": "#075985", "header_fg": "#FFFFFF",
    "label_fg": "#082F49", "title_fg": "#0284C7", "unit_fg": "#475569",
    "entry_bg": "#FFFFFF", "entry_border": "#BAE6FD", "entry_focus": "#0284C7",
    "button_bg": "#0284C7", "button_fg": "#FFFFFF", "button_active": "#06B6D4",
    "status_flood": {"fg": "#DC2626", "bg": "#FEF2F2"},
    "status_action": {"fg": "#D97706", "bg": "#FFFBEB"},
    "status_normal": {"fg": "#059669", "bg": "#ECFDF5"},
}

try:
    with open(TOKENS_PATH, "r", encoding="utf-8") as f:
        THEME.update(json.load(f).get("tkinter", {}))
except (OSError, json.JSONDecodeError):
    pass  # Fallback theme above keeps the pilot self-contained.

HWD_LIMIT = 1.2  # SCDOT allowable headwater-to-rise ratio.


class CulvertPilot:
    """Small single-purpose tool: enter HW and D, get an animated verdict."""

    def __init__(self, root: tk.Tk) -> None:
        self.root = root
        root.title("Culvert HW/D Check - Hydrolight Pilot")
        root.configure(bg=THEME["root_bg"])
        root.resizable(False, False)
        self._last_state = None  # Tracks verdict so pulse fires on change only.
        self._build()

    # ------------------------------------------------------------------ UI
    def _build(self) -> None:
        pad = {"padx": 24}

        # Header approximates the depth gradient with solid Thalweg blue.
        header = tk.Frame(self.root, bg=THEME["header_bg"])
        header.pack(fill=tk.X)
        tk.Label(header, text="CULVERT HW/D CHECK", bg=THEME["header_bg"],
                 fg=THEME["header_fg"], font=("Segoe UI", 14, "bold")
                 ).pack(anchor="w", padx=24, pady=(14, 0))
        tk.Label(header, text=f"SCDOT criterion: HW/D ≤ {HWD_LIMIT}",
                 bg=THEME["header_bg"], fg="#BAE6FD",
                 font=("Segoe UI", 9)).pack(anchor="w", padx=24, pady=(0, 12))

        body = tk.Frame(self.root, bg=THEME["root_bg"])
        body.pack(fill=tk.BOTH, expand=True, pady=(16, 20))

        # Numeric inputs in Consolas per Hydrolight (decimals align).
        self.hw_entry = self._entry(body, "Headwater Depth", "FT", "4.80", pad)
        self.d_entry = self._entry(body, "Culvert Rise", "FT", "4.00", pad)

        # Primary action.
        self.run_btn = tk.Button(
            body, text="Run Check", command=self._run,
            bg=THEME["button_bg"], fg=THEME["button_fg"],
            activebackground=THEME["button_active"],
            activeforeground=THEME["button_fg"],
            font=("Segoe UI", 10, "bold"), bd=0, padx=22, pady=8,
            cursor="hand2")
        self.run_btn.pack(anchor="w", **pad, pady=(14, 4))

        # Ripple sits under the button; only visible while computing.
        self.ripple = anim.HydroRipple(body, width=352, height=8,
                                       bg=THEME["root_bg"])
        self.ripple.pack(anchor="w", **pad, pady=(4, 10))

        # Gauge readout: label, mono value plus unit, capacity bar.
        gauge = tk.Frame(body, bg=THEME["root_bg"])
        gauge.pack(anchor="w", fill=tk.X, **pad)
        tk.Label(gauge, text="HW/D RATIO", bg=THEME["root_bg"],
                 fg=THEME["unit_fg"], font=("Segoe UI", 8, "bold")
                 ).pack(anchor="w")
        row = tk.Frame(gauge, bg=THEME["root_bg"])
        row.pack(anchor="w", fill=tk.X)
        self.value_lbl = tk.Label(row, text="0.00", bg=THEME["root_bg"],
                                  fg=THEME["label_fg"],
                                  font=("Consolas", 26, "bold"))
        self.value_lbl.pack(side=tk.LEFT)
        self.badge = tk.Label(row, text="  ~ ENTER VALUES  ",
                              bg=THEME["root_bg"], fg=THEME["unit_fg"],
                              font=("Segoe UI", 9, "bold"))
        self.badge.pack(side=tk.RIGHT, padx=(20, 0))

        # Bar scales to 2x the allowable so exceedance has room to show.
        self.bar = anim.HydroGaugeBar(gauge, width=352, height=7,
                                      bg=THEME["root_bg"])
        self.bar.pack(anchor="w", pady=(6, 0))

    def _entry(self, parent: tk.Frame, label: str, unit: str,
               default: str, pad: dict) -> tk.Entry:
        """Labeled numeric entry with Hydrolight focus colors."""
        tk.Label(parent, text=f"{label}  ({unit})", bg=THEME["root_bg"],
                 fg=THEME["label_fg"], font=("Segoe UI", 10, "bold")
                 ).pack(anchor="w", **pad, pady=(6, 2))
        entry = tk.Entry(parent, width=16, font=("Consolas", 12),
                         bg=THEME["entry_bg"], fg=THEME["label_fg"],
                         insertbackground=THEME["entry_focus"], relief=tk.FLAT,
                         highlightthickness=1,
                         highlightbackground=THEME["entry_border"],
                         highlightcolor=THEME["entry_focus"])
        entry.insert(0, default)
        entry.pack(anchor="w", **pad)
        return entry

    # ------------------------------------------------------------ behavior
    def _run(self) -> None:
        """Validate, then compute on a worker thread with the ripple running."""
        try:
            hw = float(self.hw_entry.get())
            d = float(self.d_entry.get())
            if d <= 0:
                raise ValueError("Culvert rise must be greater than zero.")
        except ValueError:
            self._set_badge("▲ INVALID INPUT", THEME["status_flood"])
            anim.pulse(self.badge, THEME["status_flood"]["fg"], option="fg")
            return

        self.run_btn.configure(state=tk.DISABLED)
        self.ripple.start()

        def compute() -> float:
            # Stand-in for real work (raster sampling, model run, etc.).
            # Runs off the UI thread, so the ripple keeps moving.
            time.sleep(1.2)
            return hw / d

        anim.run_threaded(self.root, compute,
                          on_done=self._show_result,
                          on_error=self._show_error)

    def _show_result(self, ratio: float) -> None:
        """Back on the UI thread: animate the verdict in."""
        self.ripple.stop()
        self.run_btn.configure(state=tk.NORMAL)

        # Roll the number and raise the bar (bar spans 0 to 2x allowable).
        anim.count_up(self.value_lbl, ratio, duration_ms=700)
        self.bar.set_fraction(ratio / (2 * HWD_LIMIT), duration_ms=900)

        if ratio <= HWD_LIMIT:
            state, text, colors = "ok", "● WITHIN CRITERIA", THEME["status_normal"]
        else:
            state, text, colors = "fail", f"▲ EXCEEDS {HWD_LIMIT}", THEME["status_flood"]
            # Exceedance also recolors the bar fill (handled by HydroGaugeBar
            # when fraction > 1.0), so push the raw ratio through instead.
            self.bar.set_fraction(ratio / HWD_LIMIT, duration_ms=900)

        self._set_badge(text, colors)
        if state != self._last_state:
            # Pulse only when the verdict CHANGES - motion carries meaning.
            anim.pulse(self.badge, colors["fg"], option="fg")
        self._last_state = state

    def _show_error(self, exc: Exception) -> None:
        self.ripple.stop()
        self.run_btn.configure(state=tk.NORMAL)
        self._set_badge(f"▲ {exc}", THEME["status_flood"])

    def _set_badge(self, text: str, colors: dict) -> None:
        """Fade the badge to its new state colors instead of snapping."""
        self.badge.configure(text=f"  {text}  ")
        anim.fade_color(self.badge, "fg", colors["fg"], duration_ms=300)
        anim.fade_color(self.badge, "bg", colors["bg"], duration_ms=300)


if __name__ == "__main__":
    root = tk.Tk()
    CulvertPilot(root)
    root.mainloop()

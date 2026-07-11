"""
Hydrolight Animation Module
===========================
Reusable micro-animation toolkit for tkinter GUIs styled with the
GUI Design Center Library (default theme: Hydrolight).

Design rules (from HYDROLIGHT.md):
  - Motion is slow and easing. Water never jitters.
  - Animation communicates state (results arriving, criteria failing,
    work progressing). It never decorates.
  - Everything respects the ANIMATIONS_ENABLED kill switch: with
    animations off, every call jumps straight to its final state.

Public API:
  set_animations_enabled(flag)      Global kill switch
  animate(widget, ...)              Generic eased ticker (building block)
  fade_color(widget, option, ...)   Smooth color transition on any widget
  count_up(label, to_value, ...)    Numeric readout counts to its value
  pulse(widget, color, ...)         Draw-the-eye pulse on state change
  HydroGaugeBar(parent, ...)        Gradient capacity bar with rise fill
  HydroRipple(parent, ...)          Indeterminate wave progress bar
  run_threaded(widget, work, ...)   Keep the UI alive during real work

Author: Joey Woody / J. Bragg Consulting Inc.
Created: 2026-07-10
Library: E:\\CLAUDE_Workspace\\Claude\\Report_Files\\GUI_Design_Center_Library
"""

import math
import queue
import threading
import tkinter as tk
from typing import Any, Callable, Dict, Optional, Tuple

# ============================================================================
# GLOBAL KILL SWITCH
# ============================================================================
# When False, every animation jumps immediately to its final state.
# Flip at runtime with set_animations_enabled(False) for slow machines,
# remote desktop sessions, or user preference.
ANIMATIONS_ENABLED = True

# Frame interval in milliseconds (about 30 fps - smooth without burning CPU).
FRAME_MS = 33


def set_animations_enabled(flag: bool) -> None:
    """Enable or disable all animations globally."""
    global ANIMATIONS_ENABLED
    ANIMATIONS_ENABLED = bool(flag)


# ============================================================================
# EASING FUNCTIONS
# ============================================================================
# All take normalized time t in [0, 1] and return eased progress in [0, 1].

def ease_out_cubic(t: float) -> float:
    """Fast start, gentle settle. Default for result reveals."""
    return 1.0 - (1.0 - t) ** 3


def ease_in_out(t: float) -> float:
    """Symmetric acceleration/deceleration. Good for back-and-forth."""
    return 0.5 * (1.0 - math.cos(math.pi * t))


def linear(t: float) -> float:
    """Constant rate. Rarely the right choice for UI."""
    return t


# ============================================================================
# COLOR UTILITIES
# ============================================================================

def _widget_rgb(widget: tk.Misc, color: str) -> Tuple[int, int, int]:
    """
    Resolve any tk color (hex or name like 'SystemButtonFace')
    to 8-bit RGB using the widget's own color database.
    """
    r16, g16, b16 = widget.winfo_rgb(color)
    return r16 // 257, g16 // 257, b16 // 257


def lerp_color(widget: tk.Misc, from_color: str, to_color: str,
               t: float) -> str:
    """Interpolate between two colors at progress t, returning hex."""
    r0, g0, b0 = _widget_rgb(widget, from_color)
    r1, g1, b1 = _widget_rgb(widget, to_color)
    r = round(r0 + (r1 - r0) * t)
    g = round(g0 + (g1 - g0) * t)
    b = round(b0 + (b1 - b0) * t)
    return f"#{r:02x}{g:02x}{b:02x}"


# ============================================================================
# ANIMATION REGISTRY
# ============================================================================
# Tracks the pending after() callback per (widget, tag) so that starting a
# new animation on the same target cancels the old one instead of having
# two tickers fight over the same property.
_registry: Dict[Tuple[str, str], str] = {}


def _cancel(widget: tk.Misc, tag: str) -> None:
    """Cancel any in-flight animation registered under (widget, tag)."""
    key = (str(widget), tag)
    after_id = _registry.pop(key, None)
    if after_id is not None:
        try:
            widget.after_cancel(after_id)
        except tk.TclError:
            pass  # Widget already destroyed - nothing to cancel.


# ============================================================================
# GENERIC TICKER (the building block everything else uses)
# ============================================================================

def animate(widget: tk.Misc,
            on_tick: Callable[[float], None],
            duration_ms: int = 600,
            easing: Callable[[float], float] = ease_out_cubic,
            on_done: Optional[Callable[[], None]] = None,
            tag: str = "anim") -> None:
    """
    Drive on_tick(progress) from 0.0 to 1.0 over duration_ms using
    widget.after(). Progress is pre-eased. Safe against widget
    destruction and restarts (same tag cancels the previous run).
    """
    _cancel(widget, tag)

    # Kill switch: jump straight to the end state.
    if not ANIMATIONS_ENABLED or duration_ms <= 0:
        on_tick(1.0)
        if on_done:
            on_done()
        return

    steps = max(1, duration_ms // FRAME_MS)
    key = (str(widget), tag)

    def _tick(step: int) -> None:
        t = min(1.0, step / steps)
        try:
            on_tick(easing(t))
        except tk.TclError:
            _registry.pop(key, None)
            return  # Widget destroyed mid-animation - stop quietly.
        if t < 1.0:
            _registry[key] = widget.after(FRAME_MS, _tick, step + 1)
        else:
            _registry.pop(key, None)
            if on_done:
                on_done()

    _tick(0)


# ============================================================================
# COLOR FADE
# ============================================================================

def fade_color(widget: tk.Misc, option: str, to_color: str,
               duration_ms: int = 250,
               from_color: Optional[str] = None,
               on_done: Optional[Callable[[], None]] = None) -> None:
    """
    Smoothly transition a widget color option (bg, fg, highlightbackground,
    etc.) to a new value. Reads the current value when from_color is None.

    Example:
        fade_color(status_label, "fg", "#DC2626")   # ease into flood red
    """
    start = from_color or str(widget.cget(option))

    def _tick(t: float) -> None:
        widget.configure({option: lerp_color(widget, start, to_color, t)})

    animate(widget, _tick, duration_ms, ease_in_out,
            on_done=on_done, tag=f"fade:{option}")


# ============================================================================
# NUMERIC COUNT-UP
# ============================================================================

def count_up(label: tk.Label, to_value: float,
             fmt: str = "{:.2f}", duration_ms: int = 600,
             from_value: Optional[float] = None) -> None:
    """
    Animate a numeric readout counting to its final value.
    Pair with a monospace font (Consolas) so digits do not wobble.

    Example:
        count_up(stage_label, 12.47)                # 0.00 -> 12.47
        count_up(ratio_label, 1.34, from_value=1.2) # continue from prior
    """
    if from_value is None:
        # Try to continue from whatever number is currently displayed.
        try:
            from_value = float(str(label.cget("text")).replace(",", ""))
        except ValueError:
            from_value = 0.0

    def _tick(t: float) -> None:
        label.configure(text=fmt.format(from_value + (to_value - from_value) * t))

    animate(label, _tick, duration_ms, ease_out_cubic, tag="count")


# ============================================================================
# PULSE (draw the eye to a state change)
# ============================================================================

def pulse(widget: tk.Misc, color: str, option: str = "bg",
          times: int = 2, period_ms: int = 350) -> None:
    """
    Pulse a widget color option toward `color` and back, `times` times.
    Use sparingly: one pulse when a criterion flips state, not on a loop.

    Example:
        pulse(alert_frame, "#FECACA")   # flash toward flood wash
    """
    base = str(widget.cget(option))
    total = times * 2  # Each pulse is out-and-back.

    def _tick(t: float) -> None:
        # Triangle wave over the run: 0 -> 1 -> 0 per pulse cycle.
        phase = (t * total) % 2.0
        amp = phase if phase <= 1.0 else 2.0 - phase
        widget.configure({option: lerp_color(widget, base, color, amp)})

    def _restore() -> None:
        widget.configure({option: base})

    animate(widget, _tick, times * period_ms, linear,
            on_done=_restore, tag=f"pulse:{option}")


# ============================================================================
# HYDRO GAUGE BAR (signature component)
# ============================================================================

class HydroGaugeBar(tk.Canvas):
    """
    Gradient capacity bar matching the Hydrolight gauge readout:
    a light track with a cyan-to-blue fill that rises to its value.

    Example:
        bar = HydroGaugeBar(parent, width=240)
        bar.pack(fill="x")
        bar.set_fraction(0.72)          # animated rise to 72%
        bar.set_fraction(0.9, animate_rise=False)  # instant
    """

    def __init__(self, parent: tk.Misc, width: int = 240, height: int = 6,
                 track: str = "#E0F2FE",
                 start_color: str = "#06B6D4", end_color: str = "#0284C7",
                 over_color: str = "#DC2626", bg: Optional[str] = None,
                 **kwargs: Any) -> None:
        super().__init__(parent, width=width, height=height,
                         highlightthickness=0,
                         bg=bg or parent.cget("bg"), **kwargs)
        self._bar_w = width
        self._bar_h = height
        self._track = track
        self._start = start_color
        self._end = end_color
        self._over = over_color   # Fill turns flood red past 100%.
        self._frac = 0.0
        self._draw(0.0)

    def _draw(self, frac: float) -> None:
        """Redraw track plus gradient fill up to frac (may exceed 1.0)."""
        self.delete("all")
        self.create_rectangle(0, 0, self._bar_w, self._bar_h,
                              fill=self._track, width=0)
        shown = min(1.0, frac)
        fill_px = int(self._bar_w * shown)
        if fill_px <= 0:
            return
        # Approximate the horizontal gradient with 2px slices, each
        # colored by its position along the FULL bar width so the
        # gradient stays anchored as the fill rises.
        exceeded = frac > 1.0
        for x in range(0, fill_px, 2):
            pos = x / self._bar_w
            color = (self._over if exceeded
                     else lerp_color(self, self._start, self._end, pos))
            self.create_rectangle(x, 0, min(x + 2, fill_px), self._bar_h,
                                  fill=color, width=0)

    def set_fraction(self, frac: float, animate_rise: bool = True,
                     duration_ms: int = 900) -> None:
        """Set fill fraction (0.0-1.0+; >1.0 renders in flood red)."""
        start = self._frac
        self._frac = frac
        if not animate_rise:
            self._draw(frac)
            return

        def _tick(t: float) -> None:
            self._draw(start + (frac - start) * t)

        animate(self, _tick, duration_ms, ease_out_cubic, tag="rise")


# ============================================================================
# HYDRO RIPPLE (indeterminate progress for long operations)
# ============================================================================

class HydroRipple(tk.Canvas):
    """
    Indeterminate wave progress bar: a slow sine wave drifting across
    a shallows-colored track. Show while a threaded computation runs,
    hide when it completes.

    Example:
        ripple = HydroRipple(parent, width=240)
        ripple.pack(fill="x"); ripple.start()
        ...long work on a thread...
        ripple.stop()
    """

    def __init__(self, parent: tk.Misc, width: int = 240, height: int = 10,
                 track: str = "#E0F2FE", wave: str = "#0284C7",
                 bg: Optional[str] = None, **kwargs: Any) -> None:
        super().__init__(parent, width=width, height=height,
                         highlightthickness=0,
                         bg=bg or parent.cget("bg"), **kwargs)
        self._bar_w = width
        self._bar_h = height
        self._track = track
        self._wave = wave
        self._phase = 0.0
        self._running = False
        self._after_id: Optional[str] = None
        self._draw()

    def _draw(self) -> None:
        """Render one frame of the drifting wave."""
        self.delete("all")
        self.create_rectangle(0, 0, self._bar_w, self._bar_h,
                              fill=self._track, width=0)
        mid = self._bar_h / 2.0
        amp = self._bar_h * 0.32
        # Polyline sine wave, sampled every 4px for speed.
        points = []
        for x in range(0, self._bar_w + 4, 4):
            y = mid + amp * math.sin((x / self._bar_w) * 4 * math.pi + self._phase)
            points.extend((x, y))
        self.create_line(*points, fill=self._wave, width=2, smooth=True)

    def _step(self) -> None:
        if not self._running:
            return
        self._phase += 0.22  # Slow drift - water never jitters.
        try:
            self._draw()
        except tk.TclError:
            self._running = False
            return
        self._after_id = self.after(FRAME_MS, self._step)

    def start(self) -> None:
        """Begin the wave. Falls back to a static bar if animations are off."""
        if self._running:
            return
        self._running = True
        if ANIMATIONS_ENABLED:
            self._step()
        else:
            self._draw()

    def stop(self) -> None:
        """Halt the wave and clear to an empty track."""
        self._running = False
        if self._after_id is not None:
            try:
                self.after_cancel(self._after_id)
            except tk.TclError:
                pass
            self._after_id = None
        try:
            self.delete("all")
            self.create_rectangle(0, 0, self._bar_w, self._bar_h,
                                  fill=self._track, width=0)
        except tk.TclError:
            pass


# ============================================================================
# THREADING HELPER (the animation enabler)
# ============================================================================

def run_threaded(widget: tk.Misc, work: Callable[[], Any],
                 on_done: Optional[Callable[[Any], None]] = None,
                 on_error: Optional[Callable[[Exception], None]] = None,
                 poll_ms: int = 50) -> None:
    """
    Run `work()` on a daemon thread and deliver the result back on the
    tk main thread. This is what keeps ripples moving (and windows
    responsive) during raster sampling, file processing, or model runs.

    Thread safety: the worker never touches tk. It drops its result in
    a Queue, and a main-thread after() loop polls the queue. This is the
    officially safe tkinter pattern (worker-side widget.after() calls
    are not reliable).

    IMPORTANT: `work` must not touch tk widgets. Only on_done/on_error
    (which run on the main thread) may update the UI.

    Example:
        ripple.start()
        run_threaded(root, lambda: heavy_calc(inputs),
                     on_done=lambda result: (ripple.stop(), show(result)),
                     on_error=lambda exc: (ripple.stop(), warn(exc)))
    """
    result_queue: "queue.Queue[Tuple[str, Any]]" = queue.Queue(maxsize=1)

    def _worker() -> None:
        try:
            result_queue.put(("ok", work()))
        except Exception as exc:  # Deliver failures to the UI thread too.
            result_queue.put(("err", exc))

    def _poll() -> None:
        try:
            kind, payload = result_queue.get_nowait()
        except queue.Empty:
            try:
                widget.after(poll_ms, _poll)
            except tk.TclError:
                pass  # Window closed while work was running.
            return
        if kind == "ok":
            if on_done:
                on_done(payload)
        elif on_error:
            on_error(payload)

    threading.Thread(target=_worker, daemon=True).start()
    widget.after(poll_ms, _poll)  # Poller lives on the main thread.


# ============================================================================
# SELF-TEST
# ============================================================================
# Run `python hydrolight_anim.py` to exercise every primitive headlessly
# (window stays withdrawn). Prints PASS/FAIL per check.

def _selftest() -> int:
    import time

    root = tk.Tk()
    root.withdraw()  # No visible window needed for the test.
    failures = []

    def check(name: str, condition: bool) -> None:
        print(f"  [{'PASS' if condition else 'FAIL'}] {name}")
        if not condition:
            failures.append(name)

    def pump(ms: int) -> None:
        """Process tk events for roughly ms milliseconds."""
        deadline = time.monotonic() + ms / 1000.0
        while time.monotonic() < deadline:
            root.update()
            time.sleep(0.005)

    print("Hydrolight animation self-test")

    # 1. Color math resolves names and interpolates.
    mid = lerp_color(root, "#000000", "#ffffff", 0.5)
    check("lerp_color midpoint", mid in ("#7f7f7f", "#808080"))

    # 2. fade_color reaches its target.
    lbl = tk.Label(root, bg="#F0F9FF", text="0.00",
                   font=("Consolas", 14, "bold"))
    fade_color(lbl, "bg", "#DC2626", duration_ms=200)
    pump(500)
    check("fade_color reaches target",
          _widget_rgb(root, lbl.cget("bg"))[0] > 200)

    # 3. count_up lands exactly on the final value.
    count_up(lbl, 12.47, duration_ms=200)
    pump(500)
    check("count_up final value", lbl.cget("text") == "12.47")

    # 4. Gauge bar rises to its fraction.
    bar = HydroGaugeBar(root, width=200)
    bar.set_fraction(0.72, duration_ms=200)
    pump(500)
    check("gauge bar fraction stored", abs(bar._frac - 0.72) < 1e-9)
    check("gauge bar drew fill slices", len(bar.find_all()) > 10)

    # 5. Exceedance renders (fraction above 1.0 allowed).
    bar.set_fraction(1.34, animate_rise=False)
    check("gauge bar exceedance ok", abs(bar._frac - 1.34) < 1e-9)

    # 6. Ripple starts and stops cleanly.
    rip = HydroRipple(root, width=200)
    rip.start()
    pump(200)
    running_frames = len(rip.find_all())
    rip.stop()
    check("ripple animated", running_frames >= 2 and not rip._running)

    # 7. Kill switch jumps to final state with no ticker.
    set_animations_enabled(False)
    lbl2 = tk.Label(root, bg="#F0F9FF")
    fade_color(lbl2, "bg", "#059669", duration_ms=5000)
    check("kill switch is immediate",
          _widget_rgb(root, lbl2.cget("bg")) == _widget_rgb(root, "#059669"))
    set_animations_enabled(True)

    # 8. Threaded work returns on the UI thread.
    outcome = {}
    run_threaded(root, lambda: sum(range(100000)),
                 on_done=lambda r: outcome.setdefault("result", r))
    pump(600)
    check("run_threaded delivers result",
          outcome.get("result") == sum(range(100000)))

    # 9. Threaded errors are delivered, not swallowed.
    def _boom():
        raise ValueError("expected")
    run_threaded(root, _boom,
                 on_error=lambda e: outcome.setdefault("error", str(e)))
    pump(600)
    check("run_threaded delivers errors", outcome.get("error") == "expected")

    root.destroy()
    print(f"{'ALL PASS' if not failures else 'FAILURES: ' + ', '.join(failures)}")
    return 0 if not failures else 1


if __name__ == "__main__":
    raise SystemExit(_selftest())

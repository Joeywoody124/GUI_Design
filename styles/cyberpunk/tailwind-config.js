/**
 * Cyberpunk / Glitch Design System - Tailwind CSS Configuration
 * 
 * High-Tech, Low-Life. Digital dystopia with neon-drenched aesthetics,
 * glitch effects, scanlines, and terminal-inspired UI.
 * 
 * Usage:
 *   1. Install dependencies: npm install -D tailwindcss
 *   2. Add Google Fonts to your HTML head:
 *      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
 *   3. Merge this config with your tailwind.config.js
 *   4. Add custom CSS for scanlines, glitch effects, and chamfered corners (see below)
 * 
 * @version 1.0.0
 * @created 2025-12-03
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ===================
      // COLORS
      // ===================
      colors: {
        cyber: {
          background: '#0a0a0f',
          foreground: '#e0e0e0',
          card: '#12121a',
          muted: '#1c1c2e',
          'muted-foreground': '#6b7280',
          accent: '#00ff88',
          'accent-secondary': '#ff00ff',
          'accent-tertiary': '#00d4ff',
          border: '#2a2a3a',
          input: '#12121a',
          ring: '#00ff88',
          destructive: '#ff3366',
          // Named variants
          'void': '#0a0a0f',
          'matrix': '#00ff88',
          'magenta': '#ff00ff',
          'cyan': '#00d4ff',
        },
      },

      // ===================
      // TYPOGRAPHY
      // ===================
      fontFamily: {
        'orbitron': ['"Orbitron"', 'monospace'],
        'jetbrains': ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        'share-tech': ['"Share Tech Mono"', 'monospace'],
      },
      letterSpacing: {
        'cyber-wide': '0.025em',
        'cyber-wider': '0.05em',
        'cyber-widest': '0.1em',
        'cyber-ultra': '0.2em',
      },

      // ===================
      // SHADOWS (Neon Glow)
      // ===================
      boxShadow: {
        'neon': '0 0 5px #00ff88, 0 0 10px #00ff8840',
        'neon-sm': '0 0 3px #00ff88, 0 0 6px #00ff8830',
        'neon-lg': '0 0 10px #00ff88, 0 0 20px #00ff8860, 0 0 40px #00ff8830',
        'neon-secondary': '0 0 5px #ff00ff, 0 0 20px #ff00ff60',
        'neon-tertiary': '0 0 5px #00d4ff, 0 0 20px #00d4ff60',
        'neon-intense': '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 80px #00ff8860',
      },

      // ===================
      // ANIMATIONS
      // ===================
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'glitch-slow': 'glitch 2s ease-in-out infinite',
        'rgb-shift': 'rgbShift 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)' },
        },
        rgbShift: {
          '0%, 100%': { textShadow: '-2px 0 #ff00ff, 2px 0 #00d4ff' },
          '50%': { textShadow: '2px 0 #ff00ff, -2px 0 #00d4ff' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px #00ff88, 0 0 10px #00ff8840' },
          '50%': { boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff8860, 0 0 40px #00ff8830' },
        },
      },

      // ===================
      // TRANSITIONS
      // ===================
      transitionDuration: {
        '100': '100ms',
        '150': '150ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'cyber': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'digital': 'steps(4)',
      },

      // ===================
      // BACKGROUNDS
      // ===================
      backgroundImage: {
        'circuit-grid': 'linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)',
        'gradient-neon': 'linear-gradient(to right, #00ff88, #00d4ff)',
        'gradient-cyber': 'linear-gradient(to right, #00ff88, #ff00ff)',
      },
      backgroundSize: {
        'circuit': '50px 50px',
      },

      // ===================
      // SPACING
      // ===================
      maxWidth: {
        'cyber': '1280px',
        'cyber-narrow': '896px',
      },
    },
  },
  plugins: [],
};

/**
 * ===================
 * REQUIRED CUSTOM CSS
 * ===================
 * Add this to your global CSS file (e.g., globals.css):
 *
 * @layer base {
 *   body {
 *     @apply bg-cyber-background text-cyber-foreground;
 *     font-family: 'JetBrains Mono', monospace;
 *   }
 * }
 *
 * @layer components {
 *
 *   /* Chamfered Corners (Standard) */
 *   .cyber-chamfer {
 *     clip-path: polygon(
 *       0 10px, 10px 0,
 *       calc(100% - 10px) 0, 100% 10px,
 *       100% calc(100% - 10px), calc(100% - 10px) 100%,
 *       10px 100%, 0 calc(100% - 10px)
 *     );
 *   }
 *
 *   /* Chamfered Corners (Small - for buttons) */
 *   .cyber-chamfer-sm {
 *     clip-path: polygon(
 *       0 4px, 4px 0,
 *       calc(100% - 4px) 0, 100% 4px,
 *       100% calc(100% - 4px), calc(100% - 4px) 100%,
 *       4px 100%, 0 calc(100% - 4px)
 *     );
 *   }
 *
 *   /* Chamfered Corners (Large) */
 *   .cyber-chamfer-lg {
 *     clip-path: polygon(
 *       0 16px, 16px 0,
 *       calc(100% - 16px) 0, 100% 16px,
 *       100% calc(100% - 16px), calc(100% - 16px) 100%,
 *       16px 100%, 0 calc(100% - 16px)
 *     );
 *   }
 *
 *   /* Scanlines Overlay */
 *   .scanlines::after {
 *     content: "";
 *     position: fixed;
 *     inset: 0;
 *     background: repeating-linear-gradient(
 *       0deg,
 *       transparent,
 *       transparent 2px,
 *       rgba(0, 0, 0, 0.3) 2px,
 *       rgba(0, 0, 0, 0.3) 4px
 *     );
 *     pointer-events: none;
 *     z-index: 9999;
 *   }
 *
 *   /* Glitch Text Effect */
 *   .cyber-glitch {
 *     position: relative;
 *   }
 *   .cyber-glitch::before,
 *   .cyber-glitch::after {
 *     content: attr(data-text);
 *     position: absolute;
 *     top: 0;
 *     left: 0;
 *     width: 100%;
 *     height: 100%;
 *   }
 *   .cyber-glitch::before {
 *     left: 2px;
 *     text-shadow: -2px 0 #ff00ff;
 *     clip-path: inset(0 0 50% 0);
 *     animation: glitch-top 2s infinite linear alternate-reverse;
 *   }
 *   .cyber-glitch::after {
 *     left: -2px;
 *     text-shadow: 2px 0 #00d4ff;
 *     clip-path: inset(50% 0 0 0);
 *     animation: glitch-bottom 2s infinite linear alternate-reverse;
 *   }
 *
 *   @keyframes glitch-top {
 *     0%, 100% { clip-path: inset(0 0 85% 0); }
 *     20% { clip-path: inset(60% 0 5% 0); }
 *     40% { clip-path: inset(20% 0 55% 0); }
 *     60% { clip-path: inset(80% 0 0 0); }
 *     80% { clip-path: inset(10% 0 70% 0); }
 *   }
 *
 *   @keyframes glitch-bottom {
 *     0%, 100% { clip-path: inset(85% 0 0 0); }
 *     20% { clip-path: inset(5% 0 60% 0); }
 *     40% { clip-path: inset(55% 0 20% 0); }
 *     60% { clip-path: inset(0 0 80% 0); }
 *     80% { clip-path: inset(70% 0 10% 0); }
 *   }
 *
 *   /* Blinking Cursor */
 *   .cyber-cursor::after {
 *     content: "█";
 *     animation: blink 1s step-end infinite;
 *     color: #00ff88;
 *   }
 *
 *   /* Terminal Header (Traffic Light Dots) */
 *   .terminal-header {
 *     display: flex;
 *     gap: 6px;
 *     padding: 12px 16px;
 *     border-bottom: 1px solid #2a2a3a;
 *   }
 *   .terminal-header::before {
 *     content: "";
 *     width: 12px;
 *     height: 12px;
 *     border-radius: 50%;
 *     background: #ff3366;
 *     box-shadow: 18px 0 0 #ffcc00, 36px 0 0 #00ff88;
 *   }
 *
 *   /* Holographic Corner Accents */
 *   .holo-corners {
 *     position: relative;
 *   }
 *   .holo-corners::before,
 *   .holo-corners::after {
 *     content: "";
 *     position: absolute;
 *     width: 20px;
 *     height: 20px;
 *     border: 1px solid #00ff88;
 *   }
 *   .holo-corners::before {
 *     top: 0;
 *     left: 0;
 *     border-right: none;
 *     border-bottom: none;
 *   }
 *   .holo-corners::after {
 *     bottom: 0;
 *     right: 0;
 *     border-left: none;
 *     border-top: none;
 *   }
 *
 *   /* Circuit Grid Background */
 *   .circuit-bg {
 *     background-image:
 *       linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
 *       linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px);
 *     background-size: 50px 50px;
 *   }
 *
 *   /* Neon Text */
 *   .neon-text {
 *     text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
 *   }
 *   .neon-text-intense {
 *     text-shadow: 0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 20px #00ff8860;
 *   }
 *
 *   /* Reduced Motion */
 *   @media (prefers-reduced-motion: reduce) {
 *     .cyber-glitch::before,
 *     .cyber-glitch::after {
 *       animation: none;
 *     }
 *     .cyber-cursor::after {
 *       animation: none;
 *       opacity: 1;
 *     }
 *     .scanlines::after {
 *       display: none;
 *     }
 *   }
 *
 * }
 */

/**
 * ===================
 * UTILITY CLASS REFERENCE
 * ===================
 * 
 * BUTTONS:
 * Default:    bg-transparent border-2 border-cyber-accent text-cyber-accent font-jetbrains uppercase tracking-cyber-wider cyber-chamfer-sm hover:bg-cyber-accent hover:text-cyber-background hover:shadow-neon
 * Secondary:  border-2 border-cyber-accent-secondary text-cyber-accent-secondary hover:bg-cyber-accent-secondary hover:text-cyber-background hover:shadow-neon-secondary
 * Glitch:     bg-cyber-accent text-cyber-background font-jetbrains uppercase cyber-glitch hover:brightness-110
 * 
 * CARDS:
 * Default:    bg-cyber-card border border-cyber-border cyber-chamfer p-6 hover:border-cyber-accent hover:shadow-neon transition-all duration-300
 * Terminal:   bg-cyber-background border border-cyber-border cyber-chamfer terminal-header
 * Holographic: bg-cyber-muted/30 border border-cyber-accent/30 backdrop-blur-sm holo-corners shadow-neon
 * 
 * TYPOGRAPHY:
 * Hero:       font-orbitron text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-cyber-widest cyber-glitch
 * Section:    font-orbitron text-4xl md:text-5xl font-bold uppercase tracking-cyber-wide
 * Body:       font-jetbrains text-base tracking-cyber-wide leading-relaxed
 * Label:      font-share-tech text-sm uppercase tracking-cyber-ultra text-cyber-accent
 * 
 * INPUTS:
 * Base:       bg-cyber-input border border-cyber-border cyber-chamfer-sm px-4 py-3 pl-8 font-jetbrains text-cyber-accent tracking-wide focus:border-cyber-accent focus:shadow-neon focus:outline-none
 * 
 * EFFECTS:
 * Scanlines:  scanlines (add to body or main container)
 * Circuit:    circuit-bg
 * Neon text:  neon-text or neon-text-intense
 * Cursor:     cyber-cursor (adds blinking cursor after element)
 * 
 * FOCUS RINGS:
 * Standard:   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cyber-background
 */

/**
 * ===================
 * TERMINAL PREFIX PATTERN
 * ===================
 * For inputs with terminal-style prefix:
 * 
 * <div className="relative">
 *   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-accent font-jetbrains">{">"}</span>
 *   <input className="pl-8 ..." />
 * </div>
 */

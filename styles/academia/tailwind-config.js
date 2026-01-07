/**
 * Academia / Classical Design System - Tailwind CSS Configuration
 * 
 * Scholarly gravitas meets timeless elegance.
 * Channels centuries-old university libraries, Victorian study halls, and Renaissance manuscripts.
 * 
 * Usage:
 *   1. Install dependencies: npm install -D tailwindcss
 *   2. Add Google Fonts to your HTML head:
 *      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Crimson+Pro:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
 *   3. Merge this config with your tailwind.config.js
 *   4. Add custom CSS for textures, flourishes, and arch-tops (see comments below)
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
        academia: {
          background: '#1C1714',
          'background-alt': '#251E19',
          foreground: '#E8DFD4',
          muted: '#3D332B',
          'muted-foreground': '#9C8B7A',
          accent: '#C9A962',
          'accent-secondary': '#8B2635',
          'accent-foreground': '#1C1714',
          border: '#4A3F35',
          // Named variants for clarity
          mahogany: '#1C1714',
          oak: '#251E19',
          parchment: '#E8DFD4',
          leather: '#3D332B',
          'faded-ink': '#9C8B7A',
          brass: '#C9A962',
          'brass-light': '#D4B872',
          'brass-dark': '#B8953F',
          crimson: '#8B2635',
          'wood-grain': '#4A3F35',
        },
      },

      // ===================
      // TYPOGRAPHY
      // ===================
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'crimson': ['"Crimson Pro"', 'serif'],
        'cinzel': ['"Cinzel"', 'serif'],
      },
      fontSize: {
        // Drop cap sizing
        'drop-cap': ['4.5rem', { lineHeight: '0.8' }],
      },
      letterSpacing: {
        'academia-tight': '-0.025em',
        'academia-wide': '0.15em',
        'academia-wider': '0.2em',
        'academia-widest': '0.3em',
      },
      lineHeight: {
        'academia-display': '1.1',
        'academia-heading': '1.2',
        'academia-body': '1.625',
      },

      // ===================
      // SPACING
      // ===================
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
      maxWidth: {
        'academia': '1152px',
        'academia-narrow': '896px',
        'academia-full': '1280px',
      },

      // ===================
      // BORDERS
      // ===================
      borderRadius: {
        'academia': '4px',
        // Note: Arch-top requires custom CSS (see below)
      },

      // ===================
      // SHADOWS
      // ===================
      boxShadow: {
        'academia-card': '0 8px 24px rgba(0,0,0,0.3)',
        'academia-engraved': 'inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.3)',
        'academia-wax': 'inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.4)',
        'academia-brass-glow': '0 4px 12px rgba(201,169,98,0.3)',
      },

      // ===================
      // ANIMATIONS
      // ===================
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
      transitionTimingFunction: {
        'academia': 'ease-out',
      },

      // ===================
      // BACKGROUND IMAGES (Gradients)
      // ===================
      backgroundImage: {
        'brass-gradient': 'linear-gradient(180deg, #D4B872 0%, #C9A962 50%, #B8953F 100%)',
        'ornate-divider': 'linear-gradient(90deg, transparent 0%, #4A3F35 20%, #C9A962 50%, #4A3F35 80%, transparent 100%)',
        'vignette': 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(28,23,20,0.4) 100%)',
        'wax-seal': 'radial-gradient(circle, #A62D3D 0%, #8B2635 60%, #6B1D28 100%)',
      },

      // ===================
      // FILTERS (for sepia effect)
      // ===================
      // Note: Use arbitrary values in classes: 
      // filter sepia-[0.6] contrast-[0.95] brightness-[0.9]
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
 * @layer components {
 *
 *   /* Arch-Top Border Radius (Cathedral Windows) */
 *   .arch-top {
 *     border-radius: 40% 40% 0 0 / 20% 20% 0 0;
 *   }
 *
 *   /* Corner Flourishes (Large - for hero/major frames) */
 *   .corner-flourish-lg {
 *     position: relative;
 *   }
 *   .corner-flourish-lg::before,
 *   .corner-flourish-lg::after {
 *     content: "";
 *     position: absolute;
 *     width: 40px;
 *     height: 40px;
 *     border: 2px solid #C9A962;
 *     pointer-events: none;
 *   }
 *   .corner-flourish-lg::before {
 *     top: -1px;
 *     left: -1px;
 *     border-right: none;
 *     border-bottom: none;
 *   }
 *   .corner-flourish-lg::after {
 *     bottom: -1px;
 *     right: -1px;
 *     border-left: none;
 *     border-top: none;
 *   }
 *
 *   /* Corner Flourishes (Small - for cards) */
 *   .corner-flourish {
 *     position: relative;
 *   }
 *   .corner-flourish::before,
 *   .corner-flourish::after {
 *     content: "";
 *     position: absolute;
 *     width: 24px;
 *     height: 24px;
 *     border: 2px solid #C9A962;
 *     opacity: 0.6;
 *     transition: opacity 300ms ease-out;
 *     pointer-events: none;
 *   }
 *   .corner-flourish:hover::before,
 *   .corner-flourish:hover::after {
 *     opacity: 1;
 *   }
 *   .corner-flourish::before {
 *     top: 8px;
 *     left: 8px;
 *     border-right: none;
 *     border-bottom: none;
 *   }
 *   .corner-flourish::after {
 *     bottom: 8px;
 *     right: 8px;
 *     border-left: none;
 *     border-top: none;
 *   }
 *
 *   /* Ornate Divider with Glyph */
 *   .ornate-divider {
 *     position: relative;
 *     height: 1px;
 *     background: linear-gradient(90deg, transparent 0%, #4A3F35 20%, #C9A962 50%, #4A3F35 80%, transparent 100%);
 *   }
 *   .ornate-divider::before {
 *     content: "✶";
 *     position: absolute;
 *     left: 50%;
 *     top: 50%;
 *     transform: translate(-50%, -50%);
 *     color: #C9A962;
 *     font-size: 12px;
 *     background: #1C1714;
 *     padding: 0 12px;
 *   }
 *
 *   /* Engraved Text Effect */
 *   .text-engraved {
 *     text-shadow: 1px 1px 1px rgba(0,0,0,0.4), -1px -1px 1px rgba(255,255,255,0.1);
 *   }
 *
 *   /* Drop Cap */
 *   .drop-cap::first-letter {
 *     font-family: 'Cinzel', serif;
 *     font-size: 4.5rem;
 *     float: left;
 *     line-height: 0.8;
 *     margin-right: 1rem;
 *     color: #C9A962;
 *     text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
 *   }
 *
 *   /* Sepia Image with Hover Reveal */
 *   .sepia-reveal {
 *     filter: sepia(0.6) contrast(0.95) brightness(0.9);
 *     transition: filter 700ms ease-out;
 *   }
 *   .sepia-reveal:hover,
 *   .group:hover .sepia-reveal {
 *     filter: sepia(0) contrast(1) brightness(1);
 *   }
 *
 *   /* Paper Texture Overlay */
 *   .paper-texture {
 *     position: fixed;
 *     inset: 0;
 *     pointer-events: none;
 *     z-index: 9999;
 *     opacity: 0.03;
 *     mix-blend-mode: overlay;
 *   }
 *
 *   /* Vignette Overlay */
 *   .vignette-overlay {
 *     position: fixed;
 *     inset: 0;
 *     pointer-events: none;
 *     z-index: 9998;
 *     background: radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(28,23,20,0.4) 100%);
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
 * Primary:   bg-brass-gradient text-academia-mahogany font-cinzel uppercase tracking-academia-wide text-xs h-12 px-8 rounded-academia shadow-academia-engraved text-engraved hover:brightness-110
 * Secondary: bg-transparent border-2 border-academia-brass text-academia-brass font-cinzel uppercase hover:bg-academia-crimson hover:border-academia-crimson hover:text-academia-parchment
 * Ghost:     text-academia-brass font-cinzel uppercase hover:underline underline-offset-4
 * 
 * CARDS:
 * Base:      bg-academia-oak border border-academia-border rounded-academia p-8 corner-flourish
 * Hover:     hover:border-academia-brass/50 hover:shadow-academia-card transition-all duration-300
 * 
 * TYPOGRAPHY:
 * Display:   font-cormorant text-5xl md:text-6xl lg:text-7xl leading-academia-display tracking-academia-tight text-academia-parchment
 * Section:   font-cormorant text-4xl md:text-5xl leading-academia-heading text-academia-parchment
 * Body:      font-crimson text-base md:text-lg leading-academia-body text-academia-faded-ink
 * Label:     font-cinzel text-xs uppercase tracking-academia-widest text-academia-brass
 * Volume:    font-cinzel text-xs uppercase tracking-academia-widest text-academia-brass (e.g., "Volume I")
 * 
 * IMAGES:
 * Arch-top:  arch-top overflow-hidden
 * Sepia:     sepia-reveal (add to img element)
 * 
 * INPUTS:
 * Base:      h-12 w-full bg-academia-oak border border-academia-border rounded-academia px-4 font-crimson text-academia-parchment placeholder:italic placeholder:text-academia-faded-ink
 * Focus:     focus:border-academia-brass focus:ring-2 focus:ring-academia-brass/30 focus:outline-none
 * 
 * FOCUS RINGS:
 * Standard:  focus:ring-2 focus:ring-academia-brass focus:ring-offset-2 focus:ring-offset-academia-mahogany
 * 
 * LAYOUT:
 * Section:   py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8
 * Max:       max-w-academia mx-auto
 * 
 * DECORATIVE:
 * Corner:    corner-flourish (small) or corner-flourish-lg (large)
 * Divider:   ornate-divider w-64 mx-auto my-8
 * Drop cap:  drop-cap (apply to paragraph)
 */

/**
 * ===================
 * SVG PAPER TEXTURE
 * ===================
 * Add this SVG to your layout (inside body, at the end):
 * 
 * <svg className="paper-texture" xmlns="http://www.w3.org/2000/svg">
 *   <filter id="paper-noise">
 *     <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
 *     <feColorMatrix type="saturate" values="0" />
 *   </filter>
 *   <rect width="100%" height="100%" filter="url(#paper-noise)" />
 * </svg>
 * 
 * <div className="vignette-overlay"></div>
 */

/**
 * ===================
 * ROMAN NUMERAL REFERENCE
 * ===================
 * Use for section headings:
 * I, II, III, IV, V, VI, VII, VIII, IX, X
 * 
 * Pattern: "Volume I", "Volume II", etc.
 * 
 * Ornate Glyphs for dividers:
 * ✶ ❧ ✤ ❦ ⚜
 */

/**
 * Kinetic Typography Design System - Tailwind CSS Configuration
 * 
 * High-energy brutalism meets kinetic poster design.
 * Typography as the entire visual structure with constant motion.
 * 
 * Usage:
 *   1. Install dependencies: 
 *      npm install -D tailwindcss react-fast-marquee framer-motion
 *   2. Add Google Font to your HTML head:
 *      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
 *   3. Merge this config with your tailwind.config.js
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
        kinetic: {
          background: '#09090B',
          foreground: '#FAFAFA',
          muted: '#27272A',
          'muted-foreground': '#A1A1AA',
          accent: '#DFE104',
          'accent-foreground': '#000000',
          border: '#3F3F46',
        },
      },

      // ===================
      // TYPOGRAPHY
      // ===================
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid hero text using clamp
        'hero': ['clamp(3rem, 12vw, 14rem)', { lineHeight: '0.8' }],
        'hero-sm': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '0.8' }],
        // Massive decorative numbers
        'massive': ['8rem', { lineHeight: '1' }],
        'massive-lg': ['12rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'wide': '0.025em',
        'widest': '0.1em',
      },
      lineHeight: {
        'display': '0.8',
        'tight': '1.25',
      },

      // ===================
      // SPACING
      // ===================
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        'kinetic': '95vw',
        'kinetic-content': '90vw',
      },

      // ===================
      // BORDERS
      // ===================
      borderWidth: {
        '2': '2px',
        '4': '4px',
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
      },

      // ===================
      // ANIMATIONS
      // ===================
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'kinetic': 'ease-in-out',
      },
      scale: {
        '95': '0.95',
        '105': '1.05',
      },
      translate: {
        'slide': '2rem',
      },

      // ===================
      // KEYFRAMES & ANIMATION
      // ===================
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-in-out',
        'scale-in': 'scale-in 300ms ease-in-out',
      },
    },
  },
  plugins: [],
};

/**
 * ===================
 * UTILITY CLASS REFERENCE
 * ===================
 * 
 * BUTTONS:
 * Primary:  bg-kinetic-accent text-black uppercase font-bold tracking-tighter h-14 px-8 hover:scale-105 active:scale-95 transition-all
 * Outline:  border-2 border-kinetic-border bg-transparent text-kinetic-foreground uppercase font-bold hover:bg-kinetic-foreground hover:text-black
 * Ghost:    bg-transparent text-kinetic-foreground uppercase font-bold hover:text-kinetic-accent
 * 
 * CARDS:
 * Base:     group border-2 border-kinetic-border bg-kinetic-background p-8
 * Hover:    hover:bg-kinetic-accent hover:border-kinetic-accent transition-all duration-300
 * Text:     group-hover:text-black
 * 
 * TYPOGRAPHY:
 * Hero:     text-hero font-bold uppercase tracking-tighter leading-display
 * Section:  text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter
 * Body:     text-lg md:text-xl lg:text-2xl text-kinetic-muted-foreground
 * Number:   text-massive md:text-massive-lg font-bold text-kinetic-muted
 * 
 * INPUTS:
 * Base:     h-24 w-full bg-transparent border-b-2 border-kinetic-border text-4xl font-bold uppercase tracking-tighter
 * Focus:    focus:border-kinetic-accent focus:outline-none
 * 
 * LAYOUT:
 * Section:  py-20 md:py-32 px-4 md:px-8
 * Max:      max-w-kinetic or max-w-kinetic-content
 * Gap:      gap-8 or gap-px (for hairline dividers)
 * 
 * MARQUEE (react-fast-marquee):
 * <Marquee speed={80} gradient={false} autoFill>
 *   {content}
 * </Marquee>
 * 
 * NOISE TEXTURE (Add to layout):
 * <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.03] mix-blend-overlay">
 *   <filter id="noise">
 *     <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
 *   </filter>
 *   <rect width="100%" height="100%" filter="url(#noise)" />
 * </svg>
 */

/**
 * ===================
 * CSS VARIABLES (Alternative to Tailwind)
 * ===================
 * Add to your global CSS if you prefer CSS variables:
 * 
 * :root {
 *   --kinetic-background: #09090B;
 *   --kinetic-foreground: #FAFAFA;
 *   --kinetic-muted: #27272A;
 *   --kinetic-muted-foreground: #A1A1AA;
 *   --kinetic-accent: #DFE104;
 *   --kinetic-accent-foreground: #000000;
 *   --kinetic-border: #3F3F46;
 * }
 */

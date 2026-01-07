/**
 * Bauhaus Design System - Tailwind CSS Configuration
 * 
 * Constructivist modernism inspired by 1920s Bauhaus movement.
 * Form follows function with geometric purity.
 * 
 * Usage:
 *   1. Install dependencies: npm install -D tailwindcss @tailwindcss/forms
 *   2. Add Google Font to your HTML head:
 *      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&display=swap" rel="stylesheet">
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
        bauhaus: {
          background: '#F0F0F0',
          foreground: '#121212',
          red: '#D02020',
          blue: '#1040C0',
          yellow: '#F0C020',
          muted: '#E0E0E0',
          'yellow-light': '#FFF9C4',
        },
      },

      // ===================
      // TYPOGRAPHY
      // ===================
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display sizes with line-height
        'display-sm': ['2.25rem', { lineHeight: '0.9' }],    // 36px - mobile
        'display-md': ['3.75rem', { lineHeight: '0.9' }],    // 60px - tablet
        'display-lg': ['6rem', { lineHeight: '0.9' }],       // 96px - desktop
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      lineHeight: {
        'tight': '0.9',
      },

      // ===================
      // BORDERS
      // ===================
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },

      // ===================
      // SHADOWS (Hard Offset - Bauhaus Style)
      // ===================
      boxShadow: {
        'bauhaus-sm': '3px 3px 0px 0px #121212',
        'bauhaus-md': '4px 4px 0px 0px #121212',
        'bauhaus-lg': '6px 6px 0px 0px #121212',
        'bauhaus-xl': '8px 8px 0px 0px #121212',
        // Colored shadows for special effects
        'bauhaus-red': '4px 4px 0px 0px #D02020',
        'bauhaus-blue': '4px 4px 0px 0px #1040C0',
        'bauhaus-yellow': '4px 4px 0px 0px #F0C020',
      },

      // ===================
      // ANIMATIONS
      // ===================
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'bauhaus': 'ease-out',
      },

      // ===================
      // LAYOUT
      // ===================
      maxWidth: {
        'bauhaus': '80rem', // 1280px
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
 * Primary:   bg-bauhaus-red text-white border-2 border-bauhaus-foreground shadow-bauhaus-md
 * Secondary: bg-bauhaus-blue text-white border-2 border-bauhaus-foreground shadow-bauhaus-md
 * Yellow:    bg-bauhaus-yellow text-bauhaus-foreground border-2 border-bauhaus-foreground shadow-bauhaus-md
 * Outline:   bg-white text-bauhaus-foreground border-2 border-bauhaus-foreground shadow-bauhaus-md
 * 
 * Button States:
 * hover:opacity-90
 * active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
 * 
 * CARDS:
 * bg-white border-4 border-bauhaus-foreground shadow-bauhaus-xl
 * hover:-translate-y-1 transition-transform duration-200
 * 
 * HEADLINES:
 * text-display-sm sm:text-display-md lg:text-display-lg font-black uppercase tracking-tighter
 * 
 * SECTION BACKGROUNDS (Color Blocking):
 * Hero:     bg-bauhaus-blue
 * Stats:    bg-bauhaus-yellow
 * Benefits: bg-bauhaus-red
 * CTA:      bg-bauhaus-yellow
 * Footer:   bg-bauhaus-foreground
 * 
 * BORDERS:
 * All major elements: border-bauhaus-foreground
 * Section dividers:   border-b-4 border-bauhaus-foreground
 */

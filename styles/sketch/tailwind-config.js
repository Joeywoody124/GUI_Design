/**
 * Sketch / Hand-Drawn Design System - Tailwind Configuration
 * 
 * Authentic imperfection and human touch in a digital world.
 * Wobbly borders, handwritten fonts, paper textures, and playful rotation.
 * 
 * CRITICAL: This style requires custom CSS for wobbly border-radius values.
 * Standard Tailwind rounded-* classes will NOT achieve the hand-drawn look.
 * 
 * Google Fonts Required:
 * <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Patrick+Hand&display=swap" rel="stylesheet">
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        sketch: {
          background: '#fdfbf7',
          foreground: '#2d2d2d',
          muted: '#e5e0d8',
          accent: '#ff4d4d',
          'accent-secondary': '#2d5da1',
          card: '#ffffff',
          postit: '#fff9c4',
        },
      },

      fontFamily: {
        'heading': ['Kalam', 'cursive'],
        'handwriting': ['Patrick Hand', 'cursive'],
      },

      borderWidth: {
        '3': '3px',
      },

      boxShadow: {
        'sketch': '4px 4px 0px 0px #2d2d2d',
        'sketch-lg': '8px 8px 0px 0px #2d2d2d',
        'sketch-sm': '2px 2px 0px 0px #2d2d2d',
        'sketch-subtle': '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
      },

      rotate: {
        '1': '1deg',
        '2': '2deg',
        '-1': '-1deg',
        '-2': '-2deg',
      },

      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },

      maxWidth: {
        'sketchbook': '64rem',
      },

      backgroundImage: {
        'paper-dots': 'radial-gradient(#e5e0d8 1px, transparent 1px)',
      },

      backgroundSize: {
        'paper': '24px 24px',
      },
    },
  },
  plugins: [],
};

/* ===========================================
   WOBBLY RADIUS CSS VARIABLES
   =========================================== */

/*
:root {
  --wobbly-standard: 255px 15px 225px 15px / 15px 225px 15px 255px;
  --wobbly-medium: 15px 225px 15px 255px / 255px 15px 225px 15px;
  --wobbly-blob: 60% 40% 70% 30% / 30% 60% 40% 70%;
  --wobbly-subtle: 20px 25px 20px 25px / 25px 20px 25px 20px;
}

.wobbly { border-radius: var(--wobbly-standard); }
.wobbly-md { border-radius: var(--wobbly-medium); }
.wobbly-blob { border-radius: var(--wobbly-blob); }
.wobbly-subtle { border-radius: var(--wobbly-subtle); }
*/

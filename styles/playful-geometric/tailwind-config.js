/**
 * Playful Geometric Design System - Tailwind Configuration
 * 
 * Optimistic, tactile, bouncy design with primitive shapes, hard shadows,
 * and confetti-style decoration. Memphis Group inspired but modernized.
 * 
 * Core Concept: "Stable Grid, Wild Decoration"
 * Content lives in clean areas, but decoration is alive with movement and shape.
 * 
 * Google Fonts Required:
 * <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
 */

module.exports = {
  theme: {
    extend: {
      // ===================
      // COLORS
      // ===================
      colors: {
        playful: {
          background: '#FFFDF5',      // Warm Cream (paper feel)
          foreground: '#1E293B',      // Slate 800 (softer than black)
          muted: '#F1F5F9',           // Slate 100
          'muted-foreground': '#64748B', // Slate 500
          accent: '#8B5CF6',          // Vivid Violet (primary)
          'accent-foreground': '#FFFFFF',
          secondary: '#F472B6',       // Hot Pink (playful pop)
          tertiary: '#FBBF24',        // Amber Yellow (optimism)
          quaternary: '#34D399',      // Emerald Mint (freshness)
          border: '#E2E8F0',          // Slate 200
          input: '#FFFFFF',
          card: '#FFFFFF',
          ring: '#8B5CF6',
        },
      },

      // ===================
      // TYPOGRAPHY
      // ===================
      fontFamily: {
        'heading': ['Outfit', 'system-ui', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'hero': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'hero-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['1.875rem', { lineHeight: '1.2' }],
        'section-lg': ['2.25rem', { lineHeight: '1.2' }],
      },

      // ===================
      // SPACING
      // ===================
      spacing: {
        'section': '6rem',      // 96px
        'section-sm': '4rem',   // 64px
      },

      // ===================
      // RADIUS
      // ===================
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },

      // ===================
      // BORDERS
      // ===================
      borderWidth: {
        '3': '3px',
      },

      // ===================
      // SHADOWS (Hard Offset - No Blur)
      // ===================
      boxShadow: {
        'pop': '4px 4px 0px 0px #1E293B',
        'pop-hover': '6px 6px 0px 0px #1E293B',
        'pop-active': '2px 2px 0px 0px #1E293B',
        'soft': '8px 8px 0px 0px #E2E8F0',
        'pink': '8px 8px 0px 0px #F472B6',
        'violet': '4px 4px 0px 0px #8B5CF6',
        'yellow': '4px 4px 0px 0px #FBBF24',
        'mint': '4px 4px 0px 0px #34D399',
      },

      // ===================
      // ANIMATION
      // ===================
      transitionTimingFunction: {
        'bouncy': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      animation: {
        'pop-in': 'popIn 0.4s ease-out',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },

      keyframes: {
        popIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(-3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
      },

      // ===================
      // MAX WIDTH
      // ===================
      maxWidth: {
        'playful': '72rem', // 1152px
      },

      // ===================
      // BACKGROUND PATTERNS
      // ===================
      backgroundImage: {
        'dot-grid': 'radial-gradient(#E2E8F0 2px, transparent 2px)',
        'diagonal-stripes': 'repeating-linear-gradient(45deg, transparent, transparent 10px, #E2E8F0 10px, #E2E8F0 20px)',
      },

      backgroundSize: {
        'dots': '20px 20px',
      },
    },
  },
  plugins: [],
};

/* ===========================================
   REQUIRED CUSTOM CSS
   =========================================== */

/*
Add this to your global CSS file:

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

:root {
  --playful-background: #FFFDF5;
  --playful-foreground: #1E293B;
  --playful-muted: #F1F5F9;
  --playful-muted-foreground: #64748B;
  --playful-accent: #8B5CF6;
  --playful-secondary: #F472B6;
  --playful-tertiary: #FBBF24;
  --playful-quaternary: #34D399;
  --playful-border: #E2E8F0;
  --playful-card: #FFFFFF;
}

body.playful-theme {
  background-color: var(--playful-background);
  color: var(--playful-foreground);
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}

// Bouncy transition
.bouncy {
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

// Button press effect
.btn-playful {
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-playful:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px var(--playful-foreground);
}

.btn-playful:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px var(--playful-foreground);
}

// Card wiggle on hover
.card-playful {
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-playful:hover {
  transform: rotate(-1deg) scale(1.02);
}

// Icon wiggle on hover
.icon-wiggle:hover {
  animation: wiggle 0.5s ease-in-out;
}

// Floating animation for decorative shapes
.float {
  animation: float 3s ease-in-out infinite;
}

// Focus states
.input-playful:focus {
  border-color: var(--playful-accent);
  box-shadow: 4px 4px 0px 0px var(--playful-accent);
  outline: none;
}

// Dot grid background
.bg-dots {
  background-image: radial-gradient(var(--playful-border) 2px, transparent 2px);
  background-size: 20px 20px;
}

// CSS Triangle (for confetti)
.triangle {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid currentColor;
}

// Blob border radius presets
.blob-speech {
  border-radius: 24px 24px 24px 0;
}

.blob-arch {
  border-radius: 9999px 9999px 0 0;
}

.blob-leaf {
  border-radius: 0 24px 0 24px;
}

.blob-asymmetric {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
*/

/* ===========================================
   UTILITY CLASS REFERENCE
   =========================================== */

/*
COLORS:
  bg-playful-background     - Warm cream paper
  bg-playful-foreground     - Slate 800 (for dark sections)
  bg-playful-muted          - Slate 100
  bg-playful-accent         - Vivid Violet
  bg-playful-secondary      - Hot Pink
  bg-playful-tertiary       - Amber Yellow
  bg-playful-quaternary     - Emerald Mint
  bg-playful-card           - White

  text-playful-foreground   - Slate 800 text
  text-playful-muted-foreground - Slate 500 text
  text-playful-accent       - Violet text

  border-playful-foreground - Dark borders (on colored buttons)
  border-playful-border     - Light borders (default)

TYPOGRAPHY:
  font-heading              - Outfit
  font-body                 - Plus Jakarta Sans
  text-hero / text-hero-lg
  text-section / text-section-lg

SHADOWS (Hard Offset):
  shadow-pop                - 4px 4px dark (default)
  shadow-pop-hover          - 6px 6px dark (hover lift)
  shadow-pop-active         - 2px 2px dark (pressed)
  shadow-soft               - 8px 8px slate 200 (cards)
  shadow-pink               - 8px 8px hot pink
  shadow-violet             - 4px 4px violet (focus)
  shadow-yellow             - 4px 4px amber
  shadow-mint               - 4px 4px emerald

RADIUS:
  rounded-sm                - 8px
  rounded-md                - 16px
  rounded-lg                - 24px
  rounded-xl                - 32px
  rounded-full              - pill
  rounded-blob              - asymmetric blob

BORDERS:
  border-2                  - Standard width
  border-3                  - Thick emphasis

ANIMATION:
  animate-pop-in            - Scale in with overshoot
  animate-wiggle            - Rotation wiggle
  animate-bounce-slow       - 2s bounce
  animate-float             - Float up and rotate

  ease-bouncy               - Overshoot easing

SPACING:
  py-section                - 96px
  py-section-sm             - 64px
  max-w-playful             - 1152px container

BACKGROUND:
  bg-dot-grid               - Dot pattern
  bg-diagonal-stripes       - Stripe pattern
  bg-dots                   - 20x20 size
*/

/* ===========================================
   COMPONENT EXAMPLES
   =========================================== */

/*
// Primary "Candy" Button (React/JSX)
<button
  className="
    bg-playful-accent text-white
    px-6 py-3
    font-heading font-bold text-lg
    rounded-full
    border-2 border-playful-foreground
    shadow-pop
    hover:shadow-pop-hover hover:-translate-x-[2px] hover:-translate-y-[2px]
    active:shadow-pop-active active:translate-x-[2px] active:translate-y-[2px]
    transition-all duration-300 ease-bouncy
  "
>
  Get Started
</button>

// Secondary Button (Ghost)
<button
  className="
    bg-transparent text-playful-foreground
    px-6 py-3
    font-heading font-bold
    rounded-full
    border-2 border-playful-foreground
    hover:bg-playful-tertiary
    transition-all duration-300 ease-bouncy
  "
>
  Learn More
</button>

// Sticker Card
<div
  className="
    relative
    bg-playful-card
    border-2 border-playful-foreground
    rounded-lg
    p-6
    shadow-soft
    hover:rotate-[-1deg] hover:scale-[1.02]
    transition-all duration-300 ease-bouncy
  "
>
  // Floating icon
  <div className="
    absolute -top-5 left-6
    w-10 h-10
    bg-playful-accent text-white
    rounded-full
    border-2 border-playful-foreground
    flex items-center justify-center
    shadow-pop
  ">
    <Star strokeWidth={2.5} className="w-5 h-5" />
  </div>
  
  <h3 className="font-heading font-bold text-xl mt-4">Card Title</h3>
  <p className="text-playful-muted-foreground mt-2">Description text...</p>
</div>

// Input with Hard Shadow Focus
<div>
  <label className="block text-xs font-bold uppercase tracking-wide mb-2">
    Email Address
  </label>
  <input
    type="email"
    className="
      w-full
      bg-white
      border-2 border-playful-border
      rounded-md
      px-4 py-3
      font-body
      focus:border-playful-accent
      focus:shadow-violet
      outline-none
      transition-all duration-200
    "
    placeholder="hello@example.com"
  />
</div>

// Confetti Shapes (Decorative)
<div className="relative">
  // Circle
  <div className="
    absolute top-10 right-20
    w-16 h-16
    bg-playful-secondary
    rounded-full
    opacity-60
    animate-float
  " />
  
  // Rotated Square
  <div className="
    absolute bottom-20 left-10
    w-8 h-8
    bg-playful-quaternary
    rotate-45
    border-2 border-playful-foreground
  " />
  
  // Triangle (using border trick)
  <div className="
    absolute top-1/2 right-10
    w-0 h-0
    border-l-[15px] border-l-transparent
    border-r-[15px] border-r-transparent
    border-b-[26px] border-b-playful-tertiary
    rotate-12
  " />
</div>

// Badge
<span className="
  inline-flex items-center
  px-3 py-1
  bg-playful-tertiary text-playful-foreground
  rounded-full
  border-2 border-playful-foreground
  text-sm font-bold
">
  New!
</span>
*/

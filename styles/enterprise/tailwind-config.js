/**
 * Enterprise Design System - Tailwind CSS Configuration
 * 
 * Modern enterprise SaaS aesthetic featuring indigo-violet gradients,
 * colored shadows, isometric depth, and elevated cards.
 * 
 * @version 1.0.0
 * @created 2025-12-03
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // ===========================================
      // COLORS
      // ===========================================
      colors: {
        enterprise: {
          // Core palette
          background: '#F8FAFC',      // Slate 50 - page background
          foreground: '#0F172A',      // Slate 900 - primary text
          surface: '#FFFFFF',         // White - cards
          
          // Brand colors
          primary: '#4F46E5',         // Indigo 600 - core brand
          secondary: '#7C3AED',       // Violet 600 - gradients
          
          // Text variations
          muted: '#64748B',           // Slate 500 - supporting text
          placeholder: '#94A3B8',     // Slate 400 - input placeholders
          
          // Status
          accent: '#10B981',          // Emerald 500 - success
          
          // Borders
          border: '#E2E8F0',          // Slate 200 - default
          'border-light': '#F1F5F9',  // Slate 100 - cards
          
          // Extended palette
          'primary-50': '#EEF2FF',    // Indigo 50 - icon backgrounds
          'primary-100': '#E0E7FF',   // Indigo 100
          'primary-200': '#C7D2FE',   // Indigo 200 - blobs
          'secondary-200': '#DDD6FE', // Violet 200 - blobs
          'dark': '#312E81',          // Indigo 900 - dark CTA
          'darker': '#1E1B4B',        // Indigo 950 - gradient end
        },
      },

      // ===========================================
      // TYPOGRAPHY
      // ===========================================
      fontFamily: {
        enterprise: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        // Custom sizes with line-height and letter-spacing
        'enterprise-xs': ['12px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'enterprise-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0' }],
        'enterprise-base': ['16px', { lineHeight: '1.65', letterSpacing: '0' }],
        'enterprise-lg': ['18px', { lineHeight: '1.5', letterSpacing: '0' }],
        'enterprise-xl': ['20px', { lineHeight: '1.3', letterSpacing: '0' }],
        'enterprise-2xl': ['24px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'enterprise-3xl': ['30px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'enterprise-4xl': ['36px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'enterprise-5xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'enterprise-6xl': ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },

      // ===========================================
      // SHADOWS (Colored - Indigo tinted)
      // ===========================================
      boxShadow: {
        'enterprise': '0 4px 20px -2px rgba(79, 70, 229, 0.1)',
        'enterprise-md': '0 10px 25px -5px rgba(79, 70, 229, 0.15), 0 8px 10px -6px rgba(79, 70, 229, 0.1)',
        'enterprise-button': '0 4px 14px 0 rgba(79, 70, 229, 0.3)',
        'enterprise-button-hover': '0 6px 20px 0 rgba(79, 70, 229, 0.4)',
        'enterprise-glow': '0 0 20px rgba(79, 70, 229, 0.5)',
        'enterprise-input': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },

      // ===========================================
      // BORDER RADIUS
      // ===========================================
      borderRadius: {
        'enterprise-sm': '6px',
        'enterprise-md': '8px',
        'enterprise-lg': '8px',
        'enterprise-xl': '12px',
        'enterprise-2xl': '16px',
      },

      // ===========================================
      // ANIMATIONS
      // ===========================================
      animation: {
        'enterprise-float': 'enterprise-float 4s ease-in-out infinite',
        'enterprise-pulse': 'enterprise-pulse 4s ease-in-out infinite',
      },
      
      keyframes: {
        'enterprise-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'enterprise-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },

      // ===========================================
      // TRANSITION DURATIONS
      // ===========================================
      transitionDuration: {
        'enterprise-fast': '150ms',
        'enterprise': '200ms',
        'enterprise-slow': '300ms',
        'enterprise-very-slow': '500ms',
      },

      // ===========================================
      // CONTAINER
      // ===========================================
      maxWidth: {
        'enterprise': '1280px',
      },
    },
  },
  plugins: [],
};

/**
 * ===========================================
 * REQUIRED GOOGLE FONT IMPORT
 * ===========================================
 * Add to your CSS or HTML head:
 * 
 * @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
 */

/**
 * ===========================================
 * CUSTOM CSS (Add to your global styles)
 * ===========================================
 * 
 * @layer components {
 *   // Gradient text utility
 *   .enterprise-gradient-text {
 *     @apply bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent;
 *   }
 *   
 *   // Primary gradient background
 *   .enterprise-gradient-bg {
 *     @apply bg-gradient-to-r from-indigo-600 to-violet-600;
 *   }
 *   
 *   // Background blob
 *   .enterprise-blob {
 *     @apply absolute rounded-full blur-3xl opacity-30 -z-10;
 *     @apply bg-gradient-to-br from-indigo-200 to-violet-200;
 *   }
 *   
 *   // Isometric container
 *   .enterprise-isometric {
 *     perspective: 2000px;
 *   }
 *   
 *   .enterprise-isometric-card {
 *     transform: rotateX(5deg) rotateY(-12deg);
 *     transition: transform 0.3s ease-out;
 *   }
 *   
 *   .enterprise-isometric-card:hover {
 *     transform: rotateX(2deg) rotateY(-8deg);
 *   }
 * }
 */

/**
 * ===========================================
 * UTILITY CLASS QUICK REFERENCE
 * ===========================================
 * 
 * BACKGROUNDS:
 * - bg-enterprise-background     → #F8FAFC (page)
 * - bg-enterprise-surface        → #FFFFFF (cards)
 * - bg-enterprise-primary        → #4F46E5 (brand)
 * - bg-enterprise-primary-50     → #EEF2FF (icon badges)
 * 
 * TEXT:
 * - text-enterprise-foreground   → #0F172A (main)
 * - text-enterprise-muted        → #64748B (secondary)
 * - text-enterprise-primary      → #4F46E5 (links)
 * - text-enterprise-placeholder  → #94A3B8 (inputs)
 * 
 * BORDERS:
 * - border-enterprise-border       → #E2E8F0 (default)
 * - border-enterprise-border-light → #F1F5F9 (cards)
 * 
 * SHADOWS:
 * - shadow-enterprise              → Card default
 * - shadow-enterprise-md           → Card hover
 * - shadow-enterprise-button       → Button default
 * - shadow-enterprise-button-hover → Button hover
 * - shadow-enterprise-glow         → Badge glow
 * 
 * RADIUS:
 * - rounded-enterprise-xl          → 12px (cards)
 * - rounded-enterprise-lg          → 8px (inputs)
 * - rounded-full                   → Pill buttons
 * 
 * TYPOGRAPHY:
 * - font-enterprise                → Plus Jakarta Sans
 * - text-enterprise-6xl            → Hero (desktop)
 * - text-enterprise-4xl            → Hero (mobile) / Section heading
 * - text-enterprise-xl             → Card title
 * - text-enterprise-base           → Body
 * - text-enterprise-sm             → Labels
 * 
 * FONT WEIGHTS:
 * - font-extrabold (800)           → Hero headlines
 * - font-bold (700)                → Section headings
 * - font-semibold (600)            → Card titles
 * - font-medium (500)              → Buttons, nav
 * - font-normal (400)              → Body text
 */

/**
 * ===========================================
 * COMPONENT EXAMPLES
 * ===========================================
 */

// Primary Button
const PrimaryButtonExample = `
<button class="
  bg-gradient-to-r from-indigo-600 to-violet-600
  text-white font-medium
  px-6 py-3 rounded-full
  shadow-enterprise-button
  hover:-translate-y-0.5 hover:shadow-enterprise-button-hover
  transition-all duration-200
">
  Get Started
</button>
`;

// Secondary Button
const SecondaryButtonExample = `
<button class="
  bg-white text-slate-700 font-medium
  px-6 py-3 rounded-lg
  border border-enterprise-border
  hover:bg-slate-50 hover:border-slate-300
  transition-all duration-200
">
  Learn More
</button>
`;

// Card
const CardExample = `
<div class="
  bg-white rounded-enterprise-xl
  border border-enterprise-border-light
  shadow-enterprise
  hover:-translate-y-1 hover:shadow-enterprise-md
  transition-all duration-200
  p-6
">
  <h3 class="text-enterprise-xl font-semibold text-enterprise-foreground mb-2">
    Card Title
  </h3>
  <p class="text-enterprise-base text-enterprise-muted">
    Card description goes here.
  </p>
</div>
`;

// Input Field
const InputExample = `
<div>
  <label class="text-enterprise-sm font-semibold text-slate-700 mb-1.5 block">
    Email Address
  </label>
  <input 
    type="email"
    class="
      w-full px-4 py-2.5
      bg-white border border-enterprise-border rounded-enterprise-lg
      text-enterprise-foreground placeholder:text-enterprise-placeholder
      focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:border-indigo-500
      transition-all duration-200
    "
    placeholder="you@example.com"
  />
</div>
`;

// Icon Badge
const IconBadgeExample = `
<div class="
  h-12 w-12 rounded-enterprise-xl
  bg-enterprise-primary-50 text-enterprise-primary
  flex items-center justify-center
">
  <svg class="h-6 w-6" />
</div>
`;

// Gradient Text
const GradientTextExample = `
<h1 class="text-enterprise-5xl font-extrabold">
  <span class="text-enterprise-foreground">Build better </span>
  <span class="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
    products faster
  </span>
</h1>
`;

// Background Blob
const BlobExample = `
<div class="relative">
  <div class="
    absolute top-0 right-0 w-96 h-96
    bg-gradient-to-br from-indigo-200 to-violet-200
    rounded-full blur-3xl opacity-30 -z-10
  " />
  {/* Content */}
</div>
`;

// Section Container
const SectionExample = `
<section class="py-16 sm:py-20 lg:py-24">
  <div class="max-w-enterprise mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
`;

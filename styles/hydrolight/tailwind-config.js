/**
 * Hydrolight Design System - Tailwind CSS Configuration
 *
 * Sunlight through clear water. Light-mode water/stormwater engineering
 * aesthetic: depth gradients (cyan -> navy), caustic shimmer, water-tinted
 * shadows, wave dividers, monospace gauge readouts, semantic hydro states.
 *
 * Usage:
 *   1. Import this config into your tailwind.config.js
 *   2. Add Google Font import to your HTML/CSS
 *   3. Use hydro-* prefixed classes
 *
 * Google Font Import:
 *   <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
 */

module.exports = {
  theme: {
    extend: {
      // ============================================
      // COLORS
      // ============================================
      colors: {
        hydro: {
          // Water column (backgrounds -> depth)
          'bg': '#F0F9FF',          // Surface Light (page)
          'bg-alt': '#E0F2FE',      // Shallows (alt sections, stripes)
          'surface': '#FFFFFF',     // White Cap (cards)

          // Text
          'text': '#082F49',        // Deep Channel (primary text)
          'text-muted': '#475569',  // Silt (units, hints)
          'link': '#0369A1',        // Navigable (links, AA on white)

          // Brand blues
          'primary': '#0284C7',     // Open Water
          'deep': '#075985',        // Thalweg (gradient end, hovers)
          'cyan': '#06B6D4',        // Caustic Cyan (gradient start, glow)
          'seagrass': '#0D9488',    // Teal (green infrastructure accents)

          // Borders
          'border': '#BAE6FD',      // Ripple Line
          'border-light': '#E0F2FE',// Faint Ripple

          // Semantic hydro states (600 tone / 50 wash / 200 border)
          'flood': '#DC2626',
          'flood-wash': '#FEF2F2',
          'flood-line': '#FECACA',
          'action': '#D97706',
          'action-wash': '#FFFBEB',
          'action-line': '#FDE68A',
          'normal': '#059669',
          'normal-wash': '#ECFDF5',
          'normal-line': '#A7F3D0',
        },
      },

      // ============================================
      // FONTS
      // ============================================
      fontFamily: {
        'hydro': ['Manrope', 'Segoe UI', 'system-ui', 'sans-serif'],
        'hydro-data': ['JetBrains Mono', 'Consolas', 'monospace'],
      },

      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        'hydro-sm': '8px',
        'hydro-md': '10px',   // inputs, gauges
        'hydro-lg': '12px',   // buttons (rounded rectangle, NOT pill)
        'hydro-xl': '14px',   // cards
        'hydro-2xl': '20px',  // hero / gradient cards
      },

      // ============================================
      // BOX SHADOW (all water-tinted, never gray)
      // ============================================
      boxShadow: {
        'hydro-surface': '0 1px 3px rgba(2,132,199,0.08), 0 1px 2px rgba(2,132,199,0.06)',
        'hydro-float': '0 8px 24px -4px rgba(2,132,199,0.18), 0 4px 8px -2px rgba(2,132,199,0.10)',
        'hydro-deep': '0 16px 40px -8px rgba(7,89,133,0.30)',
        'hydro-button': '0 4px 14px rgba(2,132,199,0.35)',
        'hydro-button-hover': '0 6px 20px rgba(2,132,199,0.45)',
        'hydro-glow': '0 0 24px rgba(6,182,212,0.45)',
        'hydro-pool': 'inset 0 2px 6px rgba(7,89,133,0.12)',
      },

      // ============================================
      // BACKGROUND IMAGE (Gradients)
      // ============================================
      backgroundImage: {
        // SIGNATURE: always vertical, light above dark
        'hydro-depth': 'linear-gradient(180deg, #06B6D4 0%, #0284C7 55%, #075985 100%)',
        'hydro-shallows': 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 100%)',
        'hydro-sheen': 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 40%)',
        'hydro-text': 'linear-gradient(90deg, #0284C7, #06B6D4)',
        'hydro-gauge': 'linear-gradient(90deg, #06B6D4, #0284C7)',
      },

      // ============================================
      // ANIMATIONS
      // ============================================
      transitionDuration: {
        'hydro-fast': '150ms',
        'hydro': '200ms',
        'hydro-slow': '500ms',
      },
      keyframes: {
        'hydro-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'hydro-ripple': {
          'from': { boxShadow: '0 0 0 0 rgba(6,182,212,0.35)' },
          'to': { boxShadow: '0 0 0 10px rgba(6,182,212,0)' },
        },
        'hydro-rise': {
          'from': { width: '0%' },
        },
        'hydro-caustics': {
          '0%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(6%, -4%) scale(1.08)' },
          '100%': { transform: 'translate(-5%, 5%) scale(1.02)' },
        },
      },
      animation: {
        'hydro-float': 'hydro-float 6s ease-in-out infinite',
        'hydro-ripple': 'hydro-ripple 600ms ease-out',
        'hydro-rise': 'hydro-rise 900ms cubic-bezier(0.4, 0, 0.2, 1)',
        'hydro-caustics': 'hydro-caustics 14s ease-in-out infinite alternate',
      },

      // ============================================
      // MAX WIDTH / GRIDS
      // ============================================
      maxWidth: {
        'hydro-container': '1152px',
      },
      gridTemplateColumns: {
        'hydro-tool': '1fr 360px',      // form + gauge sidebar
        'hydro-gauges': 'repeat(3, 1fr)',
        'hydro-gauges-4': 'repeat(4, 1fr)',
      },
    },
  },
  plugins: [],
};


/* ============================================
   REQUIRED CUSTOM CSS
   ============================================

   Add this to your global CSS file:

   .hydro-page {
     @apply bg-hydro-bg text-hydro-text font-hydro min-h-screen;
   }

   .hydro-card {
     @apply bg-hydro-surface border border-hydro-border-light rounded-hydro-xl;
     @apply shadow-hydro-surface p-6 transition-all duration-hydro;
   }
   .hydro-card:hover {
     @apply -translate-y-1 shadow-hydro-float;
   }

   .hydro-hero {
     @apply relative overflow-hidden text-white rounded-hydro-2xl p-6;
     @apply bg-hydro-depth shadow-hydro-deep;
   }
   // Caustic shimmer overlay (signature)
   .hydro-hero::before {
     content: '';
     position: absolute;
     inset: -50%;
     background:
       radial-gradient(ellipse 40% 30% at 30% 20%, rgba(255,255,255,0.18), transparent 60%),
       radial-gradient(ellipse 30% 25% at 70% 60%, rgba(255,255,255,0.12), transparent 60%),
       radial-gradient(ellipse 35% 30% at 50% 90%, rgba(255,255,255,0.10), transparent 60%);
     animation: hydro-caustics 14s ease-in-out infinite alternate;
     pointer-events: none;
   }
   // Water surface line along top edge
   .hydro-hero::after {
     content: '';
     position: absolute;
     top: 0; left: 8%; right: 8%;
     height: 2px;
     background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
     border-radius: 2px;
   }

   .hydro-btn-primary {
     @apply bg-hydro-depth text-white font-semibold px-6 py-3 rounded-hydro-lg;
     @apply shadow-hydro-button transition-all duration-hydro;
   }
   .hydro-btn-primary:hover {
     @apply -translate-y-0.5 shadow-hydro-button-hover;
   }
   .hydro-btn-primary:active {
     @apply translate-y-0;
   }

   .hydro-btn-secondary {
     @apply bg-white text-hydro-link font-semibold px-6 py-3 rounded-hydro-lg;
     @apply border border-hydro-border transition-all duration-hydro;
   }
   .hydro-btn-secondary:hover {
     @apply bg-hydro-bg border-sky-300;
   }

   .hydro-input {
     @apply w-full px-4 py-2.5 rounded-hydro-md bg-hydro-bg/60;
     @apply border border-hydro-border text-hydro-text font-hydro-data;
     @apply shadow-hydro-pool placeholder-slate-400;
     @apply transition-all duration-hydro focus:outline-none;
     @apply focus:bg-white focus:border-hydro-primary focus:ring-4 focus:ring-cyan-500/25;
   }

   .hydro-label {
     @apply text-sm font-semibold text-hydro-text mb-1.5 block;
   }
   .hydro-unit {
     @apply text-xs font-medium uppercase text-hydro-text-muted;
   }

   // Gauge readout (signature)
   .hydro-gauge {
     @apply bg-white rounded-hydro-md border border-hydro-border-light p-4 shadow-hydro-surface;
   }
   .hydro-gauge-label {
     @apply text-xs font-semibold uppercase tracking-wide text-hydro-text-muted;
   }
   .hydro-gauge-value {
     @apply font-hydro-data text-3xl font-bold text-hydro-text tabular-nums;
   }
   .hydro-gauge-bar {
     @apply mt-2 h-1.5 rounded-full bg-hydro-bg-alt overflow-hidden;
   }
   .hydro-gauge-fill {
     @apply h-full rounded-full bg-hydro-gauge animate-hydro-rise;
   }

   // Semantic status badges
   .hydro-badge {
     @apply inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border;
   }
   .hydro-badge-flood  { @apply hydro-badge bg-hydro-flood-wash text-red-700 border-hydro-flood-line; }
   .hydro-badge-action { @apply hydro-badge bg-hydro-action-wash text-amber-700 border-hydro-action-line; }
   .hydro-badge-normal { @apply hydro-badge bg-hydro-normal-wash text-emerald-700 border-hydro-normal-line; }
   .hydro-badge-base   { @apply hydro-badge bg-hydro-bg text-hydro-link border-hydro-border; }

   // Alert cards (3px left border in state color)
   .hydro-alert {
     @apply rounded-hydro-xl p-4 border;
   }
   .hydro-alert-flood  { @apply hydro-alert bg-hydro-flood-wash border-hydro-flood-line border-l-[3px] border-l-hydro-flood; }
   .hydro-alert-action { @apply hydro-alert bg-hydro-action-wash border-hydro-action-line border-l-[3px] border-l-hydro-action; }
   .hydro-alert-normal { @apply hydro-alert bg-hydro-normal-wash border-hydro-normal-line border-l-[3px] border-l-hydro-normal; }

   // Data tables
   .hydro-table th {
     @apply text-left text-xs uppercase tracking-wide text-hydro-text-muted;
     @apply border-b-2 border-hydro-border py-2 pr-4 font-semibold;
   }
   .hydro-table td {
     @apply py-2 pr-4 font-hydro-data tabular-nums border-b border-hydro-border-light;
   }
   .hydro-table tr:hover td {
     @apply bg-hydro-bg-alt;
   }
   .hydro-table td.numeric { @apply text-right; }

   // Reduced motion
   @media (prefers-reduced-motion: reduce) {
     .hydro-hero::before { animation: none; }
   }

*/


/* ============================================
   WAVE DIVIDER (place between sections)
   ============================================

   <svg viewBox="0 0 1440 64" preserveAspectRatio="none"
        style="display:block; width:100%; height:48px;">
     <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
           fill="#E0F2FE"/>
     <path d="M0,40 C240,68 480,12 720,40 C960,68 1200,12 1440,40 L1440,64 L0,64 Z"
           fill="#BAE6FD" opacity="0.6"/>
   </svg>

*/


/* ============================================
   COMPONENT EXAMPLE - Engineering Tool Layout
   ============================================

   <div class="hydro-page p-6">
     <div class="max-w-hydro-container mx-auto">

       <!-- Depth-gradient hero with caustic shimmer -->
       <div class="hydro-hero">
         <h1 class="text-2xl font-extrabold relative">Culvert Capacity Analysis</h1>
         <p class="text-sky-100 text-sm mt-1 relative">Guerrard Cove | 25-yr Design Storm | NAD83 SC State Plane</p>
       </div>

       <!-- Tool grid: form + gauge sidebar -->
       <div class="grid lg:grid-cols-hydro-tool gap-6 mt-6">

         <!-- Input form card -->
         <div class="hydro-card">
           <label class="hydro-label">Peak Flow <span class="hydro-unit">cfs</span></label>
           <input type="number" inputmode="decimal" class="hydro-input" placeholder="0.00" />
           <button class="hydro-btn-primary mt-4">Run Analysis</button>
           <button class="hydro-btn-secondary mt-4 ml-3">Export</button>
         </div>

         <!-- Gauge sidebar -->
         <div class="space-y-4">
           <div class="hydro-gauge">
             <div class="hydro-gauge-label">Peak Stage</div>
             <div class="flex items-baseline gap-2 mt-1">
               <span class="hydro-gauge-value">12.47</span>
               <span class="hydro-unit">ft NAVD88</span>
             </div>
             <div class="hydro-gauge-bar">
               <div class="hydro-gauge-fill" style="width: 72%"></div>
             </div>
           </div>
           <span class="hydro-badge-normal">&#9679; WITHIN BANKS</span>
           <div class="hydro-alert-action">
             <div class="font-semibold text-amber-800 text-sm">Freeboard Deficit</div>
             <div class="text-sm text-slate-600">Node J-104: 0.4 ft available (1.0 ft required)</div>
           </div>
         </div>
       </div>

     </div>
   </div>

*/

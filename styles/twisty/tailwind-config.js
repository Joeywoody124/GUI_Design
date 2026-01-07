/**
 * Twisty Design System - Tailwind CSS Configuration
 * 
 * Modern dark-mode Finance SaaS aesthetic inspired by Halo Lab's Twisty design.
 * Features deep void backgrounds, violet-to-indigo gradients, layered surfaces.
 * 
 * Usage:
 *   1. Import this config into your tailwind.config.js
 *   2. Add Google Font import to your HTML/CSS
 *   3. Use twisty-* prefixed classes
 * 
 * Google Font Import:
 *   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
 */

module.exports = {
  theme: {
    extend: {
      // ============================================
      // COLORS
      // ============================================
      colors: {
        twisty: {
          // Backgrounds
          'bg': '#0D0D12',
          'bg-secondary': '#13131A',
          'surface': '#1A1A24',
          'surface-hover': '#22222E',
          
          // Text
          'text': '#FFFFFF',
          'text-secondary': '#A0A0B0',
          'text-muted': '#6B6B7B',
          
          // Primary (Violet)
          'primary': '#8B5CF6',
          'primary-light': '#A78BFA',
          
          // Secondary (Indigo)
          'secondary': '#6366F1',
          
          // Semantic
          'accent': '#22C55E',       // Success/Positive
          'accent-red': '#EF4444',   // Error/Negative
          'accent-yellow': '#F59E0B', // Warning
          
          // Borders
          'border': '#2A2A38',
          'border-light': '#1F1F2C',
        },
      },

      // ============================================
      // FONTS
      // ============================================
      fontFamily: {
        'twisty': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },

      // ============================================
      // FONT SIZES
      // ============================================
      fontSize: {
        'twisty-xs': ['11px', { lineHeight: '1.4' }],
        'twisty-sm': ['12px', { lineHeight: '1.5' }],
        'twisty-base': ['14px', { lineHeight: '1.6' }],
        'twisty-lg': ['16px', { lineHeight: '1.5' }],
        'twisty-xl': ['20px', { lineHeight: '1.4' }],
        'twisty-2xl': ['28px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'twisty-3xl': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },

      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        'twisty-sm': '6px',
        'twisty-md': '8px',
        'twisty-lg': '10px',
        'twisty-xl': '12px',
        'twisty-2xl': '16px',
        'twisty-3xl': '20px',
      },

      // ============================================
      // SPACING
      // ============================================
      spacing: {
        'twisty-card': '20px',
        'twisty-card-lg': '24px',
        'twisty-section': '32px',
      },

      // ============================================
      // BOX SHADOW (Minimal - uses surface contrast)
      // ============================================
      boxShadow: {
        'twisty-subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'twisty-elevated': '0 4px 12px rgba(0, 0, 0, 0.4)',
      },

      // ============================================
      // BACKGROUND IMAGE (Gradients)
      // ============================================
      backgroundImage: {
        'twisty-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
        'twisty-gradient-subtle': 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
        'twisty-glow': 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
      },

      // ============================================
      // BACKDROP BLUR
      // ============================================
      backdropBlur: {
        'twisty': '10px',
      },

      // ============================================
      // ANIMATIONS
      // ============================================
      transitionDuration: {
        'twisty-fast': '150ms',
        'twisty': '200ms',
        'twisty-slow': '300ms',
      },

      // ============================================
      // MAX WIDTH
      // ============================================
      maxWidth: {
        'twisty-container': '1400px',
      },

      // ============================================
      // GRID TEMPLATES
      // ============================================
      gridTemplateColumns: {
        'twisty-dashboard': '1fr 360px',
        'twisty-stats': 'repeat(4, 1fr)',
        'twisty-actions': 'repeat(3, 1fr)',
      },
    },
  },
  plugins: [],
};


/* ============================================
   REQUIRED CUSTOM CSS
   ============================================
   
   Add this to your global CSS file:

   .twisty-page {
     @apply bg-twisty-bg text-twisty-text font-twisty min-h-screen;
   }

   .twisty-card {
     @apply bg-twisty-surface border border-twisty-border rounded-twisty-2xl p-twisty-card;
     @apply transition-all duration-twisty;
   }
   
   .twisty-card:hover {
     @apply bg-twisty-surface-hover;
   }

   .twisty-stat-card {
     @apply twisty-card;
   }
   
   .twisty-stat-label {
     @apply text-twisty-sm text-twisty-text-muted font-medium mb-2;
   }
   
   .twisty-stat-value {
     @apply text-twisty-2xl font-bold mb-2;
   }
   
   .twisty-badge-positive {
     @apply inline-flex items-center gap-1 text-twisty-sm font-medium;
     @apply text-twisty-accent bg-green-500/10 px-2 py-1 rounded-twisty-sm;
   }
   
   .twisty-badge-negative {
     @apply inline-flex items-center gap-1 text-twisty-sm font-medium;
     @apply text-twisty-accent-red bg-red-500/10 px-2 py-1 rounded-twisty-sm;
   }

   .twisty-nav {
     @apply flex gap-2 bg-twisty-surface p-1 rounded-twisty-xl border border-twisty-border;
   }
   
   .twisty-nav-item {
     @apply px-5 py-2.5 rounded-twisty-md text-twisty-base font-medium cursor-pointer;
     @apply transition-all duration-twisty text-twisty-text-secondary;
   }
   
   .twisty-nav-item.active {
     @apply bg-twisty-gradient text-white;
   }

   .twisty-btn-primary {
     @apply bg-twisty-gradient text-white font-medium px-6 py-3 rounded-twisty-lg;
     @apply transition-all duration-twisty hover:opacity-90;
   }
   
   .twisty-btn-ghost {
     @apply bg-white/20 backdrop-blur-twisty text-white font-medium px-6 py-3 rounded-twisty-lg;
     @apply transition-all duration-twisty hover:bg-white/30;
   }
   
   .twisty-btn-outline {
     @apply bg-transparent border border-white/30 text-white font-medium px-6 py-3 rounded-twisty-lg;
     @apply transition-all duration-twisty hover:bg-white/10;
   }

   .twisty-input {
     @apply bg-twisty-surface border border-twisty-border rounded-twisty-lg px-4 py-2.5;
     @apply text-twisty-text placeholder-twisty-text-muted text-twisty-base;
     @apply transition-all duration-twisty focus:outline-none focus:border-twisty-primary;
   }

   .twisty-balance-card {
     @apply bg-twisty-gradient rounded-twisty-3xl p-7 relative overflow-hidden;
   }
   
   .twisty-balance-card::before {
     content: '';
     @apply absolute top-0 right-0 w-52 h-52 rounded-full transform translate-x-1/2 -translate-y-1/2;
     background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
   }

   .twisty-transaction-item {
     @apply flex items-center gap-3.5 p-3.5 bg-twisty-bg-secondary rounded-twisty-xl;
     @apply transition-all duration-twisty cursor-pointer hover:bg-twisty-surface;
   }
   
   .twisty-transaction-icon {
     @apply w-11 h-11 rounded-twisty-lg flex items-center justify-center text-lg;
   }

   .twisty-period-tabs {
     @apply flex gap-1 bg-twisty-bg-secondary p-1 rounded-twisty-md;
   }
   
   .twisty-period-tab {
     @apply px-3 py-1.5 rounded-twisty-sm text-twisty-sm font-medium cursor-pointer;
     @apply transition-all duration-twisty text-twisty-text-muted;
   }
   
   .twisty-period-tab.active {
     @apply bg-twisty-primary text-white;
   }

   .twisty-avatar {
     @apply w-10 h-10 rounded-twisty-lg bg-twisty-gradient;
     @apply flex items-center justify-center font-semibold text-sm text-white cursor-pointer;
   }

   .twisty-search {
     @apply flex items-center gap-2.5 bg-twisty-surface border border-twisty-border;
     @apply rounded-twisty-lg px-4 py-2.5 w-60;
   }
   
   .twisty-search input {
     @apply bg-transparent border-none outline-none text-twisty-text text-twisty-base w-full;
     @apply placeholder-twisty-text-muted;
   }

*/


/* ============================================
   COMPONENT EXAMPLES
   ============================================

   <!-- Page Container -->
   <div class="twisty-page p-6">
     <div class="max-w-twisty-container mx-auto">
       
       <!-- Navigation -->
       <nav class="twisty-nav">
         <div class="twisty-nav-item active">Overview</div>
         <div class="twisty-nav-item">Analytics</div>
         <div class="twisty-nav-item">Transactions</div>
       </nav>
       
       <!-- Stats Grid -->
       <div class="grid grid-twisty-stats gap-4 mt-8">
         <div class="twisty-stat-card">
           <div class="twisty-stat-label">Total Balance</div>
           <div class="twisty-stat-value">$84,232.00</div>
           <span class="twisty-badge-positive">↑ +12.5%</span>
         </div>
         <!-- More stat cards... -->
       </div>
       
       <!-- Dashboard Grid -->
       <div class="grid grid-twisty-dashboard gap-6 mt-6">
         <!-- Left Column -->
         <div class="space-y-6">
           <!-- Chart Card -->
           <div class="twisty-card">
             <div class="flex justify-between items-center mb-6">
               <h3 class="text-twisty-lg font-semibold">Revenue Overview</h3>
               <div class="twisty-period-tabs">
                 <div class="twisty-period-tab">1W</div>
                 <div class="twisty-period-tab active">1M</div>
                 <div class="twisty-period-tab">3M</div>
               </div>
             </div>
             <!-- Chart content -->
           </div>
         </div>
         
         <!-- Right Column -->
         <div class="space-y-6">
           <!-- Balance Card -->
           <div class="twisty-balance-card">
             <div class="text-sm text-white/80 mb-2">Available Balance</div>
             <div class="text-4xl font-bold mb-5">$84,232.00</div>
             <div class="flex gap-3">
               <button class="twisty-btn-ghost flex-1">↑ Send</button>
               <button class="twisty-btn-outline flex-1">↓ Request</button>
             </div>
           </div>
           
           <!-- Transactions -->
           <div class="twisty-card flex-1">
             <div class="flex justify-between items-center mb-5">
               <h3 class="text-twisty-lg font-semibold">Recent Transactions</h3>
               <span class="text-twisty-primary text-sm font-medium cursor-pointer">View All →</span>
             </div>
             <div class="space-y-3">
               <div class="twisty-transaction-item">
                 <div class="twisty-transaction-icon bg-green-500/15">🎵</div>
                 <div class="flex-1">
                   <div class="text-twisty-base font-medium">Spotify Premium</div>
                   <div class="text-twisty-sm text-twisty-text-muted">Dec 24, 2024</div>
                 </div>
                 <div class="text-twisty-base font-semibold">-$14.99</div>
               </div>
               <!-- More transactions... -->
             </div>
           </div>
         </div>
       </div>
       
     </div>
   </div>

*/

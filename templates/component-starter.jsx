/**
 * Component Starter Template
 * 
 * A reusable React component template for the GUI Design Center Library.
 * Customize this template based on the selected design system style.
 * 
 * Available Styles:
 *   - Bauhaus (Light): Geometric, R/B/Y primaries, hard shadows
 *   - Kinetic (Dark): Brutalist, acid yellow, infinite marquees
 *   - Academia (Dark): Classical, brass/crimson, sepia images
 *   - Cyberpunk (Dark): Neon glow, glitch effects, terminal aesthetic
 *   - Sketch (Light): Hand-drawn, wobbly borders, paper texture
 *   - Playful Geometric (Light): Memphis-inspired, bouncy, confetti
 *   - Enterprise (Light): Corporate SaaS, indigo gradients, polished
 *   - Twisty (Dark): Fintech SaaS, violet-indigo gradient, layered surfaces
 * 
 * Usage:
 *   1. Copy this file to your project
 *   2. Import the appropriate design tokens or Tailwind config
 *   3. Replace placeholder classes with style-specific utilities
 * 
 * For complete dashboards, see:
 *   - templates/Twisty/TwistyFinanceDashboard.jsx
 */

import React from 'react';

// ===================
// STYLE PRESETS
// ===================
// Quick reference for common style configurations

const STYLE_PRESETS = {
  bauhaus: {
    colors: {
      background: '#F0F0F0',
      foreground: '#121212',
      primary: '#D02020',
      secondary: '#1040C0',
      accent: '#F0C020',
    },
    radius: { card: '0', button: '0' },
    shadow: '4px 4px 0px 0px black',
  },
  kinetic: {
    colors: {
      background: '#09090B',
      foreground: '#FAFAFA',
      primary: '#DFE104',
      muted: '#27272A',
    },
    radius: { card: '0', button: '0' },
    shadow: 'none',
  },
  twisty: {
    colors: {
      background: '#0D0D12',
      backgroundSecondary: '#13131A',
      surface: '#1A1A24',
      foreground: '#FFFFFF',
      textSecondary: '#A0A0B0',
      textMuted: '#6B6B7B',
      primary: '#8B5CF6',
      secondary: '#6366F1',
      accent: '#22C55E',
      accentRed: '#EF4444',
      border: '#2A2A38',
    },
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    radius: { card: '16px', button: '10px' },
    shadow: 'none',
  },
  enterprise: {
    colors: {
      background: '#F8FAFC',
      foreground: '#0F172A',
      surface: '#FFFFFF',
      primary: '#4F46E5',
      secondary: '#7C3AED',
      accent: '#10B981',
      border: '#E2E8F0',
    },
    gradient: 'linear-gradient(to right, #4F46E5, #7C3AED)',
    radius: { card: '12px', button: '9999px' },
    shadow: '0 4px 20px -2px rgba(79, 70, 229, 0.1)',
  },
};


// ===================
// BUTTON COMPONENT
// ===================
export const Button = ({ 
  children, 
  variant = 'primary', 
  shape = 'square',
  onClick,
  disabled = false,
  className = '',
  style = {},
  ...props 
}) => {
  // Define variant styles - replace with your design system classes
  const variants = {
    primary: 'bg-[#D02020] text-white',
    secondary: 'bg-[#1040C0] text-white',
    accent: 'bg-[#F0C020] text-black',
    outline: 'bg-white text-black',
  };

  const shapes = {
    square: 'rounded-none',
    pill: 'rounded-full',
  };

  const baseStyles = `
    px-6 py-3
    border-2 border-black
    shadow-[4px_4px_0px_0px_black]
    uppercase font-bold tracking-wider
    transition-all duration-200
    hover:opacity-90
    active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${shapes[shape]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};


// ===================
// CARD COMPONENT
// ===================
export const Card = ({ 
  children, 
  decoration = 'circle', // 'circle' | 'square' | 'triangle' | 'none'
  decorationColor = '#D02020',
  className = '',
  style = {},
  ...props 
}) => {
  const decorations = {
    circle: 'rounded-full',
    square: 'rounded-none',
    triangle: '', // Uses clip-path
    none: 'hidden',
  };

  return (
    <div
      className={`
        relative
        bg-white
        border-4 border-black
        shadow-[8px_8px_0px_0px_black]
        p-6
        hover:-translate-y-1
        transition-transform duration-200
        ${className}
      `}
      style={style}
      {...props}
    >
      {/* Corner Decoration */}
      {decoration !== 'none' && (
        <div 
          className={`
            absolute top-3 right-3 
            w-3 h-3
            ${decorations[decoration]}
          `}
          style={{ 
            backgroundColor: decorationColor,
            clipPath: decoration === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
          }}
        />
      )}
      {children}
    </div>
  );
};


// ===================
// SECTION COMPONENT
// ===================
export const Section = ({ 
  children, 
  background = 'default', // 'default' | 'red' | 'blue' | 'yellow' | 'dark'
  withDivider = true,
  className = '',
  style = {},
  ...props 
}) => {
  const backgrounds = {
    default: 'bg-[#F0F0F0]',
    red: 'bg-[#D02020] text-white',
    blue: 'bg-[#1040C0] text-white',
    yellow: 'bg-[#F0C020] text-black',
    dark: 'bg-[#121212] text-white',
  };

  return (
    <section
      className={`
        py-12 sm:py-16 lg:py-24
        px-4 sm:px-6 lg:px-8
        ${backgrounds[background]}
        ${withDivider ? 'border-b-4 border-black' : ''}
        ${className}
      `}
      style={style}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};


// ===================
// HEADLINE COMPONENT
// ===================
export const Headline = ({ 
  children, 
  level = 1, // 1-6
  className = '',
  style = {},
  ...props 
}) => {
  const Tag = `h${level}`;
  
  const sizes = {
    1: 'text-4xl sm:text-6xl lg:text-8xl',
    2: 'text-3xl sm:text-4xl lg:text-5xl',
    3: 'text-2xl sm:text-3xl lg:text-4xl',
    4: 'text-xl sm:text-2xl lg:text-3xl',
    5: 'text-lg sm:text-xl lg:text-2xl',
    6: 'text-base sm:text-lg lg:text-xl',
  };

  return (
    <Tag
      className={`
        font-black uppercase tracking-tighter leading-[0.9]
        ${sizes[level]}
        ${className}
      `}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  );
};


// ===================
// GEOMETRIC SHAPES (Decorative)
// ===================
export const GeometricShape = ({ 
  shape = 'circle', // 'circle' | 'square' | 'triangle'
  color = '#D02020',
  size = 64,
  rotate = false,
  className = '',
  ...props 
}) => {
  const baseStyles = {
    width: size,
    height: size,
    backgroundColor: shape !== 'triangle' ? color : 'transparent',
    borderColor: shape === 'triangle' ? color : undefined,
  };

  if (shape === 'triangle') {
    return (
      <div
        className={`${rotate ? 'rotate-45' : ''} ${className}`}
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size/2}px solid transparent`,
          borderRight: `${size/2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
        }}
        {...props}
      />
    );
  }

  return (
    <div
      className={`
        ${shape === 'circle' ? 'rounded-full' : 'rounded-none'}
        ${rotate ? 'rotate-45' : ''}
        ${className}
      `}
      style={baseStyles}
      {...props}
    />
  );
};


// ===================
// STAT CARD (Twisty Style)
// ===================
export const StatCard = ({
  label,
  value,
  change,
  positive = true,
  style = {},
  ...props
}) => {
  const colors = STYLE_PRESETS.twisty.colors;
  
  return (
    <div
      style={{
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: '16px',
        padding: '20px',
        ...style,
      }}
      {...props}
    >
      <div style={{ fontSize: '13px', color: colors.textMuted, marginBottom: '8px', fontWeight: 500 }}>
        {label}
      </div>
      <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '8px', color: colors.foreground }}>
        {value}
      </div>
      {change && (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          fontWeight: 500,
          color: positive ? colors.accent : colors.accentRed,
          background: positive ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          padding: '4px 8px',
          borderRadius: '6px',
        }}>
          {positive ? '↑' : '↓'} {change}
        </span>
      )}
    </div>
  );
};


// ===================
// GRADIENT BUTTON (Twisty/Enterprise Style)
// ===================
export const GradientButton = ({
  children,
  variant = 'twisty', // 'twisty' | 'enterprise'
  onClick,
  style = {},
  ...props
}) => {
  const gradients = {
    twisty: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    enterprise: 'linear-gradient(to right, #4F46E5, #7C3AED)',
  };
  
  return (
    <button
      onClick={onClick}
      style={{
        background: gradients[variant],
        color: '#FFFFFF',
        padding: '12px 24px',
        borderRadius: variant === 'enterprise' ? '9999px' : '10px',
        fontWeight: 500,
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};


// ===================
// USAGE EXAMPLE
// ===================
/*
import { Button, Card, Section, Headline, GeometricShape, StatCard, GradientButton } from './component-starter';

export default function ExamplePage() {
  return (
    <Section background="default">
      <Headline level={1}>Welcome to Bauhaus</Headline>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <Card decoration="circle" decorationColor="#D02020">
          <h3 className="text-xl font-bold uppercase mb-2">Feature One</h3>
          <p>Description of the feature goes here.</p>
        </Card>
        
        <Card decoration="square" decorationColor="#1040C0">
          <h3 className="text-xl font-bold uppercase mb-2">Feature Two</h3>
          <p>Description of the feature goes here.</p>
        </Card>
        
        <Card decoration="triangle" decorationColor="#F0C020">
          <h3 className="text-xl font-bold uppercase mb-2">Feature Three</h3>
          <p>Description of the feature goes here.</p>
        </Card>
      </div>
      
      <div className="flex gap-4 mt-12">
        <Button variant="primary">Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
      
      <div className="flex gap-4 mt-12">
        <GeometricShape shape="circle" color="#D02020" size={48} />
        <GeometricShape shape="square" color="#1040C0" size={48} rotate />
        <GeometricShape shape="triangle" color="#F0C020" size={48} />
      </div>
    </Section>
  );
}

// Twisty-style example
export function TwistyExample() {
  return (
    <div style={{ background: '#0D0D12', padding: '24px', minHeight: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <StatCard label="Total Balance" value="$84,232.00" change="+12.5%" positive={true} />
        <StatCard label="Total Income" value="$32,540.00" change="+8.2%" positive={true} />
        <StatCard label="Total Expenses" value="$12,890.00" change="-3.1%" positive={false} />
        <StatCard label="Total Savings" value="$24,120.00" change="+15.3%" positive={true} />
      </div>
      
      <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
        <GradientButton variant="twisty">Send Money</GradientButton>
        <GradientButton variant="enterprise">Request</GradientButton>
      </div>
    </div>
  );
}
*/

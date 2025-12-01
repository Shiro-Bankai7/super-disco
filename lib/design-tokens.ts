/**
 * Design Tokens
 * 
 * This file contains all design tokens extracted from the Figma design.
 * These tokens ensure consistency across the application and provide a single
 * source of truth for all visual design attributes.
 * 
 * Usage:
 * - Import tokens directly: import { colors, spacing } from '@/lib/design-tokens'
 * - Tokens are also integrated into Tailwind config for utility class usage
 * 
 * Requirements: 1.4 - Design tokens extracted from Figma
 */

/**
 * Color Tokens
 * 
 * Primary: Brand green color used for CTAs and key brand elements
 * Neutral: Grayscale palette for text, backgrounds, and borders
 * Semantic: Colors for success, error, warning, and info states
 */
export const colors = {
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',  // Main brand color
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22',
    DEFAULT: '#10b981',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
    DEFAULT: '#737373',
  },
  semantic: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
  // Additional colors for backgrounds and surfaces
  background: {
    primary: '#ffffff',
    secondary: '#fafafa',
    tertiary: '#f5f5f5',
    light: '#ecfdf5', // Light green background (primary-50)
    dark: '#1a202c',  // Dark navy for footer
  },
  text: {
    primary: '#171717',
    secondary: '#525252',
    tertiary: '#a3a3a3',
    inverse: '#ffffff',
  },
  // Button and badge colors
  button: {
    primary: '#1a202c',      // Dark navy/black for primary buttons
    primaryHover: '#2d3748', // Slightly lighter on hover
    secondary: 'transparent', // Ghost/outlined buttons
  },
} as const;

/**
 * Typography Tokens
 * 
 * Font families, sizes, weights, and line heights
 * Based on a modular scale for consistent typography hierarchy
 */
export const typography = {
  fontFamily: {
    sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    display: ['var(--font-display)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
    base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
    '5xl': ['3rem', { lineHeight: '1' }],         // 48px
    '6xl': ['3.75rem', { lineHeight: '1' }],      // 60px
    '7xl': ['4.5rem', { lineHeight: '1' }],       // 72px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

/**
 * Spacing Tokens
 * 
 * Based on a 4px base unit system for consistent spacing throughout the app
 * Use these for margins, padding, gaps, and positioning
 */
export const spacing = {
  0: '0px',
  1: '4px',    // 0.25rem
  2: '8px',    // 0.5rem
  3: '12px',   // 0.75rem
  4: '16px',   // 1rem
  5: '20px',   // 1.25rem
  6: '24px',   // 1.5rem
  7: '28px',   // 1.75rem
  8: '32px',   // 2rem
  10: '40px',  // 2.5rem
  12: '48px',  // 3rem
  14: '56px',  // 3.5rem
  16: '64px',  // 4rem
  20: '80px',  // 5rem
  24: '96px',  // 6rem
  28: '112px', // 7rem
  32: '128px', // 8rem
} as const;

/**
 * Breakpoint Tokens
 * 
 * Responsive breakpoints for mobile-first design
 * Mobile: < 768px
 * Tablet: 768px - 1023px
 * Desktop: >= 1024px
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/**
 * Shadow Tokens
 * 
 * Elevation system for cards, modals, and interactive elements
 */
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const;

/**
 * Border Radius Tokens
 * 
 * Consistent rounding for buttons, cards, and other UI elements
 */
export const borderRadius = {
  none: '0px',
  sm: '8px',
  DEFAULT: '12px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
} as const;

/**
 * Z-Index Tokens
 * 
 * Layering system for overlays, modals, and navigation
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

/**
 * Transition Tokens
 * 
 * Animation durations and easing functions for consistent motion
 */
export const transitions = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

/**
 * Container Tokens
 * 
 * Max widths for content containers
 */
export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
} as const;

/**
 * Component-Specific Tokens
 * 
 * Tokens for specific component patterns
 */
export const components = {
  button: {
    height: {
      sm: '32px',
      md: '44px',
      lg: '52px',
    },
    padding: {
      sm: '8px 16px',
      md: '12px 24px',
      lg: '16px 32px',
    },
    fontSize: {
      sm: typography.fontSize.sm,
      md: typography.fontSize.base,
      lg: typography.fontSize.lg,
    },
    borderRadius: {
      sm: '6px',
      md: '8px',
      lg: '10px',
    },
  },
  input: {
    height: {
      sm: '32px',
      md: '48px',
      lg: '56px',
    },
    padding: {
      sm: '8px 12px',
      md: '12px 16px',
      lg: '16px 20px',
    },
    borderRadius: '8px',
    backgroundColor: '#f5f5f5', // Light gray background
  },
  card: {
    padding: {
      sm: spacing[4],
      md: spacing[6],
      lg: spacing[8],
    },
    borderRadius: borderRadius.lg,
  },
  badge: {
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
  },
  iconCircle: {
    size: {
      sm: '40px',
      md: '56px',
      lg: '64px',
    },
    backgroundColor: '#ecfdf5', // Light green (primary-50)
    borderRadius: '50%',
  },
  footer: {
    backgroundColor: '#1a202c',
    textColor: '#a0aec0',
    linkHoverColor: '#ffffff',
  },
} as const;

/**
 * Export all tokens as a single object for convenience
 */
export const designTokens = {
  colors,
  typography,
  spacing,
  breakpoints,
  shadows,
  borderRadius,
  zIndex,
  transitions,
  containers,
  components,
} as const;

export default designTokens;

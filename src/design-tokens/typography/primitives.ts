/**
 * Typography Primitives
 * Base-level tokens that define the raw values
 * These should not be used directly in components - use semantic tokens instead
 */

// Font Families
// Uses CSS custom properties from fonts.css for centralized fallback management
// Edit fallbacks in src/styles/fonts.css - they apply automatically everywhere
export const fontFamilies = {
  primary: 'var(--font-family-roboto)',
  secondary: 'var(--font-family-circular)',
} as const;

// Font Sizes
export const fontSizes = {
  '10': '10px',
  '11': '11px',
  '12': '12px',
  '14': '14px',
  '15': '15px',
  '17': '17px',
  '23': '23px',
  '28': '28px',
  '32': '32px',
  '36': '36px',
  '45': '45px',
} as const;

// Font Weights
export const fontWeights = {
  regular: 400,
  medium: 450,
  semibold: 500,
  bold: 600,
} as const;

// Line Heights
export const lineHeights = {
  '12': '12px',
  '16': '16px',
  '20': '20px',
  '24': '24px',
  '32': '32px',
  '36': '36px',
  '40': '40px',
  '44': '44px',
  '52': '52px',
} as const;

// Letter Spacing
export const letterSpacing = {
  normal: 'normal',
  tight: '0.15px',
  wide: '0.18px',
} as const;

// Text Transform
export const textTransform = {
  none: 'none',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
} as const;

// Shadow Tokens
export const shadows = {
  xs: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1)',
  sm: '0px 6px 10px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.1)',
  md: '0px 10px 15px rgba(0, 0, 0, 0.15), 0px 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0px 20px 40px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(0, 0, 0, 0.1)',
  xl: '0px 28px 48px rgba(0, 0, 0, 0.25)',
} as const;

// TypeScript types for type safety
export type FontFamily = typeof fontFamilies[keyof typeof fontFamilies];
export type FontSize = typeof fontSizes[keyof typeof fontSizes];
export type FontWeight = typeof fontWeights[keyof typeof fontWeights];
export type LineHeight = typeof lineHeights[keyof typeof lineHeights];
export type LetterSpacing = typeof letterSpacing[keyof typeof letterSpacing];
export type TextTransform = typeof textTransform[keyof typeof textTransform];
export type Shadow = typeof shadows[keyof typeof shadows];

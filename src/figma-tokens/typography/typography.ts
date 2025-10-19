/**
 * Typography Primitives
 * Base-level tokens that define raw typography values
 *
 * These should not be used directly in components - use semantic tokens instead
 */

// Font Families
// Uses CSS custom properties from fonts.css for centralized fallback management
// Primary (Roboto): Body content - paragraphs, links, lists, base text
// Secondary (Circular): Featured/UI - headings, buttons, chips, navigation
export const fontFamilies = {
  primary: 'var(--font-family-roboto)',     // Body content
  secondary: 'var(--font-family-circular)', // Featured/UI elements
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
// Circular Std: Only use 400 (regular) and 500 (strong)
// Roboto: Can use 400, 500, 600, 700 as needed
export const fontWeights = {
  regular: 400,   // Circular Book, Roboto Regular
  strong: 500,    // Circular Medium, Roboto Medium
  semibold: 500,  // Alias for strong (deprecated)
  bold: 600,      // Roboto Bold (not for Circular)
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

// TypeScript types
export type FontFamily = typeof fontFamilies[keyof typeof fontFamilies];
export type FontSize = typeof fontSizes[keyof typeof fontSizes];
export type FontWeight = typeof fontWeights[keyof typeof fontWeights];
export type LineHeight = typeof lineHeights[keyof typeof lineHeights];
export type LetterSpacing = typeof letterSpacing[keyof typeof letterSpacing];
export type TextTransform = typeof textTransform[keyof typeof textTransform];

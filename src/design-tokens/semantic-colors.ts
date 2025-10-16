/**
 * Semantic Color System for Treez Design System
 *
 * This file maps the extracted Figma colors to semantic, meaningful names
 * that can be used throughout the application.
 */

// Brand Colors - Primary greens from Treez brand
export const brandColors = {
  primary: '#a9e079',        // Main brand color (light green)
  primaryDark: '#6baa32',    // Darker brand variant
  primaryText: '#0f1709',    // Dark green for text on light backgrounds
  secondary: '#1a4007',      // Deep green for secondary elements
} as const;

// Neutral Colors - Greys and blacks
export const neutralColors = {
  black: '#000000',
  grey900: '#1a1a1a',
  grey800: '#262626',
  grey700: '#333333',
  grey500: '#595959',
  white: '#ffffff',
} as const;

// Semantic Background Colors
export const backgroundColors = {
  beige: '#f1eae6',
  peach: '#f9e7da',
  red: '#ffeded',
  blue: '#f0f8ff',
  purple: '#faf2fe',
  yellow: '#fdf8e5',
} as const;

// Semantic State Colors
export const stateColors = {
  info: '#437dcf',
  success: '#309f56',
  warning: '#e26815',
  error: '#da5050',
  accent: '#fde28b',
} as const;

// Button-specific semantic tokens
export const buttonColors = {
  // Primary variant (filled)
  primaryBg: brandColors.primary,
  primaryText: brandColors.primaryText,
  primaryHover: '#9cd367',    // Slightly darker on hover
  primaryActive: '#8fc655',   // Even darker on press

  // Secondary variant (outlined)
  secondaryBorder: brandColors.secondary,
  secondaryText: brandColors.secondary,
  secondaryHoverBg: 'rgba(26, 64, 7, 0.04)',
  secondaryActiveBg: 'rgba(26, 64, 7, 0.08)',

  // Tertiary variant (text only)
  tertiaryText: brandColors.secondary,
  tertiaryHoverBg: 'rgba(26, 64, 7, 0.04)',
  tertiaryActiveBg: 'rgba(26, 64, 7, 0.08)',

  // Focus state
  focusOutline: neutralColors.grey900,
} as const;

// Export all colors as a single object
export const colors = {
  brand: brandColors,
  neutral: neutralColors,
  background: backgroundColors,
  state: stateColors,
  button: buttonColors,
} as const;

// RGB values for use with opacity
export const buttonColorsRgb = {
  primaryBg: '169, 224, 121',
  primaryText: '15, 23, 9',
  primaryHover: '156, 211, 103',
  primaryActive: '143, 198, 85',
  secondaryBorder: '26, 64, 7',
  secondaryText: '26, 64, 7',
  tertiaryText: '26, 64, 7',
  focusOutline: '26, 26, 26',
} as const;

// Type exports
export type BrandColor = keyof typeof brandColors;
export type NeutralColor = keyof typeof neutralColors;
export type BackgroundColor = keyof typeof backgroundColors;
export type StateColor = keyof typeof stateColors;
export type ButtonColor = keyof typeof buttonColors;

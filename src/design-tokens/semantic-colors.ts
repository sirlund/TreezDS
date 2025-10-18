/**
 * Semantic Color System for Treez Design System
 *
 * This file maps primitive tokens from Figma to semantic, meaningful names
 * that can be used throughout the application.
 *
 * ARCHITECTURE:
 * - Primitive Tokens (from Figma) → figma-tokens/colors/
 * - Semantic Tokens (curated) → design-tokens/ (this file)
 * - Components use semantic tokens for better maintainability
 */

import {
  greenColors,
  greyscaleColors,
  bwColors,
  brownColors,
  orangeColors,
  peachColors,
  blueColors,
  purpleColors,
  yellowColors,
  infoColors,
  successColors,
  warningColors,
  errorColors,
  textColors,
} from '../figma-tokens/colors/colors';

// Brand Colors - Primary greens from Treez brand
export const brandColors = {
  primary: greenColors.green05,        // '#a9e079' - Main brand color
  primaryDark: greenColors.green07,    // '#6baa32' - Darker brand variant
  primaryText: textColors['primary-black-text'], // '#0f1709' - Text on light backgrounds
  secondary: greenColors.green10,      // '#1a4007' - Deep green for secondary
} as const;

// Neutral Colors - Greys and blacks
export const neutralColors = {
  black: '#000000',                       // Pure black (not in Figma tokens)
  grey900: bwColors['primary-black'],     // '#1a1a1a'
  grey800: greyscaleColors.grey10,        // '#262626'
  grey700: greyscaleColors.grey09,        // '#404040'
  grey500: greyscaleColors.grey08,        // '#595959'
  white: bwColors['primary-white'],       // '#ffffff'
} as const;

// Semantic Background Colors
export const backgroundColors = {
  beige: brownColors.brown00,   // '#f1eae6'
  peach: orangeColors.orange00, // '#f9e7da'
  red: peachColors.peach00,     // '#ffeded'
  blue: blueColors.blue00,      // '#f0f8ff'
  purple: purpleColors.purple00, // '#faf2fe'
  yellow: yellowColors.yellow00, // '#fdf8e5'
} as const;

// Semantic State Colors
export const stateColors = {
  info: infoColors['info-main'],       // '#437dcf'
  success: successColors['success-main'], // '#309f56'
  warning: warningColors['warning-main'], // '#e26815'
  error: errorColors['error-main'],    // '#da5050'
  accent: yellowColors.yellow02, // '#fde28b'
} as const;

// Custom calculated colors (not in Figma, calculated for UI states)
const calculatedColors = {
  primaryHover: '#9cd367',    // Between green05 and green06 - hover state
  primaryActive: '#8fc655',   // Closer to green06 - active/pressed state
} as const;

// Button-specific semantic tokens
export const buttonColors = {
  // Primary variant (filled)
  primaryBg: brandColors.primary,
  primaryText: brandColors.primaryText,
  primaryHover: calculatedColors.primaryHover,   // Custom calculated
  primaryActive: calculatedColors.primaryActive, // Custom calculated

  // Secondary variant (outlined)
  secondaryBorder: brandColors.secondary,
  secondaryText: brandColors.secondary,
  secondaryHoverBg: 'rgba(26, 64, 7, 0.04)',     // 4% opacity overlay
  secondaryActiveBg: 'rgba(26, 64, 7, 0.08)',    // 8% opacity overlay

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

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
 *
 * IMPORTANT: All values MUST reference primitiveColors - NO hardcoded values!
 */

import { primitiveColors } from '../figma-tokens';

// Brand Colors - Primary greens from Treez brand
export const brandColors = {
  primary: primitiveColors['Green-green05'],           // '#a9e079' - Main brand color
  primaryLight: primitiveColors['Primary-primaryLight'], // '#e8f7cd'
  primaryDark: primitiveColors['Green-green07'],       // '#6baa32' - Darker brand variant
  primaryText: primitiveColors['Text-primaryBlackText'], // '#0f1709' - Text on light backgrounds
  secondary: primitiveColors['Green-green10'],         // '#1a4007' - Deep green for secondary
} as const;

// Neutral Colors - Greys and blacks
export const neutralColors = {
  black: primitiveColors['B&W-primaryBlack'],    // '#1a1a1a' - Closest to pure black
  grey900: primitiveColors['Greyscale-grey10'],  // '#262626'
  grey800: primitiveColors['Greyscale-grey09'],  // '#404040'
  grey700: primitiveColors['Greyscale-grey08'],  // '#595959'
  grey600: primitiveColors['Greyscale-grey07'],  // '#737373'
  grey500: primitiveColors['Greyscale-grey06'],  // '#8c8c8c'
  grey400: primitiveColors['Greyscale-grey05'],  // '#bfbfbf'
  grey300: primitiveColors['Greyscale-grey04'],  // '#e6e6e6'
  grey200: primitiveColors['Greyscale-grey03'],  // '#f0f0f0'
  grey100: primitiveColors['Greyscale-grey02'],  // '#f5f5f5'
  grey50: primitiveColors['Greyscale-grey01'],   // '#f7f7f7'
  white: primitiveColors['B&W-primaryWhite'],    // '#ffffff'
} as const;

// Semantic Background Colors
export const backgroundColors = {
  beige: primitiveColors['Secondary-Brown-brown00'],    // '#f1eae6'
  peach: primitiveColors['Secondary-Orange-orange00'],  // '#f9e7da'
  red: primitiveColors['Secondary-Peach-peach00'],      // '#ffeded'
  blue: primitiveColors['Secondary-Blue-blue00'],       // '#f0f8ff'
  purple: primitiveColors['Secondary-Purple-purple00'], // '#faf2fe'
  yellow: primitiveColors['Secondary-Yellow-yellow00'], // '#fdf8e5'
} as const;

// Semantic State Colors
export const stateColors = {
  info: primitiveColors['System-Info-infoMain'],       // '#437dcf'
  infoLight: primitiveColors['System-Info-infoLight'], // '#e1eefa'
  infoDark: primitiveColors['System-Info-infoDark'],   // '#3774ac'

  success: primitiveColors['System-Success-successMain'],   // '#309f56'
  successLight: primitiveColors['System-Success-successLight'], // '#e5f9ec'
  successDark: primitiveColors['System-Success-successDark'], // '#2e834b'

  warning: primitiveColors['System-Warning-warningMain'],   // '#e26815'
  warningLight: primitiveColors['System-Warning-warningLight'], // '#fff3e1'
  warningDark: primitiveColors['System-Warning-warningDark'], // '#b45210'

  error: primitiveColors['System-Error-errorMain'],     // '#da5050'
  errorLight: primitiveColors['System-Error-errorLight'], // '#fde3e3'
  errorDark: primitiveColors['System-Error-errorDark'], // '#bd4141'

  accent: primitiveColors['Secondary-Yellow-yellow02'], // '#fde28b'
} as const;

// Text Colors
export const textColors = {
  primary: primitiveColors['Text-primaryBlackText'],   // '#0f1709'
  secondary: primitiveColors['Text-secondaryText'],    // '#595959'
  tertiary: primitiveColors['Text-tertiaryText'],      // '#7a7a7a'
  disabled: primitiveColors['Text-disabledText'],      // '#949494'
  white: primitiveColors['Text-primaryWhiteText'],     // '#fafafa'
} as const;

// Button-specific semantic tokens
export const buttonColors = {
  // Primary variant (filled)
  primaryBg: primitiveColors['Primary-primaryMain'],    // '#a9e079'
  primaryText: primitiveColors['Text-primaryBlackText'], // '#0f1709'
  primaryHover: primitiveColors['Primary-primaryDark'],  // '#8ccc52'
  primaryActive: primitiveColors['Primary-primaryDark'], // '#8ccc52'

  // Secondary variant (outlined)
  secondaryBg: primitiveColors['B&W-primaryWhite'],     // '#ffffff'
  secondaryBorder: primitiveColors['Greyscale-grey05'], // '#bfbfbf'
  secondaryText: primitiveColors['Text-primaryBlackText'], // '#0f1709'
  secondaryHoverBg: primitiveColors['Greyscale-grey03'], // '#f0f0f0'
  secondaryHoverBorder: primitiveColors['B&W-primaryBlack'], // '#1a1a1a'
  secondaryActiveBg: primitiveColors['Greyscale-grey04'], // '#e6e6e6'
  secondaryActiveBorder: primitiveColors['B&W-primaryBlack'], // '#1a1a1a'

  // Tertiary variant (text only)
  tertiaryBg: 'transparent', // Not a color token
  tertiaryText: primitiveColors['Text-primaryBlackText'], // '#0f1709'
  tertiaryHoverBg: primitiveColors['Greyscale-grey03'], // '#f0f0f0'
  tertiaryActiveBg: primitiveColors['Greyscale-grey04'], // '#e6e6e6'

  // Disabled state
  disabledBg: primitiveColors['Greyscale-grey04'],    // '#e6e6e6'
  disabledText: primitiveColors['Text-disabledText'], // '#949494'
  disabledBorder: primitiveColors['Greyscale-grey04'], // '#e6e6e6'

  // Focus state
  focusOutline: primitiveColors['Green-green10'],     // '#1a4007'
} as const;

// Export all colors as a single object
export const colors = {
  brand: brandColors,
  neutral: neutralColors,
  background: backgroundColors,
  state: stateColors,
  text: textColors,
  button: buttonColors,
} as const;

// Type exports
export type BrandColor = keyof typeof brandColors;
export type NeutralColor = keyof typeof neutralColors;
export type BackgroundColor = keyof typeof backgroundColors;
export type StateColor = keyof typeof stateColors;
export type TextColor = keyof typeof textColors;
export type ButtonColor = keyof typeof buttonColors;

/**
 * Semantic Color Tokens
 * Context-aware tokens that define color usage and intent
 *
 * IMPORTANT: All values MUST reference primitiveColors - NO hardcoded hex values!
 *
 * Token Structure:
 * - Primitive tokens = Pure color scales (green-01, grey-05, brown-02, etc.)
 * - Semantic tokens = Usage context (color-primary, color-success, etc.)
 */

import { primitiveColors } from '../figma-tokens';

/**
 * Brand Colors
 * Primary brand identity colors
 */
export const brandColors = {
  // Primary brand color (main green)
  primary: primitiveColors['green-05'],       // #a9e079
  primaryLight: primitiveColors['green-03'],  // #e8f7cd
  primaryDark: primitiveColors['green-06'],   // #8ccc52

  // Brand variants
  brandGreen: primitiveColors['green-07'],    // #6baa32
  sativaGreen: primitiveColors['green-05'],   // #a9e079
  midribGreen: primitiveColors['green-04'],   // #dbf5b3
} as const;

/**
 * Neutral Colors
 * Black, white, and grayscale for general UI use
 */
export const neutralColors = {
  black: '#1a1a1a',                            // Soft black
  white: '#ffffff',                            // Pure white

  // Grayscale palette
  grey01: primitiveColors['grey-01'],         // #f7f7f7 (lightest)
  grey02: primitiveColors['grey-02'],         // #f5f5f5
  grey03: primitiveColors['grey-03'],         // #f0f0f0
  grey04: primitiveColors['grey-04'],         // #e6e6e6
  grey05: primitiveColors['grey-05'],         // #bfbfbf
  grey06: primitiveColors['grey-06'],         // #8c8c8c
  grey07: primitiveColors['grey-07'],         // #737373
  grey08: primitiveColors['grey-08'],         // #595959
  grey09: primitiveColors['grey-09'],         // #404040
  grey10: primitiveColors['grey-10'],         // #262626 (darkest)
} as const;

/**
 * Text Colors
 * Semantic colors for text content
 */
export const textColors = {
  primary: '#0f1709',                         // Primary black text
  secondary: primitiveColors['grey-08'],      // #595959 - Secondary text
  tertiary: '#7a7a7a',                        // Tertiary text
  disabled: '#949494',                        // Disabled text
  inverse: '#fafafa',                         // Text on dark backgrounds
} as const;

/**
 * State Colors
 * System feedback colors (success, error, warning, info)
 */
export const stateColors = {
  // Success (green)
  success: '#309f56',
  successLight: '#e5f9ec',
  successDark: '#2e834b',

  // Error (red)
  error: '#da5050',
  errorLight: '#fde3e3',
  errorDark: '#bd4141',

  // Warning (orange)
  warning: '#e26815',
  warningLight: '#fff3e1',
  warningDark: '#b45210',

  // Info (blue)
  info: '#437dcf',
  infoLight: '#e1eefa',
  infoDark: '#3774ac',
} as const;

/**
 * Accent Colors
 * Secondary palette for accents, tags, and visual variety
 */
export const accentColors = {
  // Browns
  brown00: primitiveColors['brown-00'],       // #f1eae6
  brown01: primitiveColors['brown-01'],       // #e2ccc0
  brown02: primitiveColors['brown-02'],       // #c69278

  // Oranges
  orange00: primitiveColors['orange-00'],     // #f9e7da
  orange01: primitiveColors['orange-01'],     // #fcc8a2
  orange02: primitiveColors['orange-02'],     // #fba466

  // Peach
  peach00: primitiveColors['peach-00'],       // #ffeded
  peach01: primitiveColors['peach-01'],       // #f1d9d9
  peach02: primitiveColors['peach-02'],       // #ff9696

  // Blues
  blue00: primitiveColors['blue-00'],         // #f0f8ff
  blue01: primitiveColors['blue-01'],         // #cfdeed
  blue02: primitiveColors['blue-02'],         // #95c1ee

  // Purples
  purple00: primitiveColors['purple-00'],     // #faf2fe
  purple01: primitiveColors['purple-01'],     // #e0c6ec
  purple02: primitiveColors['purple-02'],     // #c992e3

  // Yellows
  yellow00: primitiveColors['yellow-00'],     // #fdf8e5
  yellow01: primitiveColors['yellow-01'],     // #fbf1cf
  yellow02: primitiveColors['yellow-02'],     // #fde28b
} as const;

/**
 * Component-Specific Colors
 * Colors for specific component use cases
 */
export const componentColors = {
  // Button colors
  buttonPrimary: primitiveColors['green-05'],         // #a9e079
  buttonPrimaryHover: primitiveColors['green-06'],    // #8ccc52
  buttonPrimaryActive: primitiveColors['green-07'],   // #6baa32
  buttonPrimaryText: textColors.primary,              // #0f1709

  buttonSecondary: neutralColors.white,               // #ffffff
  buttonSecondaryBorder: primitiveColors['grey-05'],  // #bfbfbf
  buttonSecondaryHover: primitiveColors['grey-03'],   // #f0f0f0
  buttonSecondaryActive: primitiveColors['grey-04'],  // #e6e6e6

  buttonDisabled: primitiveColors['grey-04'],         // #e6e6e6
  buttonDisabledText: textColors.disabled,            // #949494

  // Input/Form colors
  inputBorder: primitiveColors['grey-05'],            // #bfbfbf
  inputBorderFocus: primitiveColors['green-05'],      // #a9e079
  inputBorderError: stateColors.error,                // #da5050
  inputBackground: neutralColors.white,               // #ffffff
  inputDisabled: primitiveColors['grey-03'],          // #f0f0f0

  // Link colors
  link: primitiveColors['green-07'],                  // #6baa32
  linkHover: primitiveColors['green-08'],             // #3e7a18
  linkVisited: primitiveColors['green-09'],           // #295c07
} as const;

// Backward compatibility aliases (deprecated - use specific exports above)
export const buttonColors = componentColors;
export const backgroundColors = accentColors;

// Type exports
export type BrandColorToken = keyof typeof brandColors;
export type NeutralColorToken = keyof typeof neutralColors;
export type TextColorToken = keyof typeof textColors;
export type StateColorToken = keyof typeof stateColors;
export type AccentColorToken = keyof typeof accentColors;
export type ComponentColorToken = keyof typeof componentColors;

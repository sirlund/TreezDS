/**
 * Semantic Spacing Tokens
 * Component-level spacing tokens mapped from primitives
 *
 * IMPORTANT: All values MUST reference primitiveSpacing - NO hardcoded values!
 */

import { primitiveSpacing } from '../figma-tokens';

/**
 * Component-specific spacing tokens
 * These provide semantic meaning for spacing within components
 */
export const componentSpacing = {
  button: {
    gap: primitiveSpacing['space-x-small'],           // 8px - icon-text gap
    padding: {
      small: {
        vertical: primitiveSpacing['space-2x-small'], // 4px
        horizontal: primitiveSpacing['space-small'],  // 12px
        tertiary: primitiveSpacing['space-x-small'],  // 8px
      },
      medium: {
        vertical: primitiveSpacing['space-x-small'],  // 8px
        horizontal: primitiveSpacing['space-large'],  // 20px
        tertiary: primitiveSpacing['space-small'],    // 12px
      },
      large: {
        vertical: primitiveSpacing['space-small'],    // 12px
        horizontal: primitiveSpacing['space-x-large'], // 24px
        tertiary: primitiveSpacing['space-small'],    // 12px
      },
    },
  },
  input: {
    gap: primitiveSpacing['space-x-small'],           // 8px
    padding: {
      small: primitiveSpacing['space-x-small'],       // 8px
      medium: primitiveSpacing['space-small'],        // 12px
      large: primitiveSpacing['space-medium'],        // 16px
    },
  },
  card: {
    padding: {
      compact: primitiveSpacing['space-small'],       // 12px
      comfortable: primitiveSpacing['space-medium'],  // 16px
      spacious: primitiveSpacing['space-x-large'],    // 24px
    },
    gap: primitiveSpacing['space-medium'],            // 16px
  },
} as const;

/**
 * General purpose spacing scale
 * Use these for custom components or layout purposes
 */
export const spacingScale = {
  none: primitiveSpacing['space-none'],               // 0px
  '3xs': primitiveSpacing['space-3x-small'],          // 2px
  '2xs': primitiveSpacing['space-2x-small'],          // 4px
  xs: primitiveSpacing['space-x-small'],              // 8px
  sm: primitiveSpacing['space-small'],                // 12px
  md: primitiveSpacing['space-medium'],               // 16px
  lg: primitiveSpacing['space-large'],                // 20px
  xl: primitiveSpacing['space-x-large'],              // 24px
  '2xl': primitiveSpacing['space-2x-large'],          // 32px
  '3xl': primitiveSpacing['space-3x-large'],          // 48px
} as const;

// Type exports
export type ComponentSpacingToken = typeof componentSpacing;
export type SpacingScaleToken = keyof typeof spacingScale;

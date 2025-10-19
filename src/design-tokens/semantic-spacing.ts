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
    gap: primitiveSpacing['Spacing-space-x-small'],           // 8px - icon-text gap
    padding: {
      small: {
        vertical: primitiveSpacing['Spacing-space-2x-small'], // 4px
        horizontal: primitiveSpacing['Spacing-space-small'],  // 12px
        tertiary: primitiveSpacing['Spacing-space-x-small'],  // 8px
      },
      medium: {
        vertical: primitiveSpacing['Spacing-space-x-small'],  // 8px
        horizontal: primitiveSpacing['Spacing-space-large'],  // 20px
        tertiary: primitiveSpacing['Spacing-space-small'],    // 12px
      },
      large: {
        vertical: primitiveSpacing['Spacing-space-small'],    // 12px
        horizontal: primitiveSpacing['Spacing-space-x-large'], // 24px
        tertiary: primitiveSpacing['Spacing-space-small'],    // 12px
      },
    },
  },
  input: {
    gap: primitiveSpacing['Spacing-space-x-small'],           // 8px
    padding: {
      small: primitiveSpacing['Spacing-space-x-small'],       // 8px
      medium: primitiveSpacing['Spacing-space-small'],        // 12px
      large: primitiveSpacing['Spacing-space-medium'],        // 16px
    },
  },
  card: {
    padding: {
      compact: primitiveSpacing['Spacing-space-small'],       // 12px
      comfortable: primitiveSpacing['Spacing-space-medium'],  // 16px
      spacious: primitiveSpacing['Spacing-space-x-large'],    // 24px
    },
    gap: primitiveSpacing['Spacing-space-medium'],            // 16px
  },
} as const;

/**
 * General purpose spacing scale
 * Use these for custom components or layout purposes
 */
export const spacingScale = {
  none: primitiveSpacing['Spacing-space-none'],               // 0px
  '3xs': primitiveSpacing['Spacing-space-3x-small'],          // 2px
  '2xs': primitiveSpacing['Spacing-space-2x-small'],          // 4px
  xs: primitiveSpacing['Spacing-space-x-small'],              // 8px
  sm: primitiveSpacing['Spacing-space-small'],                // 12px
  md: primitiveSpacing['Spacing-space-medium'],               // 16px
  lg: primitiveSpacing['Spacing-space-large'],                // 20px
  xl: primitiveSpacing['Spacing-space-x-large'],              // 24px
  '2xl': primitiveSpacing['Spacing-space-2x-large'],          // 32px
  '3xl': primitiveSpacing['Spacing-space-3x-large'],          // 48px
} as const;

// Type exports
export type ComponentSpacingToken = typeof componentSpacing;
export type SpacingScaleToken = keyof typeof spacingScale;

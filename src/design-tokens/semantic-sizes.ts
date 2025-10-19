/**
 * Semantic Size Tokens
 * Component-level size tokens mapped from primitives
 *
 * IMPORTANT: All values MUST reference primitiveSize - NO hardcoded values!
 */

import { primitiveSize } from '../figma-tokens';

/**
 * Component-specific size tokens
 * These provide semantic meaning for sizing within components
 */
export const componentSizes = {
  icon: {
    xs: primitiveSize['size-x-small'],     // 12px
    s: primitiveSize['size-small'],        // 18px
    m: primitiveSize['size-medium'],       // 20px
    l: primitiveSize['size-large'],        // 24px
    xl: primitiveSize['size-2x-large'],    // 48px
  },
  avatar: {
    xs: primitiveSize['size-large'],       // 24px
    sm: primitiveSize['size-x-large'],     // 32px
    md: primitiveSize['size-2x-large'],    // 48px
    lg: primitiveSize['size-3x-large'],    // 64px
  },
} as const;

/**
 * General purpose size scale
 * Use these for custom components or layout purposes
 */
export const sizeScale = {
  xs: primitiveSize['size-x-small'],       // 12px
  sm: primitiveSize['size-small'],         // 18px
  md: primitiveSize['size-medium'],        // 20px
  lg: primitiveSize['size-large'],         // 24px
  xl: primitiveSize['size-x-large'],       // 32px
  '2xl': primitiveSize['size-2x-large'],   // 48px
  '3xl': primitiveSize['size-3x-large'],   // 64px
} as const;

// Type exports
export type ComponentSizesToken = typeof componentSizes;
export type SizeScaleToken = keyof typeof sizeScale;

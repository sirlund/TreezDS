/**
 * Semantic Radius Tokens
 * Component-level border radius tokens mapped from primitives
 *
 * IMPORTANT: All values MUST reference primitiveRadius - NO hardcoded values!
 */

import { primitiveRadius } from '../figma-tokens';

/**
 * Component-specific radius tokens
 * These provide semantic meaning and can be updated independently
 */
export const componentRadius = {
  button: {
    small: primitiveRadius['Radius-radius-small'],      // 12px
    medium: primitiveRadius['Radius-radius-medium'],    // 16px
    large: primitiveRadius['Radius-radius-medium'],     // 16px
  },
  input: {
    small: primitiveRadius['Radius-radius-x-small'],    // 8px
    medium: primitiveRadius['Radius-radius-small'],     // 12px
    large: primitiveRadius['Radius-radius-small'],      // 12px
  },
  card: {
    small: primitiveRadius['Radius-radius-small'],      // 12px
    medium: primitiveRadius['Radius-radius-medium'],    // 16px
    large: primitiveRadius['Radius-radius-large'],      // 20px
  },
  modal: {
    default: primitiveRadius['Radius-radius-medium'],   // 16px
  },
  badge: {
    default: primitiveRadius['Radius-radius-full'],     // 9999px (pill)
  },
  avatar: {
    default: primitiveRadius['Radius-radius-full'],     // 9999px (circle)
  },
} as const;

/**
 * General purpose radius scale
 * Use these for custom components or one-off cases
 */
export const radiusScale = {
  none: primitiveRadius['Radius-radius-none'],          // 0px
  xs: primitiveRadius['Radius-radius-2x-small'],        // 6px
  sm: primitiveRadius['Radius-radius-x-small'],         // 8px
  md: primitiveRadius['Radius-radius-small'],           // 12px
  lg: primitiveRadius['Radius-radius-medium'],          // 16px
  xl: primitiveRadius['Radius-radius-large'],           // 20px
  '2xl': primitiveRadius['Radius-radius-x-large'],      // 24px
  '3xl': primitiveRadius['Radius-radius-2x-large'],     // 32px
  full: primitiveRadius['Radius-radius-full'],          // 9999px
} as const;

// Type exports
export type ComponentRadiusToken = typeof componentRadius;
export type RadiusScaleToken = keyof typeof radiusScale;

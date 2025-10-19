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
    small: primitiveRadius['radius-small'],      // 12px
    medium: primitiveRadius['radius-medium'],    // 16px
    large: primitiveRadius['radius-medium'],     // 16px
  },
  input: {
    small: primitiveRadius['radius-x-small'],    // 8px
    medium: primitiveRadius['radius-small'],     // 12px
    large: primitiveRadius['radius-small'],      // 12px
  },
  card: {
    small: primitiveRadius['radius-small'],      // 12px
    medium: primitiveRadius['radius-medium'],    // 16px
    large: primitiveRadius['radius-large'],      // 20px
  },
  modal: {
    default: primitiveRadius['radius-medium'],   // 16px
  },
  badge: {
    default: primitiveRadius['radius-full'],     // 9999px (pill)
  },
  avatar: {
    default: primitiveRadius['radius-full'],     // 9999px (circle)
  },
} as const;

/**
 * General purpose radius scale
 * Use these for custom components or one-off cases
 */
export const radiusScale = {
  none: primitiveRadius['radius-none'],          // 0px
  xs: primitiveRadius['radius-2x-small'],        // 6px
  sm: primitiveRadius['radius-x-small'],         // 8px
  md: primitiveRadius['radius-small'],           // 12px
  lg: primitiveRadius['radius-medium'],          // 16px
  xl: primitiveRadius['radius-large'],           // 20px
  '2xl': primitiveRadius['radius-x-large'],      // 24px
  '3xl': primitiveRadius['radius-2x-large'],     // 32px
  full: primitiveRadius['radius-full'],          // 9999px
} as const;

// Type exports
export type ComponentRadiusToken = typeof componentRadius;
export type RadiusScaleToken = keyof typeof radiusScale;

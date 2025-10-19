/**
 * Semantic Typography Tokens
 * Component-level typography tokens mapped from primitives
 *
 * IMPORTANT: All values MUST reference primitive typography - NO hardcoded values!
 */

import {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  textTransform,
} from '../figma-tokens/typography/typography';

/**
 * Heading Typography Variants
 * Used for page headings and section titles
 * Font: Circular (secondary) - Featured content
 * Weight: 500 (strong) - Circular Medium
 */
export const headings = {
  h1: {
    fontFamily: fontFamilies.secondary, // Circular - Featured content
    fontWeight: fontWeights.strong,     // 500 - Circular Medium
    fontSize: fontSizes['45'],
    lineHeight: lineHeights['52'],
    letterSpacing: letterSpacing.normal,
  },
  h2: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.strong,     // 500 - Circular Medium
    fontSize: fontSizes['36'],
    lineHeight: lineHeights['44'],
    letterSpacing: letterSpacing.normal,
  },
  h3: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.strong,     // 500 - Circular Medium
    fontSize: fontSizes['32'],
    lineHeight: lineHeights['40'],
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.strong,     // 500 - Circular Medium
    fontSize: fontSizes['28'],
    lineHeight: lineHeights['36'],
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.strong,     // 500 - Circular Medium
    fontSize: fontSizes['23'],
    lineHeight: lineHeights['32'],
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.strong,     // 500 - Circular Medium
    fontSize: fontSizes['17'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
  },
  h7: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.strong,     // 500 - Circular Medium
    fontSize: fontSizes['15'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
  },
} as const;

/**
 * Body Typography Variants
 * Used for main content and paragraphs
 * Font: Roboto (primary) - Base content
 */
export const body = {
  large: {
    fontFamily: fontFamilies.primary, // Roboto - Base content
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['17'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
  },
  medium: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['15'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
  },
  small: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
  },
} as const;

/**
 * Label Typography Variants
 * Used for form labels, button text, and UI labels
 * Font: Circular (secondary) - UI elements
 */
export const label = {
  large: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['17'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
  },
  largeStrong: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.strong,
    fontSize: fontSizes['17'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
  },
  medium: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['15'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
  },
  mediumStrong: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.strong,
    fontSize: fontSizes['15'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
  },
  small: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
  },
  smallStrong: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.strong,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
  },
  xSmall: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
  },
  xSmallStrong: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.strong,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
  },
} as const;

/**
 * Link Typography Variants
 * Used for hyperlinks and interactive text
 * Font: Roboto (primary) - Base content
 */
export const link = {
  large: {
    fontFamily: fontFamilies.primary, // Roboto - Base content
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['17'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
  },
  medium: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['15'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
  },
  small: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
  },
  xSmall: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
  },
} as const;

/**
 * Caps Typography Variants
 * Used for uppercase labels and categorization
 * Font: Circular (secondary) - UI elements
 */
export const caps = {
  large: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.wide,
    textTransform: textTransform.uppercase,
  },
  largeStrong: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.wide,
    textTransform: textTransform.uppercase,
  },
  smallStrong: {
    fontFamily: fontFamilies.secondary, // Circular - UI elements
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['11'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.uppercase,
  },
} as const;

// Type exports
export type HeadingVariant = keyof typeof headings;
export type BodyVariant = keyof typeof body;
export type LabelVariant = keyof typeof label;
export type LinkVariant = keyof typeof link;
export type CapsVariant = keyof typeof caps;

export type TypographyVariant =
  | `h${1 | 2 | 3 | 4 | 5 | 6 | 7}`
  | `body-${'large' | 'medium' | 'small'}`
  | `label-${'large' | 'large-strong' | 'medium' | 'medium-strong' | 'small' | 'small-strong' | 'x-small' | 'x-small-strong'}`
  | `link-${'large' | 'medium' | 'small' | 'x-small'}`
  | `caps-${'large' | 'large-strong' | 'small-strong'}`;

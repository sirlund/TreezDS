/**
 * Typography Semantic Tokens
 * Component-level tokens that reference primitives
 * Use these in your components for consistent typography
 */

import {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  textTransform,
} from './primitives';

export interface TypographyToken {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  textTransform: string;
}

// Headings
export const headings = {
  h1: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['45'],
    lineHeight: lineHeights['52'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  h2: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['36'],
    lineHeight: lineHeights['44'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  h3: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['32'],
    lineHeight: lineHeights['40'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  h4: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['28'],
    lineHeight: lineHeights['36'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  h5: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['23'],
    lineHeight: lineHeights['32'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  h6: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['17'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  h7: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
} as const;

// Body Text
export const body = {
  large: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['15'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  medium: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  small: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
} as const;

// Labels
export const labels = {
  large: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes['15'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  largeBold: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['15'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  medium: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  mediumBold: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  small: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  smallBold: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  xSmall: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes['11'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  xSmallBold: {
    fontFamily: fontFamilies.secondary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['11'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
} as const;

// Links
export const links = {
  large: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['15'],
    lineHeight: lineHeights['24'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  medium: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['14'],
    lineHeight: lineHeights['20'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  small: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
  xSmall: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['11'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },
} as const;

// Capitalized Text (for uppercase labels, badges, etc.)
export const caps = {
  large: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.wide,
    textTransform: textTransform.uppercase,
  },
  largeBold: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['12'],
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacing.wide,
    textTransform: textTransform.uppercase,
  },
  small: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes['10'],
    lineHeight: lineHeights['12'],
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.uppercase,
  },
  smallBold: {
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['10'],
    lineHeight: lineHeights['12'],
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.uppercase,
  },
} as const;

// Export all semantic tokens
export const typography = {
  headings,
  body,
  labels,
  links,
  caps,
} as const;

// Export flat structure for backwards compatibility with old token names
// Includes BOTH dash and space variants for maximum compatibility
export const typographyLegacy = {
  // Headings
  'headings-h1': headings.h1,
  'headings-h2': headings.h2,
  'headings-h3': headings.h3,
  'headings-h4': headings.h4,
  'headings-h5': headings.h5,
  'headings-h6': headings.h6,
  'headings-h7': headings.h7,
  
  // Body
  'body-large': body.large,
  'body-medium': body.medium,
  'body-small': body.small,
  
  // Labels (with dashes)
  'label-large': labels.large,
  'label-large-strong': labels.largeBold,
  'label-medium': labels.medium,
  'label-medium-strong': labels.mediumBold,
  'label-small': labels.small,
  'label-small-strong': labels.smallBold,
  'label-x-small': labels.xSmall,
  'label-x-small-strong': labels.xSmallBold,
  
  // Labels (with spaces - old Figma names)
  'label-large strong': labels.largeBold,
  'label-medium strong': labels.mediumBold,
  'label-small strong': labels.smallBold,
  'label-x small': labels.xSmall,
  'label-x small strong': labels.xSmallBold,
  
  // Links (with dashes)
  'label-link-large-link': links.large,
  'label-link-medium-link': links.medium,
  'label-link-small-link': links.small,
  'label-link-x-small-link': links.xSmall,
  
  // Links (with spaces - old Figma names)
  'label link-large link': links.large,
  'label link-medium link': links.medium,
  'label link-small link': links.small,
  'label link-x small link': links.xSmall,
  
  // Caps (with dashes)
  'capitalized-text-large': caps.large,
  'capitalized-text-large-strong': caps.largeBold,
  'capitalized-text-small-strong': caps.smallBold,
  
  // Caps (with spaces - old Figma names)
  'capitalized text-large': caps.large,
  'capitalized text-large strong': caps.largeBold,
  'capitalized text-small strong': caps.smallBold,
} as const;

export type TypographyTokenName = keyof typeof typographyLegacy;

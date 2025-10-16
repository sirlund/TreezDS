/**
 * Spacing & Size Tokens - Auto-generated from Figma
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

// Spacing tokens
export const spacing = {
  'Spacing-space-none': '0px', // Spacing/space-none,
  'Spacing-space-3x-small': '2px', // Spacing/space-3x-small
  'Spacing-space-2x-small': '4px', // Spacing/space-2x-small,
  'Spacing-space-x-small': '8px', // Spacing/space-x-small,
  'Spacing-space-small': '12px', // Spacing/space-small,
  'Spacing-space-medium': '16px', // Spacing/space-medium,
  'Spacing-space-large': '20px', // Spacing/space-large,
  'Spacing-space-x-large': '24px', // Spacing/space-x-large,
  'Spacing-space-2x-large': '32px', // Spacing/space-2x-large,
  'Spacing-space-3x-large': '48px', // Spacing/space-3x-large,
} as const;

// Size tokens (beta)
export const size = {
  '-Size-beta-size-x-small': '12px', // 🚧 Size (beta)/size-x-small,
  '-Size-beta-size-small': '18px', // 🚧 Size (beta)/size-small,
  '-Size-beta-size-medium': '20px', // 🚧 Size (beta)/size-medium,
  '-Size-beta-size-large': '24px', // 🚧 Size (beta)/size-large,
  '-Size-beta-size-x-large': '32px', // 🚧 Size (beta)/size-x-large
  '-Size-beta-size-2x-large': '48px', // 🚧 Size (beta)/size-2x-large,
  '-Size-beta-size-3x-large': '64px', // 🚧 Size (beta)/size-3x-large,
} as const;

export type SpacingToken = keyof typeof spacing;
export type SizeToken = keyof typeof size;

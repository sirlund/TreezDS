/**
 * Spacing & Size Tokens - Auto-generated from Figma
 * Source: imported-from-figma/Size&Spacing.json
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

export const primitiveSpacing = {
  'Spacing-space-none': '0px', // Spacing/space/none
  'Spacing-space-3x-small': '2px', // Spacing/space/3x/small
  'Spacing-space-2x-small': '4px', // Spacing/space/2x/small
  'Spacing-space-x-small': '8px', // Spacing/space/x/small
  'Spacing-space-small': '12px', // Spacing/space/small
  'Spacing-space-medium': '16px', // Spacing/space/medium
  'Spacing-space-large': '20px', // Spacing/space/large
  'Spacing-space-x-large': '24px', // Spacing/space/x/large
  'Spacing-space-2x-large': '32px', // Spacing/space/2x/large
  'Spacing-space-3x-large': '48px', // Spacing/space/3x/large
} as const;

export const primitiveSize = {
  'Size-size-x-small': '12px', // Size/size/x/small
  'Size-size-small': '18px', // Size/size/small
  'Size-size-medium': '20px', // Size/size/medium
  'Size-size-large': '24px', // Size/size/large
  'Size-size-x-large': '32px', // Size/size/x/large
  'Size-size-2x-large': '48px', // Size/size/2x/large
  'Size-size-3x-large': '64px', // Size/size/3x/large
} as const;

export type PrimitiveSpacingToken = keyof typeof primitiveSpacing;
export type PrimitiveSizeToken = keyof typeof primitiveSize;

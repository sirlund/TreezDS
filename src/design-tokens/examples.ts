/**
 * Design Token Usage Examples
 *
 * This file demonstrates how to use the semantic color tokens
 * in your React components and CSS.
 */

import { colors, buttonColors, brandColors, stateColors } from './semantic-colors';

// ============================================================================
// Example 1: Using colors in inline styles
// ============================================================================
export function InlineStyleExample() {
  return (
    <div style={{ backgroundColor: colors.brand.primary, color: colors.brand.primaryText }}>
      Using brand colors
    </div>
  );
}

// ============================================================================
// Example 2: Using button colors for custom button
// ============================================================================
export function CustomButtonExample() {
  return (
    <button
      style={{
        backgroundColor: buttonColors.primaryBg,
        color: buttonColors.primaryText,
        border: 'none',
        padding: '12px 24px',
        borderRadius: '16px',
      }}
    >
      Custom Button
    </button>
  );
}

// ============================================================================
// Example 3: Using state colors for alerts
// ============================================================================
export function AlertExample() {
  return (
    <div>
      <div style={{ backgroundColor: stateColors.success, padding: '12px' }}>
        Success message
      </div>
      <div style={{ backgroundColor: stateColors.error, padding: '12px' }}>
        Error message
      </div>
      <div style={{ backgroundColor: stateColors.warning, padding: '12px' }}>
        Warning message
      </div>
    </div>
  );
}

// ============================================================================
// Example 4: Accessing colors programmatically
// ============================================================================
export function getButtonColorForVariant(variant: 'primary' | 'secondary' | 'tertiary') {
  switch (variant) {
    case 'primary':
      return {
        background: buttonColors.primaryBg,
        text: buttonColors.primaryText,
        hover: buttonColors.primaryHover,
      };
    case 'secondary':
      return {
        background: 'transparent',
        text: buttonColors.secondaryText,
        border: buttonColors.secondaryBorder,
      };
    case 'tertiary':
      return {
        background: 'transparent',
        text: buttonColors.tertiaryText,
      };
  }
}

// ============================================================================
// Example 5: Type-safe color usage
// ============================================================================
import type { BrandColor, StateColor } from './semantic-colors';

export function getBrandColor(colorName: BrandColor): string {
  return brandColors[colorName];
}

export function getStateColor(state: StateColor): string {
  return stateColors[state];
}

// Usage:
// const primary = getBrandColor('primary'); // ✓ Type-safe
// const invalid = getBrandColor('invalid'); // ✗ TypeScript error

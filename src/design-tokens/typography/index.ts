/**
 * Typography Tokens - Central Export
 * 
 * This module provides a professional token system with:
 * - Primitives: Base-level values (font sizes, weights, etc.)
 * - Semantics: Component-level tokens that reference primitives
 * 
 * Use semantic tokens in your components for consistent typography.
 */

// Export primitives for advanced use cases
export * from './primitives';

// Export semantic tokens (recommended for component use)
export * from './semantic';

// For convenience, also export as default
export { typography as default, typographyLegacy, type TypographyToken, type TypographyTokenName } from './semantic';

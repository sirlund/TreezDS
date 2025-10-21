/**
 * TypeScript Type Definitions for tokens.config.js
 *
 * This file defines the structure and types for the token transformation
 * configuration used by the Design Tokens Agent.
 */

/**
 * Main configuration object for token transformation
 */
export interface TokensConfig {
  /** Project name (used in documentation) */
  projectName: string;

  /** Prefix for generated tokens (e.g., 'treez') */
  projectPrefix: string;

  /** Directory where Figma JSON exports are located */
  inputDir: string;

  /** Directory where primitive tokens will be generated */
  outputDir: string;

  /**
   * Whether to auto-generate semantic tokens
   * - true: Agent generates semantic tokens based on heuristics
   * - false: Semantic tokens are manually curated
   */
  generateSemantics: boolean;

  /** Rules for classifying tokens as primitive or semantic */
  classificationRules: ClassificationRules;

  /** Name transformation rules */
  transformations: Transformations;

  /** Output template configurations */
  templates: Template[];

  /** Audit configuration */
  audit: AuditConfig;

  /** Validation rules */
  validation: ValidationRules;
}

/**
 * Classification rules for determining token types
 */
export interface ClassificationRules {
  /**
   * Keywords that indicate a token is semantic
   * If a token name contains any of these keywords, it should be
   * flagged for manual curation rather than auto-generated as a primitive
   */
  semanticKeywords: string[];

  /**
   * Regex patterns that identify primitive tokens
   * Tokens matching these patterns are classified as primitives
   */
  primitivePatterns: RegExp[];
}

/**
 * Name transformation rules
 */
export interface Transformations {
  /**
   * Whether to remove redundant prefixes from token names
   * Example: 'Green-green05' → 'green-05'
   */
  removeRedundantPrefixes: boolean;

  /**
   * Project-specific name mappings
   * Maps known problematic names to their corrected versions
   */
  nameMap: Record<string, string>;

  /** Case formatting preferences */
  caseFormat: CaseFormat;
}

/**
 * Case formatting configuration
 */
export interface CaseFormat {
  /** Case format for primitive tokens (e.g., 'kebab-case', 'camelCase') */
  primitives: 'kebab-case' | 'camelCase' | 'snake_case' | 'PascalCase';

  /** Case format for semantic tokens */
  semantics: 'kebab-case' | 'camelCase' | 'snake_case' | 'PascalCase';
}

/**
 * Output template configuration
 */
export interface Template {
  /** Type of tokens this template generates */
  type: 'primitive' | 'semantic';

  /** Token category (colors, spacing, radius, typography, etc.) */
  category: string;

  /** Destination file path for TypeScript output (relative to outputDir) */
  destination: string;

  /** Output format for TypeScript file */
  format: 'typescript/es6-const' | 'javascript/module-exports' | 'json';

  /** Destination file path for CSS output (optional) */
  cssDestination?: string;

  /** CSS variable prefix (e.g., '--primitive-', '--color-') */
  cssPrefix?: string;
}

/**
 * Audit configuration
 */
export interface AuditConfig {
  /** Which checks to perform during audit */
  checks: AuditChecks;

  /** Directory where audit reports will be saved */
  reportDir: string;

  /** Format for audit reports */
  reportFormat: 'markdown' | 'html' | 'json';
}

/**
 * Individual audit check configurations
 */
export interface AuditChecks {
  /** Check for hardcoded values in semantic tokens and components */
  hardcodedValues: boolean;

  /** Check for broken token references */
  brokenReferences: boolean;

  /** Check token naming conventions */
  namingConventions: boolean;

  /** Check if components use primitives directly (should use semantics) */
  primitiveUsageInComponents: boolean;
}

/**
 * Validation rules for token system
 */
export interface ValidationRules {
  /**
   * Keywords that should NOT appear in primitive token names
   * These indicate semantic meaning and should be in semantic tokens instead
   */
  forbiddenInPrimitives: string[];

  /**
   * Categories that must use numeric scales
   * Example: ['colors', 'spacing'] means colors and spacing must have numeric suffixes
   */
  requireNumericScale: string[];

  /** Valid scale ranges for numeric token categories */
  scaleRanges: Record<string, ScaleRange>;
}

/**
 * Scale range for a token category
 */
export interface ScaleRange {
  /** Minimum scale value (inclusive) */
  min: number;

  /** Maximum scale value (inclusive) */
  max: number;
}

/**
 * Default export type
 */
declare const config: TokensConfig;
export default config;

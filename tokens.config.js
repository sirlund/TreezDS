/**
 * TreezDS Token Configuration
 * Defines how Figma exports are transformed into primitive tokens
 * 
 * @type {import('./types/tokens-config').TokensConfig}
 */
export default {
  // Project metadata
  projectName: 'TreezDS',
  projectPrefix: 'treez',
  
  // Directory configuration
  inputDir: './imported-from-figma',
  outputDir: './src/figma-tokens',
  
  // Semantic Token Generation Strategy
  // - false: Manual curation (TreezDS current approach)
  // - 'suggest': Agent analyzes and suggests, developer decides
  // - true: Full auto-generation (requires Figma to export semantics)
  generateSemantics: false,

  // Semantic Suggestions (when generateSemantics: false)
  // Agent can analyze Figma exports and suggest semantic tokens
  semanticSuggestions: {
    enabled: true,
    outputFile: '.claude/reports/semantic-suggestions.md',
    confidenceThreshold: 'medium',  // 'low', 'medium', 'high'
  },
  
  // Classification Rules
  classificationRules: {
    // Keywords that indicate a token is semantic (should NOT be in Figma primitives)
    semanticKeywords: [
      'primary', 'secondary', 'brand', 'action', 'interactive',
      'success', 'error', 'warning', 'info',
      'background', 'text', 'border', 'surface',
      'button', 'input', 'card', 'modal',
      'focus', 'hover', 'active', 'disabled', 'pressed'
    ],
    
    // Patterns that identify primitive tokens
    primitivePatterns: [
      /^[a-z]+-\d{2,3}$/,           // green-100, blue-500
      /^[a-z]+-[a-z]+\d{2}$/,       // green-green01
      /^spacing-\d+$/,               // spacing-4
      /^radius-\d+$/,                // radius-8
      /^font-size-\d+$/,             // font-size-16
      /^font-weight-\d+$/,           // font-weight-400
      /^line-height-\d+$/,           // line-height-24
      /^(white|black|transparent)$/, // Base colors
    ],
  },
  
  // Name Transformations
  transformations: {
    // Clean redundant prefixes from Figma
    removeRedundantPrefixes: true,
    
    // Specific name mappings for known issues
    nameMap: {
      // Colors
      'Green-green01': 'green-01',
      'Green-green02': 'green-02',
      'Greyscale-grey01': 'grey-01',
      'Secondary-Brown-brown00': 'brown-00',
      'Secondary-Orange-orange00': 'orange-00',
      'Base-black': 'base-black',
      'Base-white': 'base-white',
      
      // Spacing
      'Spacing-space-xs': 'space-xs',
      'Spacing-space-small': 'space-small',
      
      // Radius
      'Radius-radius-small': 'radius-small',
      'Radius-radius-medium': 'radius-medium',
    },
    
    // Case formatting
    caseFormat: {
      primitives: 'kebab-case',
      semantics: 'kebab-case',
    },
  },
  
  // Output Templates
  templates: [
    // Colors
    {
      type: 'primitive',
      category: 'colors',
      destination: 'colors/colors.ts',
      format: 'typescript/es6-const',
      cssDestination: 'colors/colors.css',
      cssPrefix: '--primitive-',
    },
    
    // Spacing & Sizes
    {
      type: 'primitive',
      category: 'spacing',
      destination: 'spacing/spacing.ts',
      format: 'typescript/es6-const',
      cssDestination: 'spacing/spacing.css',
      cssPrefix: '--primitive-',
    },
    
    // Radius
    {
      type: 'primitive',
      category: 'radius',
      destination: 'radius/radius.ts',
      format: 'typescript/es6-const',
      cssDestination: 'radius/radius.css',
      cssPrefix: '--primitive-',
    },
    
    // Typography
    {
      type: 'primitive',
      category: 'typography',
      destination: 'typography/typography.ts',
      format: 'typescript/es6-const',
      cssDestination: 'typography/typography.css',
      cssPrefix: '--primitive-',
    },
  ],
  
  // Audit Configuration
  audit: {
    // What to check during audit
    checks: {
      hardcodedValues: true,
      brokenReferences: true,
      namingConventions: true,
      primitiveUsageInComponents: true,
    },
    
    // Where to save reports
    reportDir: './.claude/reports',
    reportFormat: 'markdown',
  },
  
  // Validation Rules
  validation: {
    // Primitives should never have these in their names
    forbiddenInPrimitives: [
      'primary', 'secondary', 'brand',
      'button', 'input', 'card',
    ],
    
    // Enforce numeric scales for these categories
    requireNumericScale: ['colors', 'spacing'],
    
    // Minimum/maximum scale values
    scaleRanges: {
      colors: { min: 0, max: 10 },
      spacing: { min: 0, max: 12 },
    },
  },
};

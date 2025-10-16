#!/usr/bin/env node

/**
 * Transform Figma Variable exports to design tokens
 *
 * Reads JSON files from imported-from-figma and generates:
 * - TypeScript files with typed tokens
 * - CSS files with custom properties
 * - Organized by category (colors, spacing, radius)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const INPUT_DIR = path.join(PROJECT_ROOT, 'imported-from-figma');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'src', 'tokens');

// Helper to convert RGBA to HEX
function rgbaToHex(r, g, b, a) {
  const toHex = (val) => Math.round(val * 255).toString(16).padStart(2, '0');
  if (a < 1) {
    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Helper to convert RGBA to RGB string
function rgbaToRgbString(r, g, b) {
  return `${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}`;
}

// Helper to create safe CSS variable name
function toCssVarName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Helper to create TypeScript const name
function toTsConstName(name) {
  return name
    .replace(/\//g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');
}

// Process Colors
function processColors() {
  console.log('🎨 Processing colors...');

  const colorsFile = path.join(INPUT_DIR, 'Colors.json');
  const data = JSON.parse(fs.readFileSync(colorsFile, 'utf8'));

  const colorCategories = {
    green: [],
    primary: [],
    bw: [],
    greyscale: [],
    secondary: [],
    system: [],
    text: [],
    brand: []
  };

  data.variables.forEach(variable => {
    const name = variable.name;
    const resolvedValue = variable.resolvedValuesByMode[Object.keys(variable.resolvedValuesByMode)[0]].resolvedValue;

    if (variable.type !== 'COLOR') return;

    const hex = rgbaToHex(resolvedValue.r, resolvedValue.g, resolvedValue.b, resolvedValue.a);
    const rgb = rgbaToRgbString(resolvedValue.r, resolvedValue.g, resolvedValue.b);

    const token = {
      name,
      originalName: name,
      cssVar: `--color-${toCssVarName(name)}`,
      tsName: toTsConstName(name),
      hex,
      rgb,
      rgba: resolvedValue,
      description: variable.description || ''
    };

    // Categorize
    if (name.startsWith('Green/')) colorCategories.green.push(token);
    else if (name.startsWith('Primary/')) colorCategories.primary.push(token);
    else if (name.startsWith('B&W/')) colorCategories.bw.push(token);
    else if (name.startsWith('Greyscale/')) colorCategories.greyscale.push(token);
    else if (name.startsWith('Secondary/')) colorCategories.secondary.push(token);
    else if (name.startsWith('System/')) colorCategories.system.push(token);
    else if (name.startsWith('Text/')) colorCategories.text.push(token);
    else if (name.startsWith('Brand/')) colorCategories.brand.push(token);
  });

  // Generate TypeScript file
  let tsContent = `/**
 * Color Tokens - Auto-generated from Figma
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

`;

  Object.entries(colorCategories).forEach(([category, tokens]) => {
    if (tokens.length === 0) return;

    tsContent += `// ${category.charAt(0).toUpperCase() + category.slice(1)} Colors\n`;
    tsContent += `export const ${category}Colors = {\n`;
    tokens.forEach(token => {
      const comment = token.description ? ` // ${token.description}` : ` // ${token.originalName}`;
      tsContent += `  '${token.tsName}': '${token.hex}',${comment}\n`;
    });
    tsContent += `} as const;\n\n`;
  });

  // Add helper types
  tsContent += `// Type exports\n`;
  Object.keys(colorCategories).forEach(category => {
    if (colorCategories[category].length > 0) {
      tsContent += `export type ${category.charAt(0).toUpperCase() + category.slice(1)}Color = keyof typeof ${category}Colors;\n`;
    }
  });

  // Generate CSS file
  let cssContent = `/**
 * Color Tokens - Auto-generated from Figma
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

:root {
`;

  Object.entries(colorCategories).forEach(([category, tokens]) => {
    if (tokens.length === 0) return;
    cssContent += `\n  /* ${category.charAt(0).toUpperCase() + category.slice(1)} Colors */\n`;
    tokens.forEach(token => {
      cssContent += `  ${token.cssVar}: ${token.hex}; /* ${token.originalName} */\n`;
    });
  });

  cssContent += `\n  /* RGB values for alpha manipulation */\n`;
  Object.entries(colorCategories).forEach(([category, tokens]) => {
    if (tokens.length === 0) return;
    tokens.forEach(token => {
      cssContent += `  ${token.cssVar}-rgb: ${token.rgb};\n`;
    });
  });

  cssContent += `}\n`;

  // Write files
  const outputDir = path.join(OUTPUT_DIR, 'colors');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'colors.ts'), tsContent);
  fs.writeFileSync(path.join(outputDir, 'colors.css'), cssContent);

  // Write JSON for reference
  fs.writeFileSync(
    path.join(outputDir, 'colors.json'),
    JSON.stringify(colorCategories, null, 2)
  );

  console.log(`✅ Generated ${Object.values(colorCategories).flat().length} color tokens`);
}

// Process Spacing
function processSpacing() {
  console.log('📐 Processing spacing...');

  const spacingFile = path.join(INPUT_DIR, 'Size&Spacing.json');
  const data = JSON.parse(fs.readFileSync(spacingFile, 'utf8'));

  const spacing = [];
  const sizes = [];

  data.variables.forEach(variable => {
    const name = variable.name;
    const value = variable.resolvedValuesByMode[Object.keys(variable.resolvedValuesByMode)[0]].resolvedValue;

    const token = {
      name,
      originalName: name,
      cssVar: `--${toCssVarName(name)}`,
      tsName: toTsConstName(name).replace(/^spacing-/, '').replace(/^size-/, ''),
      value: `${value}px`,
      rawValue: value,
      description: variable.description || ''
    };

    if (name.startsWith('Spacing/')) {
      spacing.push(token);
    } else if (name.includes('Size')) {
      sizes.push(token);
    }
  });

  // Generate TypeScript file
  let tsContent = `/**
 * Spacing & Size Tokens - Auto-generated from Figma
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

// Spacing tokens
export const spacing = {
${spacing.map(t => `  '${t.tsName}': '${t.value}', // ${t.originalName}`).join(',\n')}
} as const;

// Size tokens (beta)
export const size = {
${sizes.map(t => `  '${t.tsName}': '${t.value}', // ${t.originalName}`).join(',\n')}
} as const;

export type SpacingToken = keyof typeof spacing;
export type SizeToken = keyof typeof size;
`;

  // Generate CSS file
  let cssContent = `/**
 * Spacing & Size Tokens - Auto-generated from Figma
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

:root {
  /* Spacing */
${spacing.map(t => `  ${t.cssVar}: ${t.value}; /* ${t.originalName} */`).join('\n')}

  /* Sizes (beta) */
${sizes.map(t => `  ${t.cssVar}: ${t.value}; /* ${t.originalName} */`).join('\n')}
}
`;

  // Write files
  const outputDir = path.join(OUTPUT_DIR, 'spacing');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'spacing.ts'), tsContent);
  fs.writeFileSync(path.join(outputDir, 'spacing.css'), cssContent);
  fs.writeFileSync(
    path.join(outputDir, 'spacing.json'),
    JSON.stringify({ spacing, sizes }, null, 2)
  );

  console.log(`✅ Generated ${spacing.length} spacing tokens and ${sizes.length} size tokens`);
}

// Process Radius/Shapes
function processRadius() {
  console.log('🔷 Processing radius...');

  const shapesFile = path.join(INPUT_DIR, 'Shapes.json');
  const data = JSON.parse(fs.readFileSync(shapesFile, 'utf8'));

  const radius = [];

  data.variables.forEach(variable => {
    const name = variable.name;
    const value = variable.resolvedValuesByMode[Object.keys(variable.resolvedValuesByMode)[0]].resolvedValue;

    const token = {
      name,
      originalName: name,
      cssVar: `--${toCssVarName(name)}`,
      tsName: toTsConstName(name).replace(/^radius-/, ''),
      value: value === 999 ? '9999px' : `${value}px`, // 999 = full radius
      rawValue: value,
      description: variable.description || ''
    };

    radius.push(token);
  });

  // Generate TypeScript file
  let tsContent = `/**
 * Radius Tokens - Auto-generated from Figma
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

export const radius = {
${radius.map(t => `  '${t.tsName}': '${t.value}', // ${t.originalName}`).join(',\n')}
} as const;

export type RadiusToken = keyof typeof radius;
`;

  // Generate CSS file
  let cssContent = `/**
 * Radius Tokens - Auto-generated from Figma
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

:root {
  /* Border Radius */
${radius.map(t => `  ${t.cssVar}: ${t.value}; /* ${t.originalName} */`).join('\n')}
}
`;

  // Write files
  const outputDir = path.join(OUTPUT_DIR, 'radius');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'radius.ts'), tsContent);
  fs.writeFileSync(path.join(outputDir, 'radius.css'), cssContent);
  fs.writeFileSync(
    path.join(outputDir, 'radius.json'),
    JSON.stringify({ radius }, null, 2)
  );

  console.log(`✅ Generated ${radius.length} radius tokens`);
}

// Create index file
function createIndexFile() {
  const indexContent = `/**
 * Design Tokens - Central Export
 * Auto-generated from Figma
 */

// Colors
export * from './colors/colors';

// Spacing & Sizes
export * from './spacing/spacing';

// Radius
export * from './radius/radius';
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent);
  console.log('✅ Created index.ts');
}

// Main execution
console.log('\n🚀 Transforming Figma tokens...\n');

try {
  processColors();
  processSpacing();
  processRadius();
  createIndexFile();

  console.log('\n✨ Token transformation complete!\n');
  console.log('Generated files:');
  console.log('  - src/tokens/colors/colors.ts');
  console.log('  - src/tokens/colors/colors.css');
  console.log('  - src/tokens/spacing/spacing.ts');
  console.log('  - src/tokens/spacing/spacing.css');
  console.log('  - src/tokens/radius/radius.ts');
  console.log('  - src/tokens/radius/radius.css');
  console.log('  - src/tokens/index.ts\n');
} catch (error) {
  console.error('❌ Error:', error.message);
  if (error.stack) {
    console.error(error.stack);
  }
  process.exit(1);
}

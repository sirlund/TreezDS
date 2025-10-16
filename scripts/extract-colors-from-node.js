#!/usr/bin/env node

/**
 * Script to extract colors from specific Figma node
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_FILE_KEY = 'zPEk7VNZnVzhGaNCnalP6o';
const COLOR_NODE_ID = '565:47731'; // Color documentation node
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_ACCESS_TOKEN) {
  console.error('Error: FIGMA_ACCESS_TOKEN environment variable is required');
  process.exit(1);
}

async function fetchNodeDetails(nodeId) {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${nodeId}`,
    {
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function fetchVariables() {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Variables API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log('⚠️  Variables API not available (may require Enterprise plan)');
    return null;
  }
}

function rgbaToHex(r, g, b, a) {
  const toHex = (val) => Math.round(val * 255).toString(16).padStart(2, '0');
  if (a < 1) {
    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbaToRgbString(r, g, b) {
  return `${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}`;
}

function extractColorsFromNode(node, colors = {}, path = []) {
  if (!node) return colors;

  // Check if this node has a fill color
  if (node.fills && Array.isArray(node.fills) && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID' && fill.visible !== false) {
      const { r, g, b, a } = fill.color;
      const colorName = node.name || `color-${Object.keys(colors).length}`;

      // Create a token name from the path and node name
      const tokenPath = [...path, colorName].join('-').toLowerCase();
      const tokenName = tokenPath
        .replace(/\s+/g, '-')
        .replace(/[\/\\]/g, '-')
        .replace(/[^a-z0-9-]/g, '');

      if (!colors[tokenName]) {
        colors[tokenName] = {
          name: [...path, colorName].join(' / '),
          hex: rgbaToHex(r, g, b, a || 1),
          rgb: rgbaToRgbString(r, g, b),
          rgba: { r, g, b, a: a || 1 },
        };
      }
    }
  }

  // Recursively check children
  if (node.children && Array.isArray(node.children)) {
    const newPath = node.name && node.type !== 'DOCUMENT' && node.type !== 'CANVAS'
      ? [...path, node.name]
      : path;

    node.children.forEach(child => {
      extractColorsFromNode(child, colors, newPath);
    });
  }

  return colors;
}

async function extractColors() {
  console.log('🎨 Extracting colors from Figma...\n');

  try {
    // Try variables first
    console.log('📥 Checking for color variables...');
    const variablesData = await fetchVariables();

    if (variablesData && variablesData.meta && variablesData.meta.variables) {
      const colorVariables = Object.values(variablesData.meta.variables).filter(
        v => v.resolvedType === 'COLOR'
      );

      if (colorVariables.length > 0) {
        console.log(`✅ Found ${colorVariables.length} color variables!\n`);

        const colorTokens = {};

        colorVariables.forEach(variable => {
          const tokenName = variable.name
            .replace(/\//g, '-')
            .replace(/\s+/g, '-')
            .toLowerCase();

          // Get the default value
          const defaultValue = variable.valuesByMode[Object.keys(variable.valuesByMode)[0]];

          if (defaultValue && defaultValue.r !== undefined) {
            colorTokens[tokenName] = {
              name: variable.name,
              hex: rgbaToHex(defaultValue.r, defaultValue.g, defaultValue.b, defaultValue.a || 1),
              rgb: rgbaToRgbString(defaultValue.r, defaultValue.g, defaultValue.b),
              rgba: defaultValue,
              description: variable.description || '',
            };
          }
        });

        // Save and generate files
        saveColorTokens(colorTokens);
        return;
      }
    }

    // Fallback: Extract from node
    console.log('📥 Fetching color node...');
    const nodeData = await fetchNodeDetails(COLOR_NODE_ID);
    const node = nodeData.nodes[COLOR_NODE_ID];

    if (!node) {
      throw new Error('Color node not found');
    }

    console.log(`✅ Found node: ${node.document.name}\n`);

    // Extract colors from the node tree
    console.log('🔍 Extracting colors from node tree...');
    const colorTokens = extractColorsFromNode(node.document);

    console.log(`\n✅ Extracted ${Object.keys(colorTokens).length} colors\n`);

    saveColorTokens(colorTokens);

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

function saveColorTokens(colorTokens) {
  const projectRoot = path.join(__dirname, '..');
  const outputDir = path.join(projectRoot, 'src', 'design-tokens');

  // Save JSON
  fs.writeFileSync(
    path.join(outputDir, 'color-tokens.json'),
    JSON.stringify(colorTokens, null, 2)
  );
  console.log('💾 Color tokens saved to: src/design-tokens/color-tokens.json');

  // Generate CSS
  const cssVars = [
    ':root {',
    '  /* Color Tokens from Figma */',
    ...Object.entries(colorTokens).map(([key, value]) =>
      `  --color-${key}: ${value.hex}; /* ${value.name} */`
    ),
    '',
    '  /* RGB values for alpha manipulation */',
    ...Object.entries(colorTokens).map(([key, value]) =>
      `  --color-${key}-rgb: ${value.rgb};`
    ),
    '}',
  ].join('\n');

  fs.writeFileSync(
    path.join(outputDir, 'colors.css'),
    cssVars
  );
  console.log('💾 CSS variables saved to: src/design-tokens/colors.css');

  // Generate TypeScript
  const tsTokens = `// Auto-generated color tokens from Figma
export const colors = {
${Object.entries(colorTokens).map(([key, value]) =>
  `  '${key}': '${value.hex}', // ${value.name}`
).join(',\n')}
} as const;

export const colorRgb = {
${Object.entries(colorTokens).map(([key, value]) =>
  `  '${key}': '${value.rgb}'`
).join(',\n')}
} as const;

export type ColorToken = keyof typeof colors;

// Helper function to get color with opacity
export function getColorWithOpacity(color: ColorToken, opacity: number): string {
  return \`rgba(\${colorRgb[color]}, \${opacity})\`;
}
`;

  fs.writeFileSync(
    path.join(outputDir, 'colors.ts'),
    tsTokens
  );
  console.log('💾 TypeScript tokens saved to: src/design-tokens/colors.ts');

  // Print summary
  const categories = {};
  Object.entries(colorTokens).forEach(([key, value]) => {
    const category = value.name.split('/')[0].trim() || 'Other';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push({ key, ...value });
  });

  console.log('\n📊 Color Categories:');
  Object.entries(categories).forEach(([category, tokens]) => {
    console.log(`  ${category}: ${tokens.length} colors`);
  });

  console.log('\n✅ Color token extraction complete!');
}

extractColors();

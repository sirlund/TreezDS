#!/usr/bin/env node

/**
 * Script to extract color styles from Figma
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_FILE_KEY = 'zPEk7VNZnVzhGaNCnalP6o';
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_ACCESS_TOKEN) {
  console.error('Error: FIGMA_ACCESS_TOKEN environment variable is required');
  process.exit(1);
}

async function fetchFigmaStyles() {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/styles`,
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

async function fetchNodeDetails(nodeIds) {
  const ids = nodeIds.join(',');
  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(ids)}`,
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

async function extractColorStyles() {
  console.log('🎨 Extracting color styles from Figma...\n');

  try {
    // Fetch all styles
    const stylesData = await fetchFigmaStyles();
    const allStyles = stylesData.meta.styles;

    // Filter for FILL styles (colors)
    const colorStyles = allStyles.filter(s => s.style_type === 'FILL');

    console.log(`📋 Found ${colorStyles.length} color styles\n`);

    // Fetch details for all color styles in batches
    const batchSize = 50;
    const colorTokens = {};

    for (let i = 0; i < colorStyles.length; i += batchSize) {
      const batch = colorStyles.slice(i, i + batchSize);
      const nodeIds = batch.map(s => s.node_id);

      console.log(`📥 Fetching color details ${i + 1}-${Math.min(i + batchSize, colorStyles.length)}/${colorStyles.length}...`);

      const nodesData = await fetchNodeDetails(nodeIds);

      batch.forEach((style) => {
        const nodeData = nodesData.nodes[style.node_id];

        if (!nodeData || !nodeData.document || !nodeData.document.fills || nodeData.document.fills.length === 0) {
          return;
        }

        const fill = nodeData.document.fills[0];

        if (fill.type === 'SOLID') {
          const { r, g, b, a } = fill.color;
          const tokenName = style.name
            .replace(/\//g, '-')
            .replace(/\s+/g, '-')
            .toLowerCase();

          colorTokens[tokenName] = {
            name: style.name,
            hex: rgbaToHex(r, g, b, a || 1),
            rgb: rgbaToRgbString(r, g, b),
            rgba: { r, g, b, a: a || 1 },
            description: style.description || '',
          };
        }
      });
    }

    console.log(`\n✅ Extracted ${Object.keys(colorTokens).length} color tokens\n`);

    // Save color tokens
    const projectRoot = path.join(__dirname, '..');
    const outputDir = path.join(projectRoot, 'src', 'design-tokens');

    fs.writeFileSync(
      path.join(outputDir, 'color-tokens.json'),
      JSON.stringify(colorTokens, null, 2)
    );

    console.log('💾 Color tokens saved to: src/design-tokens/color-tokens.json\n');

    // Generate CSS custom properties
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

    console.log('💾 CSS variables saved to: src/design-tokens/colors.css\n');

    // Generate TypeScript tokens
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

    console.log('💾 TypeScript tokens saved to: src/design-tokens/colors.ts\n');

    // Print summary by category
    const categories = {};
    Object.entries(colorTokens).forEach(([key, value]) => {
      const category = value.name.split('/')[0] || 'Other';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push({ key, ...value });
    });

    console.log('📊 Color Categories:\n');
    Object.entries(categories).forEach(([category, tokens]) => {
      console.log(`  ${category}: ${tokens.length} colors`);
    });

    console.log('\n✅ Color token extraction complete!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

extractColorStyles();

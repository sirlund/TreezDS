#!/usr/bin/env node

/**
 * Script to generate design tokens from Figma styles
 * Converts Figma styles to CSS variables and TypeScript tokens
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

async function fetchFigmaNodes(nodeIds) {
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

function convertTextStyleToTokens(style, nodeData) {
  const { name } = style;
  const document = nodeData?.document;

  if (!document || !document.style) {
    return null;
  }

  const { style: textStyle } = document;

  return {
    name: name.replace(/\//g, '-').toLowerCase(),
    category: name.split('/')[0].toLowerCase(),
    properties: {
      fontFamily: textStyle.fontFamily,
      fontWeight: textStyle.fontWeight,
      fontSize: `${textStyle.fontSize}px`,
      lineHeight: textStyle.lineHeightPx ? `${textStyle.lineHeightPx}px` : textStyle.lineHeightPercentFontSize ? `${textStyle.lineHeightPercentFontSize}%` : 'normal',
      letterSpacing: textStyle.letterSpacing ? `${textStyle.letterSpacing}px` : 'normal',
      textTransform: textStyle.textCase === 'UPPER' ? 'uppercase' : textStyle.textCase === 'LOWER' ? 'lowercase' : 'none',
    },
  };
}

function convertEffectStyleToTokens(style, nodeData) {
  const { name } = style;
  const document = nodeData?.document;

  if (!document || !document.effects || document.effects.length === 0) {
    return null;
  }

  const effects = document.effects.filter(e => e.visible !== false);
  const boxShadows = effects.map(effect => {
    if (effect.type === 'DROP_SHADOW') {
      const { offset, radius, color } = effect;
      const rgba = `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${color.a})`;
      return `${offset.x}px ${offset.y}px ${radius}px ${rgba}`;
    }
    return null;
  }).filter(Boolean).join(', ');

  if (!boxShadows) return null;

  return {
    name: name.replace(/\//g, '-').toLowerCase(),
    category: name.split('/')[0].toLowerCase(),
    properties: {
      boxShadow: boxShadows,
    },
  };
}

async function generateTokens() {
  console.log('🎨 Generating design tokens from Figma styles...\n');

  try {
    // Read the styles metadata
    const projectRoot = path.join(__dirname, '..');
    const tokensDir = path.join(projectRoot, 'src', 'design-tokens');
    const stylesPath = path.join(tokensDir, 'figma-styles-raw.json');

    const stylesData = JSON.parse(fs.readFileSync(stylesPath, 'utf-8'));
    const styles = stylesData.meta.styles;

    console.log(`📋 Found ${styles.length} styles`);

    // Filter out deprecated styles and organize by type
    const activeStyles = styles.filter(s => !s.name.includes('DEPRECATED'));
    const textStyles = activeStyles.filter(s => s.style_type === 'TEXT');
    const effectStyles = activeStyles.filter(s => s.style_type === 'EFFECT');

    console.log(`  ✓ ${textStyles.length} text styles`);
    console.log(`  ✓ ${effectStyles.length} effect styles\n`);

    // Fetch text styles in batches
    console.log('📥 Fetching text style details...');
    const textStyleTokens = [];
    const batchSize = 50;

    for (let i = 0; i < textStyles.length; i += batchSize) {
      const batch = textStyles.slice(i, i + batchSize);
      const nodeIds = batch.map(s => s.node_id);
      const nodesData = await fetchFigmaNodes(nodeIds);

      batch.forEach((style, index) => {
        const nodeData = nodesData.nodes[style.node_id];
        const token = convertTextStyleToTokens(style, nodeData);
        if (token) {
          textStyleTokens.push(token);
        }
      });

      console.log(`  ✓ Processed ${Math.min(i + batchSize, textStyles.length)}/${textStyles.length}`);
    }

    // Fetch effect styles in batches
    console.log('\n📥 Fetching effect style details...');
    const effectStyleTokens = [];

    for (let i = 0; i < effectStyles.length; i += batchSize) {
      const batch = effectStyles.slice(i, i + batchSize);
      const nodeIds = batch.map(s => s.node_id);
      const nodesData = await fetchFigmaNodes(nodeIds);

      batch.forEach((style, index) => {
        const nodeData = nodesData.nodes[style.node_id];
        const token = convertEffectStyleToTokens(style, nodeData);
        if (token) {
          effectStyleTokens.push(token);
        }
      });

      console.log(`  ✓ Processed ${Math.min(i + batchSize, effectStyles.length)}/${effectStyles.length}`);
    }

    // Generate CSS variables
    console.log('\n💾 Generating token files...');

    const cssVariables = [
      ':root {',
      '  /* Typography Tokens */',
      ...textStyleTokens.flatMap(token => [
        `  --font-${token.name}: ${token.properties.fontFamily};`,
        `  --font-weight-${token.name}: ${token.properties.fontWeight};`,
        `  --font-size-${token.name}: ${token.properties.fontSize};`,
        `  --line-height-${token.name}: ${token.properties.lineHeight};`,
        `  --letter-spacing-${token.name}: ${token.properties.letterSpacing};`,
      ]),
      '',
      '  /* Shadow Tokens */',
      ...effectStyleTokens.map(token =>
        `  --shadow-${token.name}: ${token.properties.boxShadow};`
      ),
      '}',
    ].join('\n');

    fs.writeFileSync(
      path.join(tokensDir, 'tokens.css'),
      cssVariables
    );
    console.log('  ✓ tokens.css generated');

    // Generate TypeScript tokens
    const tsTokens = `// Auto-generated design tokens from Figma
export const typography = {
${textStyleTokens.map(token => `  '${token.name}': ${JSON.stringify(token.properties, null, 4)}`).join(',\n')}
} as const;

export const shadows = {
${effectStyleTokens.map(token => `  '${token.name}': '${token.properties.boxShadow}'`).join(',\n')}
} as const;

export type TypographyToken = keyof typeof typography;
export type ShadowToken = keyof typeof shadows;
`;

    fs.writeFileSync(
      path.join(tokensDir, 'tokens.ts'),
      tsTokens
    );
    console.log('  ✓ tokens.ts generated');

    // Generate JSON for reference
    const jsonTokens = {
      typography: Object.fromEntries(textStyleTokens.map(t => [t.name, t.properties])),
      shadows: Object.fromEntries(effectStyleTokens.map(t => [t.name, t.properties.boxShadow])),
    };

    fs.writeFileSync(
      path.join(tokensDir, 'tokens.json'),
      JSON.stringify(jsonTokens, null, 2)
    );
    console.log('  ✓ tokens.json generated');

    console.log('\n✅ Design tokens generated successfully!');
    console.log(`📁 Tokens saved to: ${tokensDir}`);
    console.log(`\n📊 Summary:`);
    console.log(`  • ${textStyleTokens.length} typography tokens`);
    console.log(`  • ${effectStyleTokens.length} shadow tokens`);

  } catch (error) {
    console.error('❌ Error generating tokens:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

// Run generation
generateTokens();

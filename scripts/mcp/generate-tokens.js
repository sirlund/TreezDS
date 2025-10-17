/**
 * MCP-based Token Generation
 * 
 * Generates design tokens from Figma using MCP server.
 * Combines colors, spacing, typography, and other tokens.
 * 
 * Usage:
 * 1. Extract design context from Figma (see extract-design.js)
 * 2. Run: npm run mcp:tokens
 * 3. Tokens will be generated in src/design-tokens/
 */

import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = join(__dirname, '../../imported-from-figma');
const TOKENS_DIR = join(__dirname, '../../src/design-tokens');

/**
 * Token categories to process
 */
const TOKEN_CATEGORIES = {
  colors: 'Colors.json',
  spacing: 'Size&Spacing.json',
  shapes: 'Shapes.json',
};

/**
 * Process all token files from imported data
 */
async function processTokens() {
  console.log('🎨 Processing design tokens...\n');

  const tokens = {
    colors: {},
    spacing: {},
    shapes: {},
    metadata: {
      source: 'figma-mcp',
      extractedAt: new Date().toISOString(),
      version: '1.0.0',
    }
  };

  for (const [category, filename] of Object.entries(TOKEN_CATEGORIES)) {
    try {
      const filePath = join(OUTPUT_DIR, filename);
      const data = await fs.readFile(filePath, 'utf-8');
      tokens[category] = JSON.parse(data);
      console.log(`✅ Loaded ${category} from ${filename}`);
    } catch (error) {
      console.log(`⚠️  ${category} not found (${filename})`);
    }
  }

  console.log('\n');
  return tokens;
}

/**
 * Generate TypeScript token definitions
 * @param {Object} tokens - All processed tokens
 */
function generateTokensTS(tokens) {
  let ts = '/**\n';
  ts += ' * Design Tokens - Auto-generated from Figma via MCP\n';
  ts += ` * Generated: ${new Date().toISOString()}\n`;
  ts += ' * DO NOT EDIT MANUALLY\n';
  ts += ' */\n\n';

  // TODO: Generate TypeScript types and exports
  // Based on the structure of tokens object

  ts += 'export const tokens = {\n';
  ts += '  // Token definitions will be here\n';
  ts += '};\n\n';

  ts += 'export type Tokens = typeof tokens;\n';

  return ts;
}

/**
 * Generate CSS custom properties
 * @param {Object} tokens - All processed tokens
 */
function generateTokensCSS(tokens) {
  let css = '/**\n';
  css += ' * Design Tokens - Auto-generated from Figma via MCP\n';
  css += ` * Generated: ${new Date().toISOString()}\n`;
  css += ' * DO NOT EDIT MANUALLY\n';
  css += ' */\n\n';

  css += ':root {\n';
  
  // TODO: Generate CSS variables from all token categories
  
  css += '}\n';

  return css;
}

/**
 * Main generation workflow
 */
async function generateTokens() {
  console.log('🚀 MCP Token Generation\n');
  console.log('═'.repeat(50) + '\n');

  try {
    // Ensure directories exist
    await fs.mkdir(TOKENS_DIR, { recursive: true });

    // Check if we have any token files
    const hasTokens = await fs.readdir(OUTPUT_DIR)
      .then(files => files.some(f => f.endsWith('.json')))
      .catch(() => false);

    if (!hasTokens) {
      console.log('⚠️  No token files found in imported-from-figma/\n');
      console.log('📌 To extract tokens:\n');
      console.log('1. Run: npm run mcp:extract');
      console.log('2. Follow the MCP workflow');
      console.log('3. Then run this script again\n');
      return;
    }

    // Process all tokens
    const tokens = await processTokens();

    // Generate TypeScript file
    const tokensTS = generateTokensTS(tokens);
    await fs.writeFile(
      join(TOKENS_DIR, 'tokens.ts'),
      tokensTS
    );
    console.log('✅ Generated src/design-tokens/tokens.ts');

    // Generate CSS file
    const tokensCSS = generateTokensCSS(tokens);
    await fs.writeFile(
      join(TOKENS_DIR, 'tokens.css'),
      tokensCSS
    );
    console.log('✅ Generated src/design-tokens/tokens.css');

    // Save combined tokens JSON
    await fs.writeFile(
      join(TOKENS_DIR, 'tokens.json'),
      JSON.stringify(tokens, null, 2)
    );
    console.log('✅ Generated src/design-tokens/tokens.json\n');

    console.log('🎉 Token generation complete!\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateTokens();
}

export { generateTokens, processTokens, generateTokensTS, generateTokensCSS };

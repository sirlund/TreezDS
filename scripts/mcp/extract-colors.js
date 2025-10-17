/**
 * MCP-based Color Token Extraction
 * 
 * Extracts color tokens from Figma using MCP server.
 * Processes the design context to generate color token files.
 * 
 * Usage:
 * 1. Select a frame with color styles in Figma Desktop
 * 2. Run: npm run mcp:colors
 * 3. Follow prompts to use MCP commands
 */

import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = join(__dirname, '../../imported-from-figma');
const TOKENS_DIR = join(__dirname, '../../src/design-tokens');

/**
 * Process color data from MCP design context
 * @param {Object} designContext - Design data from Figma MCP
 */
function processColors(designContext) {
  console.log('🎨 Processing color tokens...\n');

  const colors = {
    colors: {},
    metadata: {
      source: 'figma-mcp',
      extractedAt: new Date().toISOString(),
      framework: 'TreezDS',
    }
  };

  // TODO: Parse designContext and extract colors
  // This depends on the structure returned by mcp_figma_get_design_context
  
  console.log('✅ Color processing complete\n');
  return colors;
}

/**
 * Generate CSS custom properties from color tokens
 * @param {Object} colors - Processed color data
 */
function generateColorCSS(colors) {
  let css = '/**\n';
  css += ' * Color Tokens - Auto-generated from Figma via MCP\n';
  css += ` * Generated: ${new Date().toISOString()}\n`;
  css += ' * DO NOT EDIT MANUALLY\n';
  css += ' */\n\n';
  css += ':root {\n';

  // TODO: Generate CSS variables from colors object
  // Example:
  // --color-primary: #hex;
  // --color-secondary: #hex;

  css += '}\n';

  return css;
}

/**
 * Main extraction workflow
 */
async function extractColors() {
  console.log('🚀 MCP Color Token Extraction\n');
  console.log('═'.repeat(50) + '\n');

  try {
    // Ensure directories exist
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.mkdir(TOKENS_DIR, { recursive: true });

    console.log('📌 How to use this script:\n');
    console.log('1. Open Figma Desktop App');
    console.log('2. Navigate to your design file');
    console.log('3. Select the frame containing color styles');
    console.log('4. In VS Code, use Copilot to call:');
    console.log('   @figma get design context for selected node\n');
    console.log('5. Copy the returned design context');
    console.log('6. Save it to: imported-from-figma/design-context.json\n');
    console.log('7. Re-run this script to process the colors\n');

    // Check if design context exists
    const contextPath = join(OUTPUT_DIR, 'design-context.json');
    try {
      const contextData = await fs.readFile(contextPath, 'utf-8');
      const designContext = JSON.parse(contextData);
      
      console.log('✅ Found design context, processing...\n');
      
      const colors = processColors(designContext);
      
      // Save color tokens
      await fs.writeFile(
        join(OUTPUT_DIR, 'Colors.json'),
        JSON.stringify(colors, null, 2)
      );
      
      // Generate CSS
      const css = generateColorCSS(colors);
      await fs.writeFile(
        join(TOKENS_DIR, 'colors.css'),
        css
      );
      
      console.log('✅ Files created:');
      console.log('   - imported-from-figma/Colors.json');
      console.log('   - src/design-tokens/colors.css\n');
      
    } catch (error) {
      console.log('⚠️  No design context found yet.');
      console.log('   Follow steps above to extract from Figma.\n');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  extractColors();
}

export { extractColors, processColors, generateColorCSS };

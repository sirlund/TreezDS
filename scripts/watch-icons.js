#!/usr/bin/env node

/**
 * SVG Icon Watcher
 *
 * Watches the imported-from-figma folder for new SVG files and automatically
 * adds them to src/components/Icon/iconData.ts
 *
 * Usage: npm run watch:icons
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chokidar from 'chokidar';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WATCH_DIR = path.join(__dirname, '..', 'imported-from-figma');
const CUSTOM_ICON_DATA_PATH = path.join(__dirname, '..', 'src', 'components', 'Icon', 'customIconData.ts');

console.log('🔍 Watching for custom Treez icon SVG files in:', WATCH_DIR);
console.log('📝 Will update:', CUSTOM_ICON_DATA_PATH);
console.log('ℹ️  Material Design icons are loaded from Material Symbols Rounded (Google Fonts)');
console.log('');

/**
 * Extract SVG path data and viewBox from SVG file content
 * Expects icons to be exported from Figma with paths already centered in a 20x20 artboard
 */
function extractSvgData(svgContent) {
  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  if (!viewBoxMatch) {
    throw new Error('Could not find viewBox in SVG');
  }
  const viewBox = viewBoxMatch[1];

  // Extract path d attribute
  const pathMatch = svgContent.match(/<path[^>]*\sd="([^"]+)"/);
  if (!pathMatch) {
    throw new Error('Could not find path element in SVG');
  }
  const pathData = pathMatch[1];

  console.log(`   ViewBox: ${viewBox}`);

  // Warn if viewBox is not 20x20
  if (viewBox !== '0 0 20 20') {
    console.log(`   ⚠️  Note: ViewBox is "${viewBox}". For best results, export from Figma using a 20x20 frame`);
  }

  return { viewBox, pathData };
}

/**
 * Add custom icon to customIconData.ts
 */
function addIconToDataFile(iconName, viewBox, pathData) {
  let content = fs.readFileSync(CUSTOM_ICON_DATA_PATH, 'utf8');

  // Check if icon already exists
  if (content.includes(`  ${iconName}: {`)) {
    console.log(`⚠️  Icon "${iconName}" already exists in customIconData.ts, skipping...`);
    return false;
  }

  // Find the position to insert (before the closing brace of customIconData object)
  const insertPosition = content.lastIndexOf('};');

  if (insertPosition === -1) {
    throw new Error('Could not find closing brace in customIconData.ts');
  }

  // Create the icon entry
  const iconEntry = `  ${iconName}: {
    viewBox: '${viewBox}',
    path: '${pathData}',
  },
`;

  // Insert the new icon entry
  const beforeInsert = content.substring(0, insertPosition);
  const afterInsert = content.substring(insertPosition);

  content = beforeInsert + iconEntry + afterInsert;

  // Write the updated content
  fs.writeFileSync(CUSTOM_ICON_DATA_PATH, content, 'utf8');

  return true;
}

/**
 * Process a single SVG file
 */
function processSvgFile(filePath) {
  const fileName = path.basename(filePath, '.svg');
  const iconName = fileName.toLowerCase().replace(/[^a-z0-9]+/g, '_');

  console.log(`\n📄 Processing: ${fileName}.svg`);
  console.log(`   Icon name: ${iconName}`);

  try {
    const svgContent = fs.readFileSync(filePath, 'utf8');
    const { viewBox, pathData } = extractSvgData(svgContent);

    console.log(`   Path length: ${pathData.length} characters`);

    const added = addIconToDataFile(iconName, viewBox, pathData);

    if (added) {
      console.log(`✅ Successfully added "${iconName}" to customIconData.ts`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${fileName}:`, error.message);
  }
}

/**
 * Process all existing SVG files
 */
function processExistingSvgFiles() {
  if (!fs.existsSync(WATCH_DIR)) {
    console.log(`⚠️  Directory ${WATCH_DIR} does not exist. Creating it...`);
    fs.mkdirSync(WATCH_DIR, { recursive: true });
    return;
  }

  const files = fs.readdirSync(WATCH_DIR);
  const svgFiles = files.filter(file => file.endsWith('.svg'));

  if (svgFiles.length === 0) {
    console.log('No SVG files found in the watched directory.');
    return;
  }

  console.log(`Found ${svgFiles.length} existing SVG file(s):`);
  svgFiles.forEach(file => {
    const filePath = path.join(WATCH_DIR, file);
    processSvgFile(filePath);
  });
}

// Process existing files first
console.log('🔄 Processing existing SVG files...\n');
processExistingSvgFiles();

console.log('\n👀 Now watching for new SVG files...');
console.log('   Press Ctrl+C to stop\n');

// Watch for new files
const watcher = chokidar.watch(WATCH_DIR, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true, // Don't trigger for files that already exist
  awaitWriteFinish: {
    stabilityThreshold: 500,
    pollInterval: 100
  },
  usePolling: true, // Use polling mode for better compatibility
  interval: 100,
  binaryInterval: 300
});

watcher
  .on('add', (filePath) => {
    // Only process .svg files
    if (!filePath.endsWith('.svg')) {
      return;
    }
    console.log(`\n🆕 New SVG file detected: ${path.basename(filePath)}`);
    processSvgFile(filePath);
  })
  .on('error', (error) => {
    console.error('❌ Watcher error:', error);
  });

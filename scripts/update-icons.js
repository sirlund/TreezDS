#!/usr/bin/env node

/**
 * SVG Icon Updater
 *
 * Automatically updates existing icons in customIconData.ts by processing
 * SVG files with a -2 suffix (e.g., flower-2.svg updates the "flower" icon)
 *
 * Usage: npm run update:icons
 * Or manually: node scripts/update-icons.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WATCH_DIR = path.join(__dirname, '..', 'imported-from-figma');
const CUSTOM_ICON_DATA_PATH = path.join(__dirname, '..', 'src', 'components', 'Icon', 'customIconData.ts');

console.log('🔄 Looking for icon updates in:', WATCH_DIR);
console.log('📝 Will update:', CUSTOM_ICON_DATA_PATH);
console.log('');

/**
 * Extract SVG path data and viewBox from SVG file content
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
 * Update an existing icon in customIconData.ts
 */
function updateIconInDataFile(iconName, viewBox, pathData) {
  let content = fs.readFileSync(CUSTOM_ICON_DATA_PATH, 'utf8');

  // Check if icon exists
  const iconRegex = new RegExp(`  ${iconName}: \\{[^}]*\\},`, 's');
  if (!iconRegex.test(content)) {
    console.log(`❌ Icon "${iconName}" does not exist in customIconData.ts`);
    console.log(`   Available icons: ${getExistingIconNames(content).join(', ')}`);
    return false;
  }

  // Create the new icon entry
  const newIconEntry = `  ${iconName}: {
    viewBox: '${viewBox}',
    path: '${pathData}',
  },`;

  // Replace the existing icon entry
  content = content.replace(iconRegex, newIconEntry);

  // Write the updated content
  fs.writeFileSync(CUSTOM_ICON_DATA_PATH, content, 'utf8');

  return true;
}

/**
 * Get list of existing icon names from customIconData.ts
 */
function getExistingIconNames(content) {
  const matches = content.matchAll(/  ([a-z_]+): \{/g);
  return Array.from(matches, m => m[1]);
}

/**
 * Process a single SVG update file
 */
function processUpdateFile(filePath) {
  const fileName = path.basename(filePath, '.svg');

  // Check if this is an update file (ends with -2)
  if (!fileName.endsWith('-2')) {
    return false;
  }

  // Get the actual icon name (remove -2 suffix)
  const iconName = fileName.slice(0, -2).toLowerCase().replace(/[^a-z0-9]+/g, '_');

  console.log(`\n📄 Processing update: ${fileName}.svg`);
  console.log(`   Updating icon: ${iconName}`);

  try {
    const svgContent = fs.readFileSync(filePath, 'utf8');
    const { viewBox, pathData } = extractSvgData(svgContent);

    console.log(`   Path length: ${pathData.length} characters`);

    const updated = updateIconInDataFile(iconName, viewBox, pathData);

    if (updated) {
      console.log(`✅ Successfully updated "${iconName}" in customIconData.ts`);

      // Delete the source file after successful update
      fs.unlinkSync(filePath);
      console.log(`🗑️  Deleted source file: ${fileName}.svg`);

      return true;
    }
  } catch (error) {
    console.error(`❌ Error processing ${fileName}:`, error.message);
  }

  return false;
}

/**
 * Process all update files in the watched directory
 */
function processAllUpdateFiles() {
  if (!fs.existsSync(WATCH_DIR)) {
    console.log(`⚠️  Directory ${WATCH_DIR} does not exist.`);
    return 0;
  }

  const files = fs.readdirSync(WATCH_DIR);
  const updateFiles = files.filter(file => file.endsWith('-2.svg'));

  if (updateFiles.length === 0) {
    console.log('No icon update files found (looking for *-2.svg files).');
    console.log('');
    console.log('💡 To update an icon:');
    console.log('   1. Export from Figma with name like "flower-2.svg"');
    console.log('   2. Place in imported-from-figma/ folder');
    console.log('   3. Run this script');
    return 0;
  }

  console.log(`Found ${updateFiles.length} icon update file(s):\n`);

  let successCount = 0;
  updateFiles.forEach(file => {
    const filePath = path.join(WATCH_DIR, file);
    if (processUpdateFile(filePath)) {
      successCount++;
    }
  });

  console.log('');
  console.log(`✨ Updated ${successCount} of ${updateFiles.length} icon(s)`);

  return successCount;
}

// Run the update process
const updatedCount = processAllUpdateFiles();
process.exit(updatedCount > 0 ? 0 : 1);

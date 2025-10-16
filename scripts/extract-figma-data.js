#!/usr/bin/env node

/**
 * Script to extract design system data from Figma
 * Fetches variables, styles, and components from the Figma file
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

async function fetchFigmaData(endpoint) {
  const response = await fetch(`https://api.figma.com/v1/${endpoint}`, {
    headers: {
      'X-Figma-Token': FIGMA_ACCESS_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function extractDesignSystem() {
  console.log('🎨 Extracting design system from Figma...\n');

  try {
    // Fetch file metadata
    console.log('📄 Fetching file metadata...');
    const fileData = await fetchFigmaData(`files/${FIGMA_FILE_KEY}`);

    // Fetch variables
    console.log('🎨 Fetching design variables...');
    let variables = null;
    try {
      const variablesData = await fetchFigmaData(`files/${FIGMA_FILE_KEY}/variables/local`);
      variables = variablesData;
    } catch (error) {
      console.log('⚠️  Variables API not accessible (may require Enterprise plan), using styles instead');
    }

    // Fetch styles
    console.log('✨ Fetching styles...');
    const stylesData = await fetchFigmaData(`files/${FIGMA_FILE_KEY}/styles`);

    // Create output directory
    const projectRoot = path.join(__dirname, '..');
    const outputDir = path.join(projectRoot, 'src', 'design-tokens');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Save raw data
    console.log('\n💾 Saving design system data...');

    // Extract only metadata from file (skip large document tree)
    const fileMetadata = {
      name: fileData.name,
      lastModified: fileData.lastModified,
      version: fileData.version,
      thumbnailUrl: fileData.thumbnailUrl,
    };

    fs.writeFileSync(
      path.join(outputDir, 'figma-file-metadata.json'),
      JSON.stringify(fileMetadata, null, 2)
    );
    console.log('  ✓ File metadata saved');

    if (variables) {
      fs.writeFileSync(
        path.join(outputDir, 'figma-variables-raw.json'),
        JSON.stringify(variables, null, 2)
      );
      console.log('  ✓ Variables saved');
    }

    fs.writeFileSync(
      path.join(outputDir, 'figma-styles-raw.json'),
      JSON.stringify(stylesData, null, 2)
    );
    console.log('  ✓ Styles saved');

    console.log('\n✅ Design system data extracted successfully!');
    console.log(`📁 Data saved to: ${outputDir}`);

    return {
      fileData,
      variables,
      stylesData,
    };
  } catch (error) {
    console.error('❌ Error extracting design system:', error.message);
    process.exit(1);
  }
}

// Run extraction
extractDesignSystem();

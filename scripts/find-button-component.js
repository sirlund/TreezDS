#!/usr/bin/env node

/**
 * Script to find and extract the Button component from Figma
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

async function fetchFigmaComponents() {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
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

async function getComponentDetails(nodeId) {
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

async function findButtonComponents() {
  console.log('🔍 Searching for Button components in Figma...\n');

  try {
    const componentsData = await fetchFigmaComponents();
    const components = Object.values(componentsData.meta.components);

    console.log(`📋 Found ${components.length} total components\n`);

    // Search for button-related components
    const buttonComponents = components.filter(c =>
      c.name.toLowerCase().includes('button')
    );

    console.log(`🎯 Found ${buttonComponents.length} Button-related components:\n`);

    for (const component of buttonComponents) {
      console.log(`---`);
      console.log(`Name: ${component.name}`);
      console.log(`Description: ${component.description || '(no description)'}`);
      console.log(`Node ID: ${component.node_id}`);
      console.log(`Key: ${component.key}`);
      console.log();
    }

    // Get detailed information for the first/main Button component
    if (buttonComponents.length > 0) {
      console.log('📥 Fetching detailed information for Button components...\n');

      const projectRoot = path.join(__dirname, '..');
      const outputDir = path.join(projectRoot, 'src', 'design-tokens');

      const buttonDetails = [];

      for (const component of buttonComponents.slice(0, 10)) { // Limit to first 10
        try {
          const details = await getComponentDetails(component.node_id);
          buttonDetails.push({
            name: component.name,
            description: component.description,
            key: component.key,
            node_id: component.node_id,
            details: details.nodes[component.node_id]
          });
        } catch (error) {
          console.log(`⚠️  Could not fetch details for ${component.name}`);
        }
      }

      fs.writeFileSync(
        path.join(outputDir, 'button-components.json'),
        JSON.stringify(buttonDetails, null, 2)
      );

      console.log(`✅ Saved button component details to: ${outputDir}/button-components.json`);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

findButtonComponents();

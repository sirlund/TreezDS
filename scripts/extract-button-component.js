#!/usr/bin/env node

/**
 * Script to extract the specific Button component from Figma
 * Node ID: 7373-46852
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_FILE_KEY = 'zPEk7VNZnVzhGaNCnalP6o';
const BUTTON_NODE_ID = '16340:114580'; // Button v2 (beta) component set
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

async function getComponentSets() {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/component_sets`,
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

async function extractButtonComponent() {
  console.log('🎨 Extracting Button component from Figma...\n');

  try {
    // Fetch the specific node
    console.log(`📥 Fetching node ${BUTTON_NODE_ID}...`);
    const nodeData = await fetchNodeDetails(BUTTON_NODE_ID);
    const node = nodeData.nodes[BUTTON_NODE_ID];

    if (!node) {
      throw new Error('Button component not found');
    }

    console.log('✅ Button component found!\n');
    console.log('Component Details:');
    console.log('-------------------');
    console.log(`Name: ${node.document.name}`);
    console.log(`Type: ${node.document.type}`);

    // Get component sets to find related variants
    console.log('\n📥 Fetching component sets...');
    const componentSets = await getComponentSets();

    // Save the full data
    const projectRoot = path.join(__dirname, '..');
    const outputDir = path.join(projectRoot, 'src', 'design-tokens');

    const buttonData = {
      node: node.document,
      componentSets: componentSets.meta.component_sets,
      extractedAt: new Date().toISOString(),
    };

    fs.writeFileSync(
      path.join(outputDir, 'button-component.json'),
      JSON.stringify(buttonData, null, 2)
    );

    console.log(`\n✅ Button component data saved to: ${outputDir}/button-component.json`);

    // Print summary
    console.log('\n📊 Component Summary:');
    console.log(`  Name: ${node.document.name}`);
    console.log(`  Type: ${node.document.type}`);

    if (node.document.children) {
      console.log(`  Children: ${node.document.children.length}`);

      // Look for variants
      const variants = node.document.children.filter(child =>
        child.type === 'COMPONENT' || child.type === 'INSTANCE'
      );

      if (variants.length > 0) {
        console.log(`\n  Variants found: ${variants.length}`);
        variants.forEach(variant => {
          console.log(`    - ${variant.name}`);
        });
      }
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

extractButtonComponent();

#!/usr/bin/env node

/**
 * Normalize all viewBoxes to 20x20
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICON_DATA_PATH = path.join(__dirname, '..', 'src', 'components', 'Icon', 'iconData.ts');

console.log('🔧 Normalizing all icon viewBoxes to "0 0 20 20"...\n');

let content = fs.readFileSync(ICON_DATA_PATH, 'utf8');

// Replace all viewBox values with "0 0 20 20"
const originalContent = content;
content = content.replace(/viewBox: '[^']+'/g, "viewBox: '0 0 20 20'");

// Count how many replacements were made
const matches = originalContent.match(/viewBox: '[^']+'/g);
const count = matches ? matches.length - 1 : 0; // -1 for the interface definition

fs.writeFileSync(ICON_DATA_PATH, content, 'utf8');

console.log(`✅ Normalized ${count} icon viewBoxes to "0 0 20 20"`);

#!/usr/bin/env node

/**
 * Script to generate Button component from Figma data
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const buttonDataPath = path.join(projectRoot, 'src', 'design-tokens', 'button-component.json');

const buttonData = JSON.parse(fs.readFileSync(buttonDataPath, 'utf-8'));

function parseVariantName(name) {
  const typeMatch = name.match(/Type=([^,]+)/);
  const sizeMatch = name.match(/Size=([^,]+)/);
  const stateMatch = name.match(/State=([^,]+)/);

  return {
    type: typeMatch ? typeMatch[1].trim() : null,
    size: sizeMatch ? sizeMatch[1].trim() : null,
    state: stateMatch ? stateMatch[1].trim() : null,
  };
}

function rgbaToHex(r, g, b, a) {
  const toHex = (val) => Math.round(val * 255).toString(16).padStart(2, '0');
  if (a < 1) {
    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function extractButtonStyles() {
  const variants = buttonData.node.children;
  const styles = {
    primary: { small: {}, medium: {}, large: {} },
    secondary: { small: {}, medium: {}, large: {} },
    tertiary: { small: {}, medium: {}, large: {} },
  };

  variants.forEach(variant => {
    const { type, size, state } = parseVariantName(variant.name);

    if (state !== 'Enabled') return; // Only extract enabled state for base styles

    const typeKey = type.includes('Primary') ? 'primary'
      : type.includes('Secondary') ? 'secondary'
      : 'tertiary';

    const sizeKey = size.includes('Small') ? 'small'
      : size.includes('Large') ? 'large'
      : 'medium';

    const style = {
      padding: `${variant.paddingTop || 0}px ${variant.paddingRight || 0}px ${variant.paddingBottom || 0}px ${variant.paddingLeft || 0}px`,
      borderRadius: `${variant.cornerRadius || 0}px`,
      gap: `${variant.itemSpacing || 0}px`,
    };

    // Extract fill color
    if (variant.fills && variant.fills.length > 0) {
      const fill = variant.fills[0];
      style.backgroundColor = rgbaToHex(fill.color.r, fill.color.g, fill.color.b, fill.color.a);
    }

    // Extract stroke
    if (variant.strokes && variant.strokes.length > 0) {
      const stroke = variant.strokes[0];
      style.border = `${variant.strokeWeight || 1}px solid ${rgbaToHex(stroke.color.r, stroke.color.g, stroke.color.b, stroke.color.a)}`;
    }

    // Try to find text color from children
    if (variant.children) {
      const textNode = variant.children.find(c => c.type === 'TEXT');
      if (textNode && textNode.fills && textNode.fills.length > 0) {
        const textFill = textNode.fills[0];
        style.color = rgbaToHex(textFill.color.r, textFill.color.g, textFill.color.b, textFill.color.a);
      }
    }

    styles[typeKey][sizeKey] = style;
  });

  return styles;
}

console.log('🎨 Generating Button component from Figma data...\n');

const styles = extractButtonStyles();

console.log('📊 Extracted Button Styles:\n');
console.log(JSON.stringify(styles, null, 2));

// Save for reference
fs.writeFileSync(
  path.join(projectRoot, 'src', 'design-tokens', 'button-styles.json'),
  JSON.stringify(styles, null, 2)
);

console.log('\n✅ Button styles saved to src/design-tokens/button-styles.json');

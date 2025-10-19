/**
 * Material Symbols icon names (snake_case)
 * These icons are rendered using Google's Material Symbols Rounded variable font
 * 
 * Specifications:
 * - Variant: Rounded
 * - Weight: 400
 * - Grade: 0 (Normal)
 * - Optical Size: 20px
 * - Fill: 0 (No fill / Outlined)
 * 
 * Find icons at: https://fonts.google.com/icons
 */
export const materialSymbolNames = [
  'account_circle',
  'admin_panel_settings',
  'apps',
  'auto_graph',
  'category',
  'dashboard',
  'group',
  'integration_instructions',
  'inventory',
  'loyalty',
  'payments',
  'redeem',
  'rocket_launch',
  'settings',
  'smart_toy',
  'storefront',
  'verified',
] as const;

export type MaterialIconName = typeof materialSymbolNames[number];
export const materialIconNames = [...materialSymbolNames] as MaterialIconName[];

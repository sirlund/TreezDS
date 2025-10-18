/**
 * Primitive Color Tokens from Figma
 *
 * These are the raw color values extracted from Figma.
 * Components should use semantic tokens from design-tokens/semantic-colors.ts
 *
 * NOTE: This file was manually created. Future automation will regenerate it.
 */

// Green Colors
export const greenColors = {
  green01: '#fcfff5',
  green02: '#f3fae6',
  green03: '#e8f7cd',
  green04: '#dbf5b3',
  green05: '#a9e079',
  green06: '#8ccc52',
  green07: '#6baa32',
  green08: '#3e7a18',
  green09: '#295c07',
  green10: '#1a4007',
} as const;

// Primary Colors
export const primaryColors = {
  'primary-main': '#a9e079',
  'primary-light': '#e8f7cd',
  'primary-dark': '#8ccc52',
} as const;

// Black & White Colors
export const bwColors = {
  'primary-black': '#1a1a1a',
  'primary-white': '#ffffff',
} as const;

// Greyscale Colors
export const greyscaleColors = {
  grey01: '#f7f7f7',
  grey02: '#f5f5f5',
  grey03: '#f0f0f0',
  grey04: '#e6e6e6',
  grey05: '#bfbfbf',
  grey06: '#8c8c8c',
  grey07: '#737373',
  grey08: '#595959',
  grey09: '#404040',
  grey10: '#262626',
} as const;

// Secondary Colors - Browns
export const brownColors = {
  brown00: '#f1eae6',
  brown01: '#e2ccc0',
  brown02: '#c69278',
} as const;

// Secondary Colors - Oranges
export const orangeColors = {
  orange00: '#f9e7da',
  orange01: '#fcc8a2',
  orange02: '#fba466',
} as const;

// Secondary Colors - Peach/Red
export const peachColors = {
  peach00: '#ffeded',
  peach01: '#f1d9d9',
  peach02: '#ff9696',
} as const;

// Secondary Colors - Blues
export const blueColors = {
  blue00: '#f0f8ff',
  blue01: '#cfdeed',
  blue02: '#95c1ee',
} as const;

// Secondary Colors - Purples
export const purpleColors = {
  purple00: '#faf2fe',
  purple01: '#e0c6ec',
  purple02: '#c992e3',
} as const;

// Secondary Colors - Yellows
export const yellowColors = {
  yellow00: '#fdf8e5',
  yellow01: '#fbf1cf',
  yellow02: '#fde28b',
} as const;

// System Colors - Info
export const infoColors = {
  'info-main': '#437dcf',
  'info-light': '#e1eefa',
  'info-dark': '#3774ac',
} as const;

// System Colors - Success
export const successColors = {
  'success-main': '#309f56',
  'success-light': '#e5f9ec',
  'success-dark': '#2e834b',
} as const;

// System Colors - Warning
export const warningColors = {
  'warning-main': '#e26815',
  'warning-light': '#fff3e1',
  'warning-dark': '#b45210',
} as const;

// System Colors - Error
export const errorColors = {
  'error-main': '#da5050',
  'error-light': '#fde3e3',
  'error-dark': '#bd4141',
} as const;

// Text Colors
export const textColors = {
  'primary-black-text': '#0f1709',
  'secondary-text': '#595959',
  'tertiary-text': '#7a7a7a',
  'disabled-text': '#949494',
  'primary-white-text': '#fafafa',
} as const;

// Brand Colors
export const brandColors = {
  'brand-green': '#6baa32',
  'sativa-green': '#a9e079',
  'midrib-green': '#dbf5b3',
} as const;

// Type exports
export type GreenColor = keyof typeof greenColors;
export type PrimaryColor = keyof typeof primaryColors;
export type BwColor = keyof typeof bwColors;
export type GreyscaleColor = keyof typeof greyscaleColors;
export type BrownColor = keyof typeof brownColors;
export type OrangeColor = keyof typeof orangeColors;
export type PeachColor = keyof typeof peachColors;
export type BlueColor = keyof typeof blueColors;
export type PurpleColor = keyof typeof purpleColors;
export type YellowColor = keyof typeof yellowColors;
export type InfoColor = keyof typeof infoColors;
export type SuccessColor = keyof typeof successColors;
export type WarningColor = keyof typeof warningColors;
export type ErrorColor = keyof typeof errorColors;
export type TextColor = keyof typeof textColors;
export type BrandColor = keyof typeof brandColors;

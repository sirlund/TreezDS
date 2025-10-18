/**
 * Color Tokens - Auto-generated from Figma
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

// Green Colors
export const greenColors = {
  'Green-green01': '#fcfff5', // Green/green01
  'Green-green02': '#f3fae6', // Green/green02
  'Green-green03': '#e8f7cd', // Green/green03
  'Green-green04': '#dbf5b3', // Green/green04
  'Green-green05': '#a9e079', // Green/green05
  'Green-green06': '#8ccc52', // Green/green06
  'Green-green07': '#6baa32', // Green/green07
  'Green-green08': '#3e7a18', // Green/green08
  'Green-green09': '#295c07', // Green/green09
  'Green-green10': '#1a4007', // Green/green10
} as const;

// Primary Colors
export const primaryColors = {
  'Primary-primaryMain': '#a9e079', // Primary/primaryMain
  'Primary-primaryLight': '#e8f7cd', // Primary/primaryLight
  'Primary-primaryDark': '#8ccc52', // Primary/primaryDark
} as const;

// Bw Colors
export const bwColors = {
  'BW-primaryBlack': '#1a1a1a', // B&W/primaryBlack
  'BW-primaryWhite': '#ffffff', // B&W/primaryWhite
} as const;

// Greyscale Colors
export const greyscaleColors = {
  'Greyscale-grey01': '#f7f7f7', // Greyscale/grey01
  'Greyscale-grey02': '#f5f5f5', // Greyscale/grey02
  'Greyscale-grey03': '#f0f0f0', // Greyscale/grey03
  'Greyscale-grey04': '#e6e6e6', // Greyscale/grey04
  'Greyscale-grey05': '#bfbfbf', // Greyscale/grey05
  'Greyscale-grey06': '#8c8c8c', // Greyscale/grey06
  'Greyscale-grey07': '#737373', // Greyscale/grey07
  'Greyscale-grey08': '#595959', // Greyscale/grey08
  'Greyscale-grey09': '#404040', // Greyscale/grey09
  'Greyscale-grey10': '#262626', // Greyscale/grey10
} as const;

// Secondary Colors
export const secondaryColors = {
  'Secondary-Brown-brown01': '#e2ccc0', // Secondary/Brown/brown01
  'Secondary-Brown-brown02': '#c69278', // Secondary/Brown/brown02
  'Secondary-Brown-brown00': '#f1eae6', // Secondary/Brown/brown00
  'Secondary-Orange-orange00': '#f9e7da', // Secondary/Orange/orange00
  'Secondary-Orange-orange01': '#fcc8a2', // Secondary/Orange/orange01
  'Secondary-Orange-orange02': '#fba466', // Secondary/Orange/orange02
  'Secondary-Peach-peach00': '#ffeded', // Secondary/Peach/peach00
  'Secondary-Peach-peach01': '#f1d9d9', // Secondary/Peach/peach01
  'Secondary-Peach-peach02': '#ff9696', // Secondary/Peach/peach02
  'Secondary-Blue-blue00': '#f0f8ff', // Secondary/Blue/blue00
  'Secondary-Blue-blue01': '#cfdeed', // Secondary/Blue/blue01
  'Secondary-Blue-blue02': '#95c1ee', // Secondary/Blue/blue02
  'Secondary-Purple-purple00': '#faf2fe', // Secondary/Purple/purple00
  'Secondary-Purple-purple01': '#e0c6ec', // Secondary/Purple/purple01
  'Secondary-Purple-purple02': '#c992e3', // Secondary/Purple/purple02
  'Secondary-Yellow-yellow00': '#fdf8e5', // Secondary/Yellow/yellow00
  'Secondary-Yellow-yellow01': '#fbf1cf', // Secondary/Yellow/yellow01
  'Secondary-Yellow-yellow02': '#fde28b', // Secondary/Yellow/yellow02
} as const;

// System Colors
export const systemColors = {
  'System-Info-infoMain': '#437dcf', // System/Info/infoMain
  'System-Info-infoLight': '#e1eefa', // System/Info/infoLight
  'System-Info-infoDark': '#3774ac', // System/Info/infoDark
  'System-Success-successMain': '#309f56', // System/Success/successMain
  'System-Success-successLight': '#e5f9ec', // System/Success/successLight
  'System-Success-successDark': '#2e834b', // System/Success/successDark
  'System-Warning-warningMain': '#e26815', // System/Warning/warningMain
  'System-Warning-warningLight': '#fff3e1', // System/Warning/warningLight
  'System-Warning-warningDark': '#b45210', // System/Warning/warningDark
  'System-Error-errorMain': '#da5050', // System/Error/errorMain
  'System-Error-errorLight': '#fde3e3', // System/Error/errorLight
  'System-Error-errorDark': '#bd4141', // System/Error/errorDark
} as const;

// Text Colors
export const textColors = {
  'Text-primaryBlackText': '#0f1709', // Text/primaryBlackText
  'Text-secondaryText': '#595959', // Text/secondaryText
  'Text-tertiaryText': '#7a7a7a', // Text/tertiaryText
  'Text-disabledText': '#949494', // Text/disabledText
  'Text-primaryWhiteText': '#fafafa', // Text/primaryWhiteText
} as const;

// Brand Colors
export const brandColors = {
  'Brand-brandGreen': '#6baa32', // Brand/brandGreen
  'Brand-sativaGreen': '#a9e079', // Brand/sativaGreen
  'Brand-midribGreen': '#dbf5b3', // Brand/midribGreen
} as const;

// Type exports
export type GreenColor = keyof typeof greenColors;
export type PrimaryColor = keyof typeof primaryColors;
export type BwColor = keyof typeof bwColors;
export type GreyscaleColor = keyof typeof greyscaleColors;
export type SecondaryColor = keyof typeof secondaryColors;
export type SystemColor = keyof typeof systemColors;
export type TextColor = keyof typeof textColors;
export type BrandColor = keyof typeof brandColors;

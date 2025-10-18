# Circular Std Font Files

This directory contains the Circular Std font files for the TreezDS design system.

## Required Files

Place your Circular Std OTF files in this directory with these exact names:

- `CircularStd-Book.otf` (Regular / Weight 400)
- `CircularStd-Medium.otf` (Medium / Weight 450-500)
- `CircularStd-Bold.otf` (Bold / Weight 600)

## File Naming Guide

If your Circular Std files have different names, rename them as follows:

| Your File Name | Rename To |
|----------------|-----------|
| CircularStd-Book.otf | CircularStd-Book.otf ✓ |
| CircularStd-Medium.otf | CircularStd-Medium.otf ✓ |
| CircularStd-Bold.otf | CircularStd-Bold.otf ✓ |
| CircularStd-Regular.otf | CircularStd-Book.otf |
| CircularStd-SemiBold.otf | CircularStd-Bold.otf |

## Installation

1. Copy your Circular Std OTF files to this directory
2. Ensure filenames match exactly (case-sensitive)
3. Restart your development server
4. The fonts will load automatically

## Verification

After adding the fonts:
1. Open Storybook: `npm run storybook`
2. Navigate to Typography stories
3. Label examples should now display in Circular Std (not Inter)

## License

⚠️ **Important**: Circular Std is a commercial font from Lineto.com

Ensure you have a valid license before using these font files in production.

## Troubleshooting

**Font not loading?**
- Check that filenames match exactly (case-sensitive)
- Verify files are in `public/fonts/` directory
- Clear browser cache and restart dev server
- Check browser console for 404 errors

**Still seeing Inter?**
- The fallback chain is: `'Circular Std'` → `'Inter'` → system fonts
- If Circular Std files are missing, Inter will be used automatically

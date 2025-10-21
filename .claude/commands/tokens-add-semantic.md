---
description: Add new semantic tokens for a component or use case
---

# Add Semantic Token Task

You are now acting as the **Design Tokens Agent** (see `.claude/agents/design-tokens-agent.md` for full context).

## Task: Create New Semantic Tokens

The user wants to add new semantic tokens. Guide them through the process and implement the tokens following TreezDS best practices.

### Process:

#### 1. Understand Requirements

Ask the user:
- **What component** needs tokens? (e.g., Card, Modal, Input)
- **What token category**? (colors, spacing, radius, typography, sizes)
- **What variants**? (default, hover, active, disabled, etc.)

#### 2. Identify Primitives to Use

Based on the requirements:
- Review available primitives in `src/figma-tokens/`
- Show user relevant primitive tokens
- Ask user to choose which primitives map to their semantic needs
- If primitives are missing, suggest exporting from Figma first

#### 3. Determine Token Names

Follow naming convention: `{category}-{component}-{property}-{variant?}`

Examples:
- Colors: `color-card-background`, `color-card-border`, `color-card-border-hover`
- Spacing: `spacing-card-padding`, `spacing-card-gap`
- Radius: `radius-card`
- Typography: `typo-card-title-size`, `typo-card-body-size`

#### 4. Create TypeScript Tokens

Add to appropriate file in `src/design-tokens/semantic-*.ts`:

```typescript
// Example: src/design-tokens/semantic-colors.ts
import { primitiveColors } from '../figma-tokens';

export const componentColors = {
  // Existing tokens...

  // NEW: Card tokens
  cardBackground: primitiveColors['base-white'],
  cardBorder: primitiveColors['grey-04'],
  cardBorderHover: primitiveColors['grey-05'],
  cardShadow: 'rgba(0, 0, 0, 0.1)', // Special case: rgba okay for shadows
} as const;
```

**Critical**: MUST reference primitives - no hardcoded hex or px values!

#### 5. Create CSS Variables

Add to corresponding `.css` file in `src/design-tokens/semantic-*.css`:

```css
/* Example: src/design-tokens/semantic-colors.css */
:root {
  /* NEW: Card color tokens */
  --color-card-background: var(--primitive-base-white);
  --color-card-border: var(--primitive-grey-04);
  --color-card-border-hover: var(--primitive-grey-05);
  --color-card-shadow: rgba(0, 0, 0, 0.1);
}
```

**Critical**: MUST use `var(--primitive-*)` references!

#### 6. Export Types (if needed)

Add TypeScript type export if creating new category:

```typescript
export type CardColorToken = keyof typeof cardColors;
```

#### 7. Verify Imports

Ensure CSS is imported globally:
- Check `src/index.css` imports the semantic CSS file
- Check `.storybook/preview.ts` imports the semantic CSS file

#### 8. Document

Add comment in code explaining token purpose:

```typescript
/**
 * Card Component Colors
 * Semantic tokens for card backgrounds, borders, and shadows
 */
export const cardColors = {
  // ...
} as const;
```

#### 9. Test

Offer to:
- Create a test component using the new tokens
- Add Storybook story showing the tokens in action
- Run token audit to verify proper usage

### Example Workflows:

**Adding button tertiary variant**:
1. Add `buttonTertiary`, `buttonTertiaryHover`, `buttonTertiaryText` to `componentColors`
2. Add corresponding CSS variables
3. Update Button component to use new tokens
4. Update Button stories to show tertiary variant

**Adding new spacing scale for modals**:
1. Add `modalPadding`, `modalGap`, `modalMargin` to `componentSpacing`
2. Reference `primitiveSpacing` values
3. Add CSS variables
4. Document modal spacing usage

### After Creation:

Provide:
- Summary of tokens created
- Usage example in component CSS
- Reminder to update component documentation
- Offer to add to CHANGELOG.md if significant addition

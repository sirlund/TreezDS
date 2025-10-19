import React from 'react';
import { type TypographyVariant } from '../../design-tokens/semantic-typography';
import styles from './Typography.module.css';

export interface TypographyProps {
  /** The typography variant to use from the design system */
  variant: TypographyVariant;
  /** The HTML element to render */
  as?: React.ElementType;
  /** Content to display */
  children: React.ReactNode;
  /** Additional CSS class names */
  className?: string;
  /** Text color (CSS color value or design token) */
  color?: string;
}

/**
 * Typography component that applies design system text styles
 *
 * Uses CSS variables from the design token system for optimal performance
 * and theming support. Styles are applied via CSS custom properties with
 * shortened variable names (e.g., --typo-h1-family).
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="body-large" as="span">Body text</Typography>
 * <Typography variant="label-small-strong" color="#1a1a1a">Label</Typography>
 * <Typography variant="caps-large">Categories</Typography>
 * ```
 */
export const Typography: React.FC<TypographyProps> = ({
  variant,
  as: Component = 'p',
  children,
  className = '',
  color,
}) => {
  // Apply typography styles via CSS custom properties with shortened naming
  // Format: --typo-{variant}-{property}
  const style = {
    fontFamily: `var(--typo-${variant}-family)`,
    fontWeight: `var(--typo-${variant}-weight)`,
    fontSize: `var(--typo-${variant}-size)`,
    lineHeight: `var(--typo-${variant}-line)`,
    letterSpacing: `var(--typo-${variant}-spacing)`,
    ...(color && { color }),
  } as React.CSSProperties;

  // Check if text-transform is defined for this variant (only caps variants have this)
  const hasCapsTransform = variant.startsWith('caps-');

  if (hasCapsTransform) {
    (style as Record<string, string>).textTransform = `var(--typo-${variant}-transform)`;
  }

  return (
    <Component
      className={`${styles.typography} ${className}`.trim()}
      style={style}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

import React from 'react';
import { typographyLegacy as typography, type TypographyTokenName } from '../../design-tokens/typography';
import styles from './Typography.module.css';

export interface TypographyProps {
  /** The typography variant to use from the design system */
  variant: TypographyTokenName;
  /** The HTML element to render */
  as?: keyof JSX.IntrinsicElements;
  /** Content to display */
  children: React.ReactNode;
  /** Additional CSS class names */
  className?: string;
  /** Text color */
  color?: string;
}

/**
 * Typography component that applies Figma design system text styles
 */
export const Typography: React.FC<TypographyProps> = ({
  variant,
  as: Component = 'p',
  children,
  className = '',
  color,
}) => {
  const typographyStyle = typography[variant];

  const inlineStyles: React.CSSProperties = {
    fontFamily: typographyStyle.fontFamily,
    fontWeight: typographyStyle.fontWeight,
    fontSize: typographyStyle.fontSize,
    lineHeight: typographyStyle.lineHeight,
    letterSpacing: typographyStyle.letterSpacing !== 'normal' ? typographyStyle.letterSpacing : undefined,
    textTransform: typographyStyle.textTransform !== 'none' ? (typographyStyle.textTransform as any) : undefined,
    color: color || 'inherit',
  };

  return (
    <Component className={`${styles.typography} ${className}`.trim()} style={inlineStyles}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

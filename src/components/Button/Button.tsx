import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  /**
   * Button type/variant
   * - `primary`: Filled button with brand color background (default)
   * - `secondary`: Outlined button with border
   * - `tertiary`: Text-only button without background or border
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Button size
   * - `small`: 8px vertical padding, 12px/6px horizontal
   * - `medium`: 8px vertical padding, 20px/10px horizontal (default)
   * - `large`: 12px vertical padding, 24px/12px horizontal
   */
  size?: 'small' | 'medium' | 'large';

  /** Icon to display before the button text */
  iconBefore?: React.ReactNode;

  /** Icon to display after the button text */
  iconAfter?: React.ReactNode;

  /** Button content */
  children: React.ReactNode;

  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Disabled state */
  disabled?: boolean;

  /** Additional CSS class names */
  className?: string;

  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';

  /** Full width button */
  fullWidth?: boolean;
}

/**
 * Button component from Treez Design System
 *
 * Implements the Button v2 (beta) design with three variants (Primary, Secondary, Tertiary)
 * and three sizes (Small, Medium, Large).
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium">
 *   Click me
 * </Button>
 *
 * <Button variant="secondary" iconBefore={<Icon />}>
 *   With Icon
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  iconBefore,
  iconAfter,
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  fullWidth = false,
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {iconBefore && <span className={styles.icon}>{iconBefore}</span>}
      <span className={styles.label}>{children}</span>
      {iconAfter && <span className={styles.icon}>{iconAfter}</span>}
    </button>
  );
};

Button.displayName = 'Button';

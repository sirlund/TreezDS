import React from 'react';
import styles from './Button.module.css';
import { Icon } from '../Icon/Icon';
import type { IconName } from '../Icon/Icon';

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
   * - `small`: 32px height
   * - `medium`: 40px height (default)
   * - `large`: 52px height
   */
  size?: 'small' | 'medium' | 'large';

  /** Icon name to display before the button text */
  iconBefore?: IconName;

  /** Icon name to display after the button text */
  iconAfter?: IconName;

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
 * Button v2 (beta) - Treez Design System
 *
 * The Button component allows users to create visually appealing experiences with
 * flexible customization options. It supports three different types of buttons:
 * Primary (filled), Secondary (outlined), and Tertiary (text).
 *
 * Additionally, buttons can be created in three different sizes: Medium (default), Large, and Small.
 *
 * @see https://www.figma.com/design/zPEk7VNZnVzhGaNCnalP6o/Design-System?node-id=16340-114580
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium">
 *   Click me
 * </Button>
 *
 * <Button variant="secondary" iconBefore="rocket_launch">
 *   Launch
 * </Button>
 *
 * <Button variant="tertiary" iconBefore="settings" iconAfter="verified">
 *   Settings
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

  // Map button size to icon size
  const iconSize = size === 'small' ? 's' : size === 'large' ? 'm' : 's';

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {iconBefore && (
        <span className={styles.icon}>
          <Icon name={iconBefore} size={iconSize} />
        </span>
      )}
      <span className={styles.label}>{children}</span>
      {iconAfter && (
        <span className={styles.icon}>
          <Icon name={iconAfter} size={iconSize} />
        </span>
      )}
    </button>
  );
};

Button.displayName = 'Button';

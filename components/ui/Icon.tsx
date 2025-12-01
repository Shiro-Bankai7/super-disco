import React from 'react';

/**
 * Icon Component
 * 
 * A wrapper component for SVG icons with consistent sizing and accessibility.
 * Supports size variants and color customization.
 * 
 * Requirements:
 * - 3.2: Ensure accessibility with proper ARIA labels
 * 
 * @example
 * <Icon size="md" color="primary" ariaLabel="Check mark">
 *   <svg>...</svg>
 * </Icon>
 * 
 * @example
 * <Icon size="lg" className="text-primary-500">
 *   <CheckIcon />
 * </Icon>
 */

export interface IconProps {
  /** Icon content (SVG element or component) */
  children: React.ReactNode;
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Color from design tokens */
  color?: string;
  /** Accessible label for screen readers */
  ariaLabel?: string;
  /** Whether the icon is decorative (hidden from screen readers) */
  decorative?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Get size-specific dimensions
 */
const getSizeStyles = (size: IconProps['size']) => {
  switch (size) {
    case 'xs':
      return 'w-3 h-3'; // 12px
    case 'sm':
      return 'w-4 h-4'; // 16px
    case 'md':
      return 'w-5 h-5'; // 20px
    case 'lg':
      return 'w-6 h-6'; // 24px
    case 'xl':
      return 'w-8 h-8'; // 32px
    default:
      return 'w-5 h-5'; // 20px default
  }
};

/**
 * Get color styles
 */
const getColorStyles = (color?: string) => {
  if (!color) return '';
  
  // If it's a Tailwind class, return as-is
  if (color.startsWith('text-') || color.startsWith('fill-')) {
    return color;
  }
  
  // Otherwise, treat as a custom color value
  return `text-[${color}]`;
};

export const Icon: React.FC<IconProps> = ({
  children,
  size = 'md',
  color,
  ariaLabel,
  decorative = false,
  className = '',
}) => {
  /**
   * Base styles for icon wrapper
   */
  const baseStyles = `
    inline-flex items-center justify-center flex-shrink-0
    ${getSizeStyles(size)}
    ${getColorStyles(color)}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  /**
   * Accessibility attributes (Requirement 3.2)
   * - If decorative, hide from screen readers with aria-hidden
   * - If not decorative, provide aria-label for context
   */
  const accessibilityProps = decorative
    ? { 'aria-hidden': true as const }
    : { 'aria-label': ariaLabel, role: ariaLabel ? ('img' as const) : undefined };

  return (
    <span className={baseStyles} {...accessibilityProps}>
      {children}
    </span>
  );
};

export default Icon;

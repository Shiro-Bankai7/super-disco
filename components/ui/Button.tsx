'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Button Component
 * 
 * A polymorphic button component that can render as a button or link.
 * Supports multiple variants, sizes, and states with full accessibility.
 * 
 * Requirements:
 * - 3.2: Keyboard navigation support for all clickable components
 * - 5.1: Analytics tracking on CTA clicks
 * - 10.3: High-contrast colors and clear action-oriented copy
 * - 10.4: Minimum 44x44px touch targets
 * 
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * 
 * @example
 * <Button variant="secondary" size="lg" href="/about">
 *   Learn More
 * </Button>
 */

export interface ButtonProps {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Button content */
  children: React.ReactNode;
  /** Click handler for button elements */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** URL for link rendering */
  href?: string;
  /** Accessible label for screen readers */
  ariaLabel?: string;
  /** Optional icon element */
  icon?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS classes */
  className?: string;
  /** Analytics tracking ID */
  analyticsId?: string;
  /** Analytics location context */
  analyticsLocation?: string;
}

/**
 * Get variant-specific styles
 */
const getVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return 'bg-neutral-900 text-white hover:bg-neutral-800 border border-transparent';
    case 'secondary':
      return 'bg-transparent text-white hover:bg-white/10 border border-white';
    case 'ghost':
      return 'bg-transparent hover:bg-white/10 border border-current';
    default:
      return 'bg-neutral-900 text-white hover:bg-neutral-800 border border-transparent';
  }
};

/**
 * Get size-specific styles
 * Ensures minimum 44x44px touch target (Requirement 10.4)
 */
const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return 'h-11 px-6 text-sm min-h-[44px] font-medium'; // Improved proportions
    case 'md':
      return 'h-12 px-8 text-base min-h-[44px] font-medium'; // Better padding
    case 'lg':
      return 'h-14 px-10 text-lg min-h-[44px] font-medium'; // Larger size
    default:
      return 'h-12 px-8 text-base min-h-[44px] font-medium';
  }
};

/**
 * Get disabled styles
 */
const getDisabledStyles = (disabled?: boolean) => {
  return disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer';
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      onClick,
      href,
      ariaLabel,
      icon,
      disabled = false,
      type = 'button',
      className = '',
      analyticsId,
      analyticsLocation,
    },
    ref
  ) => {
    /**
     * Handle click with analytics tracking (Requirement 5.1)
     */
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
      if (disabled) return;

      // Track analytics event
      if (analyticsId && typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'cta_click',
          category: 'engagement',
          action: 'click',
          label: analyticsId,
          location: analyticsLocation || 'unknown',
          buttonText: typeof children === 'string' ? children : analyticsId,
        });
      }

      // Call provided onClick handler
      if (onClick && !href) {
        onClick(event as React.MouseEvent<HTMLButtonElement>);
      }
    };

    /**
     * Base styles shared by all buttons
     * Includes focus states for accessibility (Requirement 3.2)
     */
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      rounded-xl
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      active:scale-[0.98]
      shadow-sm hover:shadow-md
      ${getVariantStyles(variant)}
      ${getSizeStyles(size)}
      ${getDisabledStyles(disabled)}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    /**
     * Render as link if href is provided
     */
    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseStyles}
          onClick={handleClick}
          aria-label={ariaLabel}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {children}
        </motion.a>
      );
    }

    /**
     * Render as button by default
     */
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={baseStyles}
        onClick={handleClick}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

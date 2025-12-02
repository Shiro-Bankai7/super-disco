'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { MenuIcon, CloseIcon } from '@/components/ui/icons';

/**
 * Navigation Component
 * 
 * A responsive navigation header with logo, links, and CTA button.
 * Features:
 * - Sticky positioning with smooth scroll behavior
 * - Mobile hamburger menu with accessibility support
 * - Keyboard navigation and focus management
 * - Semantic HTML with nav element
 * 
 * Requirements:
 * - 1.1: Next.js with TypeScript and proper structure
 * - 3.2: Keyboard navigation support for all clickable components
 * - 3.5: Semantic HTML elements with proper heading hierarchy
 * - 10.1: Above-the-fold content rendering
 * 
 * @example
 * <Navigation
 *   logo="/images/logo.svg"
 *   logoAlt="BioEnergy Logo"
 *   links={[
 *     { label: 'Features', href: '#features' },
 *     { label: 'About', href: '#about' },
 *   ]}
 *   ctaButton={{
 *     label: 'Get Started',
 *     href: '#contact',
 *     variant: 'primary',
 *   }}
 * />
 */

export interface NavigationLink {
  /** Link text */
  label: string;
  /** Link destination */
  href: string;
  /** Accessible label for screen readers */
  ariaLabel?: string;
}

export interface CTAButton {
  /** Button text */
  label: string;
  /** Button destination */
  href: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Click handler */
  onClick?: () => void;
}

export interface NavigationProps {
  /** Logo image source (optional, uses default if not provided) */
  logo?: string;
  /** Logo alt text */
  logoAlt?: string;
  /** Navigation links */
  links: NavigationLink[];
  /** Call-to-action button */
  ctaButton: CTAButton;
}

/**
 * Navigation Component
 */
export const Navigation: React.FC<NavigationProps> = ({
  links,
  ctaButton,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  /**
   * Handle smooth scroll behavior for anchor links
   */
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle anchor links (starting with #)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  /**
   * Toggle mobile menu
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  /**
   * Close mobile menu
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Handle escape key to close mobile menu
   */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
        // Return focus to hamburger button
        hamburgerButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  /**
   * Trap focus within mobile menu when open
   */
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    // Get all focusable elements within the mobile menu
    const focusableElements = mobileMenu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element when menu opens
    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      // Shift + Tab: move focus backwards
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      }
      // Tab: move focus forwards
      else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isMobileMenuOpen]);

  /**
   * Prevent body scroll when mobile menu is open
   */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
              aria-label="BioEnergy home"
            >
              {/* Logo SVG */}
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <rect width="44" height="44" rx="12" fill="#10b981" />
                <path
                  d="M22 10C22 10 16 16 16 22C16 27.52 20.48 32 26 32C26 32 26 24 22 20C22 20 26 16 30 20C34 24 34 32 30 36C26 40 18 40 14 36C10 32 10 24 14 20C14 20 18 16 22 12V10Z"
                  fill="white"
                />
              </svg>
              {/* Logo Text */}
              <span className="text-xl font-semibold text-neutral-900">
                BioEnergy
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-12">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="
                  text-neutral-600 hover:text-neutral-900
                  font-normal text-base
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md
                "
                aria-label={link.ariaLabel || link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block lg:ml-8">
            <Button
              variant={ctaButton.variant || 'primary'}
              size="md"
              href={ctaButton.href}
              onClick={ctaButton.onClick}
              analyticsId="nav-cta"
              analyticsLocation="navigation"
            >
              {ctaButton.label}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={hamburgerButtonRef}
            type="button"
            className="
              lg:hidden
              inline-flex items-center justify-center
              p-2.5 rounded-lg
              text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
              transition-colors duration-200
              min-h-[44px] min-w-[44px]
            "
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon size="lg" decorative>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </Icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="
                fixed top-0 right-0 bottom-0
                w-full max-w-sm
                bg-white shadow-2xl
                z-50 lg:hidden
                overflow-y-auto
              "
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-3">
                    {/* Logo SVG */}
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <rect width="44" height="44" rx="12" fill="#10b981" />
                      <path
                        d="M22 10C22 10 16 16 16 22C16 27.52 20.48 32 26 32C26 32 26 24 22 20C22 20 26 16 30 20C34 24 34 32 30 36C26 40 18 40 14 36C10 32 10 24 14 20C14 20 18 16 22 12V10Z"
                        fill="white"
                      />
                    </svg>
                    {/* Logo Text */}
                    <span className="text-xl font-semibold text-neutral-900">
                      BioEnergy
                    </span>
                  </div>
                  <button
                    type="button"
                    className="
                      inline-flex items-center justify-center
                      p-2.5 rounded-lg
                      text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                      transition-colors duration-200
                      min-h-[44px] min-w-[44px]
                    "
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                  >
                    <Icon size="lg" decorative>
                      <CloseIcon />
                    </Icon>
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 px-5 py-8 space-y-2">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="
                        block px-5 py-4 rounded-lg
                        text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50
                        font-medium text-lg
                        transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                        min-h-[44px]
                      "
                      aria-label={link.ariaLabel || link.label}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Mobile Menu CTA */}
                <div className="p-5">
                  <Button
                    variant={ctaButton.variant || 'primary'}
                    size="lg"
                    href={ctaButton.href}
                    onClick={() => {
                      ctaButton.onClick?.();
                      closeMobileMenu();
                    }}
                    analyticsId="mobile-nav-cta"
                    analyticsLocation="mobile-navigation"
                    className="w-full"
                  >
                    {ctaButton.label}
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

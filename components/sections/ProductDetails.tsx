'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { CheckCircleIcon } from '@/components/ui/icons';
import { Icon } from '@/components/ui/Icon';

/**
 * Product Details Section Component
 * 
 * Displays product specifications and features with a checkmark list.
 * Features a badge, title, description, and list of product benefits.
 * 
 * Requirements:
 * - 1.1: Pixel-perfect fidelity to Figma design
 * - 7.1: Framer Motion animations
 * - 7.2: Reduced motion support
 */

export interface ProductDetail {
  /** Detail text */
  text: string;
}

export interface ProductDetailsProps {
  /** Optional badge text */
  badge?: string;
  /** Section title */
  title: string;
  /** Section description */
  description: string;
  /** Array of product details/specifications */
  details: ProductDetail[];
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  badge,
  title,
  description,
  details,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-50px',
  });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 lg:py-32 bg-background-light"
      aria-labelledby="product-details-title"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Badge */}
            {badge && (
              <motion.div variants={itemVariants} className="mb-8">
                <span className="inline-block px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg">
                  {badge}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h2
              id="product-details-title"
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight"
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Details List */}
            <motion.ul
              variants={containerVariants}
              className="space-y-5"
              role="list"
            >
              {details.map((detail, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Icon size="md" className="text-primary-600" decorative>
                      <CheckCircleIcon />
                    </Icon>
                  </div>
                  <span className="text-base md:text-lg text-neutral-700 leading-relaxed">
                    {detail.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

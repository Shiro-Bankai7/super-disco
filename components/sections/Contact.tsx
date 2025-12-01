'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/ui/icons';

/**
 * Contact Section Component
 * 
 * Displays contact information and a contact form.
 * Features contact details with icons and a form for inquiries.
 * 
 * Requirements:
 * - 1.1: Pixel-perfect fidelity to Figma design
 * - 3.2: Keyboard navigation support
 * - 5.2: Form submission tracking
 * - 7.1: Framer Motion animations
 * - 7.2: Reduced motion support
 */

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface ContactProps {
  /** Section title */
  title: string;
  /** Section subtitle/description */
  subtitle: string;
  /** Contact information */
  contactInfo: ContactInfo;
}

export const Contact: React.FC<ContactProps> = ({
  title,
  subtitle,
  contactInfo,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-50px',
  });
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic and analytics tracking
    console.log('Form submitted:', formData);
  };

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
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-24 lg:py-32 bg-white"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <motion.h2
              id="contact-title"
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                  <Icon size="lg" className="text-primary-600" decorative>
                    <PhoneIcon />
                  </Icon>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    Phone
                  </h3>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-base text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                  <Icon size="lg" className="text-primary-600" decorative>
                    <MailIcon />
                  </Icon>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-base text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                  <Icon size="lg" className="text-primary-600" decorative>
                    <MapPinIcon />
                  </Icon>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    Address
                  </h3>
                  <p className="text-base text-neutral-600">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="
                        w-full px-4 py-3 
                        bg-neutral-100 
                        border-0 rounded-lg
                        text-neutral-900 placeholder-neutral-400
                        focus:outline-none focus:ring-2 focus:ring-primary-500
                        transition-shadow
                      "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="
                        w-full px-4 py-3 
                        bg-neutral-100 
                        border-0 rounded-lg
                        text-neutral-900 placeholder-neutral-400
                        focus:outline-none focus:ring-2 focus:ring-primary-500
                        transition-shadow
                      "
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                    className="
                      w-full px-4 py-3 
                      bg-neutral-100 
                      border-0 rounded-lg
                      text-neutral-900 placeholder-neutral-400
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      transition-shadow
                    "
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="
                      w-full px-4 py-3 
                      bg-neutral-100 
                      border-0 rounded-lg
                      text-neutral-900 placeholder-neutral-400
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      transition-shadow
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your energy needs..."
                    rows={4}
                    required
                    className="
                      w-full px-4 py-3 
                      bg-neutral-100 
                      border-0 rounded-lg
                      text-neutral-900 placeholder-neutral-400
                      focus:outline-none focus:ring-2 focus:ring-primary-500
                      transition-shadow
                      resize-none
                    "
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  analyticsId="contact-form-submit"
                  analyticsLocation="contact-section"
                >
                  Submit Request
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

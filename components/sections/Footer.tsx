'use client';

import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from '@/components/ui/icons';
import { Icon } from '@/components/ui/Icon';

/**
 * Footer Component
 * 
 * Site footer with company information, navigation links, and social media.
 * Features a dark background with multi-column layout.
 * 
 * Requirements:
 * - 1.1: Pixel-perfect fidelity to Figma design
 * - 3.2: Keyboard navigation support
 * - 3.5: Semantic HTML structure
 */

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  /** Company logo */
  logo: string;
  /** Company tagline */
  tagline: string;
  /** Footer sections with links */
  sections: FooterSection[];
  /** Social media links */
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  /** Copyright text */
  copyrightText: string;
  /** Legal links */
  legalLinks: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({
  tagline,
  sections,
  socialLinks,
  copyrightText,
  legalLinks,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24 lg:py-28 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
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
              <span className="text-xl font-semibold text-white">BioEnergy</span>
            </div>
            <p className="text-base text-neutral-400 leading-relaxed max-w-sm">
              {tagline}
            </p>
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-base mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4" role="list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="
                        text-base text-neutral-400 hover:text-primary-500
                        transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900
                        rounded-sm inline-block
                      "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                  aria-label="Facebook"
                >
                  <Icon size="md" className="text-white" decorative>
                    <FacebookIcon />
                  </Icon>
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                  aria-label="Twitter"
                >
                  <Icon size="md" className="text-white" decorative>
                    <TwitterIcon />
                  </Icon>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                  aria-label="LinkedIn"
                >
                  <Icon size="md" className="text-white" decorative>
                    <LinkedInIcon />
                  </Icon>
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                  aria-label="Instagram"
                >
                  <Icon size="md" className="text-white" decorative>
                    <InstagramIcon />
                  </Icon>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 mt-12 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            {/* Copyright */}
            <p className="text-sm text-neutral-500">
              © {currentYear} {copyrightText}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="
                    text-sm text-neutral-500 hover:text-primary-500
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900
                    rounded-sm
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

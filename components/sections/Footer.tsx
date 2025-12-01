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
  logo,
  tagline,
  sections,
  socialLinks,
  copyrightText,
  legalLinks,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a202c] text-neutral-300" role="contentinfo">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="BioEnergy"
              className="h-8 w-auto mb-4"
              width={120}
              height={32}
            />
            <p className="text-sm text-neutral-400 leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-base mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="
                        text-sm text-neutral-400 hover:text-white
                        transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#1a202c]
                        rounded-sm
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
            <h3 className="text-white font-semibold text-base mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 
                    bg-neutral-700 hover:bg-primary-600
                    rounded-full
                    flex items-center justify-center
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#1a202c]
                  "
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
                  className="
                    w-10 h-10 
                    bg-neutral-700 hover:bg-primary-600
                    rounded-full
                    flex items-center justify-center
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#1a202c]
                  "
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
                  className="
                    w-10 h-10 
                    bg-neutral-700 hover:bg-primary-600
                    rounded-full
                    flex items-center justify-center
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#1a202c]
                  "
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
                  className="
                    w-10 h-10 
                    bg-neutral-700 hover:bg-primary-600
                    rounded-full
                    flex items-center justify-center
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#1a202c]
                  "
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
        <div className="pt-10 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-neutral-400">
              © {currentYear} {copyrightText}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="
                    text-sm text-neutral-400 hover:text-white
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#1a202c]
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

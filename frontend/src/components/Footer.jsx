import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social Links List with inline SVG elements
  const socialLinks = [
    { 
      label: 'Instagram', 
      href: 'https://www.instagram.com/shecanfoundation.ngo', 
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    { 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/shecanfoundation', 
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/30 bg-slate-100/40 dark:bg-slate-900/20 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* NGO Brand Title */}
        <div className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">
          She Can Foundation
        </div>

        {/* Social Media Link Icons */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-600 dark:text-slate-500 dark:hover:text-primary-400 transition-all hover:scale-110 duration-200"
              aria-label={`Follow She Can Foundation on ${social.label}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Creative Dedication */}
        <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
          <span>Made with</span>
          <Heart className="h-4.5 w-4.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>for She Can Foundation</span>
        </div>

        {/* Copyright Statement */}
        <div className="text-xs text-slate-400 dark:text-slate-500">
          &copy; {currentYear} She Can Foundation. All rights reserved.
        </div>

      </div>
    </footer>
  );
}


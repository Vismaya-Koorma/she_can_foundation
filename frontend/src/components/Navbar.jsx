import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Get In Touch', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/50 dark:border-slate-800/30 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-accent-400 transition-all hover:scale-105 duration-300 block">
                She Can Foundation
              </span>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-all hover:rotate-12 duration-200"
              aria-label="Toggle Dark Mode"
              id="desktop-theme-toggle"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu & Toggle Controls */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
              id="mobile-theme-toggle"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open Main Menu"
              id="mobile-menu-hamburger"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-200/50 dark:border-slate-800/30 glass-panel overflow-hidden"
          >
            <div className="space-y-1 px-2 pb-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-primary-600 dark:text-slate-300 dark:hover:bg-slate-850 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

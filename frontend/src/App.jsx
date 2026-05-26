import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  // Read theme from localStorage or default to system preference
  const [darkMode, setDarkMode] = useState(() => {
    const cachedTheme = localStorage.getItem('theme');
    if (cachedTheme) {
      return cachedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Synchronize CSS class 'dark' on html element
  useEffect(() => {
    const rootElement = window.document.documentElement;
    if (darkMode) {
      rootElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      rootElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-350 dark:bg-slate-950 dark:text-slate-100 selection:bg-primary-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <ContactForm />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}

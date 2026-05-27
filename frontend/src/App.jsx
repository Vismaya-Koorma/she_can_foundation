import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VolunteerProgramDetail from './pages/VolunteerProgramDetail';
import { Toaster } from 'react-hot-toast';

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
    <Router basename="/she_can_foundation">
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-350 dark:bg-slate-950 dark:text-slate-100 selection:bg-primary-500 selection:text-white">
        <Toaster position="bottom-right" />
        {/* Navigation Header */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Main Content Areas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:slug" element={<VolunteerProgramDetail />} />
        </Routes>

        {/* Footer Area */}
        <Footer />
      </div>
    </Router>
  );
}

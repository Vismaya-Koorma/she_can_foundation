import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VolunteerProgramDetail from './pages/VolunteerProgramDetail';
import JoinUs from './pages/JoinUs';
import { Toaster } from 'react-hot-toast';

/**
 * PageTransition wrapper to handle animations for every route change
 */
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/program/:slug" element={
          <PageTransition>
            <VolunteerProgramDetail />
          </PageTransition>
        } />
        <Route path="/join-us" element={
          <PageTransition>
            <JoinUs />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

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
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-350 dark:bg-slate-950 dark:text-slate-100 selection:bg-primary-500 selection:text-white">
        <Toaster position="bottom-right" />
        
        {/* Navigation Header */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Animated Routes Container */}
        <AnimatedRoutes />

        {/* Footer Area */}
        <Footer />
      </div>
    </Router>
  );
}

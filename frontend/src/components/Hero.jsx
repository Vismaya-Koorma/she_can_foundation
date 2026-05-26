import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative Glow Blobs for Glassmorphism Context */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-primary-400/20 blur-[100px] dark:bg-primary-650/10"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-accent-400/20 blur-[120px] dark:bg-accent-650/10"></div>

      <div className="mx-auto max-w-5xl text-center">
        
        {/* Youth-Led Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 rounded-full border border-primary-200/50 bg-primary-50/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary-700 dark:border-primary-800/30 dark:bg-primary-950/30 dark:text-primary-300 mb-6 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-primary-500 animate-pulse" />
          <span>Empowering Youth, Leading Change</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
        >
          Building a Brighter Tomorrow with <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-accent-400 font-extrabold">
            She Can Foundation
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          We are a youth-driven NGO dedicated to empowering young minds and communities. Through mentorship, education, and skill development, we bridge the gap between passion and opportunities to build an inclusive future.
        </motion.p>

        {/* Call to Actions (Interactive scroll buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-750 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/10 hover:from-primary-550 hover:to-primary-700 hover:shadow-primary-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Discover Our Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/40 dark:border-slate-800/40 dark:bg-slate-900/40 backdrop-blur-md px-8 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-350 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Get Involved
          </a>
        </motion.div>

      </div>
    </section>
  );
}

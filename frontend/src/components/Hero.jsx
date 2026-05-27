import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, HeartHandshake } from 'lucide-react';
import heroImage from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      {/* Decorative Glow Blobs */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary-400/20 blur-[120px] dark:bg-primary-600/10"></div>
      <div className="absolute bottom-0 right-1/4 -z-10 h-[600px] w-[600px] translate-y-1/3 rounded-full bg-accent-400/20 blur-[120px] dark:bg-accent-600/10"></div>

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="text-center lg:text-left pt-10 lg:pt-0">
          

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
          >
            Empowering Women Through <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-accent-400">
              Education & Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            We are dedicated to uplifting young minds and communities. Through targeted mentorship and skill development, we bridge the gap between passion and opportunity to build an inclusive and thriving future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/20 hover:from-primary-500 hover:to-primary-600 hover:shadow-primary-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <HeartHandshake className="mr-2 h-5 w-5" />
              Volunteer Now
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/50 dark:border-slate-800/50 dark:bg-slate-900/50 backdrop-blur-md px-8 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent mix-blend-overlay z-10"></div>
            {/* Local image provided by the user */}
            <img 
              src={heroImage} 
              alt="Women working together in tech" 
              className="w-full h-[500px] object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function About() {
  // Mission and Vision data
  const cards = [
    {
      title: 'Our Mission',
      description: 'To inspire, educate, and equip young minds and communities with the essential tools, supportive mentorship, and resource-driven workshops necessary to break limitations and initiate sustainable local growth.',
      icon: <Target className="h-8 w-8 text-primary-500" />,
      borderColor: 'border-primary-550/20'
    },
    {
      title: 'Our Vision',
      description: 'A world where youth are the primary architects of development—where every student, regardless of background, has the access, capacity, and platform to lead, innovate, and create social equity.',
      icon: <Eye className="h-8 w-8 text-accent-500" />,
      borderColor: 'border-accent-550/20'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/30 dark:bg-slate-900/10 transition-colors duration-300 relative"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About She Can Foundation
          </h2>
          <div className="mt-3.5 h-1.5 w-16 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* NGO Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Empowering Leaders of Tomorrow
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded by passion-driven youth, the <strong>She Can Foundation</strong> works at the grass-roots level to champion educational accessibility and leadership programs. We believe every individual has the power to transform their community when provided with the right resources.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We create structured environments where students collaborate, learn technology skills, explore social challenges, and access professional mentorship designed to build career confidence.
            </p>

            {/* Credible Statistics Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-250 dark:border-slate-800/60">
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-primary-600 dark:text-primary-400">5k+</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">Students Empowered</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-accent-600 dark:text-accent-400">100+</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">Mentorship Events</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-primary-600 dark:text-primary-400">20+</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">Partner Schools</p>
              </div>
            </div>
          </motion.div>

          {/* Mission and Vision cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -8, boxShadow: '0 12px 40px -4px rgba(139, 92, 246, 0.1)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className={`glass-card rounded-2xl p-8 border ${card.borderColor} flex flex-col justify-between h-full`}
              >
                <div>
                  <div className="inline-flex rounded-xl bg-primary-50 dark:bg-slate-800 p-3.5 mb-6 text-primary-600 dark:text-primary-400 shadow-sm">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

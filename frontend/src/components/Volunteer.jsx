import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Monitor, Heart, ArrowRight } from 'lucide-react';

const volunteerPrograms = [
  {
    title: 'Community Programs',
    slug: 'community-programs',
    description: 'Join hands to uplift local communities through organized outreach and support events.',
    icon: Users,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Student Mentorship',
    slug: 'student-mentorship',
    description: 'Guide the next generation by sharing your expertise, career advice, and life experiences.',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Digital Literacy',
    slug: 'digital-literacy',
    description: 'Help bridge the digital divide by teaching basic to advanced computer and internet skills.',
    icon: Monitor,
    color: 'from-purple-500 to-fuchsia-500',
  },
  {
    title: 'Women Empowerment',
    slug: 'women-empowerment',
    description: 'Support and advocate for womens rights, self-reliance, and leadership opportunities.',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Volunteer With Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Make a real impact. Choose a program that aligns with your passion and help us create a brighter future together.
          </motion.p>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 h-1.5 w-16 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {volunteerPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                <Link 
                  to={`/program/${program.slug}`}
                  className="group block h-full relative rounded-3xl p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {program.title}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {program.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

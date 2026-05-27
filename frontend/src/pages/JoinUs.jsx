import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Send, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { submitJoinForm } from '../services/api';

const interests = [
  'Community Programs',
  'Student Mentorship',
  'Digital Literacy',
  'Women Empowerment'
];

export default function JoinUs() {
  const location = useLocation();
  const navigate = useNavigate();
  const preselectedInterest = location.state?.interest || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: preselectedInterest || '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  // Update interest if it changes from navigation state
  useEffect(() => {
    if (preselectedInterest) {
      setFormData(prev => ({ ...prev, interest: preselectedInterest }));
    }
  }, [preselectedInterest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitJoinForm(formData);
      toast.success('Submission successful! Welcome to the foundation.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#10b981',
          color: '#fff',
          fontWeight: '600'
        }
      });
      setFormData({ name: '', email: '', interest: '', message: '' });
    } catch (error) {
      toast.error(error.message || 'Something went wrong. Please try again.', {
        duration: 4000,
        position: 'top-center'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <Toaster />
      
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Join Our Mission
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Become Part of <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                The Change
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              We believe every individual has the power to transform their community. Join us in our journey to empower women through education, leadership, and professional mentorship.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Global Impact', desc: 'Contribute to sustainable local growth.' },
                { title: 'Safe Environment', desc: 'Work in a supportive and inclusive community.' },
                { title: 'Professional Growth', desc: 'Access mentorship and skill development.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Area of Interest
                </label>
                <select
                  required
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                >
                  <option value="" disabled>Select a program</option>
                  {interests.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Why do you want to join?
                </label>
                <textarea
                  required
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your motivation..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isLoading}
                type="submit"
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-white font-bold shadow-lg transition-all
                  ${isLoading 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 shadow-primary-500/20'
                  }`}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Application
                  </>
                )}
              </motion.button>
              
              <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold justify-center pt-2">
                <AlertCircle className="w-3 h-3" />
                Your data is safe with us
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

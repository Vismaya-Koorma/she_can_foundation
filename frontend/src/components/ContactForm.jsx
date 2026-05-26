import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, MessageSquare, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: '' }

  // Validator function
  const validateForm = () => {
    const newErrors = {};
    
    // Validate empty name
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    }

    // Validate empty and formatted email
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email format.';
      }
    }

    // Validate empty message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Client-side validation check
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Attempt to save to local Express database
      let dbSuccess = false;
      try {
        const apiEndpoint = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        dbSuccess = response.ok && result.success;
      } catch (dbError) {
        console.warn('Backend database storage skipped/unavailable:', dbError.message);
      }

      // 2. Submit to Formspree so owner receives the email
      const formspreeEndpoint = 'https://formspree.io/f/mpqnowpb';
      const fsResponse = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (fsResponse.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Form Submitted Successfully',
        });
        // Clear all form inputs
        setFormData({ name: '', email: '', message: '' });
      } else {
        const fsResult = await fsResponse.json();
        setSubmitStatus({
          type: 'error',
          message: fsResult.errors?.[0]?.message || 'Formspree submission failed. Please try again.',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please check your network connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Central decorative blur background blob */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/10 blur-[100px] dark:bg-primary-600/5"></div>

      <div className="mx-auto max-w-xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Have a question, feedback, or want to volunteer? Drop us a message, and our team will get back to you!
          </p>
          <div className="mt-3.5 h-1.5 w-16 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
        </div>

        {/* Card containing the form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/30 shadow-xl"
        >
          {/* Status Message Panel */}
          <AnimatePresence>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className={`mb-6 flex items-start gap-3 rounded-xl p-4 border text-sm font-semibold leading-relaxed ${
                  submitStatus.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-250 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-900/30'
                    : 'bg-rose-50 text-rose-800 border-rose-250 dark:bg-rose-950/20 dark:text-rose-300 dark:border-rose-900/30'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
                )}
                <span>{submitStatus.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            {/* Full Name field */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-semibold text-slate-700 dark:text-slate-350 mb-2"
              >
                Full Name
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`block w-full rounded-xl border bg-white/45 py-3 pl-11 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:bg-slate-900/40 dark:text-white dark:placeholder-slate-550 transition-all ${
                    errors.name
                      ? 'border-rose-450 focus:border-rose-500'
                      : 'border-slate-200 focus:border-primary-500 dark:border-slate-800 dark:focus:border-primary-400'
                  }`}
                  placeholder="Enter your name"
                />
              </div>
              {errors.name && (
                <p className="mt-1.5 text-xs font-semibold text-rose-500 dark:text-rose-400 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Address field */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-semibold text-slate-700 dark:text-slate-350 mb-2"
              >
                Email Address
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`block w-full rounded-xl border bg-white/45 py-3 pl-11 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:bg-slate-900/40 dark:text-white dark:placeholder-slate-550 transition-all ${
                    errors.email
                      ? 'border-rose-450 focus:border-rose-500'
                      : 'border-slate-200 focus:border-primary-500 dark:border-slate-800 dark:focus:border-primary-400'
                  }`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs font-semibold text-rose-500 dark:text-rose-400 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Message field */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-semibold text-slate-700 dark:text-slate-350 mb-2"
              >
                Message
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="pointer-events-none absolute top-3.5 left-3.5">
                  <MessageSquare className="h-5 w-5 text-slate-400" />
                </div>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`block w-full rounded-xl border bg-white/45 py-3 pl-11 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:bg-slate-900/40 dark:text-white dark:placeholder-slate-550 transition-all ${
                    errors.message
                      ? 'border-rose-450 focus:border-rose-500'
                      : 'border-slate-200 focus:border-primary-500 dark:border-slate-800 dark:focus:border-primary-400'
                  }`}
                  placeholder="Write your message here..."
                />
              </div>
              {errors.message && (
                <p className="mt-1.5 text-xs font-semibold text-rose-500 dark:text-rose-400 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.985 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-750 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-primary-500/10 hover:from-primary-550 hover:to-primary-700 hover:shadow-primary-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </motion.button>

          </form>
        </motion.div>
        
      </div>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Define TypeScript interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('submitting');

    // Prepare template parameters with proper naming
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Portfolio Owner', // You can customize this
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        'service_jxm1gyb', // Your EmailJS service ID
        'template_rzb5wgn', // Your EmailJS template ID
        templateParams,
        'w2zl0F-NUUhNrDbmG' // Your EmailJS public key
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-ocean-300 to-midnight-300"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10"
      >
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-ocean-300 hover:text-ocean-200 transition-colors duration-200"
              >
                <Mail size={20} className="mr-2" />
                satyanaveenmidatalams@gmail.com
              </a>
              <div className="flex items-center text-gray-300">
                <MessageSquare size={20} className="mr-2" />
                Available for freelance work
              </div>
            </div>
          </div>
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-ocean-500/50 text-white placeholder-gray-400 outline-none transition-colors duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-ocean-500/50 text-white placeholder-gray-400 outline-none transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-ocean-500/50 text-white placeholder-gray-400 outline-none transition-colors duration-200 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-ocean-500 to-ocean-600 text-white py-3 px-6 rounded-lg hover:from-ocean-600 hover:to-ocean-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:ring-offset-2 focus:ring-offset-midnight-900 transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              <Send size={18} className={status === 'submitting' ? 'animate-pulse' : ''} />
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center"
              >
                Thank you! Your message has been sent successfully.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-center"
              >
                Failed to send message. Please try again or contact directly via email.
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}

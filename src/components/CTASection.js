'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#1a3a2a] py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a84c]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-7xl font-serif text-white mb-8 leading-tight">
             The diaspora deserves <br />
             <span className="text-[#c9a84c]">better payments.</span>
          </h2>
          <p className="text-white/60 font-sans text-lg mb-12 max-w-2xl mx-auto">
             VessPay is launching soon. Be the first to experience the premium bridge to Ghana. 
             Join the priority waitlist today.
          </p>

          {!submitted ? (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            >
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              <button 
                type="submit"
                className="bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.2em] px-8 py-4 rounded-sm flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 group text-xs"
              >
                 JOIN WAITLIST
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="flex flex-col items-center gap-4 text-[#c9a84c]"
            >
               <CheckCircle2 size={48} />
               <p className="text-white font-serif text-2xl">You&apos;re on the list!</p>
               <p className="text-white/40 text-sm">We&apos;ll notify you the moment we launch.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { Apple, Play, QrCode, CheckCircle2, ArrowRight, Shield, Bell, Gift } from 'lucide-react';

const expectations = [
  {
    icon: <Bell size={24} className="text-[#c9a84c]" />,
    title: "Early Access",
    description: "Be among the first to test our beta and shape the future of VessPay."
  },
  {
    icon: <Shield size={24} className="text-[#c9a84c]" />,
    title: "Launch Notification",
    description: "Get notified the split second we go live in the App Store and Play Store."
  },
  {
    icon: <Gift size={24} className="text-[#c9a84c]" />,
    title: "Founding User Perks",
    description: "Enjoy lifetime fee discounts and exclusive rewards for our first 1,000 users."
  }
];

export default function Download() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="bg-[#1a3a2a] min-h-screen text-white">
      <PageHero 
        subtitle="GET STARTED" 
        title="VessPay is Coming." 
        accent="Be First." 
      />

      {/* App Store Buttons & QR */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-3xl lg:text-5xl font-serif">Available Soon.</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <Apple size={32} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Download on</p>
                    <p className="text-lg font-bold">App Store</p>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <Play size={32} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Get it on</p>
                    <p className="text-lg font-bold">Google Play</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-6"
            >
              <div className="p-8 bg-white rounded-[40px] shadow-2xl shadow-[#c9a84c]/10">
                <QrCode size={200} className="text-[#1a3a2a]" strokeWidth={1.5} />
              </div>
              <p className="text-white/40 font-sans tracking-[0.2em] text-xs font-bold uppercase">SCAN TO PRE-REGISTER</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-32 px-6 bg-[#0a1f12]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a3a2a] p-12 lg:p-20 rounded-[40px] border border-[#c9a84c]/20 text-center"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-3xl lg:text-5xl font-serif mb-8">Join the Priority Waitlist</h2>
                  <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
                    Be the first to know the moment we launch and secure your founding user status.
                  </p>
                  <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
                  >
                    <motion.input
                      animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-[#c9a84c] transition-colors"
                    />
                    <button 
                      type="submit"
                      className="bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.2em] px-8 py-4 rounded-sm flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 text-xs"
                    >
                      JOIN NOW
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-6"
                >
                  <CheckCircle2 size={64} className="text-[#c9a84c]" />
                  <h2 className="text-3xl lg:text-5xl font-serif">You&apos;re on the list!</h2>
                  <p className="text-white/40">We&apos;ll notify you the moment we launch.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
           <div className="grid md:grid-cols-3 gap-8">
              {expectations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 p-10 rounded-3xl border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-500"
                >
                   <div className="mb-8">{item.icon}</div>
                   <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                   <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}

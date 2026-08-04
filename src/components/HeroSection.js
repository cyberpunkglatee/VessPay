'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AppMockup from './AppMockup';

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative bg-[#1a3a2a]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-[#c9a84c]/[0.04] rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-[#f0f7f0]/[0.03] rounded-full blur-[120px]"
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-20 min-h-screen">
          {/* Text Content — Desktop */}
          <div className="w-[55%]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl xl:text-7xl font-serif text-white leading-[1.1] mb-8"
            >
              The Borderless
              <br />
              Financial{' '}
              <span className="text-[#c9a84c]">Ecosystem</span>
              <br />
              for Africa and
              <br />
              the Diaspora.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/50 text-lg leading-relaxed max-w-xl mb-12"
            >
              One wallet to securely hold foreign currency, instantly send or
              spend money across multiple African countries, and shield your
              cash from local inflation. Powered by Ecobank&apos;s 33-country
              banking infrastructure.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-4"
            >
              <button
                onClick={scrollToWaitlist}
                className="group bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.15em] px-10 py-5 rounded-sm text-xs uppercase inline-flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 hover:shadow-[0_20px_60px_rgba(201,168,76,0.2)]"
              >
                Join Wallet Waitlist
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <Link
                href="/docs/api"
                className="group border border-white/10 text-white font-bold tracking-[0.15em] px-10 py-5 rounded-sm text-xs uppercase inline-flex items-center justify-center gap-3 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-300"
              >
                View B2B Developer APIs
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-6 mt-14"
            >
              {['33 Countries', '160+ Currency Pairs', 'Instant Settlement'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/60" />
                    <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                      {item}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* App Mockup Side — Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-[45%] flex justify-center"
          >
            <AppMockup />
          </motion.div>
        </div>

        {/* Mobile Layout — completely separate structure for reliability */}
        <div className="flex lg:hidden flex-col pt-28 pb-16">
          {/* Text Content — Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl sm:text-4xl font-serif text-white leading-[1.15] mb-6">
              The Borderless Financial{' '}
              <span className="text-[#c9a84c]">Ecosystem</span> for Africa
              and the Diaspora.
            </h1>

            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
              One wallet to securely hold foreign currency, instantly send or
              spend money across multiple African countries, and shield your
              cash from local inflation.
            </p>

            {/* Dual CTAs — Mobile */}
            <div className="flex flex-col gap-3 max-w-xs mx-auto mb-8">
              <button
                onClick={scrollToWaitlist}
                className="group bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.15em] px-8 py-4 rounded-sm text-[10px] uppercase inline-flex items-center justify-center gap-2 hover:bg-white transition-all duration-300"
              >
                Join Wallet Waitlist
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/docs/api"
                className="group border border-white/10 text-white font-bold tracking-[0.15em] px-8 py-4 rounded-sm text-[10px] uppercase inline-flex items-center justify-center gap-2 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-300"
              >
                View B2B Developer APIs
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators — Mobile */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['33 Countries', '160+ Pairs', 'Instant Settlement'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-[#c9a84c]/60" />
                    <span className="text-white/30 text-[9px] font-bold tracking-[0.15em] uppercase">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* App Mockup — Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <AppMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — Desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 hidden lg:flex"
      >
        <span className="text-white/20 text-[9px] font-bold tracking-[0.3em] uppercase">
          Scroll to discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

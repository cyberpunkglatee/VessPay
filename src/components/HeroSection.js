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
    <section className="relative min-h-screen bg-[#1a3a2a] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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

      <div className="container mx-auto px-6 pt-32 pb-20 lg:pt-0 lg:pb-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-screen lg:min-h-0 lg:h-screen justify-center">
          {/* Text Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">


            {/* Main H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.08] mb-8"
            >
              The Borderless Financial{' '}
              <span className="text-[#c9a84c]">Ecosystem</span> for Africa
              and the Diaspora.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mb-12 mx-auto lg:mx-0"
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
              className="flex flex-wrap items-center gap-6 mt-14 justify-center lg:justify-start"
            >
              {[
                '33 Countries',
                '160+ Currency Pairs',
                'Instant Settlement',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/60" />
                  <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* App Mockup Side */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] flex justify-center"
          >
            <AppMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
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

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist-form" className="bg-[#1a3a2a] py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a84c]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-7xl font-serif text-white mb-8 leading-tight">
            Africa&apos;s financial infrastructure.{' '}
            <br />
            <span className="text-[#c9a84c]">Ready for you.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Consumer Waitlist */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-10 lg:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center">
                <Mail size={20} className="text-[#c9a84c]" />
              </div>
              <div>
                <p className="text-white font-serif text-lg">For Individuals</p>
                <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase">Join the wallet waitlist</p>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Be the first to hold foreign currency, spend across Africa, and shield your cash from inflation. The borderless wallet is launching soon.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#c9a84c] transition-colors placeholder:text-white/20"
                />
                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.15em] px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 group text-xs uppercase"
                >
                  Join Wallet Waitlist
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-4 text-[#c9a84c] py-4"
              >
                <CheckCircle2 size={48} />
                <p className="text-white font-serif text-xl">You&apos;re on the list!</p>
                <p className="text-white/40 text-sm">We&apos;ll notify you the moment we launch.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Enterprise CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-10 lg:p-12 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center">
                <Building2 size={20} className="text-[#c9a84c]" />
              </div>
              <div>
                <p className="text-white font-serif text-lg">For Business</p>
                <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase">Enterprise payout API</p>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-8">
              One API integration for payroll, contractor payments, and disbursements across 33 African countries. Powered by Ecobank&apos;s settlement infrastructure.
            </p>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                'Single API — 33 countries',
                'Instant wallet-to-wallet clearing',
                'Wholesale FX rates',
                'Automated compliance & KYC',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/50 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/docs/api"
              className="w-full border border-white/10 text-white font-bold tracking-[0.15em] px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-300 group text-xs uppercase"
            >
              View API Documentation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

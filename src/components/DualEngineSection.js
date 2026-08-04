'use client';

import { motion } from 'framer-motion';
import { Wallet, Code2, Check } from 'lucide-react';

const columnA = {
  icon: <Wallet size={28} />,
  label: 'FOR THE DIASPORA & INBOUND TRAVELERS',
  title: 'The Borderless Multi-Country Wallet',
  bullets: [
    'Hold secure multi-currency balances',
    'Direct spend across multiple African nations',
    'No local biometric SIM required',
    'Instant local merchant QR payments',
    'Bypass predatory FX bureaus',
  ],
};

const columnB = {
  icon: <Code2 size={28} />,
  label: 'FOR GLOBAL HR & REMOTE PLATFORMS',
  title: 'The Invisible Payout API Platform',
  bullets: [
    'Single corporate API integration',
    'Automated payroll across 33 African nations',
    'Direct-to-wallet instant clearing',
    'Automated B2B2C worker onboarding',
    'Wholesale treasury exchange rates',
  ],
};

function EngineColumn({ data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      className="flex-1 relative group"
    >
      {/* Card */}
      <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-3xl p-10 lg:p-14 h-full overflow-hidden transition-all duration-700 hover:border-[#c9a84c]/20 hover:bg-white/[0.05]">
        {/* Hover Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/[0.06] rounded-full blur-[80px] transition-all duration-700 pointer-events-none" />

        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c]">
            {data.icon}
          </div>
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/30">
            {data.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-serif text-white mb-10 leading-tight">
          {data.title}
        </h3>

        {/* Bullets */}
        <ul className="space-y-5">
          {data.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-5 h-5 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={11} className="text-[#c9a84c]" />
              </div>
              <span className="text-white/60 text-sm leading-relaxed font-medium">
                {bullet}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function DualEngineSection() {
  return (
    <section className="bg-[#1a3a2a] py-28 lg:py-40 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/[0.02] rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Two Engines — One Platform
          </p>
          <h2 className="text-3xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            A complete financial <span className="text-[#c9a84c]">ecosystem</span>.
          </h2>
          <p className="text-white/40 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re a diaspora traveler spending in Accra, or a remote worker getting paid by an international employer — you&apos;re using the same powerful wallet.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-20">
          <EngineColumn data={columnA} index={0} />
          <EngineColumn data={columnB} index={1} />
        </div>

        {/* Connector Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 lg:mt-16"
        >
          <div className="relative bg-gradient-to-r from-[#c9a84c]/[0.05] via-[#c9a84c]/[0.12] to-[#c9a84c]/[0.05] border border-[#c9a84c]/10 rounded-2xl py-8 px-8 lg:px-16 text-center">
            {/* Decorative dots connecting to columns */}
            <div className="absolute -top-3 left-1/4 w-6 h-6 rounded-full bg-[#1a3a2a] border border-[#c9a84c]/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c9a84c]/40" />
            </div>
            <div className="absolute -top-3 right-1/4 w-6 h-6 rounded-full bg-[#1a3a2a] border border-[#c9a84c]/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#c9a84c]/40" />
            </div>

            <p className="text-white/60 font-serif text-lg lg:text-2xl">
              Same wallet. <span className="text-[#c9a84c]">Two ways in.</span>
            </p>
            <p className="text-white/30 text-xs mt-3 max-w-xl mx-auto leading-relaxed">
              A remote worker paid via the B2B API and a diaspora traveler who signed up directly both hold the same Borderless Multi-Country Wallet — protecting their earnings from inflation and enabling spend across Africa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

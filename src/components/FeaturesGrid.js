'use client';

import { motion } from 'framer-motion';
import { Globe, Wallet, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: <Globe size={24} />,
    title: "Unified Payout API",
    description: "Single integration covers 33 African countries. Send payroll, contractor payments, or disbursements through one API endpoint.",
  },
  {
    icon: <Wallet size={24} />,
    title: "Multi-Currency Wallet",
    description: "Hold, convert, and spend in multiple currencies. Protect your earnings from local inflation by keeping balances in stable foreign currency.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Real-Time FX Engine",
    description: "Competitive wholesale rates with transparent margins. Bypass predatory FX bureaus and see exactly what you pay before you confirm.",
  },
  {
    icon: <Shield size={24} />,
    title: "Ecobank Settlement Layer",
    description: "Built on Ecobank's regulated 33-country banking infrastructure. Bank-grade compliance, instant settlement, and institutional-level security.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-[#0a1f12] py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Platform Capabilities</p>
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">
            Infrastructure that <span className="text-[#c9a84c]">scales</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#1a3a2a] p-10 rounded-2xl border-t-2 border-[#c9a84c]/30 hover:shadow-[0_0_30px_rgba(201,168,76,0.1)] transition-shadow duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed font-sans text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

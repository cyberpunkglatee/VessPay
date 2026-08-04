'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const individualSteps = [
  {
    number: "01",
    title: "LOAD",
    description: "Add funds in USD, GBP, EUR or CAD from your international bank or card. Your balance is held securely in your chosen currency.",
  },
  {
    number: "02",
    title: "HOLD",
    description: "Keep your money in stable foreign currency. Shield it from local inflation. Convert to local currencies only when you need to spend.",
  },
  {
    number: "03",
    title: "SPEND",
    description: "Pay merchants via QR, send MoMo, or tap your VessPay card — across Ghana, Nigeria, Kenya, and 30 more African countries.",
  },
];

const businessSteps = [
  {
    number: "01",
    title: "INTEGRATE",
    description: "Connect your HR, EOR or payroll platform to VessPay's unified API. One integration covers 33 African countries.",
  },
  {
    number: "02",
    title: "CONFIGURE",
    description: "Set up corridors, compliance rules, and treasury preferences. Automated KYC and worker onboarding via API.",
  },
  {
    number: "03",
    title: "PAY OUT",
    description: "Disbursements hit workers' VessPay wallets instantly. They keep earnings in USD, convert and spend locally when ready.",
  },
];

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState('individual');

  const steps = activeTab === 'individual' ? individualSteps : businessSteps;

  return (
    <section className="bg-[#1a3a2a] py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">
            How <span className="text-[#c9a84c]">VessPay</span> works.
          </h2>

          {/* Tab Toggle */}
          <div className="flex items-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-3 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                activeTab === 'individual'
                  ? 'bg-[#c9a84c] text-[#1a3a2a]'
                  : 'bg-white/5 text-white/40 border border-white/10 hover:text-white/60'
              }`}
            >
              For Individuals
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 py-3 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-[#c9a84c] text-[#1a3a2a]'
                  : 'bg-white/5 text-white/40 border border-white/10 hover:text-white/60'
              }`}
            >
              For Business
            </button>
          </div>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative group"
            >
              <div className="text-8xl font-serif text-white/5 absolute -top-12 left-0 pointer-events-none group-hover:text-[#c9a84c]/10 transition-colors duration-500">
                {step.number}
              </div>
              <div className="relative pt-8">
                <div className="w-12 h-1 bg-[#c9a84c] mb-8" />
                <h3 className="text-2xl font-serif text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-white/60 leading-relaxed font-sans text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

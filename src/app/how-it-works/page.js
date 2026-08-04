'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import { Smartphone, Wallet, Shield, Send, ShoppingBag, Code2, Settings, Banknote, ArrowRight } from 'lucide-react';

const individualSteps = [
  {
    number: "01",
    title: "Download VessPay",
    description: "Available on iOS and Android. Sign up in under 2 minutes with just your international passport — no local SIM or biometric registration needed.",
    icon: <Smartphone className="text-[#c9a84c]" size={32} />,
  },
  {
    number: "02",
    title: "Load & Hold",
    description: "Add money in USD, GBP, EUR or CAD using your international card or bank transfer. Hold your balance in stable foreign currency — convert to local currency only when you're ready to spend.",
    icon: <Wallet className="text-[#c9a84c]" size={32} />,
  },
  {
    number: "03",
    title: "Send & Pay",
    description: "Send to any MoMo number, scan merchant QR codes, or tap your VessPay card. Instant settlement across Ghana, Nigeria, Kenya, and 30+ African countries.",
    icon: <Send className="text-[#c9a84c]" size={32} />,
  },
  {
    number: "04",
    title: "Spend Freely",
    description: "Pay vendors, taxis, markets, restaurants, family — anyone with a mobile money account across 33 African countries. Same wallet everywhere, jurisdictions are not a problem.",
    icon: <ShoppingBag className="text-[#c9a84c]" size={32} />,
  },
];

const businessSteps = [
  {
    number: "01",
    title: "Get API Keys",
    description: "Sign up for a sandbox account and receive test API keys instantly. Full REST API with SDKs for Node.js, Python, and more.",
    icon: <Code2 className="text-[#c9a84c]" size={32} />,
  },
  {
    number: "02",
    title: "Configure Corridors",
    description: "Select which countries and payment methods your platform needs. Set up webhooks, compliance rules, and treasury preferences via the dashboard.",
    icon: <Settings className="text-[#c9a84c]" size={32} />,
  },
  {
    number: "03",
    title: "Send Payouts",
    description: "Make your first API call. Funds arrive in the recipient's VessPay wallet or mobile money account within seconds. Workers are auto-onboarded on first payout.",
    icon: <Banknote className="text-[#c9a84c]" size={32} />,
  },
  {
    number: "04",
    title: "Scale",
    description: "Send batch payouts to hundreds of workers across 33 countries in a single API call. Real-time webhook notifications, full audit trail, automated compliance.",
    icon: <Shield className="text-[#c9a84c]" size={32} />,
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('individual');
  const steps = activeTab === 'individual' ? individualSteps : businessSteps;

  return (
    <main className="bg-[#1a3a2a] min-h-screen">
      <PageHero 
        subtitle="HOW IT WORKS" 
        title="Simple. Fast." 
        accent="Borderless." 
      />

      {/* Tab Toggle */}
      <section className="pt-20 lg:pt-32 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-16">
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
        </div>
      </section>

      {/* Step-by-Step Journey */}
      <section className="pb-20 lg:pb-32 px-6">
        <div className="container mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-20 lg:space-y-32"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-32`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-4 lg:space-y-6">
                  <div className="text-4xl lg:text-6xl font-serif text-[#c9a84c]/20 mb-2">{step.number}</div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-white/5 rounded-lg border border-[#c9a84c]/20">
                      {step.icon}
                    </div>
                    <h2 className="text-2xl lg:text-5xl font-serif text-white">{step.title}</h2>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full max-w-md aspect-[9/16] bg-white/[0.03] rounded-[40px] border border-white/[0.06] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="p-8 space-y-6 h-full flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center">
                          {step.icon}
                        </div>
                        <div>
                          <p className="text-white font-serif text-sm">{step.title}</p>
                          <p className="text-white/20 text-[9px] tracking-widest uppercase font-bold">Step {step.number}</p>
                        </div>
                      </div>
                      <div className="space-y-3 flex-1 flex flex-col justify-center">
                        <div className="h-28 bg-white/[0.04] rounded-2xl border border-white/[0.06] flex items-center justify-center">
                          <div className="scale-[1.8] opacity-10 text-[#c9a84c]">{step.icon}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-white/[0.06] rounded-full w-full" />
                          <div className="h-3 bg-white/[0.06] rounded-full w-4/5" />
                          <div className="h-3 bg-white/[0.06] rounded-full w-3/5" />
                        </div>
                      </div>
                      <div className="h-12 bg-[#c9a84c]/20 rounded-xl w-full border border-[#c9a84c]/10 flex items-center justify-center">
                        <span className="text-[#c9a84c] text-[9px] font-bold tracking-widest uppercase">Continue</span>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#c9a84c] py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-[#1a3a2a] mb-8">
            {activeTab === 'individual' ? 'Ready to go borderless?' : 'Ready to integrate?'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={activeTab === 'individual' ? '/download' : '/docs/api'}
              className="inline-block bg-[#1a3a2a] text-white font-bold tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-white hover:text-[#1a3a2a] transition-all duration-300 text-xs uppercase"
            >
              {activeTab === 'individual' ? 'Join Wallet Waitlist' : 'View API Docs'}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-[#0a1f12]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">Frequently Asked <span className="text-[#c9a84c]">Questions</span></h2>
            <p className="text-white/40 font-sans tracking-[0.2em] text-xs font-bold uppercase">EVERYTHING YOU NEED TO KNOW</p>
          </motion.div>
          
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}

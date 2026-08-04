'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import StatsBar from '@/components/StatsBar';
import Link from 'next/link';
import { ArrowRight, Heart, Briefcase, Globe, Cpu } from 'lucide-react';

const audiences = [
  {
    title: "Diaspora & Travelers",
    subtitle: "THE BORDERLESS WALLET",
    description: "You're visiting Africa or coming home. You shouldn't spend day one queuing at a telecom agent or FX bureau. VessPay gives you a multi-currency wallet that works across 33 African countries — pay for your Bolt, your food, and your nightlife the moment you land. No local SIM required.",
    icon: <Heart size={40} className="text-[#c9a84c]" />,
    cta: { label: "Join Wallet Waitlist", href: "/download" },
  },
  {
    title: "Remote Workers",
    subtitle: "GET PAID. STAY PROTECTED.",
    description: "You work for a global company and get paid in USD or EUR. But converting to local currency means losing purchasing power to inflation every month. VessPay lets you hold your earnings in stable foreign currency and convert only when you're ready to spend — shielding your cash from local devaluation.",
    icon: <Briefcase size={40} className="text-[#c9a84c]" />,
    cta: { label: "Join Wallet Waitlist", href: "/download" },
  },
  {
    title: "EOR & HR Platforms",
    subtitle: "ONE API. 33 COUNTRIES.",
    description: "You manage distributed African teams and payroll is a nightmare of multiple integrations, compliance headaches, and failed transfers. VessPay's unified Payout API handles it all — one integration, instant settlement, automated KYC, and workers receive a VessPay wallet on first payout. No manual onboarding.",
    icon: <Globe size={40} className="text-[#c9a84c]" />,
    cta: { label: "View API Documentation", href: "/docs/api" },
  },
  {
    title: "Fintech Partners",
    subtitle: "EMBED AFRICAN PAYOUTS",
    description: "You're building a product that needs to move money in and out of Africa. Instead of navigating 33 different regulatory environments, plug into VessPay's white-label wallet infrastructure and wholesale FX engine. We handle the banking rails — you keep building your product.",
    icon: <Cpu size={40} className="text-[#c9a84c]" />,
    cta: { label: "Contact Sales", href: "/contact" },
  },
];

const whoStats = [
  { value: 33, suffix: "", label: "African Countries" },
  { value: 4, suffix: "M+", label: "Diaspora Africans" },
  { value: 500, suffix: "K+", label: "African Remote Workers" },
  { value: 160, suffix: "+", label: "Currency Pairs" },
];

export default function WhoItsFor() {
  return (
    <main className="bg-[#1a3a2a] min-h-screen text-white">
      <PageHero 
        subtitle="WHO IT'S FOR" 
        title="Built for Everyone" 
        accent="in the Ecosystem." 
      />

      {/* Audience Sections */}
      <section className="py-0 overflow-hidden">
        {audiences.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[70vh]`}
          >
            {/* Visual Side */}
            <div className="flex-1 relative h-[40vh] lg:h-auto overflow-hidden bg-[#0a1f12] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#c9a84c]/[0.02]" />
              {/* Animated rings background */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                className="absolute w-64 h-64 rounded-full border border-[#c9a84c]/10"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.08, 0.03] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 + 1 }}
                className="absolute w-96 h-96 rounded-full border border-[#c9a84c]/5"
              />
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-24 h-24 rounded-3xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-6"
                >
                  {a.icon}
                </motion.div>
                <p className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase">{a.subtitle}</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 flex flex-col justify-center p-10 lg:p-24 bg-[#1a3a2a]">
               <p className="text-[#c9a84c] font-sans tracking-[0.3em] text-[10px] font-bold uppercase mb-6">
                 {a.subtitle}
               </p>
               <h2 className="text-3xl lg:text-6xl font-serif mb-8 leading-tight">
                 {a.title}
               </h2>
               <p className="text-white/50 text-lg lg:text-xl leading-relaxed max-w-xl mb-12">
                 {a.description}
               </p>
               <div>
                 <Link
                   href={a.cta.href}
                   className="inline-flex items-center gap-2 text-[#c9a84c] font-bold tracking-[0.2em] text-xs uppercase group"
                 >
                   {a.cta.label}
                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
               </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Stats Bar */}
      <StatsBar stats={whoStats} />

      {/* Closing CTA */}
      <section className="py-32 px-6 text-center">
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
         >
            <h2 className="text-3xl lg:text-6xl font-serif mb-6">Ready to join them?</h2>
            <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto">Whether you&apos;re an individual who needs a borderless wallet or a business that needs a payout API — VessPay has you covered.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/download" 
                className="inline-block bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.2em] px-12 py-6 rounded-sm hover:bg-white transition-all duration-300 text-xs uppercase"
              >
                Join Wallet Waitlist
              </Link>
              <Link 
                href="/docs/api" 
                className="inline-block border border-white/10 text-white font-bold tracking-[0.2em] px-12 py-6 rounded-sm hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-300 text-xs uppercase"
              >
                View API Docs
              </Link>
            </div>
         </motion.div>
      </section>
    </main>
  );
}

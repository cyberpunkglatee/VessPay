'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { Smartphone, Zap, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

const features = [
  {
    title: "No SIM Card Required",
    description: "Bypass Ghana's SIM registration requirement entirely. VessPay gives you full MoMo access the moment you land, using your international number and passport.",
    icon: <Smartphone className="text-[#c9a84c]" size={40} />,
    image: "/mockups/vesspay_nosim.png", 
  },
  {
    title: "Instant MoMo Payments",
    description: "Send to any MTN, Vodafone or AirtelTigo number in Ghana in seconds. No delays, no queues, no paperwork. Just fast, secure payments.",
    icon: <Zap className="text-[#c9a84c]" size={40} />,
    image: "/mockups/vesspay_instant.png",
  },
  {
    title: "Live FX Rates",
    description: "See exactly what you're paying before you confirm. Transparent 3% FX margin, no hidden fees, no surprises. The most honest rate in the market.",
    icon: <TrendingUp className="text-[#c9a84c]" size={40} />,
    image: "/mockups/vesspay_fx.png",
  },
  {
    title: "Bank-Grade Security",
    description: "Built on Ecobank's regulated banking infrastructure. Your funds are protected by one of Africa's largest banks, with state-of-the-art encryption.",
    icon: <ShieldCheck className="text-[#c9a84c]" size={40} />,
    image: "/mockups/vesspay_security.png",
  },
];

export default function Features() {
  return (
    <main className="bg-[#1a3a2a] min-h-screen">
      <PageHero 
        subtitle="VESS PAY FEATURES" 
        title="Everything You Need." 
        accent="Nothing You Don't." 
      />

      <section className="py-32 px-6 overflow-hidden">
        <div className="container mx-auto space-y-48">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}
            >
              {/* Content Box */}
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center">
                   {f.icon}
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
                  {f.title}
                </h2>
                <p className="text-white/50 text-lg leading-relaxed max-w-xl">
                  {f.description}
                </p>
                <div className="pt-4">
                  <Link 
                    href="/download" 
                    className="inline-flex items-center gap-2 text-[#c9a84c] font-bold tracking-[0.2em] text-xs uppercase group"
                  >
                    LEARN MORE 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full relative">
                 <div className="absolute inset-x-[-20%] inset-y-[-20%] bg-[#c9a84c]/5 blur-[80px] rounded-full pointer-events-none" />
                 <div className="relative aspect-video lg:aspect-square bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                    <img 
                      src={f.image} 
                      alt={f.title} 
                      className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mini CTA Strip */}
      <section className="bg-[#c9a84c] py-20 px-6 mt-20">
        <div className="container mx-auto text-center">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
           >
              <h2 className="text-3xl lg:text-5xl font-serif text-[#1a3a2a] mb-8">
                The app is launching soon — join the waitlist.
              </h2>
              <Link 
                href="/download" 
                className="inline-block bg-[#1a3a2a] text-white font-bold tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-white hover:text-[#1a3a2a] transition-all duration-300 text-xs"
              >
                SECURE EARLY ACCESS
              </Link>
           </motion.div>
        </div>
      </section>
    </main>
  );
}

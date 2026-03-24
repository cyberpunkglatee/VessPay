'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import StatsBar from '@/components/StatsBar';

const audiences = [
  {
    title: "Tourists & Visitors",
    subtitle: "STAY CONNECTED",
    description: "You're here for two weeks. You shouldn't spend day one queuing at a telecom agent. VessPay has you covered the moment you land. Pay for your Bolt, your Waakye, and your nightlife as if you've lived here for years.",
    image: "/audiences/vesspay_tourist.png",
  },
  {
    title: "Expatriates & Workers",
    subtitle: "LIVING LOCAL",
    description: "Living in Ghana long-term but still fighting payment friction every month? VessPay gives you a permanent local payment solution without the bureaucracy. Manage your utility bills and local expenses with zero stress.",
    image: "/audiences/expat.png",
  },
  {
    title: "The Diaspora",
    subtitle: "COMING HOME",
    description: "You grew up here. You know how it works. VessPay makes coming home feel seamless. Support family, pay vendors, and manage your property directly from your foreign bank account.",
    image: "/audiences/diaspora.png",
  },
];

const whoStats = [
  { value: 500000, suffix: "+", label: "Annual Tourists" },
  { value: 50000, suffix: "+", label: "Registered Expats" },
  { value: 3000000, suffix: "+", label: "Diaspora Ghanaians" },
];

export default function WhoItsFor() {
  return (
    <main className="bg-[#1a3a2a] min-h-screen text-white">
      <PageHero 
        subtitle="WHO IT'S FOR" 
        title="Built for Everyone" 
        accent="Ghana Unlocked." 
      />

      {/* Audience Sections */}
      <section className="py-0 overflow-hidden">
        {audiences.map((a, i) => (
          <motion.div
            key={i}
            id={i === 0 ? 'tourists' : i === 1 ? 'expats' : 'diaspora'}
            initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-screen lg:min-h-[80vh]`}
          >
            {/* Image Side */}
            <div className="flex-1 relative h-[40vh] lg:h-auto overflow-hidden">
               <img 
                 src={a.image} 
                 alt={a.title} 
                 className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
               />
               <div className="absolute inset-0 bg-[#1a3a2a]/40" />
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
               <div className="w-20 h-1 bg-[#c9a84c]/30" />
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
            <h2 className="text-3xl lg:text-6xl font-serif mb-12">Ready to join them?</h2>
            <a 
              href="/download" 
              className="inline-block bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.2em] px-12 py-6 rounded-sm hover:bg-white transition-all duration-300 text-sm"
            >
              GET STARTED NOW
            </a>
         </motion.div>
      </section>
    </main>
  );
}

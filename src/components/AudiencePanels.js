'use client';

import { motion } from 'framer-motion';
import { Globe, Cpu, Briefcase, Heart } from 'lucide-react';

const audiences = [
  {
    icon: <Heart size={32} />,
    title: "DIASPORA & TRAVELERS",
    description: "Your borderless wallet across Africa. Hold foreign currency, spend locally, no SIM required.",
    id: "diaspora"
  },
  {
    icon: <Briefcase size={32} />,
    title: "REMOTE WORKERS",
    description: "Get paid globally, spend locally, beat inflation. Keep earnings in USD until you're ready to convert.",
    id: "remote-workers"
  },
  {
    icon: <Globe size={32} />,
    title: "EOR & HR PLATFORMS",
    description: "Pay your African workforce through one API. 33 countries, instant settlement, automated compliance.",
    id: "eor"
  },
  {
    icon: <Cpu size={32} />,
    title: "FINTECH PARTNERS",
    description: "Embed African payouts into your product. White-label wallet infrastructure and wholesale FX.",
    id: "fintech"
  },
];

export default function AudiencePanels() {
  return (
    <section className="bg-[#1a3a2a] py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Who It&apos;s For</p>
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">
            Built for <span className="text-[#c9a84c]">everyone</span> in the ecosystem.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.03] border border-white/[0.05] p-10 lg:p-12 rounded-3xl group hover:border-[#c9a84c]/20 transition-all duration-500"
            >
              <div className="text-[#c9a84c] mb-10 group-hover:scale-110 transition-transform duration-500">
                {a.icon}
              </div>
              <h3 className="text-white font-serif text-2xl lg:text-3xl mb-4">{a.title}</h3>
              <p className="text-white/40 leading-relaxed font-sans text-sm">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

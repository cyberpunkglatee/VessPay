'use client';

import { motion } from 'framer-motion';
import { Plane, UserCheck, Heart } from 'lucide-react';

const audiences = [
  {
    icon: <Plane size={32} />,
    title: "TOURISTS",
    description: "Pay for Jollof and Taxis without getting a new SIM.",
    id: "tourists"
  },
  {
    icon: <UserCheck size={32} />,
    title: "EXPATRIATES",
    description: "Simplify your local life and bills management.",
    id: "expats"
  },
  {
    icon: <Heart size={32} />,
    title: "DIASPORA",
    description: "Support family back home with instant transfers.",
    id: "diaspora"
  }
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
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">Built for <span className="text-[#c9a84c]">you</span>.</h2>
          <p className="text-white/60 font-sans tracking-[0.2em] text-xs font-bold uppercase">TAILORED SOLUTIONS</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
           {audiences.map((a, i) => (
             <motion.div
               key={a.id}
               initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="flex-1 bg-white/5 border border-white/5 p-12 rounded-3xl group hover:border-[#c9a84c]/20 transition-all duration-500"
             >
                <div className="text-[#c9a84c] mb-12 group-hover:scale-110 transition-transform duration-500">
                  {a.icon}
                </div>
                <h3 className="text-white font-serif text-3xl mb-4">{a.title}</h3>
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

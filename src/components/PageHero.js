'use client';

import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, accent }) {
  return (
    <section className="bg-[#1a3a2a] pt-56 lg:pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#c9a84c] font-sans tracking-[0.3em] text-[10px] font-bold uppercase mb-6">
            {subtitle}
          </p>
          <h1 className="text-5xl lg:text-8xl font-serif text-white leading-[1.1] max-w-4xl">
            {title}
            {accent && <span className="text-[#c9a84c] block mt-2 text-3xl lg:text-8xl">{accent}</span>}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2,
  });

  const display = useTransform(springValue, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsBar({ stats }) {
  if (!stats) return null;
  
  return (
    <section className="bg-[#0a1f12] py-32 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-2 lg:grid-cols-${stats.length} gap-12 lg:gap-8`}>
           {stats.map((stat, i) => (
             <div key={i} className="text-center">
                <div className="text-white font-serif text-4xl lg:text-6xl mb-4">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/40 font-sans tracking-[0.2em] text-[10px] font-bold uppercase leading-relaxed">
                   {stat.label}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

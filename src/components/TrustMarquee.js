'use client';

import { motion } from 'framer-motion';

const trustSignals = [
  "Powered by Ecobank",
  "No SIM Card Required",
  "MTN · Vodafone · AirtelTigo",
  "iOS & Android",
  "Instant MoMo Payments",
  "33 African Countries",
];

export default function TrustMarquee() {
  return (
    <div className="bg-[#1a3a2a] border-y border-white/5 py-8 overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...trustSignals, ...trustSignals, ...trustSignals].map((signal, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c9a84c]">
              {signal}
            </span>
            <span className="text-white/20">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

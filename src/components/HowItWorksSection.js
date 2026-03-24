'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "LOAD",
    description: "Add funds in USD, GBP, EUR or CAD safely from your international bank or card.",
  },
  {
    number: "02",
    title: "HOLD",
    description: "Your balance is held in a secure GHS wallet, converting instantly at competitive rates.",
  },
  {
    number: "03",
    title: "SEND",
    description: "Pay any MoMo number in Ghana instantly. No local SIM card or registration required.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#1a3a2a] py-32 px-6">
      <div className="container mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">How <span className="text-[#c9a84c]">VessPay</span> works.</h2>
          <p className="text-white/60 font-sans tracking-[0.2em] text-xs font-bold uppercase">THREE STEPS TO FREEDOM</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
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
        </div>
      </div>
    </section>
  );
}

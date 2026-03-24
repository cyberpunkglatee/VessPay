'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Scale } from 'lucide-react';

const features = [
  {
    icon: <Globe size={24} />,
    title: "No SIM Card Required",
    description: "Access Ghana's MoMo ecosystem without the need for a local phone number or residency.",
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Transfers",
    description: "Payments hit the recipient's MoMo wallet in seconds, not business days.",
  },
  {
    icon: <Scale size={24} />,
    title: "Live FX Rates",
    description: "Transparent market rates with a fixed 3% margin. No hidden fees or surprise costs.",
  },
  {
    icon: <Shield size={24} />,
    title: "Bank-Grade Security",
    description: "Built on Ecobank's regulated infrastructure with 256-bit encryption for every transaction.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-[#0a1f12] py-32 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#1a3a2a] p-10 rounded-2xl border-t-2 border-[#c9a84c]/30 hover:shadow-[0_0_30px_rgba(201,168,76,0.1)] transition-shadow duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed font-sans text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

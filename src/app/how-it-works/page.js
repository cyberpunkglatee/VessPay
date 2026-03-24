'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import { Smartphone, Wallet, Send, ShoppingBag } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Download VessPay",
    description: "Available on iOS and Android. Sign up in under 2 minutes with just your international passport.",
    icon: <Smartphone className="text-[#c9a84c]" size={32} />,
  },
  {
    number: "02",
    title: "Load Funds",
    description: "Add money in USD, GBP, EUR or CAD using your international card or bank transfer. Your balance converts to GHS instantly at a transparent rate.",
    icon: <Wallet className="text-[#c9a84c]" size={32} />,
  },
  {
    number: "03",
    title: "Send MoMo",
    description: "Enter any Ghanaian MoMo number on MTN, Vodafone or AirtelTigo and send instantly. No SIM card. No Ghana Card. No registration.",
    icon: <Send className="text-[#c9a84c]" size={32} />,
  },
  {
    number: "04",
    title: "Spend Freely",
    description: "Pay vendors, taxis, markets, restaurants, family — anyone with a MoMo number in Ghana.",
    icon: <ShoppingBag className="text-[#c9a84c]" size={32} />,
  },
];

export default function HowItWorks() {
  return (
    <main className="bg-[#1a3a2a] min-h-screen">
      <PageHero 
        subtitle="HOW IT WORKS" 
        title="Simple. Fast." 
        accent="No SIM Card." 
      />

      {/* Step-by-Step Journey */}
      <section className="py-20 lg:py-32 px-6">
        <div className="container mx-auto">
          <div className="space-y-20 lg:space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-32`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-4 lg:space-y-6">
                  <div className="text-4xl lg:text-6xl font-serif text-[#c9a84c]/20 mb-2">{step.number}</div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-white/5 rounded-lg border border-[#c9a84c]/20">
                      {step.icon}
                    </div>
                    <h2 className="text-2xl lg:text-5xl font-serif text-white">{step.title}</h2>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Mockup Placeholder (Using a styled div since real screenshots aren't available) */}
                <div className="flex-1 w-full max-w-md aspect-[9/16] bg-white/5 rounded-[40px] border border-white/10 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   {/* Abstract UI representation */}
                   <div className="p-8 space-y-6">
                      <div className="h-4 w-1/3 bg-white/10 rounded-full" />
                      <div className="h-32 bg-white/5 rounded-2xl border border-white/10" />
                      <div className="space-y-3">
                         <div className="h-3 bg-white/10 rounded-full w-full" />
                         <div className="h-3 bg-white/10 rounded-full w-4/5" />
                      </div>
                      <div className="mt-auto pt-12">
                         <div className="h-12 bg-[#c9a84c] rounded-xl w-full" />
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-[#0a1f12]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">Frequently Asked <span className="text-[#c9a84c]">Questions</span></h2>
            <p className="text-white/40 font-sans tracking-[0.2em] text-xs font-bold uppercase">EVERYTHING YOU NEED TO KNOW</p>
          </motion.div>
          
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}

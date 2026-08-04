'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { Check, X, Info, ArrowRight } from 'lucide-react';

const comparison = [
  { feature: "Multi-Country Wallet", vesspay: true, flutterwave: false, wise: "Partial", bank: false },
  { feature: "Payout API (33 Countries)", vesspay: true, flutterwave: "Partial", wise: false, bank: false },
  { feature: "Inflation Shield (Hold USD)", vesspay: true, flutterwave: false, wise: true, bank: false },
  { feature: "No Local SIM Required", vesspay: true, flutterwave: false, wise: "N/A", bank: false },
  { feature: "Local MoMo & QR Pay", vesspay: true, flutterwave: "Partial", wise: false, bank: false },
  { feature: "B2B2C Worker Onboarding", vesspay: true, flutterwave: false, wise: false, bank: false },
  { feature: "Ecobank Settlement", vesspay: true, flutterwave: false, wise: false, bank: "Own Rails" },
];

export default function Pricing() {
  return (
    <main className="bg-[#1a3a2a] min-h-screen text-white">
      <PageHero 
        subtitle="VESSPAY PRICING" 
        title="Transparent Pricing." 
        accent="Always." 
      />

      {/* Pricing Tiers */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Consumer Tier */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a1f12] p-12 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full blur-3xl group-hover:bg-[#c9a84c]/10 transition-colors" />
              <p className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase mb-4">For Individuals</p>
              <h3 className="text-4xl font-serif mb-2">Wallet</h3>
              <p className="text-white/30 text-sm mb-10">Diaspora, Travelers & Remote Workers</p>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                  <span className="text-white/60">FX Conversion</span>
                  <span className="font-serif text-2xl">3% <span className="text-base text-white/40">margin</span></span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                  <span className="text-white/60">MoMo / QR Payment</span>
                  <span className="font-serif text-2xl">GHS 2 <span className="text-base text-white/40">flat</span></span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                  <span className="text-white/60">Wallet-to-Wallet</span>
                  <span className="font-serif text-2xl text-[#c9a84c]">Free</span>
                </div>
                <div className="flex justify-between items-baseline pb-4">
                  <span className="text-white/60">Currency Holding</span>
                  <span className="font-serif text-2xl text-[#c9a84c]">Free</span>
                </div>
              </div>

              <Link
                href="/download"
                className="w-full bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.15em] px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 group text-xs uppercase"
              >
                Join Wallet Waitlist
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a1f12] p-12 rounded-3xl border border-[#c9a84c]/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full blur-3xl group-hover:bg-[#c9a84c]/10 transition-colors" />
              <div className="absolute top-6 right-6">
                <span className="text-[9px] font-bold tracking-widest uppercase bg-[#c9a84c]/10 text-[#c9a84c] px-3 py-1.5 rounded-full border border-[#c9a84c]/20">Enterprise</span>
              </div>
              <p className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase mb-4">For Business</p>
              <h3 className="text-4xl font-serif mb-2">Payout API</h3>
              <p className="text-white/30 text-sm mb-10">EOR Platforms, HR Systems & Fintechs</p>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                  <span className="text-white/60">FX Rate</span>
                  <span className="font-serif text-2xl">Wholesale <span className="text-base text-white/40">treasury</span></span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                  <span className="text-white/60">Per Payout</span>
                  <span className="font-serif text-2xl">Volume <span className="text-base text-white/40">based</span></span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                  <span className="text-white/60">Worker Onboarding</span>
                  <span className="font-serif text-2xl text-[#c9a84c]">Included</span>
                </div>
                <div className="flex justify-between items-baseline pb-4">
                  <span className="text-white/60">API Access</span>
                  <span className="font-serif text-2xl text-[#c9a84c]">Unlimited</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full border border-white/10 text-white font-bold tracking-[0.15em] px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-300 group text-xs uppercase"
              >
                Contact Sales
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 px-6 bg-[#0a1f12]/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-serif mb-6">Better than the <span className="text-[#c9a84c]">rest</span>.</h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">WHY VESSPAY WINS</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-8 px-4 text-white/40 text-[10px] uppercase tracking-widest font-bold">Feature</th>
                  <th className="py-8 px-4 text-[#c9a84c] text-[10px] uppercase tracking-widest font-bold">VessPay</th>
                  <th className="py-8 px-4 text-white/40 text-[10px] uppercase tracking-widest font-bold">Flutterwave</th>
                  <th className="py-8 px-4 text-white/40 text-[10px] uppercase tracking-widest font-bold">Wise</th>
                  <th className="py-8 px-4 text-white/40 text-[10px] uppercase tracking-widest font-bold">Bank Transfer</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-6 px-4 font-serif text-base">{row.feature}</td>
                    <td className="py-6 px-4">
                      {row.vesspay === true ? <Check className="text-[#c9a84c]" size={18} /> : <span className="text-[#c9a84c] font-bold text-sm">{row.vesspay}</span>}
                    </td>
                    <td className="py-6 px-4 text-white/40">
                      {row.flutterwave === false ? <X size={18} /> : <span className="text-sm">{row.flutterwave}</span>}
                    </td>
                    <td className="py-6 px-4 text-white/40">
                      {row.wise === false ? <X size={18} /> : row.wise === true ? <Check size={18} /> : <span className="text-sm">{row.wise}</span>}
                    </td>
                    <td className="py-6 px-4 text-white/40">
                      {row.bank === false ? <X size={18} /> : <span className="text-sm">{row.bank}</span>}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-tr from-[#1a3a2a] to-[#0a1f12] p-12 lg:p-20 rounded-[40px] border border-[#c9a84c]/20">
             <div className="mb-12">
               <h2 className="text-3xl lg:text-5xl font-serif mb-4">Let&apos;s do the math.</h2>
               <p className="text-white/40">If you load $100 USD into your VessPay wallet today:</p>
             </div>

             <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                   <div className="flex items-center gap-2">
                     <span className="text-white/60">Mid-Market Rate</span>
                     <Info size={14} className="text-white/20" />
                   </div>
                   <span className="font-serif text-xl">$1 = GHS 14.90</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                   <span className="text-white/60">VessPay Margin (3%)</span>
                   <span className="text-red-400">-$3.00</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                   <span className="text-white/60">Hidden Fees</span>
                   <span className="text-[#c9a84c] font-bold">$0.00</span>
                </div>
                <div className="flex justify-between items-center py-8">
                   <span className="text-[#c9a84c] font-serif text-2xl">You Receive</span>
                   <div className="text-right">
                      <div className="text-4xl lg:text-6xl font-serif text-white leading-none mb-2">GHS 1,445.30</div>
                      <p className="text-white/20 text-xs uppercase tracking-widest font-bold">READY TO SPEND INSTANTLY — OR HOLD IN USD</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { Check, X, Info } from 'lucide-react';

const comparison = [
  { feature: "Local MoMo Payments", vesspay: true, bank: false, cash: false, other: "Partial" },
  { feature: "ATM Withdrawal Fees", vesspay: "None", bank: "High", cash: "High", other: "N/A" },
  { feature: "Ease of Use", vesspay: "Mobile First", bank: "Complex", cash: "Manual", other: "Mobile" },
  { feature: "GHS Wallet Support", vesspay: true, bank: true, cash: true, other: false },
  { feature: "No local SIM Required", vesspay: true, bank: false, cash: "N/A", other: false },
];

export default function Pricing() {
  return (
    <main className="bg-[#1a3a2a] min-h-screen text-white">
      <PageHero 
        subtitle="VESS PAY PRICING" 
        title="Transparent Pricing." 
        accent="Always." 
      />

      {/* Fee Structure */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a1f12] p-12 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full blur-3xl group-hover:bg-[#c9a84c]/10 transition-colors" />
              <p className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase mb-8">Currency Conversion</p>
              <h3 className="text-5xl lg:text-7xl font-serif mb-6">3% <span className="text-2xl text-white/40">Fixed Margin</span></h3>
              <p className="text-white/50 leading-relaxed max-w-sm">
                You always see the exact rate before you confirm. No hidden spreads, no surprise fees. 
                Simple, honest mid-market conversion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a1f12] p-12 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full blur-3xl group-hover:bg-[#c9a84c]/10 transition-colors" />
              <p className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase mb-8">Transaction Fee</p>
              <h3 className="text-5xl lg:text-7xl font-serif mb-6">GHS 2.00 <span className="text-2xl text-white/40">Flat Fee</span></h3>
              <p className="text-white/50 leading-relaxed max-w-sm">
                One simple fee per payment regardless of the amount. Pay vendors, family, or bills with the same predictable cost.
              </p>
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
            <h2 className="text-4xl lg:text-6xl font-serif mb-6">Better than the <span className="text-[#c9a84c]">Rest</span>.</h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">WHY VESS PAY WINS</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-8 px-4 text-white/40 text-[10px] uppercase tracking-widest font-bold">FEAURE</th>
                  <th className="py-8 px-4 text-[#c9a84c] text-[10px] uppercase tracking-widest font-bold">VESS PAY</th>
                  <th className="py-8 px-4 text-white/40 text-[10px] uppercase tracking-widest font-bold">BANK TRASNFER</th>
                  <th className="py-8 px-4 text-white/40 text-[10px] uppercase tracking-widest font-bold">CASH / ATM</th>
                  <th className="py-8 px-4 text-white/40 text-[10px] uppercase tracking-widest font-bold">OTHER APPS</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-8 px-4 font-serif text-lg">{row.feature}</td>
                    <td className="py-8 px-4">
                      {row.vesspay === true ? <Check className="text-[#c9a84c]" /> : <span className="text-[#c9a84c] font-bold">{row.vesspay}</span>}
                    </td>
                    <td className="py-8 px-4 text-white/40">{row.bank === false ? <X size={20} /> : row.bank}</td>
                    <td className="py-8 px-4 text-white/40">{row.cash === false ? <X size={20} /> : row.cash}</td>
                    <td className="py-8 px-4 text-white/40 font-medium">{row.other === false ? <X size={20} /> : row.other}</td>
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
               <p className="text-white/40">If you load $100 USD today, here&apos;s what happens:</p>
             </div>

             <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                   <div className="flex items-center gap-2">
                     <span className="text-white/60">Mid-Market Rate</span>
                     <Info size={14} className="text-white/20" />
                   </div>
                   <span className="font-serif text-xl">$1 = GHS 12.50</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                   <span className="text-white/60">VessPay Margin (3%)</span>
                   <span className="text-red-400">-$3.00</span>
                </div>
                <div className="flex justify-between items-center py-8">
                   <span className="text-[#c9a84c] font-serif text-2xl">You Receive</span>
                   <div className="text-right">
                      <div className="text-4xl lg:text-6xl font-serif text-white leading-none mb-2">GHS 1,212.50</div>
                      <p className="text-white/20 text-xs uppercase tracking-widest font-bold">READY TO SPEND INSTANTLY</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

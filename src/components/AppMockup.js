'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, Send, QrCode, CheckCircle2, ArrowUpRight, ArrowDownLeft, Shield } from 'lucide-react';

const MenuIcon = () => (
  <div className="flex flex-col gap-1.5 items-end">
    <div className="w-8 h-1 bg-white/80 rounded-full" />
    <div className="w-5 h-1 bg-white/80 rounded-full" />
  </div>
);

/* Frame 1: Multi-Currency Dashboard */
const Frame1 = () => (
  <div className="absolute inset-0 bg-[#1a3a2a] p-6 flex flex-col">
    <div className="flex justify-between items-center mb-8">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-[#c9a84c]" />
      </div>
      <MenuIcon />
    </div>

    <div className="text-white/40 text-[10px] font-bold tracking-[0.2em] mb-1 uppercase">Portfolio Value</div>
    <div className="text-white font-serif text-3xl mb-1">$12,480.00</div>
    <div className="flex items-center gap-1 mb-8">
      <ArrowUpRight size={12} className="text-emerald-400" />
      <span className="text-emerald-400 text-[10px] font-bold">+2.4% shielded from GHS inflation</span>
    </div>

    {/* Currency Balances */}
    <div className="space-y-3 mb-6">
      {[
        { flag: '🇺🇸', code: 'USD', amount: '5,200.00', color: 'bg-blue-500/20' },
        { flag: '🇬🇧', code: 'GBP', amount: '2,150.00', color: 'bg-red-500/20' },
        { flag: '🇬🇭', code: 'GHS', amount: '24,500.00', color: 'bg-yellow-500/20' },
        { flag: '🇳🇬', code: 'NGN', amount: '890,000', color: 'bg-green-500/20' },
      ].map((c) => (
        <div key={c.code} className="flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-lg">{c.flag}</span>
            <span className="text-white font-bold text-sm">{c.code}</span>
          </div>
          <span className="text-white/70 font-serif text-sm">{c.amount}</span>
        </div>
      ))}
    </div>

    {/* Quick Actions */}
    <div className="mt-auto grid grid-cols-3 gap-3">
      {[
        { icon: <Wallet size={16} />, label: 'LOAD' },
        { icon: <Send size={16} />, label: 'SEND' },
        { icon: <QrCode size={16} />, label: 'PAY' },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-2xl bg-[#c9a84c] flex items-center justify-center text-[#1a3a2a]">
            {item.icon}
          </div>
          <span className="text-white/40 text-[8px] font-bold tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

/* Frame 2: Cross-border Payout / Load */
const Frame2 = () => (
  <div className="absolute inset-0 bg-[#1a3a2a] p-6 flex flex-col">
    <div className="flex items-center gap-4 mb-10 text-white">
      <ArrowDownLeft size={20} />
      <span className="font-serif text-xl">Load Wallet</span>
    </div>

    <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5 mb-6">
      <div className="text-white/30 text-[9px] uppercase tracking-widest mb-3 font-bold">From Currency</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg">🇺🇸</span>
          <span className="text-white font-bold">USD</span>
        </div>
        <div className="text-white text-2xl font-serif">$500.00</div>
      </div>
    </div>

    <div className="flex justify-center my-2">
      <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/20">
        <ArrowDownLeft size={16} className="text-[#c9a84c]" />
      </div>
    </div>

    <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5 mb-6">
      <div className="text-white/30 text-[9px] uppercase tracking-widest mb-3 font-bold">To Wallet</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg">🇬🇭</span>
          <span className="text-white font-bold">GHS</span>
        </div>
        <div className="text-white/60 text-2xl font-serif">~7,450</div>
      </div>
    </div>

    <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 mb-6">
      <div className="flex justify-between text-white/30 text-[10px]">
        <span>Rate</span>
        <span className="text-white/50">$1 = GHS 14.90</span>
      </div>
      <div className="flex justify-between text-white/30 text-[10px] mt-2">
        <span>Fee</span>
        <span className="text-[#c9a84c]">Zero</span>
      </div>
    </div>

    <button className="mt-auto w-full bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.2em] py-5 rounded-xl text-xs">
      CONTINUE
    </button>
  </div>
);

/* Frame 3: Local Spending (MoMo + QR) */
const Frame3 = () => (
  <div className="absolute inset-0 bg-[#1a3a2a] p-6 flex flex-col">
    <div className="flex items-center gap-4 mb-10 text-white">
      <QrCode size={20} />
      <span className="font-serif text-xl">Pay Merchant</span>
    </div>

    <div className="flex-1 flex flex-col items-center justify-center">
      {/* QR Code Placeholder */}
      <div className="w-44 h-44 bg-white rounded-2xl p-4 mb-8 relative">
        <div className="absolute inset-4 grid grid-cols-5 gap-1">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-sm ${
                [0, 1, 4, 5, 6, 9, 10, 14, 15, 19, 20, 21, 24].includes(i)
                  ? 'bg-[#1a3a2a]'
                  : 'bg-[#1a3a2a]/20'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Scan to Pay</p>
      <p className="text-white font-serif text-2xl mb-1">GHS 85.00</p>
      <p className="text-white/30 text-xs">Accra Market Vendor</p>
    </div>

    <div className="flex gap-3">
      <button className="flex-1 bg-white/[0.06] text-white font-bold tracking-[0.15em] py-4 rounded-xl text-[10px] border border-white/[0.06]">
        MOMO
      </button>
      <button className="flex-1 bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.15em] py-4 rounded-xl text-[10px]">
        QR PAY
      </button>
    </div>
  </div>
);

/* Frame 4: Multi-country Confirmation */
const Frame4 = () => (
  <div className="absolute inset-0 bg-[#1a3a2a] p-6 flex flex-col justify-center items-center text-center">
    <div className="mb-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <CheckCircle2 size={72} className="text-[#c9a84c]" />
      </motion.div>
    </div>
    <div className="text-white font-serif text-2xl mb-3">Payment Sent</div>
    <div className="text-white/50 text-sm mb-8 max-w-[200px] leading-relaxed">
      GHS 85.00 sent to Accra Market Vendor via QR Pay.
    </div>

    <div className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5 mb-6">
      <div className="flex justify-between text-white/30 text-[10px] mb-3">
        <span>From</span>
        <span className="text-white/60">GHS Wallet</span>
      </div>
      <div className="flex justify-between text-white/30 text-[10px] mb-3">
        <span>Remaining</span>
        <span className="text-white/60">GHS 24,415.00</span>
      </div>
      <div className="flex justify-between text-white/30 text-[10px]">
        <span>Status</span>
        <span className="text-[#c9a84c] font-bold flex items-center gap-1">
          <Shield size={10} /> Confirmed
        </span>
      </div>
    </div>

    <div className="w-full space-y-3">
      <button className="w-full bg-white/[0.06] text-white font-bold tracking-[0.2em] py-4 rounded-xl text-[10px] border border-white/[0.06]">
        DOWNLOAD RECEIPT
      </button>
      <button className="w-full text-[#c9a84c] font-bold tracking-[0.2em] py-4 text-[10px]">
        BACK TO HOME
      </button>
    </div>
  </div>
);

export default function AppMockup() {
  const [activeFrame, setActiveFrame] = useState(0);
  const frames = [Frame1, Frame2, Frame3, Frame4];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="relative w-[280px] h-[580px] mx-auto scale-[0.85] lg:scale-100">
      {/* Phone Frame */}
      <div className="absolute inset-x-[-14px] inset-y-[-14px] border-[14px] border-[#0a1f12] rounded-[48px] pointer-events-none z-50 shadow-2xl shadow-black/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#0a1f12] rounded-b-2xl z-50" />

      <div className="relative w-full h-full bg-[#1a3a2a] rounded-[34px] overflow-hidden border border-white/5">
        <AnimatePresence mode="wait">
          {frames.map((FrameComp, i) =>
            i === activeFrame ? (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <FrameComp />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

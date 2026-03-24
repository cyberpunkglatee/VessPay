'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { Smartphone, Wallet, Send, RefreshCcw, CheckCircle2, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScreenWrapper = ({ children, className }) => (
  <div className={cn("absolute inset-0 bg-[#1a3a2a] p-6 flex flex-col", className)}>
    {children}
  </div>
);

const Frame1 = () => (
  <ScreenWrapper>
    <div className="flex justify-between items-center mb-12">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
         <div className="w-6 h-6 rounded-full bg-[#c9a84c]" />
      </div>
      <MenuIcon />
    </div>
    
    <div className="text-white/60 text-xs font-bold tracking-[0.2em] mb-2 uppercase">Total Balance</div>
    <div className="text-white font-serif text-4xl mb-12">GHS 4,250.00</div>
    
    <div className="grid grid-cols-3 gap-4 mb-8">
      {[
        { icon: <Wallet size={20} />, label: 'LOAD' },
        { icon: <Send size={20} />, label: 'SEND' },
        { icon: <RefreshCcw size={20} />, label: 'FX' },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-2xl bg-[#c9a84c] flex items-center justify-center text-[#1a3a2a]">
            {item.icon}
          </div>
          <span className="text-white/60 text-[10px] font-bold tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
    
    <div className="mt-auto space-y-4">
       <div className="h-16 rounded-xl bg-white/5 border border-white/10 flex items-center px-4 justify-between">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20" />
          <div className="flex-1 ml-4 h-2 bg-white/10 rounded-full w-24" />
          <div className="h-2 bg-white/20 rounded-full w-12" />
       </div>
       <div className="h-16 rounded-xl bg-white/5 border border-white/10 flex items-center px-4 justify-between">
          <div className="w-8 h-8 rounded-lg bg-orange-500/20" />
          <div className="flex-1 ml-4 h-2 bg-white/10 rounded-full w-32" />
          <div className="h-2 bg-white/20 rounded-full w-8" />
       </div>
    </div>
  </ScreenWrapper>
);

const Frame2 = () => (
  <ScreenWrapper>
    <div className="flex items-center gap-4 mb-12 text-white">
       <div className="rotate-180"><Send size={20} /></div>
       <span className="font-serif text-xl">Load Wallet</span>
    </div>
    
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
      <div className="text-white/40 text-[10px] uppercase tracking-widest mb-4 font-bold">From Currency</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
           <div className="w-8 h-6 bg-blue-600 rounded-sm" />
           <span className="text-white font-bold">USD</span>
        </div>
        <div className="text-white text-3xl font-serif">$500.00</div>
      </div>
    </div>
    
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
      <div className="text-white/40 text-[10px] uppercase tracking-widest mb-4 font-bold">To Wallet (GHS)</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
           <div className="w-8 h-6 bg-[#c9a84c] rounded-sm" />
           <span className="text-white font-bold">GHS</span>
        </div>
        <div className="text-white/60 text-2xl font-serif">~5,950</div>
      </div>
    </div>
    
    <button className="mt-auto w-full bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.2em] py-5 rounded-xl text-xs">
      CONTINUE
    </button>
  </ScreenWrapper>
);

const Frame3 = () => (
  <ScreenWrapper>
    <div className="flex items-center gap-4 mb-12 text-white">
       <Send size={20} />
       <span className="font-serif text-xl">Send Money</span>
    </div>
    
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="text-white/40 text-[10px] uppercase tracking-widest mb-2 font-bold">Recipient MoMo Number</div>
        <div className="text-white text-xl">055 123 4567</div>
      </div>
      <div className="border-b border-white/10 pb-4">
        <div className="text-white/40 text-[10px] uppercase tracking-widest mb-2 font-bold">Amount to Send</div>
        <div className="text-white text-3xl font-serif">GHS 1,200.00</div>
      </div>
    </div>
    
    <div className="mt-auto grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
       {[1,2,3,4,5,6,7,8,9,'',0,'X'].map((n) => (
         <div key={n} className="h-16 flex items-center justify-center text-white font-bold text-lg hover:bg-white/5 cursor-default">
           {n}
         </div>
       ))}
    </div>
    
    <button className="mt-6 w-full bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.2em] py-5 rounded-xl text-xs">
      SEND MONEY
    </button>
  </ScreenWrapper>
);

const Frame4 = () => (
  <ScreenWrapper className="justify-center items-center text-center">
    <div className="mb-8">
      <CheckCircle2 size={80} className="text-[#c9a84c]" />
    </div>
    <div className="text-white font-serif text-3xl mb-4">Payment Sent</div>
    <div className="text-white/60 max-w-[200px] text-sm leading-relaxed mb-12">
      Your MoMo transfer to 055 123 4567 was successful.
    </div>
    
    <div className="w-full space-y-3">
       <button className="w-full bg-white/10 text-white font-bold tracking-[0.2em] py-4 rounded-xl text-[10px]">
          DOWNLOAD RECEIPT
       </button>
       <button className="w-full text-[#c9a84c] font-bold tracking-[0.2em] py-4 text-[10px]">
          BACK TO HOME
       </button>
    </div>
  </ScreenWrapper>
);

const MenuIcon = () => (
  <div className="flex flex-col gap-1.5 items-end">
    <div className="w-8 h-1 bg-white/80 rounded-full" />
    <div className="w-5 h-1 bg-white/80 rounded-full" />
  </div>
);

export default function AppMockup({ scrollProgress }) {
  // Use scrollProgress to cross-fade frames
  // We have 4 frames, so we split 0-1 into 4 regions
  const frame1Opacity = useTransform(scrollProgress, [0, 0.25, 0.3], [1, 1, 0]);
  const frame2Opacity = useTransform(scrollProgress, [0.2, 0.3, 0.5, 0.55], [0, 1, 1, 0]);
  const frame3Opacity = useTransform(scrollProgress, [0.45, 0.55, 0.75, 0.8], [0, 1, 1, 0]);
  const frame4Opacity = useTransform(scrollProgress, [0.7, 0.8, 1], [0, 1, 1]);

  return (
    <div className="relative w-[300px] h-[600px] mx-auto scale-90 lg:scale-100">
      {/* Phone Frame */}
      <div className="absolute inset-x-[-15px] inset-y-[-15px] border-[15px] border-[#0a1f12] rounded-[50px] pointer-events-none z-50 shadow-2xl shadow-black/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0a1f12] rounded-b-2xl z-50" />
      
      <div className="relative w-full h-full bg-[#1a3a2a] rounded-[35px] overflow-hidden border border-white/5">
        <motion.div style={{ opacity: frame1Opacity }} className="absolute inset-0"><Frame1 /></motion.div>
        <motion.div style={{ opacity: frame2Opacity }} className="absolute inset-0"><Frame2 /></motion.div>
        <motion.div style={{ opacity: frame3Opacity }} className="absolute inset-0"><Frame3 /></motion.div>
        <motion.div style={{ opacity: frame4Opacity }} className="absolute inset-0"><Frame4 /></motion.div>
      </div>
    </div>
  );
}

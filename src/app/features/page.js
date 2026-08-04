'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { Smartphone, Zap, ShieldCheck, TrendingUp, Globe, Code2, Users, Wallet, ArrowRight, Check, Send, QrCode, ArrowUpRight, Shield } from 'lucide-react';

/* ── Interactive Visual Components ────────────────────────────── */

function CoverageMapVisual() {
  const [hovered, setHovered] = useState(null);
  const countries = [
    { name: 'Ghana', x: '42%', y: '52%' },
    { name: 'Nigeria', x: '38%', y: '48%' },
    { name: 'Kenya', x: '62%', y: '54%' },
    { name: 'South Africa', x: '55%', y: '78%' },
    { name: 'Tanzania', x: '60%', y: '60%' },
    { name: 'Senegal', x: '28%', y: '40%' },
    { name: 'Cameroon', x: '40%', y: '52%' },
    { name: 'Côte d\'Ivoire', x: '33%', y: '48%' },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Africa silhouette hint */}
      <div className="absolute inset-8 bg-[#c9a84c]/[0.03] rounded-[60px] border border-[#c9a84c]/10" />
      {countries.map((c, i) => (
        <motion.div
          key={c.name}
          className="absolute cursor-pointer"
          style={{ left: c.x, top: c.y }}
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
        >
          <div className={`w-4 h-4 rounded-full transition-all duration-300 ${hovered === i ? 'bg-[#c9a84c] scale-150 shadow-[0_0_20px_rgba(201,168,76,0.5)]' : 'bg-[#c9a84c]/40'}`} />
          {hovered === i && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#0a1f12] border border-[#c9a84c]/20 px-4 py-2 rounded-lg whitespace-nowrap z-10"
            >
              <span className="text-[#c9a84c] text-[10px] font-bold tracking-widest">{c.name}</span>
            </motion.div>
          )}
        </motion.div>
      ))}
      <div className="text-center z-10">
        <p className="text-white font-serif text-5xl">33</p>
        <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase mt-1">Countries</p>
      </div>
    </div>
  );
}

function WalletBalanceVisual() {
  const [selected, setSelected] = useState(0);
  const currencies = [
    { flag: '🇺🇸', code: 'USD', amount: '5,200.00', change: '+2.4%' },
    { flag: '🇬🇧', code: 'GBP', amount: '2,150.00', change: '+1.8%' },
    { flag: '🇬🇭', code: 'GHS', amount: '24,500', change: '—' },
    { flag: '🇳🇬', code: 'NGN', amount: '890,000', change: '—' },
  ];
  return (
    <div className="relative w-full h-full flex flex-col justify-center p-8">
      <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase mb-2">Portfolio</p>
      <p className="text-white font-serif text-4xl mb-8">$12,480<span className="text-white/30 text-lg">.00</span></p>
      <div className="space-y-3">
        {currencies.map((c, i) => (
          <motion.div
            key={c.code}
            onClick={() => setSelected(i)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-between rounded-xl px-5 py-4 cursor-pointer transition-all duration-300 ${
              selected === i
                ? 'bg-[#c9a84c]/10 border border-[#c9a84c]/20'
                : 'bg-white/[0.03] border border-white/[0.05] hover:border-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{c.flag}</span>
              <span className="text-white font-bold text-sm">{c.code}</span>
            </div>
            <div className="text-right">
              <span className="text-white/70 font-serif text-sm">{c.amount}</span>
              {c.change !== '—' && (
                <span className="ml-2 text-emerald-400 text-[10px] font-bold">{c.change}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FxRateVisual() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const pairs = { USD: '14.90', GBP: '18.85', EUR: '16.20' };
  return (
    <div className="relative w-full h-full flex flex-col justify-center p-8">
      <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase mb-6">Live FX Rate</p>
      <div className="flex gap-2 mb-8">
        {Object.keys(pairs).map((cur) => (
          <button
            key={cur}
            onClick={() => setFromCurrency(cur)}
            className={`px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest transition-all ${
              fromCurrency === cur
                ? 'bg-[#c9a84c] text-[#1a3a2a]'
                : 'bg-white/5 text-white/40 hover:text-white/60'
            }`}
          >
            {cur}
          </button>
        ))}
      </div>
      <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-6 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-white/50 text-sm">1 {fromCurrency}</span>
          <span className="text-white font-serif text-3xl">{pairs[fromCurrency]} <span className="text-lg text-white/40">GHS</span></span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-emerald-400 text-[10px] font-bold tracking-widest">LIVE MID-MARKET RATE</span>
      </div>
      <div className="mt-4 bg-white/[0.02] border border-white/[0.04] rounded-xl p-4">
        <div className="flex justify-between text-[10px]">
          <span className="text-white/30">VessPay margin</span>
          <span className="text-white/50">3% transparent</span>
        </div>
        <div className="flex justify-between text-[10px] mt-2">
          <span className="text-white/30">Hidden fees</span>
          <span className="text-[#c9a84c] font-bold">$0.00</span>
        </div>
      </div>
    </div>
  );
}

function SecurityVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-48 h-48 rounded-full border border-[#c9a84c]/10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute w-64 h-64 rounded-full border border-[#c9a84c]/5"
      />
      <Shield size={48} className="text-[#c9a84c] mb-6 relative z-10" />
      <p className="text-white font-serif text-xl mb-2 relative z-10">Bank-Grade</p>
      <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase relative z-10">256-BIT ENCRYPTION</p>
      <div className="mt-8 grid grid-cols-2 gap-3 relative z-10">
        {['KYC/AML', 'PCI DSS', 'SOC 2', 'GDPR'].map((cert) => (
          <div key={cert} className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-4 py-2 text-center">
            <span className="text-white/40 text-[9px] font-bold tracking-widest">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiCodeVisual() {
  const [step, setStep] = useState(0);
  const lines = [
    { text: 'const payout = await vesspay', delay: 0 },
    { text: '  .payouts.create({', delay: 0.3 },
    { text: '    amount: 500.00,', delay: 0.6 },
    { text: '    currency: "USD",', delay: 0.9 },
    { text: '    country: "GH"', delay: 1.2 },
    { text: '  });', delay: 1.5 },
  ];
  return (
    <div className="relative w-full h-full flex flex-col justify-center p-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-400/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
        <span className="text-white/20 text-[9px] ml-3 font-mono">payout.js</span>
      </div>
      <div className="bg-[#0d1a12] rounded-xl p-5 font-mono text-sm border border-white/[0.05]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: line.delay, duration: 0.4 }}
            className="text-white/50 leading-relaxed"
          >
            {line.text}
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
        className="mt-4 flex items-center gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-emerald-400 text-[10px] font-bold font-mono">✓ 200 OK — settled in 1.2s</span>
      </motion.div>
    </div>
  );
}

function OnboardingVisual() {
  const steps = ['API Call', 'Wallet Created', 'Worker Notified', 'Ready'];
  return (
    <div className="relative w-full h-full flex flex-col justify-center p-8">
      <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase mb-8">Auto-Onboarding Flow</p>
      <div className="space-y-4">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3 }}
            className="flex items-center gap-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 + 0.2, type: 'spring' }}
              className="w-8 h-8 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0"
            >
              <Check size={14} className="text-[#c9a84c]" />
            </motion.div>
            <div className="flex-1 bg-white/[0.03] border border-white/[0.05] rounded-xl px-5 py-3">
              <span className="text-white/60 text-sm font-medium">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="absolute left-[2.25rem] mt-12 w-px h-4 bg-[#c9a84c]/20" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WebhookVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center p-8">
      <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase mb-6">Webhook Events</p>
      <div className="space-y-3">
        {[
          { event: 'payout.completed', time: '0.8s ago', status: 'success' },
          { event: 'payout.completed', time: '1.2s ago', status: 'success' },
          { event: 'wallet.created', time: '3.1s ago', status: 'success' },
          { event: 'payout.initiated', time: '5.0s ago', status: 'pending' },
        ].map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/[0.03] border border-white/[0.05] rounded-xl px-5 py-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${w.status === 'success' ? 'bg-emerald-400' : 'bg-yellow-400 animate-pulse'}`} />
              <code className="text-white/50 text-xs font-mono">{w.event}</code>
            </div>
            <span className="text-white/20 text-[10px]">{w.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BatchVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center p-8">
      <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase mb-4">Batch Payout</p>
      <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5 mb-4">
        <div className="flex justify-between mb-3">
          <span className="text-white/40 text-[10px]">Recipients</span>
          <span className="text-white font-serif text-lg">248</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-white/40 text-[10px]">Countries</span>
          <span className="text-white font-serif text-lg">12</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40 text-[10px]">Total</span>
          <span className="text-[#c9a84c] font-serif text-lg">$148,200</span>
        </div>
      </div>
      <div className="w-full bg-white/5 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="bg-[#c9a84c] h-full rounded-full"
        />
      </div>
      <span className="text-emerald-400 text-[10px] font-bold tracking-widest">248/248 SETTLED</span>
    </div>
  );
}

function NoSimVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Smartphone size={64} className="text-white/20 mb-6" />
      </motion.div>
      <div className="relative mb-4">
        <div className="w-16 h-10 bg-white/10 rounded-lg border border-white/10 flex items-center justify-center">
          <span className="text-white/30 text-[8px] font-bold">SIM</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-0.5 bg-red-400/60 rotate-45" />
        </div>
      </div>
      <p className="text-white font-serif text-lg mb-1">No SIM Required</p>
      <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase">Passport + VessPay = Access</p>
    </div>
  );
}

function InstantPayVisual() {
  const [paid, setPaid] = useState(false);
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
      <QrCode size={48} className="text-white/20 mb-4" />
      <p className="text-white/40 text-[10px] uppercase tracking-widest mb-6">Tap to simulate payment</p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => { setPaid(true); setTimeout(() => setPaid(false), 2500); }}
        className={`px-8 py-4 rounded-xl font-bold tracking-widest text-xs transition-all duration-300 ${
          paid
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
            : 'bg-[#c9a84c] text-[#1a3a2a] hover:bg-white'
        }`}
      >
        {paid ? '✓ PAID — GHS 85.00' : 'PAY MERCHANT'}
      </motion.button>
      {paid && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/30 text-[10px] mt-4 tracking-widest"
        >
          SETTLED IN 0.4 SECONDS
        </motion.p>
      )}
    </div>
  );
}

function InflationVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center p-8">
      <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase mb-6">Inflation Shield</p>
      <div className="space-y-4">
        <div className="bg-red-500/5 border border-red-500/10 rounded-xl px-5 py-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-white/50 text-sm">Local savings (GHS)</span>
            <span className="text-red-400 text-sm font-bold">-23% purchasing power</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-1.5 mt-2">
            <div className="bg-red-400/40 h-full rounded-full w-[77%]" />
          </div>
        </div>
        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl px-5 py-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-white/50 text-sm">VessPay (Hold USD)</span>
            <span className="text-emerald-400 text-sm font-bold flex items-center gap-1"><ArrowUpRight size={12} /> Protected</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-1.5 mt-2">
            <div className="bg-emerald-400/40 h-full rounded-full w-[98%]" />
          </div>
        </div>
      </div>
      <p className="text-white/20 text-[9px] mt-4 tracking-widest uppercase">Convert to local currency only when you spend</p>
    </div>
  );
}

function CrossBorderVisual() {
  const [sending, setSending] = useState(false);
  const destinations = ['🇬🇭 Accra', '🇳🇬 Lagos', '🇰🇪 Nairobi', '🇿🇦 Cape Town'];
  return (
    <div className="relative w-full h-full flex flex-col justify-center p-8">
      <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase mb-6">Cross-Border Transfer</p>
      <div className="space-y-3 mb-6">
        {destinations.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
            className="bg-white/[0.03] border border-white/[0.05] rounded-xl px-5 py-3 flex items-center justify-between cursor-pointer hover:border-[#c9a84c]/20 transition-colors"
          >
            <span className="text-white/60 text-sm">{d}</span>
            <Send size={12} className="text-white/20" />
          </motion.div>
        ))}
      </div>
      <p className="text-white/20 text-[9px] tracking-widest uppercase">Same wallet • Any destination</p>
    </div>
  );
}

/* ── Feature Visual Mapping ───────────────────────────────────── */

const visualMap = {
  // Platform
  '33-Country Payout Network': CoverageMapVisual,
  'Multi-Currency Wallet': WalletBalanceVisual,
  'Real-Time FX Engine': FxRateVisual,
  'Bank-Grade Security': SecurityVisual,
  // Business
  'Unified Payout API': ApiCodeVisual,
  'Automated Worker Onboarding': OnboardingVisual,
  'Webhook Notifications': WebhookVisual,
  'Batch Payouts': BatchVisual,
  // Individual
  'No SIM Card Required': NoSimVisual,
  'Instant Local Spending': InstantPayVisual,
  'Inflation Shield': InflationVisual,
  'Cross-Border Transfers': CrossBorderVisual,
};

/* ── Feature Data ─────────────────────────────────────────────── */

const platformFeatures = [
  {
    title: "33-Country Payout Network",
    description: "One integration delivers payments across Ghana, Nigeria, Kenya, and 30 more African countries. Ecobank's pan-African banking infrastructure handles settlement, compliance, and local payment rails.",
    icon: <Globe className="text-[#c9a84c]" size={40} />,
  },
  {
    title: "Multi-Currency Wallet",
    description: "Users hold balances in USD, GBP, EUR, and convert to local currencies only when they need to spend. Shield earnings from inflation and bypass predatory FX bureaus.",
    icon: <Wallet className="text-[#c9a84c]" size={40} />,
  },
  {
    title: "Real-Time FX Engine",
    description: "Wholesale treasury rates for enterprise API users. Transparent competitive rates for consumers. See exactly what you pay before every conversion — no hidden spreads.",
    icon: <TrendingUp className="text-[#c9a84c]" size={40} />,
  },
  {
    title: "Bank-Grade Security",
    description: "Built on Ecobank's regulated banking infrastructure. Every transaction is encrypted, every user KYC'd, every corridor compliant with local financial regulations.",
    icon: <ShieldCheck className="text-[#c9a84c]" size={40} />,
  },
];

const businessFeatures = [
  {
    title: "Unified Payout API",
    description: "Single REST API endpoint for payroll, contractor payments, and disbursements. JSON in, money out. Go live in 48 hours with sandbox and production environments.",
    icon: <Code2 className="text-[#c9a84c]" size={40} />,
  },
  {
    title: "Automated Worker Onboarding",
    description: "B2B2C onboarding flow — your workers receive a VessPay wallet automatically when you send their first payout. No manual registration required.",
    icon: <Users className="text-[#c9a84c]" size={40} />,
  },
  {
    title: "Webhook Notifications",
    description: "Real-time status updates for every payout. Configure webhooks for completed, failed, and pending transactions. Full audit trail via API.",
    icon: <Zap className="text-[#c9a84c]" size={40} />,
  },
  {
    title: "Batch Payouts",
    description: "Send hundreds of payouts in a single API call. Upload CSV or use the batch endpoint. Automated retry logic and error handling built in.",
    icon: <Globe className="text-[#c9a84c]" size={40} />,
  },
];

const consumerFeatures = [
  {
    title: "No SIM Card Required",
    description: "Access mobile money across Africa without local SIM registration or biometric verification. Your international passport and VessPay wallet is all you need.",
    icon: <Smartphone className="text-[#c9a84c]" size={40} />,
  },
  {
    title: "Instant Local Spending",
    description: "Pay any MoMo number, scan QR codes at merchants, or tap your VessPay card. Instant settlement across Ghana, Nigeria, Kenya, and more.",
    icon: <Zap className="text-[#c9a84c]" size={40} />,
  },
  {
    title: "Inflation Shield",
    description: "Hold your money in stable foreign currencies (USD, GBP, EUR). Convert to local currency only when you're ready to spend. Protect your purchasing power.",
    icon: <ShieldCheck className="text-[#c9a84c]" size={40} />,
  },
  {
    title: "Cross-Border Transfers",
    description: "Send money to any VessPay wallet or mobile money account across 33 African countries. Same wallet, any destination. Jurisdictions are not a problem.",
    icon: <TrendingUp className="text-[#c9a84c]" size={40} />,
  },
];

const tabs = [
  { key: 'platform', label: 'Platform', features: platformFeatures },
  { key: 'business', label: 'For Business', features: businessFeatures },
  { key: 'individual', label: 'For Individuals', features: consumerFeatures },
];

/* ── Page Component ───────────────────────────────────────────── */

export default function Features() {
  const [activeTab, setActiveTab] = useState('platform');
  const currentFeatures = tabs.find(t => t.key === activeTab)?.features || platformFeatures;

  return (
    <main className="bg-[#1a3a2a] min-h-screen">
      <PageHero 
        subtitle="VESSPAY PLATFORM" 
        title="Everything You Need." 
        accent="Nothing You Don't." 
      />

      <section className="py-32 px-6 overflow-hidden">
        <div className="container mx-auto">
          {/* Tab Toggle */}
          <div className="flex items-center gap-2 mb-20 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-[#c9a84c] text-[#1a3a2a]'
                    : 'bg-white/5 text-white/40 border border-white/10 hover:text-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-32"
          >
            {currentFeatures.map((f, i) => {
              const VisualComponent = visualMap[f.title];
              return (
                <motion.div
                  key={f.title}
                  initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}
                >
                  {/* Content Box */}
                  <div className="flex-1 space-y-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center">
                       {f.icon}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
                      {f.title}
                    </h2>
                    <p className="text-white/50 text-lg leading-relaxed max-w-xl">
                      {f.description}
                    </p>
                    <div className="pt-4">
                      <Link 
                        href={activeTab === 'business' ? '/docs/api' : '/download'} 
                        className="inline-flex items-center gap-2 text-[#c9a84c] font-bold tracking-[0.2em] text-xs uppercase group"
                      >
                        {activeTab === 'business' ? 'VIEW API DOCS' : 'JOIN WAITLIST'}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Interactive Visual Side */}
                  <div className="flex-1 w-full relative">
                     <div className="absolute inset-x-[-20%] inset-y-[-20%] bg-[#c9a84c]/5 blur-[80px] rounded-full pointer-events-none" />
                     <div className="relative aspect-video lg:aspect-square bg-white/[0.03] rounded-3xl border border-white/[0.06] overflow-hidden shadow-2xl">
                       {VisualComponent ? <VisualComponent /> : null}
                     </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mini CTA Strip */}
      <section className="bg-[#c9a84c] py-20 px-6 mt-20">
        <div className="container mx-auto text-center">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
           >
              <h2 className="text-3xl lg:text-5xl font-serif text-[#1a3a2a] mb-8">
                The borderless wallet is launching soon.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/download" 
                  className="inline-block bg-[#1a3a2a] text-white font-bold tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-white hover:text-[#1a3a2a] transition-all duration-300 text-xs"
                >
                  JOIN WALLET WAITLIST
                </Link>
                <Link 
                  href="/docs/api" 
                  className="inline-block border-2 border-[#1a3a2a] text-[#1a3a2a] font-bold tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-[#1a3a2a] hover:text-white transition-all duration-300 text-xs"
                >
                  VIEW API DOCS
                </Link>
              </div>
           </motion.div>
        </div>
      </section>
    </main>
  );
}

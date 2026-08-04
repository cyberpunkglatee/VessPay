'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { ArrowRight, Copy, Check, Terminal, Zap, Shield, Globe } from 'lucide-react';
import { useState } from 'react';

const endpoints = [
  {
    method: 'POST',
    path: '/v1/payouts',
    description: 'Create a payout to any supported African country',
  },
  {
    method: 'GET',
    path: '/v1/payouts/{id}',
    description: 'Retrieve payout status and details',
  },
  {
    method: 'GET',
    path: '/v1/rates',
    description: 'Get real-time FX rates for all supported corridors',
  },
  {
    method: 'POST',
    path: '/v1/wallets',
    description: 'Create a wallet for B2B2C worker onboarding',
  },
  {
    method: 'GET',
    path: '/v1/corridors',
    description: 'List all supported countries and payment methods',
  },
];

const codeExamples = {
  curl: `curl -X POST https://api.vesspay.com/v1/payouts \\
  -H "Authorization: Bearer vp_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 500.00,
    "currency": "USD",
    "destination_currency": "GHS",
    "recipient": {
      "type": "mobile_money",
      "phone": "+233551234567",
      "network": "MTN",
      "country": "GH"
    },
    "reference": "payroll-aug-2026-001",
    "metadata": {
      "employee_id": "EMP-4821",
      "department": "engineering"
    }
  }'`,
  node: `import VessPay from '@vesspay/node';

const vesspay = new VessPay('vp_live_...');

const payout = await vesspay.payouts.create({
  amount: 500.00,
  currency: 'USD',
  destination_currency: 'GHS',
  recipient: {
    type: 'mobile_money',
    phone: '+233551234567',
    network: 'MTN',
    country: 'GH',
  },
  reference: 'payroll-aug-2026-001',
  metadata: {
    employee_id: 'EMP-4821',
    department: 'engineering',
  },
});

console.log(payout.id); // "po_3f8a..."
console.log(payout.status); // "completed"`,
  python: `import vesspay

client = vesspay.Client("vp_live_...")

payout = client.payouts.create(
    amount=500.00,
    currency="USD",
    destination_currency="GHS",
    recipient={
        "type": "mobile_money",
        "phone": "+233551234567",
        "network": "MTN",
        "country": "GH",
    },
    reference="payroll-aug-2026-001",
    metadata={
        "employee_id": "EMP-4821",
        "department": "engineering",
    },
)

print(payout.id)      # "po_3f8a..."
print(payout.status)  # "completed"`,
};

const integrationSteps = [
  {
    number: '01',
    title: 'Get API Keys',
    description: 'Sign up for a sandbox account and receive your test API keys instantly. Go live with production keys after compliance review.',
  },
  {
    number: '02',
    title: 'Configure Corridors',
    description: 'Select which countries and payment methods you need. Set up webhooks for real-time payout status updates.',
  },
  {
    number: '03',
    title: 'Send Payouts',
    description: 'Make your first API call. Funds arrive in the recipient\'s VessPay wallet or mobile money account within seconds.',
  },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-white/30 hover:text-[#c9a84c] transition-colors p-1"
      aria-label="Copy code"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export default function ApiDocs() {
  const [activeTab, setActiveTab] = useState('curl');

  return (
    <main className="bg-[#1a3a2a] min-h-screen text-white">
      <PageHero
        subtitle="DEVELOPER API"
        title="The Invisible Payout"
        accent="API Platform."
      />

      {/* API Overview */}
      <section className="py-20 lg:py-32 px-6 mt-8 lg:mt-0">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/50 text-lg leading-relaxed mb-12">
                One API integration to send payroll, contractor payments, and disbursements 
                across 33 African countries. Direct-to-wallet instant clearing through 
                Ecobank&apos;s banking infrastructure. Workers receive funds in their VessPay 
                Borderless Multi-Country Wallet.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6 mb-20">
              {[
                { icon: <Zap size={24} />, title: 'Instant Settlement', desc: 'Funds arrive in seconds, not days' },
                { icon: <Globe size={24} />, title: '33 Countries', desc: 'One integration, pan-African coverage' },
                { icon: <Shield size={24} />, title: 'Compliant', desc: 'Automated KYC and regulatory checks' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-8"
                >
                  <div className="text-[#c9a84c] mb-4">{item.icon}</div>
                  <h3 className="text-white font-serif text-lg mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-32 px-6 bg-[#0a1f12]" id="integrations">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Quick Start</p>
            <h2 className="text-4xl lg:text-6xl font-serif text-white mb-4">
              Go live in <span className="text-[#c9a84c]">48 hours</span>.
            </h2>
          </motion.div>

          <div className="max-w-4xl">
            {/* Tab Selector */}
            <div className="flex items-center gap-2 mb-6">
              {[
                { key: 'curl', label: 'cURL' },
                { key: 'node', label: 'Node.js' },
                { key: 'python', label: 'Python' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-lg text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20'
                      : 'text-white/30 hover:text-white/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code Block */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0d1a12] border border-white/[0.06] rounded-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#c9a84c]" />
                  <span className="text-white/30 text-[10px] font-bold tracking-widest uppercase">
                    Create a Payout
                  </span>
                </div>
                <CopyButton text={codeExamples[activeTab]} />
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-white/60 text-sm leading-relaxed font-mono">
                  {codeExamples[activeTab]}
                </code>
              </pre>
            </motion.div>

            {/* Response Preview */}
            <div className="mt-6 bg-[#0d1a12] border border-white/[0.06] rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <span className="text-white/30 text-[10px] font-bold tracking-widest uppercase">Response — 200 OK</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400 text-[10px] font-bold">Success</span>
                </div>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-white/60 text-sm leading-relaxed font-mono">{`{
  "id": "po_3f8a9b2c1d4e",
  "status": "completed",
  "amount": 500.00,
  "currency": "USD",
  "destination_amount": 7450.00,
  "destination_currency": "GHS",
  "fx_rate": 14.90,
  "fee": 0.00,
  "recipient": {
    "wallet_id": "wlt_8k2m...",
    "type": "mobile_money",
    "country": "GH"
  },
  "settled_at": "2026-08-04T02:15:00Z"
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-4">
              API <span className="text-[#c9a84c]">Endpoints</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl space-y-4">
            {endpoints.map((ep, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-6 bg-white/[0.02] border border-white/[0.05] rounded-xl px-6 py-5 hover:border-[#c9a84c]/15 transition-colors"
              >
                <span className={`text-[10px] font-bold tracking-widest px-3 py-1 rounded ${
                  ep.method === 'POST' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {ep.method}
                </span>
                <code className="text-white/70 text-sm font-mono flex-1">{ep.path}</code>
                <span className="text-white/30 text-sm hidden md:block">{ep.description}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-32 px-6 bg-[#0a1f12]/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-serif text-white mb-4">
              Three steps to <span className="text-[#c9a84c]">go live</span>.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {integrationSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className="text-8xl font-serif text-white/5 absolute -top-12 left-0 pointer-events-none group-hover:text-[#c9a84c]/10 transition-colors duration-500">
                  {step.number}
                </div>
                <div className="relative pt-8">
                  <div className="w-12 h-1 bg-[#c9a84c] mb-8" />
                  <h3 className="text-2xl font-serif text-white mb-4">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#c9a84c]">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-serif text-[#1a3a2a] mb-8">
              Ready to integrate? Request API access.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#1a3a2a] text-white font-bold tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-white hover:text-[#1a3a2a] transition-all duration-300 text-xs uppercase"
              >
                Request API Access
              </Link>
              <Link
                href="/"
                className="inline-block border-2 border-[#1a3a2a] text-[#1a3a2a] font-bold tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-[#1a3a2a] hover:text-white transition-all duration-300 text-xs uppercase"
              >
                Back to Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

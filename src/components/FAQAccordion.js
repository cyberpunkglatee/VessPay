'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do I need a local SIM card?",
    answer: "No. VessPay is designed to work without local SIM registration or biometric verification. Your international passport and the VessPay app is all you need to send and spend across 33 African countries."
  },
  {
    question: "What currencies can I hold?",
    answer: "You can hold balances in USD, GBP, EUR, and CAD. Unlike traditional services that convert instantly, VessPay lets you keep your money in stable foreign currency and convert to local currencies (GHS, NGN, KES, etc.) only when you're ready to spend."
  },
  {
    question: "Which countries are supported?",
    answer: "VessPay operates across Ecobank's 33-country African network, including Ghana, Nigeria, Kenya, South Africa, Tanzania, Senegal, Cameroon, Côte d'Ivoire, and more. One wallet works everywhere — jurisdictions are not a problem."
  },
  {
    question: "How long does a transfer take?",
    answer: "Wallet-to-wallet transfers and mobile money payouts are instant. The moment you hit send, funds arrive in the recipient's account — whether it's MoMo in Ghana, M-Pesa in Kenya, or a VessPay wallet anywhere on the network."
  },
  {
    question: "What are the fees?",
    answer: "For individuals: a transparent 3% FX margin on currency conversion and a flat local fee per transaction. No hidden spreads. For enterprise API users: wholesale treasury rates with volume-based pricing. Contact sales for custom plans."
  },
  {
    question: "How does the Payout API work?",
    answer: "One REST API integration covers all 33 countries. Send payroll, contractor payments, or disbursements with a single API call. Workers automatically receive a VessPay wallet on first payout — no manual onboarding. SDKs available for Node.js, Python, and more."
  },
  {
    question: "What about inflation protection?",
    answer: "VessPay's multi-currency wallet lets you hold earnings in stable foreign currencies (USD, GBP, EUR) instead of converting to local currency immediately. This shields your purchasing power from local inflation — you convert only when you're ready to spend."
  },
  {
    question: "Is my money safe?",
    answer: "Yes. VessPay operates in direct sponsorship alliance with Ecobank Ghana / Ecobank Group. Every transaction settles through Ecobank's regulated banking infrastructure with bank-grade encryption, full KYC/AML compliance, and institutional-level security."
  },
  {
    question: "Can I use VessPay outside Africa?",
    answer: "Yes. You can manage your wallet, load funds, and initiate transfers from anywhere in the world. The VessPay wallet is borderless — load from your international bank and spend locally when you arrive in any of our 33 supported countries."
  },
  {
    question: "How do I get support?",
    answer: "Reach us via the WhatsApp button in the app, or email support@vesspay.com. Enterprise API users get dedicated account management and priority support. We respond within 24 hours."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-white/5 pb-4">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left group"
          >
            <span className={`text-lg font-serif transition-colors ${openIndex === i ? 'text-[#c9a84c]' : 'text-white group-hover:text-[#c9a84c]'}`}>
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              className="text-[#c9a84c] flex-shrink-0 ml-4"
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="text-white/60 pb-6 leading-relaxed font-sans text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

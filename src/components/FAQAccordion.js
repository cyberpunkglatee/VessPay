'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do I need a Ghanaian SIM card?",
    answer: "No. VessPay is designed to work with your international SIM card and data roaming or WiFi. You get full MoMo access without the need for local registration."
  },
  {
    question: "What currencies can I load?",
    answer: "You can load funds in USD, GBP, EUR, and CAD. Your balance is instantly converted to GHS at our transparent daily rate."
  },
  {
    question: "How long does a transfer take?",
    answer: "Transfers to MoMo numbers are instant. The moment you hit send, the funds hit the recipient's wallet."
  },
  {
    question: "What are the fees?",
    answer: "We charge a transparent 3% FX margin on currency conversion and a flat GHS 2.00 fee per MoMo disbursement. No hidden spreads."
  },
  {
    question: "Which MoMo networks are supported?",
    answer: "We support all major networks in Ghana: MTN Mobile Money, Vodafone Cash, and AirtelTigo Money."
  },
  {
    question: "Is my money safe?",
    answer: "Yes. VessPay is built on Ecobank's regulated banking infrastructure, ensuring your funds are protected by one of Africa's largest banks."
  },
  {
    question: "Can I use VessPay outside Ghana?",
    answer: "Yes, you can manage your wallet from anywhere in the world. You can load funds and send payments to anyone in Ghana regardless of your location."
  },
  {
    question: "How do I get support?",
    answer: "You can reach us directly via the WhatsApp button in the app, or email our support team at support@vesspay.com. We respond within 24 hours."
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
              className="text-[#c9a84c]"
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

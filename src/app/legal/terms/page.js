'use client';

import LegalLayout from '@/components/LegalLayout';

export default function TermsOfService() {
  const toc = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "eligibility", label: "2. Eligibility" },
    { id: "services", label: "3. Our Services" },
    { id: "fees", label: "4. Fees and Rates" },
    { id: "prohibited", label: "5. Prohibited Activities" },
  ];

  return (
    <LegalLayout
      subtitle="LEGAL"
      title="Terms of Service"
      lastUpdated="March 10, 2025"
      toc={toc}
    >
      <div className="space-y-12 font-sans leading-relaxed text-[#1a3a2a]/80">
        <section id="acceptance" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">1. Acceptance of Terms</h2>
          <p>
            By downloading or using the VessPay application, you agree to these Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section id="eligibility" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">2. Eligibility</h2>
          <p>
            You must be at least 18 years old and hold a valid international passport to use VessPay for money transfers and GHS wallet services.
          </p>
        </section>

        <section id="services" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">3. Our Services</h2>
          <p>
            VessPay provides a digital wallet that allows users to hold GHS and make Mobile Money (MoMo) payments in Ghana. We are a technology provider and not a bank.
          </p>
        </section>

        <section id="fees" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">4. Fees and Exchange Rates</h2>
          <p>
            Users agree to the fee structure disclosed in the app, including the 3% FX margin and flat MoMo disbursement fees. Rates are subject to market conditions.
          </p>
        </section>

        <section id="prohibited" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">5. Prohibited Activities</h2>
          <p>
            Users are prohibited from using VessPay for any illegal activities, including money laundering, fraud, or financing of illegal entities.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}

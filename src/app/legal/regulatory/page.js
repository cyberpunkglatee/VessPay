'use client';

import LegalLayout from '@/components/LegalLayout';

export default function RegulatoryNotice() {
  const toc = [
    { id: "compliance", label: "1. Compliance Status" },
    { id: "partners", label: "2. Regulated Partnerships" },
    { id: "filtering", label: "3. Sanctions Filtering" },
    { id: "protection", label: "4. Consumer Protection" },
  ];

  return (
    <LegalLayout
      subtitle="LEGAL"
      title="Regulatory Notice"
      lastUpdated="March 10, 2025"
      toc={toc}
    >
      <div className="space-y-12 font-sans leading-relaxed text-[#1a3a2a]/80">
        <section id="compliance" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">1. Compliance Status</h2>
          <p>
            VessPay Ghana Limited is a registered software development and technology company in Ghana, a subsidiary of Lncksys.
          </p>
        </section>

        <section id="partners" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">2. Regulated Partnerships</h2>
          <p>
            Our financial services, including wallet holding and MoMo disbursements, are powered by licensed and regulated banking partners in Ghana. VessPay provides the technology interface for these regulated services.
          </p>
        </section>

        <section id="filtering" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">3. Sanctions Filtering</h2>
          <p>
            We perform real-time sanctions filtering and KYC (Know Your Customer) checks on all users to comply with global AML (Anti-Money Laundering) standards.
          </p>
        </section>

        <section id="protection" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">4. Consumer Protection</h2>
          <p>
            User funds are held in segregated accounts with our banking partners, ensuring that your money is safe and accessible at all times.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}

'use client';

import LegalLayout from '@/components/LegalLayout';

export default function PrivacyPolicy() {
  const toc = [
    { id: "intro", label: "1. Introduction" },
    { id: "collection", label: "2. Information We Collect" },
    { id: "usage", label: "3. How We Use Information" },
    { id: "sharing", label: "4. Sharing Information" },
    { id: "security", label: "5. Data Security" },
  ];

  return (
    <LegalLayout
      subtitle="LEGAL"
      title="Privacy Policy"
      lastUpdated="March 10, 2025"
      toc={toc}
    >
      <div className="space-y-12 font-sans leading-relaxed text-[#1a3a2a]/80">
        <section id="intro" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">1. Introduction</h2>
          <p>
            VessPay Ghana Limited (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our mobile application and website.
          </p>
        </section>

        <section id="collection" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">2. Information We Collect</h2>
          <p>To provide our services, we collect several types of information, including:</p>
          <ul className="list-disc pl-6 space-y-4 pt-4">
            <li><strong>Personal Data:</strong> Name, email address, phone number, and passport details for identity verification.</li>
            <li><strong>Transaction Data:</strong> Details about the payments you make, including amounts, dates, and recipient MoMo numbers.</li>
            <li><strong>Technical Data:</strong> IP address, device type, and app usage statistics.</li>
          </ul>
        </section>

        <section id="usage" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">3. How We Use Your Information</h2>
          <p>
            We use your information to verify your identity, process transactions, prevent fraud, and comply with regulatory requirements in Ghana and internationally.
          </p>
        </section>

        <section id="sharing" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">4. Sharing Your Information</h2>
          <p>
            We may share your data with our regulated banking partners, payment processors, and regulatory authorities as required by law.
          </p>
        </section>

        <section id="security" className="scroll-mt-32">
          <h2 className="text-2xl font-serif text-[#1a3a2a] mb-6">5. Data Security</h2>
          <p>
            We implement industry-standard security measures, including end-to-end encryption and secure servers, to protect your data from unauthorized access.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}

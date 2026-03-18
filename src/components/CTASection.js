import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-20 text-center bg-primary-navy text-white" style={{ background: 'var(--primary-green)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
                    Ready to experience the future?
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', lineHeight: 1.6 }}>
                    Join thousands of diasporas and visitors who trust VessPay for their financial journey in Ghana.
                    Secure, compliant, and refined.
                </p>
                <Link href="/get-started" className="btn btn-gold" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                    Create Free Account <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                </Link>
            </div>
        </section>
    );
}

import Link from 'next/link';
import { Check, X } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: "Pricing | VessPay",
    description: "Simple, honest fees for Ghana payments. See how VessPay compares to traditional methods.",
};

export default function Pricing() {
    const fees = [
        { name: 'FX Conversion', value: '3% mid-market margin', note: 'Transparent exchange rate' },
        { name: 'MoMo Disbursement', value: 'GHS 2.00 flat fee', note: 'Per transaction' },
        { name: 'Loading Funds', value: 'Free', note: 'Card network fees may apply' },
        { name: 'Account Holding', value: 'Free', note: 'Zero monthly fees' },
    ];

    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <h1>Simple, <span className="text-gradient-gold">Honest Fees.</span></h1>
                        <p>No hidden charges. No surprises. Just clear, upfront pricing built for you.</p>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.fees}`}>
                <div className="container">
                    <div className={styles.feeGrid}>
                        {fees.map((fee, index) => (
                            <div key={index} className={`${styles.feeCard} reveal`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <h3>{fee.name}</h3>
                                <div className={styles.feeValue}>{fee.value}</div>
                                <p>{fee.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`section ${styles.comparison}`}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Why Choose VessPay?</h2>
                        <p>See how we compare to traditional cash and ATM withdrawals in Ghana.</p>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>VessPay</th>
                                    <th>Cash / ATMs</th>
                                    <th>Remittance Apps</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Local MoMo Payments</td>
                                    <td><Check className={styles.check} /> Instant</td>
                                    <td><X className={styles.x} /> Not possible</td>
                                    <td><X className={styles.x} /> From abroad only</td>
                                </tr>
                                <tr>
                                    <td>ATM Withdrawal Fees</td>
                                    <td><Check className={styles.check} /> None</td>
                                    <td><X className={styles.x} /> High (GHS 20-50)</td>
                                    <td><X className={styles.x} /> N/A</td>
                                </tr>
                                <tr>
                                    <td>Ease of Use</td>
                                    <td><Check className={styles.check} /> 100% Mobile</td>
                                    <td><X className={styles.x} /> Finding working ATMs</td>
                                    <td><Check className={styles.check} /> Mobile</td>
                                </tr>
                                <tr>
                                    <td>Local SIM Card</td>
                                    <td><Check className={styles.check} /> Not Required</td>
                                    <td><Check className={styles.check} /> N/A</td>
                                    <td><X className={styles.x} /> Often Required</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.ctaCard}>
                        <Check className={styles.largeCheck} />
                        <h2>No hidden fees. Guaranteed.</h2>
                        <p>Our transparency is our superpower. You will always see the exact cost before you pay.</p>
                        <Link href="/download" className="btn-luxury btn-primary-luxury">Join the Waitlist</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

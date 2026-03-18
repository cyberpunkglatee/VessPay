import Link from 'next/link';
import { CreditCard, Wallet, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: "How It Works | VessPay",
    description: "Learn how to use VessPay to pay MoMo in Ghana without a local SIM or Ghana Card.",
};

export default function HowItWorks() {
    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <h1>How VessPay <span className="text-gradient-gold">Works</span></h1>
                        <p>From your home country to the heart of Ghana—paying like a local has never been this simple.</p>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.journey}`}>
                <div className="container">
                    <div className={styles.journeyFlow}>
                        {/* Step 1 */}
                        <div className={`${styles.journeyStep} reveal`}>
                            <div className={styles.stepNumber}>01</div>
                            <div className={styles.stepContent}>
                                <div className={styles.stepTitle}>
                                    <CreditCard size={28} className="text-gold" />
                                    <h3>Load Funds from Anywhere</h3>
                                </div>
                                <p>
                                    Securely link your visa, mastercard, or bank account from your home country.
                                    Add funds in USD, GBP, EUR, or CAD instantly.
                                </p>
                                <div className={styles.stepFeature}>
                                    <CheckCircle2 size={18} />
                                    <span>Secure encryption</span>
                                </div>
                                <div className={styles.stepFeature}>
                                    <CheckCircle2 size={18} />
                                    <span>Real-time availability</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={`${styles.journeyStep} reveal`} style={{ animationDelay: '0.2s' }}>
                            <div className={styles.stepNumber}>02</div>
                            <div className={styles.stepContent}>
                                <div className={styles.stepTitle}>
                                    <Wallet size={28} className="text-gold" />
                                    <h3>Convert and Hold GHS</h3>
                                </div>
                                <p>
                                    Exchange your foreign currency into Ghana Cedis (GHS) at transparent,
                                    competitive mid-market rates. Hold them in your virtual wallet.
                                </p>
                                <div className={styles.stepFeature}>
                                    <CheckCircle2 size={18} />
                                    <span>Transparent 3% FX margin</span>
                                </div>
                                <div className={styles.stepFeature}>
                                    <CheckCircle2 size={18} />
                                    <span>No account holding fees</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className={`${styles.journeyStep} reveal`} style={{ animationDelay: '0.4s' }}>
                            <div className={styles.stepNumber}>03</div>
                            <div className={styles.stepContent}>
                                <div className={styles.stepTitle}>
                                    <Zap size={28} className="text-gold" />
                                    <h3>Pay MoMo Instantly</h3>
                                </div>
                                <p>
                                    Scan a merchant QR code or enter any MTN, Vodafone, or AirtelTigo number
                                    to send payments in seconds.
                                </p>
                                <div className={styles.stepFeature}>
                                    <CheckCircle2 size={18} />
                                    <span>Instant receipt</span>
                                </div>
                                <div className={styles.stepFeature}>
                                    <CheckCircle2 size={18} />
                                    <span>Works across all networks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.faq}`}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h4>Do I need a Ghana Card?</h4>
                            <p>No. VessPay is built specifically for visitors and the diaspora who don&apos;t have local IDs. You can sign up with your foreign passport.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4>Do I need a local SIM card?</h4>
                            <p>No. You can use VessPay with your international phone number and any data connection (WiFi or roaming).</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4>Is my money safe?</h4>
                            <p>Yes. We use banking-grade security and partner with regulated financial institutions to ensure your funds are protected at all times.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4>What are the limits?</h4>
                            <p>New accounts have a daily spending limit of GHS 5,000. You can increase this by verifying your identity further in the app.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Experience the Freedom</h2>
                        <p>Download VessPay today and start paying like a local.</p>
                        <Link href="/download" className="btn-luxury btn-primary-luxury">Get Started Now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

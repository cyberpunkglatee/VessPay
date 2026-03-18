'use client';

import { useState } from 'react';
import { Apple, Play, Smartphone, QrCode, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export default function Download() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Add real integration later
    };

    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <h1>Get Started with <span className="text-gradient-gold">VessPay</span></h1>
                        <p>Download the app or join our exclusive waitlist for the next generation of Ghana payments.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.downloadGrid}>
                        <div className={`${styles.appDownload} reveal`}>
                            <h2>Download the App</h2>
                            <p>Available now on iOS and Android. Modern, secure, and built for visitors.</p>

                            <div className={styles.storeButtons}>
                                <a href="#" className={styles.storeBtn}>
                                    <Apple size={24} />
                                    <div>
                                        <span>Download on the</span>
                                        <strong>App Store</strong>
                                    </div>
                                </a>
                                <a href="#" className={styles.storeBtn}>
                                    <Play size={24} />
                                    <div>
                                        <span>Get it on</span>
                                        <strong>Google Play</strong>
                                    </div>
                                </a>
                            </div>

                            <div className={styles.requirements}>
                                <p><CheckCircle2 size={16} /> iOS 14.0 or later</p>
                                <p><CheckCircle2 size={16} /> Android 8.0 (Oreo) or later</p>
                            </div>
                        </div>

                        <div className={`${styles.qrSection} reveal`} style={{ animationDelay: '0.2s' }}>
                            <div className={styles.qrContainer}>
                                <QrCode size={200} strokeWidth={1} />
                                <p>Scan to download</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.waitlistSection}`} style={{ background: 'var(--surface-muted)' }}>
                <div className="container">
                    <div className={`${styles.waitlistCard} reveal`}>
                        <div className={styles.waitlistContent}>
                            <h2>Join the Priority Waitlist</h2>
                            <p>Be the first to know about new features, currency additions, and exclusive rewards for early adopters.</p>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={styles.input}
                                    />
                                    <button type="submit" className="btn-luxury btn-primary-luxury">
                                        Join Waitlist
                                    </button>
                                </form>
                            ) : (
                                <div className={styles.success}>
                                    <CheckCircle2 size={48} className="text-gold" />
                                    <h3>You're on the list!</h3>
                                    <p>Thanks for joining. We'll be in touch soon with exciting updates.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

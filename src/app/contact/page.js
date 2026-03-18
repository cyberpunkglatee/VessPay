'use client';

import { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const faqs = [
        { q: "Is VessPay a bank?", a: "No, VessPay is a financial technology company. We partner with regulated banks in Ghana to provide secure wallet and payment services." },
        { q: "Where can I use VessPay?", a: "You can use VessPay anywhere in Ghana that accepts Mobile Money (MTN, Vodafone, or AirtelTigo) or has a GhQR code." },
        { q: "What documents do I need to sign up?", a: "You only need a valid international passport. No local IDs or SIM cards are required." },
        { q: "How long does it take to load funds?", a: "Card loads are usually instant. Bank transfers may take 1-3 business days depending on your home bank." },
    ];

    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <h1>Contact <span className="text-gradient-gold">Support</span></h1>
                        <p>We&apos;re here to help you navigate your payments in Ghana. Reach out to us anytime.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div className={`${styles.contactInfo} reveal`}>
                            <h2>Get in Touch</h2>
                            <p>We promise to reply to all inquiries within 24 hours.</p>

                            <div className={styles.channels}>
                                <div className={styles.channel}>
                                    <Mail className="text-gold" />
                                    <div>
                                        <strong>Email Us</strong>
                                        <p>hello@vesspay.com</p>
                                    </div>
                                </div>
                                <div className={styles.channel}>
                                    <MessageCircle className="text-gold" />
                                    <div>
                                        <strong>WhatsApp Chat</strong>
                                        <p>+233 50 000 0000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.formContainer} reveal`} style={{ animationDelay: '0.2s' }}>
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.inputGroup}>
                                        <label>Full Name</label>
                                        <input type="text" required placeholder="John Doe" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Email Address</label>
                                        <input type="email" required placeholder="john@example.com" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>What&apos;s your inquiry about?</label>
                                        <select>
                                            <option>Account Verification</option>
                                            <option>Loading Funds</option>
                                            <option>Partnership</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Message</label>
                                        <textarea required placeholder="How can we help you?" rows={5}></textarea>
                                    </div>
                                    <button type="submit" className="btn-luxury btn-primary-luxury">
                                        Send Message <Send size={16} style={{ marginLeft: '10px' }} />
                                    </button>
                                </form>
                            ) : (
                                <div className={styles.success}>
                                    <CheckCircle2 size={60} className="text-gold" />
                                    <h2>Message Sent</h2>
                                    <p>Thanks for reaching out! A member of our team will get back to you shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="btn-luxury btn-outline-luxury">
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.faq}`} style={{ background: 'var(--surface-muted)' }}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

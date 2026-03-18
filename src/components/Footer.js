import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/vesspay_official_logo_01.PNG"
                            alt="VessPay Logo"
                            width={42}
                            height={42}
                            className={styles.footerLogoImage}
                        />
                        VessPay<span className="text-gold">.</span>
                    </Link>
                    <div className={styles.socials}>
                        <Link href="#" className={styles.socialLink}><Twitter size={18} strokeWidth={1.5} /></Link>
                        <Link href="#" className={styles.socialLink}><Linkedin size={18} strokeWidth={1.5} /></Link>
                        <Link href="#" className={styles.socialLink}><Instagram size={18} strokeWidth={1.5} /></Link>
                    </div>
                </div>

                <div className={styles.linksGrid}>
                    <div className={styles.column}>
                        <h4>Product</h4>
                        <Link href="/how-it-works">How It Works</Link>
                        <Link href="/features">Features</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/download">Download App</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Who It's For</h4>
                        <Link href="/audiences#tourists">Tourists</Link>
                        <Link href="/audiences#expats">Expats</Link>
                        <Link href="/audiences#diaspora">Diaspora</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Legal</h4>
                        <Link href="/legal/privacy">Privacy Policy</Link>
                        <Link href="/legal/terms">Terms of Service</Link>
                        <Link href="/legal/regulatory">Regulatory</Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.disclaimer}>
                        <p>
                            VessPay is a financial technology company, not a bank. VessPay Ghana Limited is a subsidiary of Lncksys.
                            Banking services are provided by our regulated banking partners.
                        </p>
                        <p>&copy; {new Date().getFullYear()} VessPay Ghana Limited. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

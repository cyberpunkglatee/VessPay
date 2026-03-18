'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Body scroll lock
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
                    <Image
                        src="/vesspay_official_logo_01.PNG"
                        alt="VessPay Logo"
                        width={52}
                        height={52}
                        className={styles.logoImage}
                        priority
                    />
                    VessPay<span className="text-gold">.</span>
                </Link>

                <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <Link href="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
                    <Link href="/features" onClick={() => setIsMenuOpen(false)}>Features</Link>
                    <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    <Link href="/audiences" onClick={() => setIsMenuOpen(false)}>Who It&apos;s For</Link>
                    <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="/download" className="btn-luxury btn-primary-luxury" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                </div>

                <div 
                    className={styles.mobileToggle} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <div className={`${styles.menuTrigger} ${isMenuOpen ? styles.triggerActive : ''}`}>
                        <span className={styles.menuLine}></span>
                        <span className={styles.menuLine}></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

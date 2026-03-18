'use client';

import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('vesspay-cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('vesspay-cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.banner}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <p>
                        We use cookies to enhance your experience and analyze our traffic.
                        By continuing to visit this site you agree to our use of cookies.
                    </p>
                </div>
                <div className={styles.actions}>
                    <button onClick={acceptCookies} className="btn-luxury btn-primary-luxury">
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}

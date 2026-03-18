import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Globe, Zap, Percent, ShieldCheck, CreditCard } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: "Features | VessPay",
    description: "Explore VessPay's multi-currency wallet, instant MoMo payments, and transparent FX exchange.",
};

export default function Features() {
    const features = [
        {
            id: 'global-spend-send',
            title: 'Global Spending & Sending',
            description: 'The ultimate app for global citizens. Spend whilst in Africa at local vendors, and send to any number whilst outside of Africa instantly.',
            icon: <Smartphone size={40} />,
            image: '/mockups/spend-send.png',
        },
        {
            id: 'wallet',
            title: 'Multi-currency Wallet',
            description: 'Hold USD, GBP, EUR, CAD and GHS in one secure place. Convert between currencies instantly and manage your global funds from a single dashboard.',
            icon: <Globe size={40} />,
            image: '/mockups/wallet.png',
        },
        {
            id: 'momo',
            title: 'Instant MoMo Payments',
            description: 'Pay any MTN, Vodafone, or AirtelTigo number in seconds. Whether it is a taxi driver, a market vendor, or a utility bill, VessPay gets it done.',
            icon: <Zap size={40} />,
            image: '/mockups/momo.jpg',
        },
        {
            id: 'fx',
            title: 'Transparent FX Exchange',
            description: 'See exactly what you get before you confirm. We use competitive mid-market rates with a simple, transparent 3% margin and zero hidden fees.',
            icon: <Percent size={40} />,
            image: '/mockups/transparent_fx.png',
        },
        {
            id: 'card',
            title: 'Physical Prestige',
            description: 'The VessPay Black Card. A statement of utility and status, accepted at the world’s most exclusive establishments. Spend your GHS balance anywhere Visa is accepted, globally.',
            icon: <CreditCard size={40} />,
            image: '/assets/vesspay_card_glate.png',
        }
    ];

    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <h1>Powerful Features for <br /><span className="text-gradient-gold">Global Citizens</span></h1>
                        <p>Everything you need to manage your money and make payments in Ghana, all in one premium app.</p>
                    </div>
                </div>
            </section>

            <section className={styles.featuresList}>
                <div className="container">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`${styles.featureRow} ${index % 2 === 1 ? styles.reverse : ''} section reveal`}
                        >
                            <div className={styles.featureContent}>
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <h2>{feature.title}</h2>
                                <p>{feature.description}</p>
                                <Link href="/download" className="btn-luxury btn-outline-luxury">Get Started</Link>
                            </div>
                            <div className={styles.featureImage}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className={styles.img}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={`section ${styles.cta}`}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Ready to experience these features?</h2>
                        <Link href="/download" className="btn-luxury btn-primary-luxury">Download VessPay Now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { Shield, CreditCard, Zap, Globe } from 'lucide-react';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
    const features = [
        {
            icon: <Shield size={32} strokeWidth={1} />,
            title: 'Sovereign Control',
            description: 'Experience total dominion over your assets with Tier-1 multi-currency architecture and real-time liquidity management.'
        },
        {
            icon: <CreditCard size={32} strokeWidth={1} />,
            title: 'Physical Prestige',
            description: 'The VessPay Black Card. A statement of utility and status, accepted at the world’s most exclusive establishments.'
        },
        {
            icon: <Zap size={32} strokeWidth={1} />,
            title: 'Frictionless Flow',
            description: 'Capital should move with the ease of thought. Our intelligent routing engine ensures instant global settlements.'
        },
        {
            icon: <Globe size={32} strokeWidth={1} />,
            title: 'Global Connectivity',
            description: 'Bridge the gap between local depth and global reach. Reaching every corner of the African digital ecosystem.'
        }
    ];

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={`${styles.header} reveal`}>
                    <p className={styles.label}>Excellence in Engineering</p>
                    <h2 className={styles.headline}>The VessPay <span className="text-gold">Portfolio.</span></h2>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={`${styles.card} reveal`}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

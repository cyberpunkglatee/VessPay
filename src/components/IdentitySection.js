import { Shield, ShieldCheck, Globe } from 'lucide-react';
import styles from './IdentitySection.module.css';

export default function IdentitySection() {
    const pillars = [
        {
            id: 'vesspay',
            icon: <Shield size={40} strokeWidth={1} />,
            title: 'Sovereign Integrity',
            description: 'A fortress of financial engineering, built on Tier-1 infrastructure with unyielding security protocols.',
            label: 'Infrastructure'
        },
        {
            id: 'ghana',
            icon: <ShieldCheck size={40} strokeWidth={1} />,
            title: 'Global Alignment',
            description: 'Regulatory excellence that transcends borders, ensuring your capital remains secure and compliant.',
            label: 'Compliance'
        },
        {
            id: 'future',
            icon: <Globe size={40} strokeWidth={1} />,
            title: 'Infinite Velocity',
            description: 'The future of capital movement. Instant, borderless, and handled with the precision of a master artisan.',
            label: 'Access'
        }
    ];

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={`${styles.header} reveal`}>
                    <p className={styles.label}>The Gold Standard</p>
                    <h2 className={styles.headline}>The VessPay <span className="text-gold">Standard.</span></h2>
                    <p className={styles.description}>
                        We operate at the intersection of exclusivity, security, and utility.
                        A silent partner in your global financial journey.
                    </p>
                </div>

                <div className={styles.grid}>
                    {pillars.map((pillar) => (
                        <div key={pillar.id} className={`${styles.card} reveal`}>
                            <div className={styles.iconWrapper}>
                                {pillar.icon}
                            </div>
                            <span className={styles.cardLabel}>{pillar.label}</span>
                            <h3 className={styles.cardTitle}>{pillar.title}</h3>
                            <p className={styles.cardDescription}>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

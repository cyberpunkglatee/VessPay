import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <div className={`${styles.content} reveal`}>
                    <div className={styles.aura}></div>
                    <h1 className={styles.title}>
                        Modernity <br />
                        <span className="text-gradient-gold">Redefined.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        VessPay represents the pinnacle of digital finance architecture.
                        A sanctuary for global capital, moving at the speed of light.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>$2.5B+</span>
                            <span className={styles.statLabel}>Global Flow</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>Tier 1</span>
                            <span className={styles.statLabel}>Security Grade</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.visualWrapper}>
                <img
                    src="/assets/luxury_hero.png"
                    alt="Luxury Banking Concept"
                    className={styles.heroImage}
                />
            </div>
        </section>
    );
}

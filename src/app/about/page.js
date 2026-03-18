import Link from 'next/link';
import Image from 'next/image';
import { Target, Users, Shield, Award } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: "About Our Story | VessPay",
    description: "Learn about VessPay's mission to simplify payments in Ghana for the diaspora and visitors.",
};

export default function About() {
    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <h1>Our <span className="text-gradient-gold">Story</span></h1>
                        <p>VessPay was born out of a simple frustration: Why is it so hard for visitors to pay in Ghana?</p>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.story}`}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={`${styles.storyContent} reveal`}>
                            <h2>The Vision Behind VessPay</h2>
                            <p>
                                I'm Ernest Glate, a software engineer and entrepreneur building impactful technology from Accra, Ghana. I founded Lncksys, a registered Ghanaian software company, where I design and build scalable digital products that solve real problems.
                            </p>
                            <p>
                                VessPay was born from watching diaspora Ghanaians, tourists, and international visitors arrive in Ghana completely locked out of mobile money — the payment system that runs the entire economy. I built VessPay to fix that. It's a spend and send mobile wallet that lets anyone load foreign currency and instantly pay with MoMo in Ghana — no SIM card required.
                            </p>
                            <p>
                                My goal is to make it as easy to spend and send money across Africa as it is anywhere else in the world.
                            </p>
                            <div className={styles.companyInfo}>
                                <p><strong>Company:</strong> VessPay Ghana Limited</p>
                                <p><strong>Parent Company:</strong> Lncksys</p>
                                <p><strong>Origin:</strong> Accra, Ghana</p>
                            </div>
                        </div>
                        <div className={`${styles.storyImage} reveal`}>
                            <div className={styles.founderImageWrap}>
                                <Image
                                    src="/founder_picture.jpg"
                                    alt="VessPay Founder"
                                    fill
                                    className={styles.founderImg}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.mission}`} style={{ background: 'var(--royal-green-deep)', color: 'white' }}>
                <div className="container">
                    <div className={styles.missionGrid}>
                        <div className={`${styles.missionItem} reveal`}>
                            <Target size={32} className="text-gold" />
                            <h3>Our Mission</h3>
                            <p>To digitize and simplify financial interactions for every visitor in Ghana, fostering a more inclusive and efficient local economy.</p>
                        </div>
                        <div className={`${styles.missionItem} reveal`} style={{ animationDelay: '0.2s' }}>
                            <Users size={32} className="text-gold" />
                            <h3>Our Vision</h3>
                            <p>To become the leading digital wallet for the African diaspora and international travelers across the continent.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.partners}`}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className="reveal">Infrastructure & Trust</h2>
                        <p className="reveal">We partner with regulated financial institutions to ensure security and compliance.</p>
                    </div>
                    <div className={styles.partnerLogos}>
                        <div className={`${styles.partnerLogo} reveal`}>
                            <span className={styles.ecobankText}>Powered by <span className="text-gradient-gold">Ecobank</span></span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Want to join our journey?</h2>
                        <p>We are always looking for partners and talented individuals to help us build the future of African payments.</p>
                        <Link href="/contact" className="btn-luxury btn-primary-luxury">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

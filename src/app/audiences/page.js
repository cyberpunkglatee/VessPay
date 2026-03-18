import Link from 'next/link';
import Image from 'next/image';
import { Plane, Building2, Home, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: "Who It's For | VessPay",
    description: "Tailored payment solutions for tourists, expats, and the diaspora visiting Ghana.",
};

export default function Audiences() {
    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <h1>Tailored for <span className="text-gradient-gold">Your Journey</span></h1>
                        <p>VessPay solves the unique payment challenges faced by visitors and the diaspora in Ghana.</p>
                    </div>
                </div>
            </section>

            {/* Tourists Section */}
            <section id="tourists" className={`section ${styles.audienceSection} reveal`}>
                <div className="container">
                    <div className={styles.audienceGrid}>
                        <div className={styles.content}>
                            <div className={styles.badge}><Plane size={16} /> Tourists & Visitors</div>
                            <h2>Visit Ghana. <br /><span className="text-gold">Pay Like You Live There.</span></h2>
                            <div className={styles.painPoints}>
                                <div className={styles.pain}>
                                    <div className={styles.xMark}>✕</div>
                                    <p>Forced to carry large stacks of cash.</p>
                                </div>
                                <div className={styles.pain}>
                                    <div className={styles.xMark}>✕</div>
                                    <p>High ATM withdrawal and foreign card fees.</p>
                                </div>
                                <div className={styles.pain}>
                                    <div className={styles.xMark}>✕</div>
                                    <p>Can&apos;t access MoMo for local services.</p>
                                </div>
                            </div>
                            <div className={styles.solution}>
                                <p><strong>The VessPay Solution:</strong> Load your wallet once at the airport. Pay for taxis, food, tours, and markets via MoMo for your entire stay. No local SIM required.</p>
                                <Link href="/download" className="btn-luxury btn-primary-luxury">Get Started</Link>
                            </div>
                        </div>
                        <div className={styles.visual}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/audiences/tourists.png"
                                    alt="Tourists in Ghana"
                                    fill
                                    className={styles.audienceImg}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expats Section */}
            <section id="expats" className={`section ${styles.audienceSection} ${styles.reverse} reveal`} style={{ background: 'var(--surface-muted)' }}>
                <div className="container">
                    <div className={styles.audienceGrid}>
                        <div className={styles.content}>
                            <div className={styles.badge}><Building2 size={16} /> Expats & Foreign Workers</div>
                            <h2>Live in Ghana. Pay in Ghana. <br /><span className="text-gold">No Ghana Card Required.</span></h2>
                            <div className={styles.painPoints}>
                                <div className={styles.pain}>
                                    <div className={styles.xMark}>✕</div>
                                    <p>International cards don&apos;t work at local vendors.</p>
                                </div>
                                <div className={styles.pain}>
                                    <div className={styles.xMark}>✕</div>
                                    <p>MoMo setup takes days and requires a physical ID.</p>
                                </div>
                            </div>
                            <div className={styles.solution}>
                                <p><strong>The VessPay Solution:</strong> Your permanent Ghana digital wallet. Pay staff, markets, and services directly from one app with your passport verification.</p>
                                <Link href="/download" className="btn-luxury btn-primary-luxury">Get Started</Link>
                            </div>
                        </div>
                        <div className={styles.visual}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/audiences/expat.png"
                                    alt="Expat Living in Accra"
                                    fill
                                    className={styles.audienceImg}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diaspora Section */}
            <section id="diaspora" className={`section ${styles.audienceSection} reveal`}>
                <div className="container">
                    <div className={styles.audienceGrid}>
                        <div className={styles.content}>
                            <div className={styles.badge}><Home size={16} /> Diaspora Visitors</div>
                            <h2>Coming Home? <br /><span className="text-gold">Leave the SIM Hassle Behind.</span></h2>
                            <div className={styles.painPoints}>
                                <div className={styles.pain}>
                                    <div className={styles.xMark}>✕</div>
                                    <p>Expired SIM cards and inactive MoMo accounts.</p>
                                </div>
                                <div className={styles.pain}>
                                    <div className={styles.xMark}>✕</div>
                                    <p>Lengthy setup processes when you arrive.</p>
                                </div>
                            </div>
                            <div className={styles.solution}>
                                <p><strong>The VessPay Solution:</strong> Land, load, and pay. Catch up with your family and enjoy your visit without queuing for a new SIM or registration.</p>
                                <Link href="/download" className="btn-luxury btn-primary-luxury">Get Started</Link>
                            </div>
                        </div>
                        <div className={styles.visual}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/audiences/diaspora.png"
                                    alt="Ghanaian Diaspora Homecoming"
                                    fill
                                    className={styles.audienceImg}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

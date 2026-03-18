import Link from 'next/link';
import { CreditCard, Wallet, Zap, Shield, Globe, ArrowRight, Smartphone, Star } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={`${styles.heroContent} reveal`}>
            <span className={styles.badge}>Pay Like a Local</span>
            <h1>Ghana Payments, <br /><span className="text-gradient-gold">Without the Hassle.</span></h1>
            <p>
              The mobile payment app for tourists, expats, and the diaspora.
              Load funds, hold GHS, and send MoMo instantly to anyone in Ghana—no SIM card or Ghana Card required.
            </p>
            <div className={styles.heroActions}>
              <Link href="/download" className="btn-luxury btn-primary-luxury">
                Download App <ArrowRight size={18} style={{ marginLeft: '10px' }} />
              </Link>
              <Link href="/how-it-works" className="btn-luxury btn-outline-luxury">
                See How It Works
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.mockupContainer}>
              <div className={styles.mockup}>
                <div className={styles.mockupHeader}>
                  <span>VessPay</span>
                  <Wallet size={20} />
                </div>
                <div className={styles.mockupBalance}>
                  <p>Wallet Balance</p>
                  <h3>GHS 4,250.00</h3>
                </div>
                <div className={styles.mockupActions}>
                  <div className={styles.mockupAction}><CreditCard size={20} /><br />Load</div>
                  <div className={styles.mockupAction}><Zap size={20} /><br />Send</div>
                  <div className={styles.mockupAction}><Globe size={20} /><br />FX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`section ${styles.howItWorks}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="reveal">Simple Steps to Pay in Ghana</h2>
            <p className="reveal">Get set up in minutes and start paying like you live here.</p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={`${styles.stepCard} reveal`}>
              <div className={styles.stepIcon}><CreditCard size={32} /></div>
              <h3>Step 1: Load Funds</h3>
              <p>Add funds securely from your international bank card or bank transfer in USD, GBP, or EUR.</p>
            </div>
            <div className={`${styles.stepCard} reveal`} style={{ animationDelay: '0.2s' }}>
              <div className={styles.stepIcon}><Wallet size={32} /></div>
              <h3>Step 2: Hold GHS</h3>
              <p>Convert your funds to GHS at transparent rates and hold them in your secure VessPay wallet.</p>
            </div>
            <div className={`${styles.stepCard} reveal`} style={{ animationDelay: '0.4s' }}>
              <div className={styles.stepIcon}><Zap size={32} /></div>
              <h3>Step 3: Pay Instantly</h3>
              <p>Send MoMo to any MTN, Vodafone, or AirtelTigo number or pay merchants directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className={`section ${styles.audiences}`} style={{ background: 'var(--surface-muted)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="reveal">Built for Your Journey</h2>
          </div>
          <div className={styles.audienceGrid}>
            <div className={`${styles.audienceCard} reveal`}>
              <h3>Tourists</h3>
              <p>Forget carrying stacks of cash or struggling with ATMs. Pay for your taxi, food, and tours via MoMo from the moment you land.</p>
              <Link href="/audiences#tourists" className={styles.learnMore}>Learn More <ArrowRight size={14} /></Link>
            </div>
            <div className={`${styles.audienceCard} reveal`} style={{ animationDelay: '0.2s' }}>
              <h3>Expatriates</h3>
              <p>The permanent digital wallet for foreign workers. Pay staff, services, and local markets without needing a Ghana Card.</p>
              <Link href="/audiences#expats" className={styles.learnMore}>Learn More <ArrowRight size={14} /></Link>
            </div>
            <div className={`${styles.audienceCard} reveal`} style={{ animationDelay: '0.4s' }}>
              <h3>Diaspora</h3>
              <p>Coming home for a visit? Leave the SIM card hassle behind. Use your VessPay wallet for all local expenses seamlessly.</p>
              <Link href="/audiences#diaspora" className={styles.learnMore}>Learn More <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={`section ${styles.trust}`}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustContent}>
              <h2 className="reveal">Why VessPay?</h2>
              <div className={styles.pillars}>
                <div className={`${styles.pillar} reveal`}>
                  <Shield size={24} className="text-gold" />
                  <div>
                    <h4>No Ghana Card Required</h4>
                    <p>Unlike local SIM registration, VessPay allows you to access MoMo payments with your passport.</p>
                  </div>
                </div>
                <div className={`${styles.pillar} reveal`}>
                  <Zap size={24} className="text-gold" />
                  <div>
                    <h4>Instant Transfers</h4>
                    <p>Your payments reach recipients in seconds, across all major networks in Ghana.</p>
                  </div>
                </div>
                <div className={`${styles.pillar} reveal`}>
                  <Star size={24} className="text-gold" />
                  <div>
                    <h4>Transparent Fees</h4>
                    <p>No hidden charges. See our flat MoMo fees and clear FX rates before every transaction.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.trustImage} reveal`}>
              <div className={styles.trustOverlay}>
                <p>&quot;The only way I pay in Accra now. So simple!&quot;</p>
                <span>— Sarah, Tourist from UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`section ${styles.vision}`}>
        <div className="container">
          <div className={`${styles.visionCard} reveal`}>
            <div className={styles.visionIcon}><Globe size={40} className="text-gold" /></div>
            <h2>Beyond Ghana</h2>
            <p className={styles.visionText}>
                &quot;We&apos;re starting in Ghana, but our roadmap includes other African countries.
                This isn&apos;t just a Ghana product — it&apos;s the beginning of a pan-African diaspora wallet.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} section`}>
        <div className="container">
          <div className={`${styles.ctaCard} reveal`}>
            <h2>Ready to Pay Like a Local?</h2>
            <p>Join thousands of travelers and expats using VessPay for hassle-free payments in Ghana.</p>
            <div className={styles.ctaActions}>
              <Link href="/download" className="btn-luxury btn-primary-luxury">Download VessPay</Link>
              <Link href="/download" className="btn-luxury btn-outline-luxury" style={{ borderColor: 'white', color: 'white' }}>Join Waitlist</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

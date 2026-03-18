import styles from '../legal.module.css';

export default function PrivacyPolicy() {
    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: March 10, 2025</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.content}>
                        <h2>1. Introduction</h2>
                        <p>VessPay Ghana Limited ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our mobile application and website.</p>

                        <h2>2. Information We Collect</h2>
                        <p>To provide our services, we collect several types of information, including:</p>
                        <ul>
                            <li><strong>Personal Data:</strong> Name, email address, phone number, and passport details for identity verification.</li>
                            <li><strong>Transaction Data:</strong> Details about the payments you make, including amounts, dates, and recipient MoMo numbers.</li>
                            <li><strong>Technical Data:</strong> IP address, device type, and app usage statistics.</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>We use your information to verify your identity, process transactions, prevent fraud, and comply with regulatory requirements in Ghana and internationally.</p>

                        <h2>4. Sharing Your Information</h2>
                        <p>We may share your data with our regulated banking partners, payment processors, and regulatory authorities as required by law.</p>

                        <h2>5. Data Security</h2>
                        <p>We implement industry-standard security measures, including end-to-end encryption and secure servers, to protect your data from unauthorized access.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

import styles from '../legal.module.css';

export default function TermsOfService() {
    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p>Last updated: March 10, 2025</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.content}>
                        <h2>1. Acceptance of Terms</h2>
                        <p>By downloading or using the VessPay application, you agree to these Terms of Service. If you do not agree, please do not use our services.</p>

                        <h2>2. Eligibility</h2>
                        <p>You must be at least 18 years old and hold a valid international passport to use VessPay for money transfers and GHS wallet services.</p>

                        <h2>3. Our Services</h2>
                        <p>VessPay provides a digital wallet that allows users to hold GHS and make Mobile Money (MoMo) payments in Ghana. We are a technology provider and not a bank.</p>

                        <h2>4. Fees and Exchange Rates</h2>
                        <p>Users agree to the fee structure disclosed in the app, including the 3% FX margin and flat MoMo disbursement fees. Rates are subject to market conditions.</p>

                        <h2>5. Prohibited Activities</h2>
                        <p>Users are prohibited from using VessPay for any illegal activities, including money laundering, fraud, or financing of illegal entities.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

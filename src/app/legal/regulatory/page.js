import styles from '../legal.module.css';

export default function RegulatoryNotice() {
    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Regulatory Notice</h1>
                    <p>Financial Compliance and Safety</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.content}>
                        <h2>Compliance Status</h2>
                        <p>VessPay Ghana Limited is a registered software development and technology company in Ghana, a subsidiary of Lncksys.</p>

                        <h2>Regulated Partnerships</h2>
                        <p>Our financial services, including wallet holding and MoMo disbursements, are powered by licensed and regulated banking partners in Ghana. VessPay provides the technology interface for these regulated services.</p>

                        <h2>Sanctions Filtering</h2>
                        <p>We perform real-time sanctions filtering and KYC (Know Your Customer) checks on all users to comply with global AML (Anti-Money Laundering) standards.</p>

                        <h2>Consumer Protection</h2>
                        <p>User funds are held in segregated accounts with our banking partners, ensuring that your money is safe and accessible at all times.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

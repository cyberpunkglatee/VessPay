import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: "VessPay Blog | Payment Insights in Ghana",
    description: "Guides, travel tips, and stories about paying like a local in Ghana.",
};

export default function Blog() {
    const categories = ["Travel Tips", "Expat Life", "Ghana Payments", "Diaspora Stories"];

    const posts = [
        {
            title: "How to pay MoMo in Ghana as a tourist (2025 guide)",
            category: "Ghana Payments",
            date: "March 10, 2025",
            excerpt: "The complete guide to navigating Ghana&apos;s mobile money landscape without a local ID or SIM card."
        },
        {
            title: "Top 5 payment mistakes visitors make in Ghana",
            category: "Travel Tips",
            date: "March 5, 2025",
            excerpt: "From carrying too much cash to ATM security, here is what you need to avoid on your next trip."
        },
        {
            title: "Expat life in Accra: A comprehensive payment guide",
            category: "Expat Life",
            date: "February 28, 2025",
            excerpt: "How to manage your daily expenses, pay staff, and handle local bills as a foreign resident."
        }
    ];

    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <h1>VessPay <span className="text-gradient-gold">Blog</span></h1>
                        <p>Insights, guides, and stories from the heart of Ghana&apos;s digital economy.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.categories}>
                        {categories.map(cat => (
                            <button key={cat} className={styles.categoryBtn}>{cat}</button>
                        ))}
                    </div>

                    <div className={styles.blogGrid}>
                        {posts.map((post, index) => (
                            <article key={index} className={`${styles.postCard} reveal`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className={styles.postThumbnail}></div>
                                <div className={styles.postContent}>
                                    <div className={styles.postMeta}>
                                        <span className={styles.postCategory}>{post.category}</span>
                                        <span className={styles.postDate}>{post.date}</span>
                                    </div>
                                    <h3><Link href="#">{post.title}</Link></h3>
                                    <p>{post.excerpt}</p>
                                    <Link href="#" className={styles.readMore}>Read Article</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

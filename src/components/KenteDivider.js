import styles from './KenteDivider.module.css';

export default function KenteDivider({ height = '8px' }) {
    return (
        <div className={styles.divider} style={{ height }}>
            <div className={styles.pattern}></div>
        </div>
    );
}

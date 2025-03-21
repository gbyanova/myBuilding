import styles from './Footer.module.css';

export default function Footer() {
    return (
        <p className={styles.bottomBar}>
            <span className={styles.brand}>myBuilding</span>
            <span> | </span>
            <span>2025</span>
            <span> | </span>
            <span>Всички права запазени</span>
        </p>
    )
}
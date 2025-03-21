import styles from './Footer.module.css';

export default function Footer() {
    return (
        <p className={styles.bottomBar}>
            <span>Всички права запазени</span>
            <span> | </span>
            <span>2025</span>
            <span> | </span>
            <span>myBuilding</span>
        </p>
    )
}
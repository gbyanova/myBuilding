import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <h1><a className={styles.brand} href="#">myBuilding</a></h1>
            <nav>
                <div id="user">
                    <a className={styles.menuItem} href="#">Подай сигнал</a>
                    <a className={styles.menuItem} href="#">Всички сигнали</a>
                    <a className={styles.menuItem} href="#">Моите сигнали</a>
                    <a className={styles.menuItem} href="#">Такси</a>
                    <a className={styles.menuItem} href="#">Изход</a>
                </div>
                <div id="guest">
                    <a className={styles.menuItem} href="#">Вход</a>
                    <a className={styles.menuItem} href="#">Регистрирай се</a>
                </div>
            </nav>
        </header>
    )
}
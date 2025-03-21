export default function Header() {
    return (
        <header>
            <h1><a className="brand" href="#">myBuilding</a></h1>
            <nav>
                <div id="user">
                    <a href="#">Подай сигнал</a>
                    <a href="#">Всички сигнали</a>
                    <a href="#">Моите сигнали</a>
                    <a href="#">Такси</a>
                    <a href="#">Изход</a>
                </div>
                <div id="guest">
                    <a href="#">Вход</a>
                    <a href="#">Регистрирай се</a>
                </div>
            </nav>
        </header>
    )
}
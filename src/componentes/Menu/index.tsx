import "./style.css";
import { Link } from "react-router-dom";
export const Menu = () => {
    return (
        <>
        <header>
            <h1>Pulseiras Fashion</h1>
            <nav className="menu">
                <ul>
                    <li>
                    <Link to= '/'>Inicio</Link>
                    </li>
                    <li>
                    <Link to= '/contatos'>Contatos</Link>
                    </li>
                    <li>
                    <Link to= '/servicos'>Servicos</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}
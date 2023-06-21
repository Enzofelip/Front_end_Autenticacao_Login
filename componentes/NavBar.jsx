import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return(
        <div className="conteiner-link">
            <Link className="rotas" to="/">Login</Link>
            <Link className="rotas" to="/registrousuario">Registre-se</Link>
        </div>
    )
}

export default NavBar;
import React from "react"
import './NavBar.css';

function NavBar(){
    return(
        <nav className="NavBar">
            <div className ="logo">LogoEcommerce</div>
        <ul className="botones">
            <button>Monitores</button>
            <button>Gabinetes</button>
            <button>Procesadores</button>
        </ul>

        </nav>
    )
}

export default NavBar
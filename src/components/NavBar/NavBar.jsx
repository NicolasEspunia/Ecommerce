import React from "react"
import './NavBar.css';

function NavBar(){
    return(
        <nav className="NavBar">
            <div class ="logo">LogoEcommerce</div>
        <ul class="botones">
            <button>Monitores</button>
            <button>Gabinetes</button>
            <button>Procesadores</button>
        </ul>

        </nav>
    )
}

export default NavBar
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div className="App">
            <div className="izquierda">Sosssa</div>
            <ul className="menu">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="index.html"> Tienda</a></li>
                <li><a href="index.html"> Subastas</a></li>
                <li><a href="index.html"> Contacto</a></li>
                <a href="index.html"><CartWidget /></a>
            </ul>           
        </div>
    );
}

export default Navbar;
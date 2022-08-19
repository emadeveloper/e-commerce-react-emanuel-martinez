import CartWidget from "../cartwidget/cartwidget";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Logo</a></li>
            <CartWidget />
            </ul>
        </nav>
    )
};


export default Navbar;
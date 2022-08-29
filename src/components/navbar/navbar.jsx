import CartWidget from "../cartwidget/cartwidget";

const Navbar = ({carritoLength}) => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Samsung</li>
                <li>Iphone</li>
                <li>Xioami</li>
                <li>LG</li>
            <CartWidget />
            </ul>
        </nav>
    )
};


export default Navbar;


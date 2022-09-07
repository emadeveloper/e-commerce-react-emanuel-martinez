import CartWidget from "../cartwidget/cartwidget";
import React from "react";


const Navbar = ({}) => {
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
    );
}


export default Navbar;


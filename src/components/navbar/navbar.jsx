import CartWidget from "../cartwidget/cartwidget";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({}) => {
    return (
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to={'/categoria/Samsung'}>Samsung</NavLink>
                <NavLink to={'/categoria/Iphone'}>Iphone</NavLink>
                <NavLink to={'/categoria/Xiaomi'}>Xioami</NavLink>
                <NavLink to={'/categoria/LG'}>LG</NavLink>
                <NavLink to={'cart'}>
                    <CartWidget />
                </NavLink>    
            </ul>
        </nav>
    );
}


export default Navbar;


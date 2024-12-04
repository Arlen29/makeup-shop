import React from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={css.navbar}>
            <ul>
                <li><a href="#inicio">About us</a></li>
                <li><a href="#servicios">Productos</a></li>
                <li><a href="#sobre-nosotros" className={css.specialLink}>Laly</a></li>
                <li><a href="#servicios">Envíos</a></li>
                <li><a href="#contacto">Buscador</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

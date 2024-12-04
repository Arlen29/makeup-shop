import React from 'react';
import { Link } from 'react-router-dom';
import css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={css.navbar}>
            <ul>
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/sobre-nosotros" className={css.specialLink}>Laly</Link></li>
                <li><Link to="/envios">Envíos</Link></li>
                <li><Link to="/buscador">Buscador</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

import React, { useState } from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(true);
    };

    return (
        <nav className={css.navbar}>
            <ul>
                <li><a href="#about-us">About us</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#sobre-nosotros" className={css.specialLink}>Laly</a></li>
                <li><a href="#envios">Envíos</a></li>
                <li><a href="#buscador" onClick={handleSearchClick}>Buscador</a></li>
            </ul>
            {showSearch && (
                <div className={css.searchContainer}>
                    <input type="text" placeholder="Buscar..." className={css.searchInput} />
                </div>
            )}
        </nav>
    );
}

export default Navbar;


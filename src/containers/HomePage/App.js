import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import css from './App.module.css';

function App() {
  return (
    <div className={css.App}>
      <Navbar />
      <header className={css.App_header}>
        <p className={css.description}>
        ¡Bienvenidos a LALY! 🌟

Estamos encantados de tenerte aquí. En esta plataforma, encontrarás una variedad de productos de maquillaje diseñados para resaltar tu belleza natural y hacerte sentir increíble. Desde bases y correctores hasta sombras de ojos y labiales, tenemos todo lo que necesitas para crear looks espectaculares.

Explora nuestras secciones y descubre las últimas tendencias en maquillaje, consejos de belleza y productos innovadores. Ya sea que estés buscando un look natural para el día a día o un maquillaje glamuroso para una ocasión especial, estamos aquí para ayudarte a encontrar los productos perfectos.
        </p>
        <img src="https://th.bing.com/th/id/OIP.y2ZkaizMm8BAc1Q4Dqs9BQHaE7?rs=1&pid=ImgDetMain" alt="Descripción de la imagen" className={css.image} />
      </header>
    </div>
  );
}

export default App;



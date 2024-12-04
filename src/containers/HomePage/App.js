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
      <section id="about-us">
        <h1>About Us</h1>
        <p>Bienvenidos a LALY, estamos construyendo un espacio seguro y acogedor en belleza y más allá. Este es un maquillaje hecho para sentirse bien, sin ocultar lo que te hace única.</p>
      </section>
      <section id="productos">
        <h1>Productos</h1>
        <p>Aquí encontrarás una variedad de productos de maquillaje diseñados para resaltar tu belleza natural.</p>
      </section>
      <section id="sobre-nosotros">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre nuestra misión y valores.</p>
      </section>
      <section id="envios">
        <h1>Envíos</h1>
        <p>Información sobre nuestros métodos de envío y políticas.</p>
      </section>
      <section id="buscador">
        <h1>Buscador</h1>
        <p>Utiliza nuestro buscador para encontrar productos específicos.</p>
      </section>
    </div>
  );
}

export default App;





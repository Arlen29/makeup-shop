import React from 'react';
import { ProductCard } from "../../components";
import { products } from "../../utils/products";
import css from './AboutUsPage.module.css';

const AboutUsPage = () => {
    return (
        <div className={css.aboutUsContainer}>
            <h1 className={css.heading}>ABOUT US</h1>
            <img src="https://as00.epimg.net/buenavida/imagenes/2017/05/06/portada/1494021940_035121_1494022207_noticia_normal.jpg" alt="Descripción de la imagen" className={css.image} />
            <p className={css.paragraph}>Bienvenidos a LALY, estamos construyendo un espacio seguro y acogedor en belleza y más allá. Este es un maquillaje hecho para sentirse bien, sin ocultar lo que te hace única. </p>
        
            <h2 className={css.subtitle}>LOS MÁS VENDIDOS</h2>
            <div className={css.productList}>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} className={css.productListCard} />
                })}
            </div>
        </div>
    )
}

export default AboutUsPage;


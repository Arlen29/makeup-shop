import React, { useState } from 'react';
import Modal from 'react-modal';
import { ProductCard } from '../../components';
import { products } from '../../utils/products';
import Navbar from '../../components/navbar/Navbar';
import css from './AboutUsPage.module.css';

Modal.setAppElement('#root');

const AboutUsPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className={css.aboutUsContainer}>
            <Navbar />
            <h1 className={css.heading}>ABOUT US</h1>
            <img src="https://as00.epimg.net/buenavida/imagenes/2017/05/06/portada/1494021940_035121_1494022207_noticia_normal.jpg" alt="Descripción de la imagen" className={css.image} />
            <p className={css.paragraph}>Bienvenidos a LALY, estamos construyendo un espacio seguro y acogedor en belleza y más allá. Este es un maquillaje hecho para sentirse bien, sin ocultar lo que te hace única.</p>
            <button onClick={openModal} className={css.openModalButton}>Más Información</button>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Más Información"
                className={css.modal}
                overlayClassName={css.overlay}
            >
                <h2>Más Información</h2>
                <p>En LALY, creemos en la belleza auténtica y en la importancia de sentirse bien con uno mismo. Nuestros productos están diseñados para resaltar tu belleza natural y hacerte sentir increíble.</p>
                <p>Ofrecemos una amplia gama de productos, incluyendo:</p>
                <ul>
                    <li>Labiales de larga duración</li>
                    <li>Sombras de ojos vibrantes</li>
                    <li>Correctores de alta cobertura</li>
                    <li>Iluminadores para un brillo radiante</li>
                    <li>Bronceadores para un look soleado</li>
                </ul>
                <p>Nuestro compromiso es proporcionar productos de alta calidad que no solo mejoren tu apariencia, sino que también cuiden tu piel. Todos nuestros productos están formulados con ingredientes naturales y son libres de crueldad animal.</p>
                <button onClick={closeModal} className={css.closeModalButton}>Cerrar</button>
            </Modal>

            <h2 className={css.subtitle}>LOS MÁS VENDIDOS</h2>
            <div className={css.productList}>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} className={css.productListCard} />
                })}
            </div>
        </div>
    );
}

export default AboutUsPage;


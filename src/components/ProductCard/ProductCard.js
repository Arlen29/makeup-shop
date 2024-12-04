import React, { Component } from "react";
import classNames from "classnames";

import css from "./ProductCard.module.css";

class ProductCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { className, product } = this.props;

        return (
            <div className={classNames(css.ProductCard, className)}>
                <div className={css.ProductCard_header}>
                    <img src= {product.image} alt="Product" className={css.image} ></img>
            </div>
            <div className={css.ProductCard_body}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className={css.price}>{product.price}</p>
            </div>
            <button
                type={"button"}
                className={css.ProductCard_button}
                onClick={(e) => {
                    e.preventDefault();

                    const currentCart = JSON.parse(localStorage.getItem("cart-makeup")) || [];
                    // currentCart.push(product.id);

                    // localStorage.setItem("cart-makeup", JSON.stringify(currentCart));

                    let productTemp = currentCart.find((item) => item.id === product.id);

                    if (productTemp) {
                        productTemp.quantity += 1;
                    } else {
                        currentCart.push({ id: product.id, quantity: 1 });
                    }

                    localStorage.setItem("cart-makeup", JSON.stringify(currentCart));
                }}
            >
                    Comprar
            </button>
        </div>        
        )
    }

}

export default ProductCard;
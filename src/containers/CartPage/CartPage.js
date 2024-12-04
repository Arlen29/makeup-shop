import { products } from '../../utils/products';
import css from './CartPage.module.css';

const CartPage = () => {

    const cart = JSON.parse(localStorage.getItem("cart-makeup")) || [];

    console.log("cart", cart); 

    

    return (
        <div className={css.CartPage}>
            <h1>Cart Page</h1>

            <div className={css.CartPage_list}>
                {cart.length > 0 ? cart.map((item, index) => {
                    const product = products.find(product => product.id === item.id)

                    if (product) {
                        return (
                            <div key={index} className={css.CartPage_item}>
                                <div className={css.CartPage_item_header}>
                                    <img src={product.image} alt="Product" className={css.CartPage_item_image} /> 
                                </div>
                                <div className={css.CartPage_item_body}>
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p>{product.price}</p>
                                </div>
                                <div className={css.CartPage_item_quantity}>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <div className={css.CartPage_item_total}>
                                    <p>Total: {product.price * item.quantity}</p>
                                </div>

                            </div>
                        )
                    }
                })  : <p>Cart is empty</p>}
            </div>

            <div className={css.CartPage_promoCode}>
                <input type="text" placeholder="Promo Code" />
                <button type="button">Apply</button>
            </div>

            <div className={css.CartPage_total}>
                <p>Total:</p>
                {cart.lenght  > 0 ? cart.reduce((acc, item) => {
                const product = products.find(product => product.id === item.id)

                console.log("acc", acc);
                console.log("item", item);
                if (product) {
                    return acc + (product.price * item.quantity);
                }
                }, 0) : 0}
            </div>

        </div>
    )
}

export default CartPage
import { useContext } from "react";
import { formatPrice } from "../util/priceFormatter";
import { ShoppingCartContext } from "../store/cart-context";

function ProductCard({ product }) {
    const { addItemToCart } = useContext(ShoppingCartContext);
    const formattedPrice = formatPrice(product.price);
    return (
        <div className="meal-item">
            <article>
                <img
                  src={`http://localhost:3000/${product.image}`}
                  alt={product.image.description}
                />
                <h3>{product.name}</h3>
                <p>
                    <span className="meal-item-price">{formattedPrice}</span>
                </p>
                <p className="meal-item-description">{product.description}</p>
                <p>
                    <button className="meal-item-actions button" onClick={() => addItemToCart(product.id)}>
                    Add to Cart
                </button>
                </p>
            </article>
            
        </div>
    )

}

export default ProductCard;
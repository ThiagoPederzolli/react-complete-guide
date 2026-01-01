import { formatPrice } from "../util/priceFormater";

function ProductCard({ product }) {
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
                    <button className="meal-item-actions button">
                    Add to Cart
                </button>
                </p>
            </article>
            
        </div>
    )

}

export default ProductCard;
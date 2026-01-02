import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ShoppingCartContext } from "../store/cart-context";

function ProductList() {
    const { productsList, isLoading, error } = useContext(ShoppingCartContext);
    return (
        <>
        {error && <p>Failed to fetch product list...</p>}
        {isLoading && <p>Fetching product list...</p>}
            {!isLoading && !!productsList.length && (
                <div id="meals">
                    {productsList.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    )
}

export default ProductList;
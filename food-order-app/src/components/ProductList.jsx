import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProductList() {
            setIsloading(true);
            const response = await fetch('http://localhost:3000/meals');
            const resData = await response.json();
            if (!response.ok) {
                setError('Failed to fetch products')
                setIsloading(false);
                throw new Error(response.statusText);
            }
            setProductList(resData);
            setIsloading(false);
        }
        fetchProductList();

    }, []);
    console.log('productList', productList);

    return (
        <>
        {error && <p>Failed to fetch product list...</p>}
        {isLoading && <p>Fetching product list...</p>}
            {!isLoading && !!productList.length && (
                <div id="meals">
                    {productList.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    )
}

export default ProductList;
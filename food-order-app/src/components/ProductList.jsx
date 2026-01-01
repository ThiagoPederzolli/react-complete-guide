import { useEffect, useState } from "react";

function ProductList() {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProductList() {
            setIsloading(true);
            const response = await fetch('http://localhost:3000/mealss');
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
    console.log('error', error);

    return (
        <>
        {error && <p>Failed to fetch product list...</p>}
        {isLoading && <p>Fetching product list...</p>}
            {!isLoading && !!productList.length && (
                <ul>
                    {productList.map((product) => (
                        <li key={product.name}>{product.name}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default ProductList;
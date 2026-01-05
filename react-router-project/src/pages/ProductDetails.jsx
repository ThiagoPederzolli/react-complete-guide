// import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
    const { productId } = useParams();
    // useEffect(() => {
    //     // here if I have a dynamic list
    //     // can check if the product doesn't exists
    //     // to redirect to errorPage
    // }, [])
    return (
        <>
            <h1>Product Details for {productId}</h1>
            <Link to=".." relative="path">Back</Link>
        </>
    )
}
export default ProductDetails;
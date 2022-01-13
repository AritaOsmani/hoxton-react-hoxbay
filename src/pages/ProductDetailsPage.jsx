import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetails from "../components/ProductDetails";

function ProductDetailsPage() {
    const params = useParams()
    const [product, setProduct] = useState(null);

    function getProductFromServer() {
        fetch(`http://localhost:3000/products/${params.id}`).then(res => res.json()).then(productFromServer => setProduct(productFromServer))
    }

    useEffect(getProductFromServer, []);

    if (product === null) {
        return <main>Loading....</main>
    }
    if (product.title === undefined) {
        return <main>Product not found!</main>
    }
    return <main>
        <ProductDetails product={product} />
    </main >
}
export default ProductDetailsPage
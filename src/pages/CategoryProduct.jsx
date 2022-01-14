import { useParams } from "react-router-dom"
import ProductItem from "../components/ProductItem";

function CategoryProduct(props) {
    const params = useParams();
    console.log('Params:', params)

    let categoryProduct = props.products.filter(product => product.categoryId === Number(params.id))

    return <section className="products-container main-wrapper">
        <ul className="products-container__list">
            {categoryProduct.map(product => <ProductItem key={product.id} product={product} />)}
        </ul>
    </section>
}
export default CategoryProduct
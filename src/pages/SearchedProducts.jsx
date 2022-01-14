import { useParams } from "react-router-dom"
import ProductItem from "../components/ProductItem"

function SearchedProducts(props) {
    const params = useParams()

    let filteredArray = props.products.filter(prod => prod.title.toUpperCase().includes(params.title.toUpperCase()))


    return <ul className="products-container__list">
        {filteredArray.map(product =>
            <ProductItem
                product={product}
                key={product.id}
            />)}


        {/* <!-- More items here --> */}
    </ul>
}
export default SearchedProducts
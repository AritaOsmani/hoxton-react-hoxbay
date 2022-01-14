import ProductItem from '../components/ProductItem'
import './Products.css'
function Products(props) {
    return <main>
        <section className="products-container main-wrapper">
            <ul className="products-container__list">
                {props.products.map(product =>
                    <ProductItem
                        product={product}
                        key={product.id}
                    />)}


                {/* <!-- More items here --> */}
            </ul>
        </section>
    </main>

}
export default Products
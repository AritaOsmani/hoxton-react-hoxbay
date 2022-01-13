import { Link } from "react-router-dom";

function ProductDetails(props) {
    function addProductToBasket(product) {
        const newBasket = JSON.parse(JSON.stringify(props.basket));
        newBasket.push(product);
        props.setBasket(newBasket)
    }
    return <section className="product-detail main-wrapper">
        <img
            src={props.product.image}
            alt={props.product.title}
        />
        {/* style={{ ["--border-colour"]: `var(--${randColour()})` }} */}
        {/* style={{ ['border- color']: 'var(--yellow)' }} */}
        <div className="product-detail__side" >
            {/* <h3></h3> */}
            <h2>{props.product.title}</h2>
            <p>
                {props.product.description}
            </p>
            <p>£{props.product.price}</p>
            {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
            <Link to='/basket'><button onClick={function () {
                addProductToBasket(props.product);
            }}>Add to basket</button></Link>

        </div>
    </section>
}
export default ProductDetails
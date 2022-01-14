import { Link } from "react-router-dom";

function ProductDetails(props) {

    function addProductToBasket(product) {
        const newBasket = JSON.parse(JSON.stringify(props.basket));
        const foundElement = newBasket.find(prod => prod.id === product.id)


        if (foundElement) {
            props.updateQuantityOfProduct(product, foundElement.quantity + 1)
        } else {
            const itemToAdd = { ...product, quantity: 1 }
            newBasket.push(itemToAdd);
            props.setBasket(newBasket)
        }


    }

    return <section className="product-detail main-wrapper">
        <img
            src={props.product.image}
            alt={props.product.title}
        />
        {/* style={{ ["--border-colour"]: `var(--${randColour()})` }} */}

        <div className="product-detail__side" style={{ borderColor: 'var(--yellow)' }} >
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
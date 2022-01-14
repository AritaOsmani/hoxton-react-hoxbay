import { useState } from "react"
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem"

function Basket(props) {




    function calculateTotal() {
        let total = 0;
        for (const basketItem of props.basket) {
            total += basketItem.quantity * basketItem.price;
        }
        return total.toFixed(2)
    }
    return <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
            {props.basket.map(basketItem =>
                <Link to={`/products/${basketItem.id}`} >
                    <BasketItem
                        key={basketItem.id}
                        basketItem={basketItem}
                        basket={props.basket}
                        setBasket={props.setBasket}
                        updateQuantityOfProduct={props.updateQuantityOfProduct}
                    />
                </Link>
            )}

            {/* <!--  --> */}
        </ul>

        <h3>Your total: £{calculateTotal()}</h3>
    </section>
}
export default Basket
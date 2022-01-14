import { useState } from "react"
import BasketItem from "../components/BasketItem"

function Basket(props) {
    const [finalTotal, setFinalTotal] = useState([])
    function calculateTotal() {
        let total = 0;
        for (const totalVal of finalTotal) {
            total += totalVal;
        }
        return total
    }
    return <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
            {props.basket.map(basketItem =>
                <BasketItem
                    basketItem={basketItem}
                    basket={props.basket}
                    setBasket={props.setBasket}
                    finalTotal={finalTotal}
                    setFinalTotal={setFinalTotal}
                />)}

            {/* <!--  --> */}
        </ul>
        {console.log('Final Total: ', finalTotal)}
        <h3>Your total: £{calculateTotal()}</h3>
    </section>
}
export default Basket
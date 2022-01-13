import BasketItem from "../components/BasketItem"

function Basket(props) {
    return <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
            {props.basket.map(basketItem => <BasketItem basketItem={basketItem} />)}

            {/* <!--  --> */}
        </ul>
        {/* <!-- Basket total is calculated using each item's total from above --> */}
        <h3>Your total: £109.95</h3>
    </section>
}
export default Basket
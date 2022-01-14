import { useState } from "react/cjs/react.development";

function BasketItem(props) {

    const [totalOfBaksetItem, setTotalOfBasketItem] = useState(getTotalOfBasketItem(props.basketItem, 1))

    function removeProductFromBasket(product) {
        let newBasket = JSON.parse(JSON.stringify(props.basket))
        newBasket = newBasket.filter(basketItem => basketItem.id !== product.id)
        props.setBasket(newBasket)
    }

    function getTotalOfBasketItem(basketItem, quantity) {

        let total = quantity * basketItem.price;
        return total

    }

    function addTotalOfBasketItemToFinalTotal(total) {
        const newArr = JSON.parse(JSON.stringify(props.finalTotal))
        newArr.push(total)
        props.setFinalTotal(newArr)
    }

    return <li>
        <article className="basket-container__item">
            <img
                src={props.basketItem.image}
                alt={props.basketItem.title}
                width="90"
            />
            <p>{props.basketItem.title}</p>
            <p>
                Qty:
                <select onChange={function (e) {

                    if (Number(e.target.value) === 0) {
                        removeProductFromBasket(props.basketItem)
                    }
                    let total = getTotalOfBasketItem(props.basketItem, Number(e.target.value))
                    // addTotalOfBasketItemToFinalTotal(total)
                    console.log('Total inside', total)
                    setTotalOfBasketItem(total)
                }}

                ><option value="0">0</option
                ><option selected value="1">1</option
                ><option value="2">2</option
                ><option value="3">3</option></select
                >
            </p>
            {/* <!-- The item total is calculated using the Qty selected value --> */}
            {/* {console.log('Total: ', total)} */}
            <p>Item total: £{totalOfBaksetItem}</p>
        </article>
    </li>
}
export default BasketItem
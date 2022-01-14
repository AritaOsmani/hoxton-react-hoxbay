import { useState } from "react/cjs/react.development";

function BasketItem(props) {



    function removeProductFromBasket(product) {
        let newBasket = JSON.parse(JSON.stringify(props.basket))
        newBasket = newBasket.filter(basketItem => basketItem.id !== product.id)
        props.setBasket(newBasket)
    }

    function getTotalOfBasketItem(basketItem) {

        let total = basketItem.quantity * basketItem.price;
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
                <select defaultValue={props.basketItem.quantity}

                    onChange={function (e) {

                        if (Number(e.target.value) === 0) {
                            removeProductFromBasket(props.basketItem)
                        } else {
                            props.updateQuantityOfProduct(props.basketItem, Number(e.target.value))
                        }


                    }}

                ><option value="0">0</option
                ><option value="1">1</option
                ><option value="2">2</option
                ><option value="3">3</option></select
                >
            </p>
            {/* <!-- The item total is calculated using the Qty selected value --> */}
            {/* {console.log('Total: ', total)} */}
            <p>Item total: £{getTotalOfBasketItem(props.basketItem)}</p>
        </article>
    </li>
}
export default BasketItem
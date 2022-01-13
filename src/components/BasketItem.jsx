function BasketItem(props) {
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
                <select
                ><option value="0">0</option
                ><option value="1">1</option
                ><option value="2">2</option
                ><option value="3">3</option></select
                >
            </p>
            {/* <!-- The item total is calculated using the Qty selected value --> */}
            <p>Item total: £109.95</p>
        </article>
    </li>
}
export default BasketItem
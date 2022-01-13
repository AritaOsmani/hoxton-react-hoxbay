import { Link } from "react-router-dom"

function Category(props) {
    return <li>
        {/* <!-- Use the Link component from React Router to create
    the anchor tag --> */}
        <Link to={`/categories/${props.category.id}`}>{props.category.name}</Link>
    </li>
}
export default Category
import { BrowserRouter, Link, Navigate, useNavigate } from "react-router-dom";

const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header(props) {
  let navigate = useNavigate();
  return (
    <header
      className="header"
      // @ts-ignore
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <Link to='/products'>
            <li>

              Home
            </li>
          </Link>
          <Link to='/categories'>
            <li>

              Categories
            </li>
          </Link>
          <Link to='/basket'>
            <li>
              {/* Create here a link to this page */}
              Basket
            </li>
          </Link>
          <li className="search-element">
            <form onSubmit={event => {
              event.preventDefault();
              navigate(`/products/product/${event.target.search.value}`)
              event.target.reset()
            }} action="">
              <input name='search' type="text" placeholder="Search for a product..." />
            </form>

          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;

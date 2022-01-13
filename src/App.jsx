import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Products from "./pages/Products";


function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  function getProductsFromServer() {
    fetch('http://localhost:3000/products').then(res => res.json()).then(productFromServer => setProducts(productFromServer))
  }
  useEffect(getProductsFromServer, [])
  return (
    <>
      <Header />

      <main>
        {
          //Create your routes here
          <Routes>
            <Route path='/products' element={<Products products={products} />} />
            <Route path='/products/:id' element={<ProductDetailsPage basket={basket} setBasket={setBasket} />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/categories/:id' element={<CategoryProduct products={products} />} />
            <Route path='/basket' element={<Basket basket={basket} />} />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;

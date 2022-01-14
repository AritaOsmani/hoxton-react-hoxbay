import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import NotFound from "./pages/NotFound";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Products from "./pages/Products";
import SearchedProducts from "./pages/SearchedProducts";


function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [search, setSearch] = useState('')

  function updateQuantityOfProduct(product, amount) {
    const newBasket = JSON.parse(JSON.stringify(basket));
    const match = newBasket.find(prod => prod.id === product.id)
    match.quantity = amount;
    setBasket(newBasket)
  }

  function getProductsFromServer() {
    fetch('http://localhost:3000/products').then(res => res.json()).then(productFromServer => setProducts(productFromServer))
  }
  useEffect(getProductsFromServer, [])

  return (
    <>
      <Header setSearch={setSearch} />

      <main>
        {
          //Create your routes here
          <Routes>
            <Route index element={<Navigate replace to='/products' />} />
            <Route path='/products' element={<Products products={products} />} />
            <Route path='/products/:id' element={<ProductDetailsPage basket={basket} setBasket={setBasket} updateQuantityOfProduct={updateQuantityOfProduct} />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/categories/:id' element={<CategoryProduct products={products} />} />
            <Route path='/basket' element={<Basket basket={basket} setBasket={setBasket} updateQuantityOfProduct={updateQuantityOfProduct} />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/products/product/:title' element={<SearchedProducts products={products} />} />
          </Routes>
        }
      </main>
    </>
  );

}

export default App;

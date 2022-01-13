import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Products from "./pages/Products";


function App() {
  const [products, setProducts] = useState([])

  function getProductsFromServer() {
    fetch('http://localhost:3000/products').then(res => res.json()).then(productFromServer => setProducts(productFromServer))
  }
  useEffect(getProductsFromServer, [])
  return (
    <>
      <Header />
      {/* <Products products={products} /> */}
      <main>
        {
          //Create your routes here
          <Routes>
            <Route path='/products' element={<Products products={products} />} />
            <Route path='/products/:id' element={<ProductDetailsPage />} />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;

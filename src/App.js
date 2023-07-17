import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import "./Style/App.css";
import About from "./Components/About";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

function App() {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts();
    getAllCategories();
  }, []);

  let getProducts = () => {
    async function fetchData() {
      let api = await fetch("https://fakestoreapi.com/products");
      let arr = await api.json();
      setProducts(arr);
    }
    fetchData();
  };

  let getProductsInCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((arr) => setProducts(arr));
  };

  let getAllCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((arr) => setCategories(arr));
  };

  const list = products.map((product) => {
    return (
      <Card
        id={product.id}
        title={product.title}
        imageUrl={product.image}
        description={product.description}
        price={product.price}
      />
    );
  });

  return (
    <div className="app">
      <Navbar className="navbar" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Overview className="overview" />
              {categories.map((category) => (
                <button
                  className="btn btn-info"
                  onClick={() => getProductsInCategory(category)}
                >
                  {category}
                </button>
              ))}
              <div className="list">{list}</div>
            </>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

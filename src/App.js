import Card from "./Components/Card";
import Icon from "./Components/Icon";
import './Style/App.css'

import { useEffect, useState } from "react";

function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let api = await fetch("https://fakestoreapi.com/products");
      let arr = await api.json();
      setProducts(arr);
    }
    fetchData();
  }, []);

  const list = products.map((product) => {
    return (
      <Card
        id={product.id}
        title={product.title}
        imageUrl={product.image}
        description={product.description}
        price = {product.price}
      />
    );
  });

  return (
        <div className="app">
          {list}
        </div>
    )
}

export default App;

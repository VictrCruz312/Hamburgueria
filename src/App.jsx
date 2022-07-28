import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Global } from "./styles/Global";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setFilteredProducts(res);
      });
  }, []);

  const handleClick = (product) => {
    setCurrentSale([...currentSale, product]);
  };

  const showProducts = (filter) =>
    filter
      ? setFilteredProducts(
          products.filter((product) => product.name.indexOf(filter) !== -1)
        )
      : setFilteredProducts(products);

  const removeCart = (id) =>
    setCurrentSale(currentSale.filter((sale) => sale.id !== parseInt(id)));

  return (
    <div className="App">
      <Global />
      <Header showProducts={showProducts} />
      <ProductList
        filteredProducts={filteredProducts}
        handleClick={handleClick}
      />
      <Cart currentSale={currentSale} removeCart={removeCart} />
    </div>
  );
}

export default App;

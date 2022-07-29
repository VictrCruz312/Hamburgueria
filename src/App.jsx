import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Global } from "./styles/Global";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
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
    !currentSale.find((elem) => elem.id === product.id) &&
      setCurrentSale([...currentSale, product]);
  };

  const showProducts = (filter) =>
    filter
      ? setFilteredProducts(
          products.filter((product) => {
            return product.name.toLowerCase().includes(filter.toLowerCase()) ||
              product.category.toLowerCase().includes(filter.toLowerCase())
              ? true
              : false;
          })
        )
      : setFilteredProducts(products);

  const removeCart = (id) => {
    id === "tudo"
      ? setCurrentSale([])
      : currentSale.forEach((sale, index) => {
          if (sale.id === parseInt(id)) {
            setCurrentSale(currentSale.filter((sale, i) => i !== index));
          }
        });
  };

  useEffect(() => {
    setCartTotal(currentSale.reduce((a, b) => a + b.price, 0).toFixed(2));
  }, [currentSale]);

  return (
    <>
      <Global />
      <Header showProducts={showProducts} />
      <div className="App">
        <ProductList
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        <Cart
          currentSale={currentSale}
          cartTotal={cartTotal}
          removeCart={removeCart}
        />
      </div>
    </>
  );
}

export default App;

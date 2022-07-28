import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Global } from "./styles/Global";

function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;

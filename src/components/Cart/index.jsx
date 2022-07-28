import { StyleCart } from "./style";

const Cart = ({ currentSale, cartTotal, removeCart }) => {
  return (
    <StyleCart>
      <h2>Carrinho de compras</h2>
      <div className="containerCartProducts">
        <ul>
          {currentSale.map((sale) => (
            <li key={sale.id}>
              <figure>
                <img src={sale.img} alt="" />
              </figure>
              <div className="containerListCart">
                <div>
                  <h3>{sale.name}</h3>
                  <span>{sale.category}</span>
                </div>
                <button onClick={() => removeCart(sale.id)}>Remover</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="containerTotal">
          <div>
            <p className="textValue">Valor</p>
            <p className="value">R$ {cartTotal}</p>
          </div>
          <button>Remover todos</button>
        </div>
      </div>
    </StyleCart>
  );
};

export default Cart;

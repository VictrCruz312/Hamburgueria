import { StyleCart } from "./style";

const Cart = ({ currentSale, cartTotal, removeCart }) => {
  return (
    <StyleCart currentSale={currentSale}>
      <h2>Carrinho de compras</h2>
      <div className="containerCartProducts">
        <ul>
          {currentSale.length === 0 ? (
            <div className="cartVazio">
              <h3>Sua sacola está vazia</h3>
              <p>Adicione itens</p>
            </div>
          ) : (
            currentSale.map((sale, index) => (
              <li key={index}>
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
            ))
          )}
        </ul>
        <div className="containerTotal">
          <div>
            <p className="textValue">Valor</p>
            <p className="value">R$ {cartTotal}</p>
          </div>
          <button onClick={() => removeCart("tudo")}>Remover todos</button>
        </div>
      </div>
    </StyleCart>
  );
};

export default Cart;

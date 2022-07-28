const Cart = ({ currentSale, removeCart }) => {
  return (
    <div>
      <h2>Carrinho de compras</h2>
      <ul>
        {currentSale.map((sale) => (
          <li key={sale.id}>
            <img src={sale.img} alt="" />
            <div>
              <div>
                <h3>{sale.name}</h3>
                <span>{sale.category}</span>
              </div>
              <button onClick={() => removeCart(sale.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <p>Valor</p>
        <p>R$ {currentSale.reduce((a, b) => a + b.price, 0).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;

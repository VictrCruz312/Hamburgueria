const Product = ({ product, handleClick }) => {
  return (
    <li>
      <img src={product.img} alt="" />
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      <p>R${product.price.toFixed(2)}</p>
      <button onClick={() => handleClick(product)}>Add to cart</button>
    </li>
  );
};

export default Product;

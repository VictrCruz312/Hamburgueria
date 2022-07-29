import { ContainerInfoProducts, LiProduct } from "./style";

const Product = ({ product, handleClick }) => {
  return (
    <LiProduct>
      <figure>
        <img src={product.img} alt="" />
      </figure>
      <ContainerInfoProducts>
        <h2>{product.name}</h2>
        <h3>{product.category}</h3>
        <p>R${product.price.toFixed(2)}</p>
        <button onClick={() => handleClick(product)}>Add to cart</button>
      </ContainerInfoProducts>
    </LiProduct>
  );
};

export default Product;

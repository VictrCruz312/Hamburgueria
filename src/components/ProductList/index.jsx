import Product from "../Product";

const ProductList = ({ filteredProducts, handleClick }) => {
  return (
    <ul>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </ul>
  );
};

export default ProductList;

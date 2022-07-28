import Product from "../Product";
import { ListProducts } from "./style";

const ProductList = ({ filteredProducts, handleClick }) => {
  return (
    <ListProducts>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </ListProducts>
  );
};

export default ProductList;

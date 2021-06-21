import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <img
        src={props.game.image}
        alt=""
        // onClick={() => props.setProduct(props.game)}
      />
      <p>{props.game.name}</p>
      <p className="game-price">{props.game.price}</p>
      <DeleteButton
        DeleteProduct={props.DeleteProduct}
        productId={props.game.id}
        // setProduct={props.setProduct}
      ></DeleteButton>
    </ProductWrapper>
  );
};

export default ProductItem;

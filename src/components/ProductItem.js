import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/product/${props.game.id}`}>
        <img
          src={props.game.image}
          alt=""
          //  onClick={() => props.setProduct(props.game)}
        />
      </Link>
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

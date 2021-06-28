import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/product/${props.game.slug}`}>
        <img src={props.game.image} alt="" />
      </Link>
      <p>{props.game.name}</p>
      <p className="game-price">{props.game.price}KD</p>
      <DeleteButton productId={props.game.id}></DeleteButton>
    </ProductWrapper>
  );
};

export default ProductItem;

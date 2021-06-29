import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
import UpdateBtn from "./buttons/UpdateBtn";
import { observer } from "mobx-react";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/product/${props.game.slug}`}>
        <img src={props.game.image} alt="" />
      </Link>
      <p>{props.game.name}</p>
      <p className="game-price">{props.game.price}KD</p>
      <DeleteButton productId={props.game.id}></DeleteButton>
      <UpdateBtn product={props.game} />
    </ProductWrapper>
  );
};

export default observer(ProductItem);

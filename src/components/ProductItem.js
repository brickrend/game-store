import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <img
        src={props.game.image}
        alt=""
        onClick={() => props.setproduct(props.game)}
      />
      <p>{props.game.name}</p>
      <p className="game-price">{props.game.price}</p>
    </ProductWrapper>
  );
};

export default ProductItem;

import { ListWrapper } from "../styles";
import games from "../products";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const gameList = games.map((game) => {
    return (
      <div>
        <ProductItem game={game} key={game.id} setproduct={props.setProduct} />
      </div>
    );
  });
  return <ListWrapper>{gameList}</ListWrapper>;
};

export default ProductList;

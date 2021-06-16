// stayled component
import { ListWrapper } from "../styles";

// data
import games from "../products";

// component
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

// react component
import { useState } from "react";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const gameList = games
    .filter((game) => game.name.toLowerCase().includes(query))
    .map((game) => (
      <ProductItem game={game} key={game.id} setproduct={props.setProduct} />
    ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{gameList}</ListWrapper>;
    </div>
  );
};

export default ProductList;

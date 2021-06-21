// stayled component
import { ListWrapper } from "../styles";

// component
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

// react component
import { useState } from "react";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const gameList = props.products
    .filter((game) => game.name.toLowerCase().includes(query))
    .map((game) => (
      <ProductItem
        game={game}
        key={game.id}
        // setProduct={props.setProduct}
        DeleteProduct={props.DeleteProduct}
      />
    ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{gameList}</ListWrapper>;
    </div>
  );
};

export default ProductList;

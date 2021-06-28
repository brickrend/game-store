// store class
import productInstens from "../stores/productStore";

import { observer } from "mobx-react";

// stayled component
import { ListWrapper, AddProductIcon } from "../styles";

// component
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import AddProductModal from "./modals/addProductModal";

// react component
import { useState } from "react";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const gameList = productInstens.products
    .filter((game) => game.name.toLowerCase().includes(query))
    .map((game) => <ProductItem game={game} key={game.id} />);
  return (
    <div>
      <AddProductIcon className="active" onClick={openModal} />
      <AddProductModal isOpen={isOpen} closeModal={closeModal} />
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{gameList}</ListWrapper>;
    </div>
  );
};

export default observer(ProductList);

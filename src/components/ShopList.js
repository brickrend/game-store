import shopInstens from "../stores/shopStore";
import ShopItem from "./ShopItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { ListWrapper, AddProductIcon } from "../styles";
import { observer } from "mobx-react";
import AddShopModal from "./modals/addShopModel";
import userInstance from "../stores/authStore";

const ShopList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const shopList = shopInstens.shops
    .filter((shop) => shop.name.toLowerCase().includes(query))
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {userInstance.user && <AddProductIcon onClick={openModal} />}
      <ListWrapper>{shopList}</ListWrapper>;
      <AddShopModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default observer(ShopList);

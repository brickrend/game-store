import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { ShopWrapper } from "../styles";

const ShopItem = ({ shop }) => {
  return (
    <div>
      <ShopWrapper>
        <Link to={`/shop/${shop.slug}`}>
          <img src={shop.image} alt="" />
        </Link>
        <p>{shop.name}</p>
      </ShopWrapper>
    </div>
  );
};

export default observer(ShopItem);

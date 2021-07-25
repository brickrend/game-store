import shopInstens from "../stores/shopStore";
import productInstens from "../stores/productStore";

import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import ProductList from "./ProductList";

const ShopDetail = () => {
  const shopSlug = useParams().shopSlug;

  const shop = shopInstens.shops.find((shop) => shop.slug === shopSlug);

  const products = shop.product.map((product) =>
    productInstens.getProductById(product.id)
  );

  return (
    <>
      <DetailWrapper>
        <img src={shop.image} alt={shop.name} />
        <p>{shop.name}</p>
      </DetailWrapper>
      <ProductList shop={shop} products={products} />
    </>
  );
};

export default observer(ShopDetail);

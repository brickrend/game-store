// store class
import productInstens from "../stores/productStore";

import { observer } from "mobx-react";

import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";

const ProductDetail = () => {
  const productSlug = useParams().productSlug;
  const product1 = productInstens.products.find(
    (product) => product.slug === productSlug
  );
  if (!product1) return <Redirect to="/product" />;

  return (
    <DetailWrapper>
      <img src={product1.image} alt={product1.name} />
      <p>{product1.name}</p>
      <p>{product1.discription}</p>
      <p>{product1.price}</p>
      <DeleteButton productId={product1.id}></DeleteButton>
    </DetailWrapper>
  );
};

export default observer(ProductDetail);

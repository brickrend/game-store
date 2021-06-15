import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.Product.image} />
      <p>{props.Product.name}</p>
      <p>{props.Product.discription}</p>
      <p>{props.Product.price}</p>
    </DetailWrapper>
  );
};

export default ProductDetail;

import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.name}</p>
      <p>{props.product.discription}</p>
      <p>{props.product.price}</p>
      <DeleteButton
        DeleteProduct={props.DeleteProduct}
        productId={props.product.id}
        setProduct={props.setProduct}
      ></DeleteButton>
    </DetailWrapper>
  );
};

export default ProductDetail;

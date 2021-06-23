import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product1 = props.products.find(
    (product) => product.lug === productSlug
  );

  return (
    <DetailWrapper>
      <img src={product1.image} alt={product1.name} />
      <p>{product1.name}</p>
      <p>{product1.discription}</p>
      <p>{product1.price}</p>
      <DeleteButton
        DeleteProduct={props.DeleteProduct}
        productId={product1.id}
        // setProduct={props.setProduct}
      ></DeleteButton>
    </DetailWrapper>
  );
};

export default ProductDetail;

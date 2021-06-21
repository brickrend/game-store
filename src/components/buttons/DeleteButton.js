import { DeleteButtonComp } from "../../styles";

const DeleteButton = (props) => {
  const handelDelete = () => {
    props.DeleteProduct(props.productId);
    // props.setProduct("");
  };
  return <DeleteButtonComp onClick={handelDelete}>Delete</DeleteButtonComp>;
};

export default DeleteButton;

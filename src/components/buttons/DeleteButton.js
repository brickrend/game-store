// store class
import productInstens from "../../stores/productStore";

import { DeleteButtonComp } from "../../styles";

const DeleteButton = (props) => {
  const handelDelete = () => {
    productInstens.DeleteProduct(props.productId);
  };
  return <DeleteButtonComp onClick={handelDelete}>Delete</DeleteButtonComp>;
};

export default DeleteButton;

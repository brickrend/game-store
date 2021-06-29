import { UpdatedBtnStyled } from "../../styles";
import AddProductModal from "../modals/addProductModal";
import { useState } from "react";

export const UpdateBtn = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleUpdate = () => openModal();

  return (
    <div>
      <AddProductModal
        closeModal={closeModal}
        isOpen={isOpen}
        oldProduct={props.product}
      />
      <UpdatedBtnStyled onClick={openModal}>Update</UpdatedBtnStyled>
    </div>
  );
};
export default UpdateBtn;

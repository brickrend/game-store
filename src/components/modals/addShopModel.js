import Modal from "react-modal";
import { AddBtnStyled } from "../../styles";
import shopInstens from "../../stores/shopStore";

// States
import { useState } from "react";

export const AddShopModal = (props) => {
  const [shop, setShop] = useState(
    props.oldProduct ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setShop({ ...shop, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    shopInstens.createShop(shop);
    props.closeModal();
  };

  return (
    <div>
      <Modal isOpen={props.isOpen} closeModal={props.closeModal}>
        <form onSubmit={handleSubmit} class="row g-3">
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              name="name"
              value={shop.name}
              onChange={handleChange}
            ></input>
          </div>
          <div class="col-12">
            <input
              type="file"
              class="form-control"
              id="inputAddress2"
              name="image"
              placeholder="Image"
              onChange={handleImage}
            ></input>
          </div>
          <AddBtnStyled type="submit">Add</AddBtnStyled>
        </form>
      </Modal>
    </div>
  );
};

export default AddShopModal;

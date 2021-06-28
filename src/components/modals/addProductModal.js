import Modal from "react-modal";
import AddBtn from "../buttons/AddBtn";
import productInstens from "../../stores/productStore";

// States
import { useState } from "react";

export const AddProductModal = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    discription: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    productInstens.createProduct(product);
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
              placeholder="Name"
              onChange={handleChange}
            ></input>
          </div>
          <div class="col-md-6">
            <input
              type="number"
              class="form-control"
              id="inputPassword4"
              name="price"
              placeholder="Price"
              min="0"
              onChange={handleChange}
            ></input>
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              name="discription"
              placeholder="Discription"
              onChange={handleChange}
            ></input>
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
            ></input>
          </div>
          <AddBtn type="submit"></AddBtn>
        </form>
      </Modal>
    </div>
  );
};

export default AddProductModal;

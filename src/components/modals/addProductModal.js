import Modal from "react-modal";
import { AddBtnStyled } from "../../styles";
import productInstens from "../../stores/productStore";

// States
import { useState } from "react";

export const AddProductModal = (props) => {
  const [product, setProduct] = useState(
    props.oldProduct ?? {
      name: "",
      price: 0,
      discription: "",
      image: "",
    }
  );

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.oldProduct) productInstens.updateProduct(product);
    else productInstens.createProduct(product, props.shop);
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
              value={product.name}
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
              value={product.price}
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
              value={product.discription}
              placeholder="Discription"
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
          <AddBtnStyled type="submit">
            {props.oldProduct ? "Update" : "Add"}
          </AddBtnStyled>
        </form>
      </Modal>
    </div>
  );
};

export default AddProductModal;

import Modal from "react-modal";

import { useState } from "react";
import { AddBtnStyled } from "../../styles";
import userInstance from "../../stores/authStore";

const customeStyle = {
  display: "block",
  width: "300px",
  height: "400px",
  position: "absolute",
};

export const SignIn = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userInstance.signin(user);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customeStyle}
      >
        <form onSubmit={handleSubmit} class="row g-3">
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              name="username"
              onChange={handleChange}
            ></input>
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              name="password"
              onChange={handleChange}
            ></input>
          </div>
          <AddBtnStyled type="submit">Signin</AddBtnStyled>
        </form>
      </Modal>
    </div>
  );
};

export default SignIn;

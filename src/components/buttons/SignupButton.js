import { useState } from "react";
import { AuthBtnStyled } from "../../styles";
import SignUp from "../modals/signUp";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AuthBtnStyled onClick={openModal}>Singup</AuthBtnStyled>
      <SignUp isOpen={isOpen} closeModal={closeModal}></SignUp>
    </>
  );
};

export default SignupButton;

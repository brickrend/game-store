import { useState } from "react";
import { AuthBtnStyled } from "../../styles";
import SignIn from "../modals/signIn";

const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AuthBtnStyled onClick={openModal}>Singin</AuthBtnStyled>
      <SignIn isOpen={isOpen} closeModal={closeModal}></SignIn>
    </>
  );
};

export default SignInButton;

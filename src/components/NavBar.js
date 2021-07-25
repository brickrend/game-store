import Logo from "../Logo.png";
import { LogoImg, ThemeButton, NavProduct, SignoutBtnStyled } from "../styles";
import SignupButton from "./buttons/SignupButton";
import SignInButton from "./buttons/SginInButton";
import userInstance from "../stores/authStore";
import { observer } from "mobx-react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto">
          <LogoImg className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </LogoImg>
          <ThemeButton className="nav-item" onClick={props.changeTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"}
          </ThemeButton>
          {userInstance.user ? (
            <>
              <p>hello {userInstance.user.username}</p>
              <SignoutBtnStyled onClick={userInstance.signout}>
                sginout
              </SignoutBtnStyled>
            </>
          ) : (
            <>
              <SignInButton />
              <SignupButton />
            </>
          )}
          <NavProduct className="nav-item" to="/product">
            games
          </NavProduct>
          <NavProduct className="nav-item" to="/shop">
            shop
          </NavProduct>
        </ul>
      </div>
    </nav>
  );
};

export default observer(NavBar);

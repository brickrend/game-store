import Logo from "../Logo.png";
import { LogoImg, ThemeButton, NavProduct } from "../styles";

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
          <NavProduct className="nav-item" to="/product">
            games
          </NavProduct>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

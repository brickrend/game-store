import "./App.css";

// import Logo from "./Logo.png";
import NavBar from "./components/NavBar";

// styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

// useState
import { useState } from "react";
import Routes from "./components/Routes";

import { observer } from "mobx-react";
import shopInstens from "./stores/shopStore";
import productInstens from "./stores/productStore";

const theme = {
  light: {
    mainColor: "#20f4fc",
    backgroundColor: "gray",
    textBackgroundColor: "black",
    deleteButton: "red",
  },

  dark: {
    mainColor: "#20f4fc",
    backgroundColor: "black",
    textBackgroundColor: "gray",
    deleteButton: "red",
  },
};

function App() {
  const [currentTheme, setcurrentTheme] = useState("light");
  // const [product, setProduct] = useState(null);

  const changeTheme = () => {
    if (currentTheme === "light") {
      setcurrentTheme("dark");
    } else {
      setcurrentTheme("light");
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <NavBar currentTheme={currentTheme} changeTheme={changeTheme}>
          Games
        </NavBar>
        {shopInstens.loading || productInstens.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes />
        )}
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default observer(App);

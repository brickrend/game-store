import "./App.css";

// components
import HomePage from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
// import Logo from "./Logo.png";
import NavBar from "./components/NavBar";

// styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

// useState
import { useState } from "react";
import { Route, Switch } from "react-router";
// import { Link } from "react-router-dom";

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

  // const DeleteProduct = (productId) => {
  //   const updateProducts = _products.filter((game) => game.id !== productId);
  //   setProducts(updateProducts);
  // };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <NavBar currentTheme={currentTheme} changeTheme={changeTheme}>
          Games
        </NavBar>
        <Switch>
          <Route exact path="/product">
            <ProductList />
          </Route>
          <Route exact path="/product/:productSlug">
            <ProductDetail />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;

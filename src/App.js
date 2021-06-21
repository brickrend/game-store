import games from "./products";
import "./App.css";

// components
import HomePage from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Logo from "./Logo.png";
import NavBar from "./components/NavBar";

// styles
import { GlobalStyle, ThemeButton, NavProduct, LogoImg } from "./styles";
import { ThemeProvider } from "styled-components";

// useState
import { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

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
  const [_products, setProducts] = useState(games);

  const changeTheme = () => {
    if (currentTheme === "light") {
      setcurrentTheme("dark");
    } else {
      setcurrentTheme("light");
    }
  };

  const DeleteProduct = (productId) => {
    const updateProducts = _products.filter((game) => game.id !== productId);
    setProducts(updateProducts);
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <ThemeButton onClick={changeTheme}>
          {currentTheme === "light" ? "Dark" : "Light"}
        </ThemeButton>
        <Switch>
          <Route exact path="/">
            <HomePage />
            <NavBar to="/product" className="active">
              Games
            </NavBar>
          </Route>
          <Route exact path="/product">
            <ProductList products={_products} DeleteProduct={DeleteProduct} />
          </Route>
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;

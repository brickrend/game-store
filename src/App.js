import games from "./products";
import "./App.css";

// components
import HomePage from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

// styles
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";

// useState
import { useState } from "react";

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
  const [product, setProduct] = useState(null);
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

  const viewProduct = () => {
    if (product) {
      return (
        <ProductDetail
          product={product}
          setProduct={setProduct}
          DeleteProduct={DeleteProduct}
        />
      );
    } else {
      return (
        <ProductList
          setProduct={setProduct}
          products={_products}
          DeleteProduct={DeleteProduct}
        />
      );
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <ThemeButton onClick={changeTheme}>
          {currentTheme === "light" ? "Dark" : "Light"}
        </ThemeButton>
        <GlobalStyle />
        <HomePage />
        <div>{viewProduct()}</div>
      </ThemeProvider>
    </div>
  );
}

export default App;

import games from "./products";
import "./App.css";

// components
import HomePage from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

// styles
import {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  productWrapper,
  ThemeButton,
} from "./styles";
import { ThemeProvider } from "styled-components";

// useState
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#20f4fc",
    backgroundColor: "gray",
    textBackgroundColor: "black",
  },

  dark: {
    mainColor: "#20f4fc",
    backgroundColor: "black",
    textBackgroundColor: "gray",
  },
};

function App() {
  const [currentTheme, setcurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);

  const changeTheme = () => {
    if (currentTheme === "light") {
      setcurrentTheme("dark");
    } else {
      setcurrentTheme("light");
    }
  };

  const viewProduct = () => {
    if (product) {
      return <ProductDetail Product={product} />;
    } else {
      return <ProductList setProduct={setProduct} />;
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

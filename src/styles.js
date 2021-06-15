import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color:${(prop) => prop.theme.backgroundColor};
    color :${(prop) => prop.theme.mainColor};
}
`;

export const Title = styled.h1`
  margin: auto;
  background-color: black;
  text-align: center;
  color: rgb(32, 244, 252);
`;

export const Description = styled.h4`
  margin: auto;
  background-color: black;
  text-align: center;
  color: rgb(32, 244, 252);
`;

export const ShopImage = styled.img`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
`;

export const ListWrapper = styled.div`
  display: block;
  align-items: left;
`;

export const ProductWrapper = styled.div`
  margin: 5px;

  img {
    width: 300px;
    height: 300px;
  }
  p {
    margin: auto;
    background-color: black;
    text-align: left;
    color: ${(prop) => prop.theme.mainColor};

    &.game-price {
      color: ${(prop) => prop.theme.mainColor};
    }
  }
`;

export const ThemeButton = styled.button`
  ${
    "" /* width: 5%;
  height: 50%; */
  }
  font-size: 1em;
  borfer-redius: 3px;
  ${"" /* border-color : ${(prop) => prop.theme.backgroundColor}; */}
  padding: 15px;
  margin: 10px;
  width: 10%;
  background-color: ${(prop) => prop.theme.textBackgroundColor};
  color: ${(prop) => prop.theme.backgroundColor};
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
    margin-right: 20px;
  }
  p {
    vertical-align: middle;
  }
`;

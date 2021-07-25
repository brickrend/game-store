import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import { TiPlusOutline } from "react-icons/ti";

export const GlobalStyle = createGlobalStyle`
body{
    background-color:${(prop) => prop.theme.backgroundColor};
    color :${(prop) => prop.theme.mainColor};
}
`;

export const AddBtnStyled = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: black;
  color: white;
`;

export const UpdatedBtnStyled = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(prop) => prop.theme.backgroundColor};
  color: ${(prop) => prop.theme.mainColor};
`;

export const AuthBtnStyled = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: black;
  color: ${(prop) => prop.theme.mainColor};
`;
export const SignoutBtnStyled = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: black;
  color: ${(prop) => prop.theme.mainColor};
`;

export const AddProductIcon = styled(TiPlusOutline)`
  color: white;
  font-size: 30px;
  margin: 30px 0px 0px 12em;
  border-style: solid;
  border-radius: 50%;
  background-color: black;

  &.active:hover {
    color: rgb(192, 201, 204);
  }
`;

export const NavProduct = styled(NavLink)`
  color: ${(prop) => prop.theme.mainColor};
  float: right;
  padding: 5px;
  &.active {
    color: ${(prop) => prop.theme.mainColor};
  }
`;

export const LogoImg = styled(NavLink)`
  padding: 10px;
  img {
    width: 8rem;
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
    margin: 0 80.1% 0 0;
    ${"" /* background-color: black; */}
    text-align: left;
    color: ${(prop) => prop.theme.mainColor};

    &.game-price {
      color: ${(prop) => prop.theme.mainColor};
    }
  }
`;

export const ShopWrapper = styled.div`
  margin: 5px;

  img {
    width: 300px;
    height: 300px;
  }
  p {
    margin: 0 80.1% 0 0;
    ${"" /* background-color: black; */}
    text-align: left;
    color: ${(prop) => prop.theme.mainColor};

    &.game-price {
      color: ${(prop) => prop.theme.mainColor};
    }
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
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

export const SearchBarComp = styled.input`
  border: solid;
  margin: 10px auto;
  display: block;
  width: 40%;
`;

export const DeleteButtonComp = styled.p`
  color: ${(prop) => prop.theme.deleteButton};
`;

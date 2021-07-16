import React from "react";
import SearchBar from "./../../atoms/SearchBar/SearchBar";
import { HeaderWrapper, Img } from "./Header.style";
import productLogo from "./../../../assests/logo.png";
const Header = (props) => {
  const { handleChange } = props;
  return (
    <HeaderWrapper>
      <Img src={productLogo} alt="Product logo"></Img>
      <SearchBar
        placeholder="Search Products by Name"
        handleChange={handleChange}
      />
      <div>Profile</div>
      <div>Cart</div>
      <div>Sign in</div>
    </HeaderWrapper>
  );
};

export default Header;

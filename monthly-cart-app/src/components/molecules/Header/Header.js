import React from "react";
import SearchBar from "./../../atoms/SearchBar/SearchBar";
import { HeaderWrapper, Img } from "./Header.style";
import productLogo from "./../../../assests/logo.png";
const Header = (props) => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <HeaderWrapper>
      <Img src={productLogo} alt="Product logo"></Img>
      <SearchBar placeholder="Search Products" handleChange={handleChange} />
      <div>Profile</div>
      <div>Cart</div>
      <div>Sign in</div>
    </HeaderWrapper>
  );
};

export default Header;

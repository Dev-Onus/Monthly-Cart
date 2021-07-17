import React, { useState } from "react";
import Header from "./../../../components/molecules/Header/Header";
import ProductList from "./../../../modules/organisms/ProductList/ProductList";

const Product = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };
  return (
    <div>
      <Header handleChange={handleChange} />
      <ProductList searchItem={searchItem} />
    </div>
  );
};

export default Product;

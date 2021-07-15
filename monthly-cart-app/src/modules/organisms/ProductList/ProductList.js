import React, { Fragment } from "react";
import { css } from "emotion";

import { ProductContainer } from "./ProductList.style";
import ProductSidebar from "./../../../components/molecules/ProductSidebar/ProductSidebar";
import ProductItem from "./../../../components/molecules/ProductItem/ProductItem";
import Product1 from "./../../../assests/product1.png";
import Product2 from "./../../../assests/product2.png";
import Product3 from "./../../../assests/product3.png";
import Product4 from "./../../../assests/product4.png";
import Product5 from "./../../../assests/product5.png";
import Product6 from "./../../../assests/product6.png";
const productResponse = [
  {
    id: "1232323",
    picture: Product1,
    name: "H&M",
    description: "Women Black Colour bag",
    status: " ",
  },
  {
    id: "1212111",
    picture: Product2,
    name: "Roadster",
    description: "Women Designed bag",
    status: "",
  },
  {
    id: "1242322",
    picture: Product3,
    name: "Tommy Hilfiger",
    description: "Watch with case",
    status: " ",
  },
  {
    id: "1223311",
    picture: Product4,
    name: "Kitty Richards",
    description: "I can't get",
    status: " ",
  },
  {
    id: "132443442",
    picture: Product5,
    name: "Roadster",
    description: "men  sneaker",
    status: "",
  },
  {
    id: "12332232",
    picture: Product6,
    name: "Rayban",
    description: "glasses with case",
    status: " ",
  },
  ////////
  {
    id: "12321323",
    picture: Product1,
    name: "Kitty Richards",
    description: "I can't get no",
    status: " ",
  },
  {
    id: "12121111",
    picture: Product2,
    name: "Kitty Starr",
    description: "I would like to be... under a box!",
    status: "",
  },
  {
    id: "12423122",
    picture: Product3,
    name: "Winston Churchkitty",
    description: " toys, boxes and sleep!",
    status: " ",
  },
  {
    id: "12233111",
    picture: Product4,
    name: "Kitty Richards",
    description: "I can't get no...",
    status: " ",
  },
  {
    id: "1324413442",
    picture: Product5,
    name: "Kitty Starr",
    description: "I would like to be",
    status: "",
  },
  {
    id: "123321232",
    picture: Product6,
    name: "Winston Churchkitty",
    description: "sys, boxes and sleep!",
    status: " ",
  },
];

const renderProductList = (products) =>
  products.map((product) => <ProductItem key={product.id} product={product} />);

const ProductList = () => (
  <Fragment>
    <h1
      className={css`
        margin-bottom: 30px;
      `}
    >
      Products
    </h1>

    <ProductContainer>
      <ProductSidebar />
      {renderProductList(productResponse)}
    </ProductContainer>
  </Fragment>
);

export default ProductList;

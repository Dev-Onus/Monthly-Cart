import React, { Fragment, useState, useEffect } from "react";
import { css } from "emotion";

import {useQuery,gql} from '@apollo/client'

import { ProductContainer } from "./ProductList.style";
import ProductFilter from "../../../components/molecules/ProductFilter/ProductFilter";
import ProductItem from "./../../../components/molecules/ProductItem/ProductItem";
import Product1 from "./../../../assests/product1.png";
import Product2 from "./../../../assests/product2.png";
import Product3 from "./../../../assests/product3.png";
import Product4 from "./../../../assests/product4.png";
import Product5 from "./../../../assests/product5.png";
import Product6 from "./../../../assests/product6.png";
// const productResponse = [
//   {
//     id: "1232323",
//     picture: Product1,
//     name: "H&M",
//     description: "Women Black Colour bag",
//     price: "2000",
//     status: " ",
//   },
//   {
//     id: "1212111",
//     picture: Product2,
//     name: "Roadster",
//     description: "Women Designed bag",
//     price: "2600",
//     status: "",
//   },
//   {
//     id: "1242322",
//     picture: Product3,
//     name: "Tommy Hilfiger",
//     description: "Watch with case",
//     price: "6800",
//     status: " ",
//   },
//   {
//     id: "1223311",
//     picture: Product4,
//     name: "Kitty Richards",
//     description: "I can't get",
//     price: "4500",
//     status: " ",
//   },
//   {
//     id: "132443442",
//     picture: Product5,
//     name: "Roadster",
//     description: "men  sneaker",
//     price: "2200",
//     status: "",
//   },
//   {
//     id: "12332232",
//     picture: Product6,
//     name: "Rayban",
//     description: "glasses with case",
//     price: "1100",
//     status: " ",
//   },
//   ////////
//   {
//     id: "12321323",
//     picture: Product1,
//     name: "Kitty Richards",
//     description: "I can't get no",
//     price: "12100",
//     status: " ",
//   },
//   {
//     id: "12121111",
//     picture: Product2,
//     name: "Kitty Starr",
//     description: "I would like to be... under a box!",
//     price: "3200",
//     status: "",
//   },
//   {
//     id: "12423122",
//     picture: Product3,
//     name: "Winston Churchkitty",
//     description: " toys, boxes and sleep!",
//     price: "1900",
//     status: " ",
//   },
//   {
//     id: "12233111",
//     picture: Product4,
//     name: "Kitty Richards",
//     description: "I can't get no...",
//     price: "1430",
//     status: " ",
//   },
//   {
//     id: "1324413442",
//     picture: Product5,
//     name: "Kitty Starr",
//     description: "I would like to be",
//     price: "2332",
//     status: "",
//   },
//   {
//     id: "123321232",
//     picture: Product6,
//     name: "Winston Churchkitty",
//     description: "sys, boxes and sleep!",
//     price: "1890",
//     status: " ",
//   },
// ];

const ProductList = (props) => {
  const [productSearchResult, setProductSearchResult] = useState([]);
  
  const productQuery = gql`
    query products {
      products {
        id
        name
        price
        description
      }
    }
  `;

  const {loading,error,data}=useQuery(productQuery)
  
  const { searchItem } = props;
  // useEffect(() => {
  //   const productApi=async()=>{
  //     const res = await data.products.filter((product) =>
  //     product.name.toLowerCase().includes(searchItem)
  //     );
  //     setProductSearchResult(res);
  //   }
  //   productApi()
  // }, [searchItem]);

  if(loading) return<h1 style={{width:"75rem",margin:"0 auto"}}>Loading...</h1>
  if(error) return<h1 style={{width:"75rem",margin:"0 auto"}}>{error.message}</h1>
  
  const productsArray=data.products
  

  const renderProductList = (products) =>
    searchItem.length > 0
      ? productSearchResult.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))
      : products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ));

  return (
    <Fragment>
      <h1
        className={css`
          margin-bottom: 30px;
        `}
      >
        Products
      </h1>

      <ProductContainer>
        <ProductFilter />
        {/* {value[0]} */}
        {renderProductList(productsArray)}
      </ProductContainer>
    </Fragment>
  );
};

export default ProductList;

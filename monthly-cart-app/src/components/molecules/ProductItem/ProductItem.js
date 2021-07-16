import React, { useState } from "react";
import {
  Product,
  ProductPicture,
  ProductName,
  ProductStatus,
  ProductDescription,
  ProductPrice,
} from "./ProductItem.style";

const ProductItem = (props) => {
  const { product } = props;
  const AddCart = () => {};
  return (
    <Product>
      <ProductPicture alt="Product" src={product.picture} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice> Rs.{product.price}</ProductPrice>
      <ProductStatus onClick={AddCart}>Add to Cart</ProductStatus>
      {/* <ProductStatus status={product.status}>{product.status}</ProductStatus> */}
    </Product>
  );
};
export default ProductItem;

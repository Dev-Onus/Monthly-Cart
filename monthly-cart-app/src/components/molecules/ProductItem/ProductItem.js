import React from "react";
import {
  Product,
  ProductPicture,
  ProductName,
  ProductStatus,
  ProductDescription,
} from "./ProductItem.style";

const ProductItem = (props) => {
  const { product } = props;
  return (
    <Product>
      <ProductPicture alt="Product" src={product.picture} />

      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductStatus>Add to Cart</ProductStatus>
      {/* <ProductStatus status={product.status}>{product.status}</ProductStatus> */}
    </Product>
  );
};
export default ProductItem;

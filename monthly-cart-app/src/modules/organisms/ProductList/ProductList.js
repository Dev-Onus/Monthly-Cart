import React, { Fragment, useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { ProductContainer, ProductTitle } from "./ProductList.style";
import ProductFilter from "../../../components/molecules/ProductFilter/ProductFilter";
import ProductItem from "./../../../components/molecules/ProductItem/ProductItem";

const ProductList = (props) => {
  const [productSearchResult, setProductSearchResult] = useState([]);
  const [productResponse, setProductResponse] = useState();

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

  const { loading, error, data } = useQuery(productQuery);

  const { searchItem } = props;

  useEffect(() => {
    const productApi = async () => {
      const res = (await data)
        ? data.products.filter((product) =>
            product.name.toLowerCase().includes(searchItem)
          )
        : "";
      setProductSearchResult(res);
    };
    productApi();
  }, [searchItem]);

  useEffect(() => {
    if (data) {
      setProductResponse(data.products);
    }
  }, [data]);

  if (loading)
    return <h1 style={{ width: "75rem", margin: "0 auto" }}>Loading...</h1>;
  if (error)
    return (
      <h1 style={{ width: "75rem", margin: "300px 700px" }}>{error.message}</h1>
    );

  const filterProducts = (e) => {
    if (e.target.value === "Sort By: Price:Low to High") {
      const response = data
        ? data.products
            .map((items) => items)
            .sort(function (a, b) {
              return a.price - b.price;
            })
        : "";
      setProductResponse(response);
    } else if (e.target.value === "Sort By: Price:High to Low") {
      const response = data
        ? data.products
            .map((items) => items)
            .sort(function (a, b) {
              return b.price - a.price;
            })
        : "";
      setProductResponse(response);
    }
  };

  return (
    <Fragment>
      <ProductContainer>
        <ProductTitle>Products</ProductTitle>
        <ProductFilter filterProducts={filterProducts} />
        {searchItem.length > 0
          ? productSearchResult
            ? productSearchResult.map((item) => (
                <ProductItem product={item} key={item.id} />
              ))
            : ""
          : productResponse
          ? productResponse.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          : ""}
      </ProductContainer>
    </Fragment>
  );
};

export default ProductList;

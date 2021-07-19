import React, { Fragment, useState, useEffect } from "react";
import { css } from "emotion";

import { useQuery, gql } from "@apollo/client";

import { ProductContainer } from "./ProductList.style";
import ProductFilter from "../../../components/molecules/ProductFilter/ProductFilter";
import ProductItem from "./../../../components/molecules/ProductItem/ProductItem";

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

  if (loading)
    return <h1 style={{ width: "75rem", margin: "0 auto" }}>Loading...</h1>;
  if (error)
    return (
      <h1 style={{ width: "75rem", margin: "300px 700px" }}>{error.message}</h1>
    );

  const productsArray = data.products;

  const renderProductList = (products) =>
    searchItem.length > 0
      ? productSearchResult
        ? productSearchResult.map((item) => (
            <ProductItem product={item} key={item.id} />
          ))
        : ""
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

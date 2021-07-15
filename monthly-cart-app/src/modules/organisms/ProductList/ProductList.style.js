import styled from "react-emotion";

export const ProductContainer = styled("div")`
  display: grid;
  grid-template-columns:
    [product-start] 200px [product-item-start] repeat(4, 1fr)
    [product-item-end];

  position: relative;
  grid-gap: 1rem;
  padding: 2rem;
`;

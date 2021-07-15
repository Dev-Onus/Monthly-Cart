import styled from "react-emotion";

export const Product = styled("div")`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  width: 300px;
  box-shadow: 0px 0px 16px -2px rgba(0, 0, 0, 0.37);
`;

export const ProductPicture = styled("img")`
  margin: 0rem 3rem;
  border-radius: 10px;
  width: 200px;
  align-self: flex-start;
`;

export const ProductName = styled("h2")`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const ProductDescription = styled("h3")`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const ProductStatus = styled("div")`
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100px;
  border-radius: 25px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  background: #0000ff;
`;

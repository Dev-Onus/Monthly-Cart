import styled from "react-emotion";

export const FilterContainer = styled("div")`
  grid-column: 1/5;
`;
export const Filters = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  border: 1px solid grey;
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.37);
`;

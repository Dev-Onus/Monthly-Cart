import styled from "react-emotion";

export const SearchField = styled("input")`
  padding: 0.6rem 1rem;
  border: 1px solid #f5f5f6;
  border-radius: 8px;
  border-left: 0;
  background: #f5f5f6;
  width: 600px;
  font-size: 20;
  font-weight: 500;
  margin: 15px;
  min-width: 480px;
  &:focus,
  &:active {
    border-color: white;
  }
`;

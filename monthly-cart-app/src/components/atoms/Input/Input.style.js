import styled from "react-emotion";

export const InputField = styled("input")`
  moutline: 0;
  padding: 0.6rem 1rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 8px;
  margin-bottom: 15px;
  min-width: 280px;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
`;

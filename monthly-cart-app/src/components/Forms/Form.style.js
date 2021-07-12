import styled from "react-emotion";

export const Wrapper = styled("div")`
  display: flex;
  position: relative;

  justify-content: center;
  text-align: center;
  padding: 10px;
  height: 400px;
  width: 600px;
  left: 25%;
  margin: 171px;
  &:last-of-type {
    margin-bottom: 0;
  }
  border-radius: 10px;
  box-shadow: 0px 0px 16px -2px rgba(0, 0, 0, 0.37);
`;

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

export const Button = styled("button")`
  background-color: #2185d0;
  color: #ffffff;
  text-shadow: none;
  background-image: none;
  padding: 0.6rem 1.5rem;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Title = styled("h3")`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const Status = styled("div")`
  font-size: 10px;
  display: inline-block;
  padding: 8px;
  border-radius: 25px;
  color: white;
  font-size: 11px;
  font-weight: bold;
`;

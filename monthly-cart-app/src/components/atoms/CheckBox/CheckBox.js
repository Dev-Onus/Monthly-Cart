import React from "react";
import { CheckBoxCotainer } from "./CheckBox.style";

const CheckBox = (props) => {
  const { handleChange, checked } = props;
  return (
    <CheckBoxCotainer
      type="checkbox"
      checked={checked}
      onChange={handleChange}
    ></CheckBoxCotainer>
  );
};

export default CheckBox;

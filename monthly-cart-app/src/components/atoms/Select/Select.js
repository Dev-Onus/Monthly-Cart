import React from "react";
import { SelectField } from "./Select.style";

const Select = (props) => {
  const { handleChange, options } = props;

  return (
    <SelectField onChange={handleChange}>
      {options.map((value) => (
        <option>{value}</option>
      ))}
    </SelectField>
  );
};

export default Select;

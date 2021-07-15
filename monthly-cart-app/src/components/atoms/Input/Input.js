import React from "react";
import { InputField } from "../../../modules/templates/Forms/Form.style";

const Input = (props) => {
  const { name, handleChange, placeholder, required } = props;
  return (
    <div>
      <InputField
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;

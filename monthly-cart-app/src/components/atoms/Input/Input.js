import React from "react";
import { InputField } from "./Input.style";

const Input = (props) => {
  const { name, handleChange, placeholder, required, type} = props;
  return (
    <div>
      <InputField
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;

import React from "react";
import { Button } from "./SubmitButton.style";

const SubmitButton = (props) => {
  const { handleSubmit, disabled, buttonText } = props;
  return (
    <div>
      <Button type="submit" onClick={handleSubmit} disabled={disabled}>
        {buttonText}
      </Button>
    </div>
  );
};

export default SubmitButton;

import React from "react";
import { Button } from "../../../modules/templates/Forms/Form.style";

const SubmitButton = (props) => {
  const { handleSubmit, disabled } = props;
  return (
    <div>
      <Button type="submit" onClick={handleSubmit} disabled={disabled}>
        Continue
      </Button>
    </div>
  );
};

export default SubmitButton;

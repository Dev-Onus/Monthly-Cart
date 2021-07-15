import React from "react";
import { TitleText } from "../../../modules/templates/Forms/Form.style";

const Title = (props) => {
  const { text } = props;

  return <TitleText>{text}</TitleText>;
};

export default Title;

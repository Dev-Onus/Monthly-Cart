import React from "react";
import { BoldText } from "./Text.style";

const Text = (props) => {
  const { text } = props;
  return <BoldText>{text}</BoldText>;
};

export default Text;

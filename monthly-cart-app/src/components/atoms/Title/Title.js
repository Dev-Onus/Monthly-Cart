import React from "react";
import { TitleText } from "./Title.Style";

const Title = (props) => {
  const { text } = props;

  return <TitleText>{text}</TitleText>;
};

export default Title;

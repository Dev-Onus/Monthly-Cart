import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkRoute = (props) => {
  const { path, linkText } = props;

  return <NavLink to={path}>{linkText}</NavLink>;
};

export default NavLinkRoute;

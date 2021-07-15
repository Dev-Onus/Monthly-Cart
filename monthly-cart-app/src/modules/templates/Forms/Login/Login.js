import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "../Form.style";
import Title from "../../../../components/atoms/Title/Title";
import SubmitButton from "../../../../components/atoms/Buttons/SubmitButton";
import NavLinkRoute from "../../../../components/atoms/Link/NavLinkRoute";
import Input from "../../../../components/atoms/Input/Input";
import { useHistory } from "react-router-dom";
const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function LoginForm(props) {
  const [values, setValues] = useState({
    mobileNumber: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmit = (event) => {
    history.push("/products");
  };

  const handleChange = (event) => {
    setValues((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Title text="Sign In"></Title>
        <div>
          <Input
            name="mobileNumber"
            placeholder="Enter Your Mobile Number"
            handleChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            name="password"
            handleChange={handleChange}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div>
          {/* <button size="small" component={LinkBtn} to="/reset-password">
            Forgot Password
          </button> */}
        </div>
        <div>
          <SubmitButton handleSubmit={handleSubmit} />
        </div>
        <div>
          <NavLinkRoute
            path="/register"
            linkText="Don't have an Account? Sign Up"
          />
        </div>
      </form>
    </Wrapper>
  );
}

export default LoginForm;

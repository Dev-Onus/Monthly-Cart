import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Wrapper, InputField, Button, Title } from "./../Form.style";

import { NavLink } from "react-router-dom";

// // validation functions
// const required = (value) => (value === null ? "Required" : undefined);
// const email = (value) =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//     ? "Invalid email"
//     : undefined;

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function LoginForm(props) {
  const [values, setValues] = useState({
    mobileNumber: "",
    password: "",
  });

  const handleSubmit = (event) => {};

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
        <Title>Sign In</Title>{" "}
        <div>
          <InputField
            name="mobileNumber"
            placeholder="Enter Your Mobile Number"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <InputField
            name="password"
            onChange={handleChange}
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
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            // disabled={submitting}
          >
            Continue
          </Button>
        </div>
        <div>
          <NavLink to="/register">Don't have an Account? Sign Up</NavLink>
        </div>
      </form>
    </Wrapper>
  );
}

export default LoginForm;

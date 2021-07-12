import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { Wrapper, InputField, Button, Title } from "./../Form.style";
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

function RegisterForm(props) {
  const [values, setValues] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {};

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
      <Fragment>
        <form onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          <div>
            <InputField
              name="name"
              onChange={handleChange}
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <InputField
              name="mobileNumber"
              onChange={handleChange}
              placeholder="Enter Your Mobile Number"
              required
            />
          </div>
          <div>
            <InputField
              name="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <InputField
              name="password"
              onChange={handleChange}
              placeholder="Enter Your Password"
              // type={showPassword ? "text" : "password"}
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
            <NavLink to="/login">Already have an Account? Sign In</NavLink>
          </div>
        </form>
      </Fragment>
    </Wrapper>
  );
}

export default RegisterForm;

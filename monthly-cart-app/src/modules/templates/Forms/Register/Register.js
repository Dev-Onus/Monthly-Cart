import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { Wrapper } from "../Form.style";
import Title from "../../../../components/atoms/Title/Title";
import SubmitButton from "../../../../components/atoms/Buttons/SubmitButton";
import NavLinkRoute from "../../../../components/atoms/Link/NavLinkRoute";
import Input from "../../../../components/atoms/Input/Input";
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
      <form onSubmit={handleSubmit}>
        <Title text="Sign Up" />
        <div>
          <Input
            name="name"
            handleChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div>
          <Input
            name="mobileNumber"
            handleChange={handleChange}
            placeholder="Enter Your Mobile Number"
            required
          />
        </div>
        <div>
          <Input
            name="email"
            placeholder="Enter Your Email"
            handleChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            name="password"
            onChange={handleChange}
            placeholder="Enter Your Password"
            // type={showPassword ? "text" : "password"}
            required
          />
        </div>
        <div>
          {/* 
          <button size="small" component={LinkBtn} to="/reset-password">
            Forgot Password
          </button> */}
        </div>
        <div>
          <SubmitButton

          // disabled={submitting}
          >
            Continue
          </SubmitButton>
        </div>
        <div>
          <NavLinkRoute
            path="/login"
            linkText="Already have an Account? Sign In"
          />
        </div>
      </form>
    </Wrapper>
  );
}

export default RegisterForm;

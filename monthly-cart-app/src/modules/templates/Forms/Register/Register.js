import React, { Fragment, useState,useEffect } from "react";
import PropTypes from "prop-types";

import { Wrapper } from "../Form.style";
import Title from "../../../../components/atoms/Title/Title";
import SubmitButton from "../../../../components/atoms/SubmitButton/SubmitButton";
import NavLinkRoute from "../../../../components/atoms/Link/NavLinkRoute";
import Input from "../../../../components/atoms/Input/Input";
import {gql,useMutation} from '@apollo/client'

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

const addUserMutation=gql`
  mutation AddUserFn($userName:String!,$password:String!,$name:String!,$mobileNo:String){
    AddUser(userName:$userName,password:$password,name:$name,mobileNo:$mobileNo){
      message
    }
  }
` 

function RegisterForm(props) {
  const [values, setValues] = useState({
    name: "",
    mobileNo: "",
    userName: "",
    password: "",
  });
  const [AddUserFn]=useMutation(addUserMutation);
  
  const handleSubmit = (event) => {
    event.preventDefault()
    AddUserFn({variables:values}).then(info=>alert(info.data.AddUser.message))
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
      <form>
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
            name="mobileNo"
            handleChange={handleChange}
            placeholder="Enter Your Mobile Number"
            required
          />
        </div>
        <div>
          <Input
            name="userName"
            placeholder="Enter Your Username"
            handleChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            name="password"
            type="password"
            handleChange={handleChange}
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
            buttonText="Continue"
            handleSubmit={handleSubmit}
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

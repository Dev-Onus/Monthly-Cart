import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "../Form.style";
import Title from "../../../../components/atoms/Title/Title";
import SubmitButton from "../../../../components/atoms/SubmitButton/SubmitButton";
import NavLinkRoute from "../../../../components/atoms/Link/NavLinkRoute";
import Input from "../../../../components/atoms/Input/Input";
import { useHistory } from "react-router-dom";
import {useQuery,gql} from '@apollo/client'

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

const loginQuery=gql`
  query loginFn($userName:String!,$password:String!){
    login(userName:$userName,password:$password){
      userID
      userName
      message
    }
  }
`

function LoginForm(props) {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  const history = useHistory();
  const {data}=useQuery(loginQuery,{variables:values})
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(data?data.login.message:'')
    if(data){
      if(data.login.message==="Login Successful"){
        history.push('/products')
      }
    }
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
            required
          />
        </div>
        <div>
          {/* <button size="small" component={LinkBtn} to="/reset-password">
            Forgot Password
          </button> */}
        </div>
        <div>
          <SubmitButton buttonText="Continue" handleSubmit={handleSubmit} />
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

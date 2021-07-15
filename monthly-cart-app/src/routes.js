import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./modules/templates/Forms/Login/Login";
import RegisterForm from "./modules/templates/Forms/Register/Register";
import Products from "./container/pages/Products/Product";
import App from "./App";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

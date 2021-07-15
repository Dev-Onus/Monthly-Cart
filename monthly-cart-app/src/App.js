import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      Landing Page
      <Link to="/login">Login</Link>
    </div>
  );
};

export default App;

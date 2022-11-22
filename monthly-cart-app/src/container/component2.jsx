import React from "react";
const component2 = () => {
  return (
    <div class="container">
      <div class="jumbotron">
        <h1>Learn to create websites </h1>
        <p class="lead">
          In today's world internet is the most popular way of connecting with
          the people.{" "}
        </p>
        <p>
          {" "}
          <a href="#" class="btn btn-success btn-lg" target="_blank">
            Get started today
          </a>
        </p>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h2>HTML</h2>
          <p>HTML is a standard Markup Language</p>
          <p>
            <a href="#" class="btn btn-success" target="_blank">
              Learn More
            </a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>CSS</h2>
          <p>CSS is used for describing web pages. </p>
          <p>
            <a href="#" class="btn btn-success" target="_blank">
              Learn More
            </a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>BootStrap</h2>
          <p>
            BootStrap is a powerful front-end famework for faster and easier web
            development{" "}
          </p>
          <p>
            <a href="#" class="btn btn-success" target="_blank">
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default component2;
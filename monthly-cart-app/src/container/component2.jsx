import React from "react";
import { learnToCreate, header, width,button } from "./component2.style";
const component2 = () => {
  return (
    <div>
      <div className={learnToCreate}>
        <h1>Learn to create websites </h1>
        <p class="lead">
          In today's world internet is the most popular way of connecting with
          the people.{" "}
        </p>
        <p>
          {" "}
          <a href="#" className={button} target="_blank">
            Get started today
          </a>
        </p>
      </div>
      <div className={header}>
        <div className={width}>
          <h2>HTML</h2>
          <p>HTML is a standard Markup Language</p>
          <p>
            <a href="#" className={button} target="_blank">
              Learn More 
            </a>
          </p>
        </div>
        <div className={width}>
          <h2>CSS</h2>
          <p>CSS is used for describing web pages. </p>
          <p>
            <a href="#" className={button} target="_blank">
              Learn More
            </a>
          </p>
        </div>
        <div className={width}>
          <h2>BootStrap</h2>
          <p>
            BootStrap is a powerful front-end famework for faster and easier web
            development{" "}
          </p>
          <p>
            <a href="#" className={button} target="_blank">
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default component2;
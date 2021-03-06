import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import reportWebVitals from "./reportWebVitals";

const client=new ApolloClient({
    uri:"http://localhost:4000/",
    cache:new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello World</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

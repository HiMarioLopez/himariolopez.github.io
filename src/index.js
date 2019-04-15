import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

// pages for this product
import HomePage from "views/ProfilePage/HomePage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <div className="leftMain">
        <Route component={Home} path="/" />
      </div>
    );
  }
}

export default Main;

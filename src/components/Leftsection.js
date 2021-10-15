import React, { Component } from "react";
import Header from "./head/Header";
import Playsection from "./Playsection";

class Leftsection extends Component {
  render() {
    return (
      <div className="mainleftseccls">
        <Header></Header>
        <Playsection></Playsection>
      </div>
    );
  }
}

export default Leftsection;

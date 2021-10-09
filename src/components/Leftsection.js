import React, { Component } from "react";
import Slidershow from "./slider/Slidershow";
import Header from "./head/Header";
import Playsection from "./Playsection";

class Leftsection extends Component {
  render() {
    return (
      <div className="mainleftseccls">
        <Header></Header>
        <Slidershow></Slidershow>
        <Playsection></Playsection>
      </div>
    );
  }
}

export default Leftsection;

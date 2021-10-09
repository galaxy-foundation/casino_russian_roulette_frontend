import React, { Component } from "react";

import Leftsection from "./Leftsection";
import Rightchatsection from "./Rightchatsection";

class Home extends Component {
  render() {
    return (
      <div
        className="homemaindiv"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Leftsection></Leftsection>
        <Rightchatsection></Rightchatsection>
      </div>
    );
  }
}

export default Home;

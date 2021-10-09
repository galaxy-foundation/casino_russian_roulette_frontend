import React, { Component } from "react";
import Maingamble from "./gambling/Maingamble";
import Player from "./player/Player";
import Winner from "./winner/Winner";

class Playsection extends Component {
  render() {
    return (
      <div className="playsecmain">
        <Player></Player>
        <Maingamble></Maingamble>
        <Winner></Winner>
      </div>
    );
  }
}

export default Playsection;

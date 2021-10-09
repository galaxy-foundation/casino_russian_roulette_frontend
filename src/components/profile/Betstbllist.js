import React, { Component } from "react";

import Betsblock from "./Betsblock";

class Betstbllist extends Component {
  render() {
    return (
      <div>
        <div className="betshead">
          <div className="betshead-element">Date</div>
          <div className="betshead-element">Game ID</div>
          <div className="betshead-element">Bet ID</div>
          <div className="betshead-element">Bet</div>
          <div className="betshead-element">x</div>
          <div className="betshead-element">Win</div>
        </div>
        <div className="betsbody">
          <Betsblock
            date="Mon, 09 Now 2020 23:40:04 GMT (2 minutes ago)"
            gameid="GAME # 10292357"
            betid="BET # 10292357"
            bet="1,000"
            x="15"
            win="15,000"
          ></Betsblock>
          <Betsblock
            date="Mon, 09 Now 2020 23:40:04 GMT (2 minutes ago)"
            gameid="GAME # 10292357"
            betid="BET # 10292357"
            bet="1,000"
            x="15"
            win="15,000"
          ></Betsblock>
          <Betsblock
            date="Mon, 09 Now 2020 23:40:04 GMT (2 minutes ago)"
            gameid="GAME # 10292357"
            betid="BET # 10292357"
            bet="1,000"
            x="15"
            win="15,000"
          ></Betsblock>
          <Betsblock
            date="Mon, 09 Now 2020 23:40:04 GMT (2 minutes ago)"
            gameid="GAME # 10292357"
            betid="BET # 10292357"
            bet="1,000"
            x="15"
            win="15,000"
          ></Betsblock>
        </div>
      </div>
    );
  }
}

export default Betstbllist;

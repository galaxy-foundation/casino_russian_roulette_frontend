import React, { Component } from "react";
import Formstats from "./Formstats";

class Stats extends Component {
  render() {
    return (
      <div className="statsmain">
        <br />
        <div className="statstext white">Two-Factor Authentication</div>
        <br />
        <div className="statstext texthalf">
          1.Scan the QR code or endter the 'Key' manually into your
          authenticator app or device
        </div>
        <br />
        <div className="statstext textdouble">
          2.Lastly, enter the 2FA code you receive from the authenticator app or
          device and your password to complete 2FA setup
        </div>
        <br />
        <div className="statstext">Key:</div>
        <div className="stats-keycopy">
          <div className="uppercase stats-keycopy-content">
            stsuh5coun5vmf3yhzijkzzjovaf4m71
          </div>
          <div className="uppercase stats-keycopy-btn">copy</div>
        </div>
        <div className="stats-qr">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100"
            alt="QR_image"
          />
        </div>
        <div className="stats-enable-qr">
          <Formstats />
        </div>
      </div>
    );
  }
}

export default Stats;

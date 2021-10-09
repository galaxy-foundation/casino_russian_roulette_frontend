import React, { Component } from "react";
import Secuemail from "./Secuemail";
import Secupassword from "./Secupassword";

class Security extends Component {
  render() {
    return (
      <div>
        <Secupassword />
        <div className="secublockline"></div>
        <Secuemail></Secuemail>
      </div>
    );
  }
}

export default Security;

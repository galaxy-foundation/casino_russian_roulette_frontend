import React, { Component } from "react";

class Bonusbtn extends Component {
  render() {
    return (
      <div
        className="bonusbtn-main"
        style={{ backgroundColor: this.props.bkcolor }}
      >
        <div className="uppercase gambtopbonusfontsm">{this.props.title}</div>
        <div className="bonusbtnico gambtopbonusfont">
          <i
            className="fa fa-times gambtopbonusfontmd"
            style={{ color: "black", fontSize: "2.5vh" }}
          ></i>
          {this.props.val}
        </div>
      </div>
    );
  }
}

export default Bonusbtn;

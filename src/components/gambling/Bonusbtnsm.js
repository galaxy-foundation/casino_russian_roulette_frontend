import React, { Component } from "react";

class Bonusbtnsm extends Component {
  render() {
    return (
      <div
        className="bonustnsm"
        style={{ backgroundColor: this.props.bkcolor }}
      >
        <div className="uppercase bonussmtitle">{this.props.title}</div>
        <div className={this.props.title ? "bonussmbtn1" : "bonussmbtn"}>
          <i
            className="fa fa-times bonussmicon"
            style={{ color: "black", fontSize: "2vh" }}
          ></i>
          {this.props.val}
        </div>
      </div>
    );
  }
}

export default Bonusbtnsm;

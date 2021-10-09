import React, { Component } from "react";

class Chatnotify extends Component {
  render() {
    return (
      <div className="chatnotifymain">
        <div className="textalign">
          <span>{this.props.val}</span>&nbsp;
          <i className="fa fa-diamond" style={{ color: "var(--clrbrag)" }}></i>
          &nbsp;
          <span className="uppercase" style={{ color: "var(--clrbrag)" }}>
            brag
          </span>
        </div>
        <span style={{ color: "var(--clrbrag)", fontSize: "0.6vw" }}>
          <i className="fa fa-star" style={{ color: "var(--clrbrag)" }}></i> 7 K
          : {this.props.children}
        </span>
      </div>
    );
  }
}

export default Chatnotify;

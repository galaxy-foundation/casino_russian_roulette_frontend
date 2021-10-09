import React, { Component } from "react";

class Modchat extends Component {
  render() {
    return (
      <div className="chatmodchat">
        <span
          className="uppercase"
          style={{
            color: "var(--clrmod)",
          }}
        >
          mod
        </span>{" "}
        <i className="fa fa-wrench" style={{ color: "var(--clrmod)" }}></i>{" "}
        <span
          style={{
            color: "var(--clrmod)",
          }}
        >
          {this.props.name}:
        </span>{" "}
        {this.props.children}
      </div>
    );
  }
}

export default Modchat;

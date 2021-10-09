import React, { Component } from "react";

class Adminchat extends Component {
  render() {
    return (
      <div className="chatadminchat">
        <span
          className="uppercase"
          style={{
            color: "var(--clradmin)",
            fontSize: "0.6vw",
          }}
        >
          admin
        </span>{" "}
        <i
          className="fa fa-fort-awesome"
          style={{
            color: "var(--clradmin)",
          }}
        ></i>{" "}
        <span
          style={{
            color: "var(--clradmin)",
          }}
        >
          {this.props.name}:
        </span>{" "}
        {this.props.children}
      </div>
    );
  }
}

export default Adminchat;

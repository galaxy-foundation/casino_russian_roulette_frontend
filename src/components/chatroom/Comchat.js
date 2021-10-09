import React, { Component } from "react";

class Comchat extends Component {
  render() {
    return (
      <div className="comchatmain">
        <i
          className="fa fa-star"
          style={{
            color:
              this.props.person <= 100
                ? "var(--clr75)"
                : this.props.person > 100 && this.props.person <= 125
                ? "var(--clr100)"
                : this.props.person > 126 && this.props.person <= 150
                ? "var(--clr125)"
                : "var(--mainclr)",
          }}
        ></i>{" "}
        <span
          style={{
            color:
              this.props.person <= 100
                ? "var(--clr75)"
                : this.props.person > 100 && this.props.person <= 125
                ? "var(--clr100)"
                : this.props.person > 126 && this.props.person <= 150
                ? "var(--clr125)"
                : "var(--mainclr)",
          }}
        >
          {this.props.diaval}
        </span>{" "}
        <i
          className="fa fa-futbol-o"
          style={{
            color:
              this.props.person <= 100
                ? "var(--clr75)"
                : this.props.person > 100 && this.props.person <= 125
                ? "var(--clr100)"
                : this.props.person > 126 && this.props.person <= 150
                ? "var(--clr125)"
                : "var(--mainclr)",
          }}
        ></i>{" "}
        <span
          style={{
            color:
              this.props.person <= 100
                ? "var(--clr75)"
                : this.props.person > 100 && this.props.person <= 125
                ? "var(--clr100)"
                : this.props.person > 126 && this.props.person <= 150
                ? "var(--clr125)"
                : "var(--mainclr)",
          }}
        >
          {this.props.name}:
        </span>{" "}
        {this.props.children}
      </div>
    );
  }
}

export default Comchat;

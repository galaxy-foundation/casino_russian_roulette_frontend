import React, { Component } from "react";

class Bestplayer extends Component {
  render() {
    return (
      <div className="playscrollsub3">
        <div className="playscrollsub3_1">
          <div
            className="playscrollsub3_1_1"
            style={{
              width: "calc(100% - 0.15vw)",
              wordWrap: "break-word",
              fontSize: "0.55vw",
              color:
                this.props.person === "clr75"
                  ? "var(--clr75)"
                  : this.props.person === "clr100"
                  ? "var(--clr100)"
                  : this.props.person === "clr125"
                  ? "var(--clr125)"
                  : "var(--mainclr)",
            }}
          >
            <i
              className="fa fa-star"
              style={{
                color:
                  this.props.person === "clr75"
                    ? "var(--clr75)"
                    : this.props.person === "clr100"
                    ? "var(--clr100)"
                    : this.props.person === "clr125"
                    ? "var(--clr125)"
                    : "var(--mainclr)",
              }}
            ></i>{" "}
            {this.props.val}{" "}
            <i
              className="fa fa-futbol-o"
              style={{
                color:
                  this.props.person === "clr75"
                    ? "var(--clr75)"
                    : this.props.person === "clr100"
                    ? "var(--clr100)"
                    : this.props.person === "clr125"
                    ? "var(--clr125)"
                    : "var(--mainclr)",
              }}
            ></i>{" "}
            {this.props.uname}
          </div>
        </div>
        <div className="playscrollsub3_2">
          <div className="playscrollsub3_2_1">
            <div className="playscroll-sub3">
              <div className="playscrollsub3_2_2">
                {this.props.xval}&nbsp;
                <i
                  className="fa fa-times"
                  style={{ color: "var(--mainclr)", fontSize: "0.7vw" }}
                ></i>
              </div>
              <div className="playscrollsub3_2_2">
                {this.props.diamval}&nbsp;
                <i className="fa fa-diamond playscrollsub3_2_3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bestplayer;

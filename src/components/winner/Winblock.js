import React, { Component } from "react";

class Winblock extends Component {
  render() {
    return (
      <div className="customwinnermain">
        <div className="textalign winnermainsub1">
          <div className="winnermainsub1_1">{this.props.num}</div>
        </div>
        <div className="winnermainsub2">
          <div
            className="winnermainsub2_1"
            style={{
              width: "calc(100% - 0.3vh)",
              fontSize: "0.55vw",
              wordWrap: "break-word",
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
            {this.props.userlevel}{" "}
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
            {this.props.uname}
          </div>
        </div>
        <div className="winnermainsub3">
          <div className="winnermainsub3_1">
            <div className="winnermainsub3_2">
              <div className="winnermainsub3_2_1">
                {this.props.xval}&nbsp;
                <i
                  className="fa fa-times"
                  style={{ color: "var(--mainclr)", fontSize: "0.6vw" }}
                ></i>
              </div>
              <div className="winnermainsub3_2_2">
                {this.props.diamval}&nbsp;
                <i
                  className="fa fa-diamond winnermainsub3_2_2_icon"
                  style={{ color: "var(--mainclr)", fontSize: "0.5vw" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Winblock;

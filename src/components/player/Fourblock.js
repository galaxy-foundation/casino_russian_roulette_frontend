import React, { Component } from "react";

class Fourblock extends Component {
  render() {
    return (
      <div
        className="playscrollblockmain"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="playscroll4_1">
          <div className="playscroll-sub4">
            <div className="playscroll4_1_1">
              {this.props.upval}&nbsp;
              <i
                className="fa fa-times"
                style={{ color: "var(--mainclr)" }}
              ></i>
            </div>
            <div className="playscroll4_1_1">
              {this.props.downval}&nbsp;
              <i className="fa fa-diamond playscroll4_1_2"></i>
            </div>
          </div>
        </div>
        <div className="playscroll4_1">
          <div className="playscroll-sub4">
            <div className="playscroll4_1_1">
              {this.props.upval}&nbsp;
              <i
                className="fa fa-times"
                style={{ color: "var(--mainclr)" }}
              ></i>
            </div>
            <div className="playscroll4_1_1">
              {this.props.downval}&nbsp;
              <i className="fa fa-diamond playscroll4_1_2"></i>
            </div>
          </div>
        </div>
        <div className="playscroll4_1">
          <div className="playscroll-sub4">
            <div className="playscroll4_1_1">
              {this.props.upval}&nbsp;
              <i
                className="fa fa-times"
                style={{ color: "var(--mainclr)" }}
              ></i>
            </div>
            <div className="playscroll4_1_1">
              {this.props.downval}&nbsp;
              <i className="fa fa-diamond playscroll4_1_2"></i>
            </div>
          </div>
        </div>
        <div className="playscroll4_1">
          <div className="playscroll-sub4">
            <div className="playscroll4_1_1">
              {this.props.upval}&nbsp;
              <i
                className="fa fa-times"
                style={{ color: "var(--mainclr)" }}
              ></i>
            </div>
            <div className="playscroll4_1_1">
              {this.props.downval}&nbsp;
              <i className="fa fa-diamond playscroll4_1_2"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fourblock;

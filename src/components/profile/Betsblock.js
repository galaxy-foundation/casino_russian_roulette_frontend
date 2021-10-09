import React, { Component } from "react";

class Betsblock extends Component {
  render() {
    return (
      <div className="betsblockmain">
        <div className="betsblock-element leftelement">{this.props.date}</div>
        <div className="betsblock-element maincolor">{this.props.gameid}</div>
        <div className="betsblock-element maincolor">{this.props.betid}</div>
        <div className="betsblock-element">
          {this.props.bet}&nbsp;
          <i className="fa fa-diamond maincolor"></i>
        </div>
        <div className="betsblock-element maincolor">
          {this.props.x}&nbsp;
          <i className="fa fa-times maincolor"></i>
        </div>
        <div className="betsblock-element rightelement maincolor">
          {this.props.win}&nbsp;<i className="fa fa-diamond maincolor"></i>
        </div>
      </div>
    );
  }
}

export default Betsblock;

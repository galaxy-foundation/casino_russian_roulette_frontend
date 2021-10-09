import React, { Component } from "react";

class Listtitle extends Component {
  render() {
    let icons =
      this.props.ltword === "" ? (
        ""
      ) : (
        <i className="fa fa-diamond" style={{ color: "var(--mainclr)" }}></i>
      );

    return (
      <div className="uppercase playscroll2">
        <div className="playscroll2_1">{this.props.rtword}</div>
        <div className="playscroll2_2">
          {this.props.ltword} {icons}
        </div>
      </div>
    );
  }
}

export default Listtitle;

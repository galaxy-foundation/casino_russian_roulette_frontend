import React, { Component } from "react";

import Bestplayer from "./Bestplayer.js";
import Listtitle from "./Listtitle.js";
import Threeblock from "./Threeblock.js";
import Fourblock from "./Fourblock";

import "../../styles/customscroll.css";
import Twoblock from "./Twoblock.js";
import Oneblock from "./Oneblock.js";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      type_status: true,
    };
  }
  clk_normal = () => {
    this.setState({
      type_status: true,
    });
  };
  clk_bonus = () => {
    this.setState({
      type_status: false,
    });
  };
  render() {
    return (
      <div className="playermain">
        <div className="playsecdiv">
          <div className="uppercase playscroll1">players</div>
          <div className="customplayscroll">
            {this.state.type_status ? (
              <div>
                <Listtitle rtword="highest bet" ltword=""></Listtitle>
                <div className="playscroll3">
                  <Bestplayer
                    val="9999"
                    person="clr100"
                    num="1"
                    xval="12.00"
                    diamval="10.00"
                    uname="wwwwwwwwwwwwww"
                  ></Bestplayer>
                </div>
                <Listtitle rtword="Your bets" ltword="1,000.00"></Listtitle>
                <div className="playscroll4">
                  <Threeblock upval="100" downval="100.00"></Threeblock>
                  <Threeblock upval="100" downval="100.00"></Threeblock>
                  <Fourblock upval="100" downval="100.00"></Fourblock>
                  <Threeblock upval="100" downval="100.00"></Threeblock>
                  <Twoblock upval="100" downval="100.00"></Twoblock>
                  <Oneblock upval="100" downval="100.00"></Oneblock>
                </div>
                <Listtitle
                  rtword="Your bets list"
                  ltword="1,000.00"
                ></Listtitle>
                <div
                  className="playscroll5"
                  style={{
                    backgroundColor: "rgb(44,49,55)",
                    margin: "0.3vh",
                    padding: "0.2vh",
                    borderRadius: "0.3vh",
                    alignItems: "center",
                  }}
                >
                  <Threeblock upval="100" downval="100.00"></Threeblock>
                  <Twoblock upval="100" downval="100.00"></Twoblock>
                  <Oneblock upval="100" downval="100.00"></Oneblock>
                </div>
                <Listtitle rtword="All bets" ltword="1,000.00"></Listtitle>
                <div
                  className="playscroll6"
                  style={{
                    backgroundColor: "rgb(44,49,55)",
                    margin: "0.3vh",
                    borderRadius: "0.3vh",
                    alignItems: "center",
                  }}
                >
                  <Bestplayer
                    val="9999"
                    person="clr100"
                    num="1"
                    xval="12.00"
                    diamval="10.00"
                    uname="wwwwwwwwwwwwwwwww"
                  ></Bestplayer>
                  <Bestplayer
                    val="9999"
                    person="clr100"
                    num="1"
                    xval="12.00"
                    diamval="10.00"
                    uname="wwwwwwwwwwwwwwwww"
                  ></Bestplayer>
                  <Bestplayer
                    val="9999"
                    person="clr100"
                    num="1"
                    xval="12.00"
                    diamval="10.00"
                    uname="wwwwwwwwwwwwwwwww"
                  ></Bestplayer>
                  <Bestplayer
                    val="9999"
                    person="clr100"
                    num="1"
                    xval="12.00"
                    diamval="10.00"
                    uname="wwwwwwwwwwwwwwwww"
                  ></Bestplayer>
                  <Bestplayer
                    val="9999"
                    person="clr100"
                    num="1"
                    xval="12.00"
                    diamval="10.00"
                    uname="wwwwwwwwwwwwwwwww"
                  ></Bestplayer>
                  <Bestplayer
                    val="9999"
                    person="clr100"
                    num="1"
                    xval="12.00"
                    diamval="10.00"
                    uname="wwwwwwwwwwwwwwwww"
                  ></Bestplayer>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="playscroll7">
          <div className="uppercase playscroll7_title">Type</div>
          <div className="playscroll7_content">
            <div className="playscroll7_content1">
              <div
                className={
                  this.state.type_status
                    ? "uppercase textalign playscroll7_1"
                    : "uppercase textalign playscroll7_1 playscroll7_1_sel"
                }
                onClick={this.clk_normal}
              >
                Normal
              </div>
              <div
                className={
                  this.state.type_status
                    ? "uppercase textalign playscroll7_2"
                    : "uppercase textalign playscroll7_2 playscroll7_2_sel"
                }
                onClick={this.clk_bonus}
              >
                Bonus-only
              </div>
            </div>
          </div>
          <div className="uppercase" style={{ flex: 3 }}></div>
        </div>
      </div>
    );
  }
}

export default Player;

import React, { Component } from "react";
import Winblock from "./Winblock";
import "../../styles/customscroll.css";

import socketIOClient from "socket.io-client";
const SERVER = require("../../config/config").chatServerURI;

class Winner extends Component {
  constructor() {
    super();
    this.state = {
      mode_status: true,
      betsololist: [],
    };
  }

  componentDidMount() {
    this.configSocketClient();
  }

  configSocketClient = () => {
    const socket = socketIOClient(SERVER);
    socket.emit("req-get-bet-data");
    socket.on("send-get-bet-data", (res) => {
      this.setState({
        betsololist: res,
      });
    });
    socket.on("send-bet-data", (res) => {
      this.setState({
        betsololist: res,
      });
    });
  };

  clk_group = () => {
    this.setState({
      mode_status: true,
    });
  };
  clk_solo = () => {
    this.setState({
      mode_status: false,
    });
  };
  render() {
    return (
      <div className="winnermain">
        <div className="uppercase winnermainheader">
          top winners (24 hr) &nbsp;
          <i
            className="fa fa-caret-up"
            style={{ cursor: "pointer", fontSize: "1vw" }}
          ></i>
        </div>
        <div className="customwinscroll">
          {this.state.mode_status ? (
            <div>
              <Winblock
                userlevel="9999"
                person="123"
                num="1"
                xval="9,999.00"
                diamval="1.05M"
                uname="wwwwwwwwwwwww"
              ></Winblock>
              <Winblock
                userlevel="1"
                person="79"
                num="2"
                xval="5,000.00"
                diamval="9,999.00"
                uname="small"
              ></Winblock>
              <Winblock
                userlevel="100"
                person="110"
                num="3"
                xval="6.00"
                diamval="500.00"
                uname="LongUsername123"
              ></Winblock>
              <Winblock
                userlevel="9999"
                person="234"
                num="4"
                xval="9,999.00"
                diamval="1.05M"
                uname="wwwwwwwww"
              ></Winblock>
              <Winblock
                userlevel="1"
                person="22"
                num="5"
                xval="5,000.00"
                diamval="9,999.00"
                uname="small"
              ></Winblock>
              <Winblock
                userlevel="100"
                person="145"
                num="6"
                xval="6.00"
                diamval="500.00"
                uname="LongUsername123"
              ></Winblock>
              <Winblock
                userlevel="9999"
                person="167"
                num="7"
                xval="9,999.00"
                diamval="1.05M"
                uname="wwwwwwwww"
              ></Winblock>
              <Winblock
                userlevel="1"
                person="113"
                num="8"
                xval="5,000.00"
                diamval="9,999.00"
                uname="small"
              ></Winblock>
              <Winblock
                userlevel="100"
                person="114"
                num="9"
                xval="6.00"
                diamval="500.00"
                uname="LongUsername123"
              ></Winblock>
              <Winblock
                userlevel="9999"
                person="45"
                num="10"
                xval="9,999.00"
                diamval="1.05M"
                uname="wwwwwwwww"
              ></Winblock>
              <Winblock
                userlevel="1"
                person="79"
                num="11"
                xval="5,000.00"
                diamval="9,999.00"
                uname="small"
              ></Winblock>
              <Winblock
                userlevel="100"
                person="57"
                num="12"
                xval="6.00"
                diamval="500.00"
                uname="LongUsername123"
              ></Winblock>
              <Winblock
                userlevel="9999"
                person="119"
                num="13"
                xval="9,999.00"
                diamval="1.05M"
                uname="wwwwwwwww"
              ></Winblock>
              <Winblock
                userlevel="1"
                person="146"
                num="14"
                xval="5,000.00"
                diamval="9,999.00"
                uname="small"
              ></Winblock>
              <Winblock
                userlevel="100"
                person="167"
                num="15"
                xval="6.00"
                diamval="500.00"
                uname="LongUsername123"
              ></Winblock>
              <Winblock
                userlevel="9999"
                person="24"
                num="16"
                xval="9,999.00"
                diamval="1.05M"
                uname="wwwwwwwww"
              ></Winblock>
              <Winblock
                userlevel="1"
                person="190"
                num="17"
                xval="5,000.00"
                diamval="9,999.00"
                uname="small"
              ></Winblock>
              <Winblock
                userlevel="100"
                person="25"
                num="18"
                xval="6.00"
                diamval="500.00"
                uname="LongUsername123"
              ></Winblock>
              <Winblock
                userlevel="9999"
                person="78"
                num="19"
                xval="9,999.00"
                diamval="1.05M"
                uname="wwwwwwwww"
              ></Winblock>
              <Winblock
                userlevel="1"
                person="127"
                num="20"
                xval="5,000.00"
                diamval="9,999.00"
                uname="small"
              ></Winblock>
              <Winblock
                userlevel="100"
                person="156"
                num="21"
                xval="6.00"
                diamval="500.00"
                uname="LongUsername123"
              ></Winblock>
              <Winblock
                userlevel="9999"
                person="178"
                num="22"
                xval="9,999.00"
                diamval="1.05M"
                uname="wwwwwwwww"
              ></Winblock>
              <Winblock
                userlevel="1"
                person="134"
                num="23"
                xval="5,000.00"
                diamval="9,999.00"
                uname="small"
              ></Winblock>
              <Winblock
                userlevel="100"
                person="110"
                num="24"
                xval="6.00"
                diamval="500.00"
                uname="LongUsername123"
              ></Winblock>
            </div>
          ) : (
            <div>
              {this.state.betsololist
                .sort((a, b) => b.xval - a.xval)
                .map((list, index) => (
                  <Winblock
                    key={index}
                    userlevel={list.userlevel}
                    person={list.person}
                    num={index + 1}
                    xval={list.xval}
                    diamval={list.diamval}
                    uname={list.uname}
                  ></Winblock>
                ))}
            </div>
          )}
        </div>
        <div className="playscroll7">
          <div className="uppercase playscroll7_title">Mode</div>
          <div className="playscroll7_content">
            <div className="playscroll7_content1">
              <div
                className={
                  this.state.mode_status
                    ? "uppercase textalign playscroll7_1"
                    : "uppercase textalign playscroll7_1 playscroll7_1_sel"
                }
                onClick={this.clk_group}
              >
                Group
              </div>
              <div
                className={
                  this.state.mode_status
                    ? "uppercase textalign playscroll7_2"
                    : "uppercase textalign playscroll7_2 playscroll7_2_sel"
                }
                onClick={this.clk_solo}
              >
                Solo
              </div>
            </div>
          </div>
          <div className="uppercase" style={{ flex: 3 }}></div>
        </div>
      </div>
    );
  }
}

export default Winner;

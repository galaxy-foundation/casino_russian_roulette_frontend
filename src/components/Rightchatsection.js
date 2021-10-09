import React, { Component } from "react";
import Chatheader from "./chatroom/Chatheader";
import Chatbox from "./chatroom/Chatbox.js";
import Chatact from "./chatroom/Chatact";

class Rightchatsection extends Component {
  constructor() {
    super();
    this.state = {
      isChatMenu: true,
      isChatClick: "",
    };
  }

  oncall_box = () => {
    this.setState({
      isChatClick: "click",
    });
  };
  onchgchatstatus = () => {
    this.setState({
      isChatClick: "",
    });
  };

  render() {
    return (
      <>
        <div
          id="chatmenuico"
          className="chatmenuico"
          onClick={(e) => {
            if (this.state.isChatMenu) {
              document
                .getElementById("mainchatcls")
                .setAttribute("style", "left: 0px !important;");
              document
                .getElementById("chatmenuico")
                .setAttribute("style", "left: 250px !important;");
            } else {
              document
                .getElementById("mainchatcls")
                .setAttribute("style", "left: calc(-250px - 0.5vh);");
              document
                .getElementById("chatmenuico")
                .setAttribute("style", "left: 0px !important;");
            }

            this.setState({
              isChatMenu: !this.state.isChatMenu,
            });
          }}
        >
          {this.state.isChatMenu ? (
            <i
              className="fa fa-arrow-circle-right"
              style={{ fontSize: "3vh", color: "var(--mainclr)" }}
            ></i>
          ) : (
            <i
              className="fa fa-arrow-circle-left"
              style={{ fontSize: "3vh", color: "var(--mainclr)" }}
            ></i>
          )}
        </div>

        <div className="mainchatcls" id="mainchatcls">
          <Chatheader></Chatheader>
          <Chatbox
            ischatstatus={this.state.isChatClick}
            chatstatuschg={this.onchgchatstatus}
          ></Chatbox>
          <Chatact onchat_clk={this.oncall_box}></Chatact>
        </div>
      </>
    );
  }
}

export default Rightchatsection;

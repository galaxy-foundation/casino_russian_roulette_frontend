import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { user_connections } from "../../actions/userconnectAction";

const SERVER = require("../../config/config").chatServerURI;

class Chatact extends Component {
  componentDidMount() {
    this.loadUserConnection();
  }
  loadUserConnection = () => {
    const socket = socketIOClient(SERVER);
    socket.emit("load-user-connection");
    socket.on("user-connect", (user_cons) => {
      this.props.user_connections(user_cons);
    });
  };
  render() {
    return (
      <div className="chatconmain">
        <div className="chatcon">
          <div className="chatcircle"></div>
          Online: {this.props.usercon.user_con}
        </div>
        <div className="chatactico">
          <div className="chatico1">
            <div className="chateachicon">
              <i
                className="fa fa-viadeo-square"
                style={{ color: "var(--mainclr)" }}
              ></i>
            </div>
            <div className="chateachicon">
              <i
                className="fa fa-twitter"
                style={{ color: "var(--mainclr)" }}
              ></i>
            </div>
            <div className="chateachicon">
              <i
                className="fa fa-facebook-official"
                style={{ color: "var(--mainclr)" }}
              ></i>
            </div>
            <div className="chateachicon">
              <i
                className="fa fa-youtube-play"
                style={{ color: "var(--mainclr)" }}
              ></i>
            </div>
          </div>
          <div className="chatico2">
            <div
              className="uppercase textalign chatactchatbtn"
              onClick={this.props.onchat_clk}
            >
              chat
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Chatact.propTypes = {
  usercon: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  usercon: state.usercon,
});

export default connect(mapStateToProps, { user_connections })(
  withRouter(Chatact)
);

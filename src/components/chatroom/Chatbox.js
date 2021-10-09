import React, { Component } from "react"; /* eslint-disable-next-line */
import Adminchat from "./Adminchat"; /* eslint-disable-next-line */
import Modchat from "./Modchat"; /* eslint-disable-next-line */
import Chatnotify from "./Chatnotify"; /* eslint-disable-next-line */
import Comchat from "./Comchat"; /* eslint-disable-next-line */
import Roundnotify from "./Roundnotify"; /* eslint-disable-next-line */
import Wonnotify from "./Wonnotify"; /* eslint-disable-next-line */
import { Picker } from "emoji-mart";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import socketIOClient from "socket.io-client";
import "emoji-mart/css/emoji-mart.css";

import "../../styles/customscroll.css";
const SERVER = "http://192.168.113.155:8080";

class Chatbox extends Component {
  constructor() {
    super();
    this.state = {
      chatlists: [],
      chatinputheight: 2,
      chatbottomstatus: false,
      isNewmsg: false,
      isEmojiShow: false,
    };
  }
  socket;

  componentDidMount() {
    this.configureSocket();
  }

  configureSocket = () => {
    const socket = socketIOClient(SERVER);
    socket.on("message", (m) => {
      const messages = document.getElementById("customscroll");
      if (
        messages.scrollTop ===
        messages.scrollHeight - messages.clientHeight
      ) {
        this.setState({
          chatbottomstatus: true,
        });
      } else {
        this.setState({
          chatbottomstatus: false,
          isNewmsg: true,
        });
      }
      const chatsublist = this.state.chatlists;
      if (chatsublist.length > 50) {
        chatsublist.shift();
      }
      this.setState({
        chatlists: chatsublist.concat(
          <Comchat name={m.username} person={m.person} diaval={m.diaval}>
            {m.val}
          </Comchat>
        ),
      });
    });

    this.socket = socket;
  };

  componentDidUpdate() {
    const messages = document.getElementById("customscroll");
    if (this.state.chatbottomstatus) {
      messages.scrollTop = messages.scrollHeight;
    }
    if (this.props.ischatstatus === "click") {
      this.onchat_click();
      this.props.chatstatuschg();
    }
  }
  add_msg = (val) => {
    this.socket.emit("send-message", {
      username: this.props.auth.user.name,
      diaval: this.props.auth.user.userlevel,
      person: this.props.auth.user.userlevel,
      val,
    });

    //  When scroll was bottom status,
    const messages = document.getElementById("customscroll");
    if (messages.scrollTop === messages.scrollHeight - messages.clientHeight) {
      this.setState({
        chatbottomstatus: true,
      });
    } else {
      this.setState({
        chatbottomstatus: false,
      });
    }
  };

  getCaret = (el) => {
    if (el.selectionStart) {
      return el.selectionStart;
    } else if (document.selection) {
      el.focus();

      const r = document.selection.createRange();
      if (r == null) {
        return 0;
      }

      const re = el.createTextRange(),
        rc = re.duplicate();
      re.moveToBookmark(r.getBookmark());
      rc.setEndPoint("EndToStart", re);

      return rc.text.length;
    }
    return 0;
  };

  onchat_click = () => {
    if (document.getElementById("inputedit").value.trim() === "") {
      return false;
    } else {
      if (!this.props.auth.isAuthenticated) {
        NotificationManager.warning("Please Sign In", "", 3000);
        document.getElementById("login-modal-btn").click();
      } else {
        this.setState({
          chatinputheight: 2,
          isEmojiShow: false,
        });
        document.getElementById("inputedit").style.height = "2vh";
        this.add_msg(document.getElementById("inputedit").value);
        document.getElementById("inputedit").value = "";
        const messages = document.getElementById("customscroll");
        messages.scrollTop = messages.scrollHeight;
      }
    }
  };

  sendmsg = (e) => {
    if (e.target.value.trim() === "") {
      const x = e || window.event;
      const key = x.keyCode || x.which;
      if (key === 13) {
        e.preventDefault();
      }
      return false;
    } else {
      const x = e || window.event;
      const key = x.keyCode || x.which;
      if (key === 13 && e.shiftKey) {
        this.setState({
          chatinputheight: this.state.chatinputheight + 1,
        });
        document.getElementById("inputedit").style.height =
          this.state.chatinputheight + "vh";
        const content = e.target.value;
        const carent = this.getCaret(e.target);
        this.value =
          content.substring(0, carent) +
          "\n" +
          content.substring(carent, content.length - 1);
        e.stopPropagation();
      } else if (key === 13) {
        if (!this.props.auth.isAuthenticated) {
          e.preventDefault();
          NotificationManager.warning("Please Sign In", "", 3000);
          document.getElementById("login-modal-btn").click();
        } else {
          e.preventDefault();
          this.setState({
            chatinputheight: 2,
            isEmojiShow: false,
          });
          document.getElementById("inputedit").style.height = "1vh";
          this.add_msg(e.target.value);
          document.getElementById("inputedit").value = "";
          const messages = document.getElementById("customscroll");
          messages.scrollTop = messages.scrollHeight;
        }
      }
    }
  };

  shownewmsg = () => {
    const messages = document.getElementById("customscroll");
    messages.scrollTop = messages.scrollHeight;
    this.setState({
      isNewmsg: false,
    });
  };

  emojiblkshow = () => {
    this.setState({
      isEmojiShow: !this.state.isEmojiShow,
    });
  };

  render() {
    return (
      <div style={styles.main}>
        {this.state.isNewmsg ? (
          <div className="newmsgbtn" onClick={this.shownewmsg}>
            &#8595;&#8595;&#8595;
          </div>
        ) : null}

        <div
          id="customscroll"
          className="customscroll"
          style={styles.chatcontent}
        >
          {this.state.chatlists.length === 0 ? (
            <div
              style={{
                height: "85vh",
                color: "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              No Message
            </div>
          ) : (
            this.state.chatlists.map((list, index) => (
              <div key={index}>{list}</div>
            ))
          )}
        </div>
        <div style={styles.chatinput}>
          <textarea
            type="text"
            id="inputedit"
            className="inputedit"
            placeholder="Send a message"
            onKeyPress={this.sendmsg}
          ></textarea>
          {this.state.isEmojiShow ? (
            <div className="emojiblock">
              <Picker
                onSelect={(emoji) => {
                  document.getElementById("inputedit").value += emoji.native;
                }}
                style={{
                  position: "absolute",
                  bottom: "3vh",
                  right: "5%",
                  width: "90%",
                  overflowY: "auto",
                  border: "0px solid rgb(44, 49, 55)",
                }}
                title="Pick you"
              />
            </div>
          ) : null}

          <div className="emojiicon" onClick={this.emojiblkshow}>
            {/* eslint-disable-next-line */}
            {!this.state.isEmojiShow ? (
              <i className="fa fa-smile-o emojii"></i>
            ) : (
              <i className="fa fa-angle-down emojii"></i>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    height: "91vh",
    backgroundColor: "rgb(32, 37, 43)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  chatcontent: {
    height: "auto",
    overflowY: "scroll",
    position: "relative",
  },
  chatinput: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    position: "relative",
  },
};

Chatbox.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(withRouter(Chatbox));

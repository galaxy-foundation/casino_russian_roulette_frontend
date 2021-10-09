import React, { Component } from "react";

class Chatheader extends Component {
  render() {
    return (
      <div style={styles.main}>
        {/* <div
          className="chatclosemenu textalign"
          style={styles.chevronright}
          onClick={() => {
            console.log("clicked here");
          }}
        >
          <i className="fa fa-chevron-right" style={styles.roomico}></i>
        </div> */}
        <div className="textalign chatroomtitle">English Chat Room</div>
        {/* <div
          className="chatclose1menu textalign"
          style={styles.chevronright}
        ></div> */}
      </div>
    );
  }
}

const styles = {
  main: {
    height: "5vh",
    backgroundColor: "var(--chatheadclr)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chevronright: {
    display: "none",
    flex: 1,
    cursor: "pointer",
  },
  roomico: {
    color: "rgb(116,120,131)",
    fontSize: "1vw",
  },
};

export default Chatheader;

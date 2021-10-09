import React, { Component } from "react";

class Roundnotify extends Component {
  render() {
    return (
      <div className="chatroundnotify">
        <div className="uppercase textalign" style={styles.notifytitle}>
          {this.props.title}
        </div>
        <div className="uppercase" style={styles.notifycon}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    padding: "0.3vw 0.5vw",
    backgroundColor: "rgb(45,50,54)",
    borderWidth: "0.25vw",
    borderColor: "var(--mainclr)",
    borderStyle: "none none none solid",
  },
  notifytitle: {
    color: "var(--mainclr)",
    fontSize: "0.6vw",
  },
  notifycon: {
    fontSize: "0.6vw",
  },
};

export default Roundnotify;

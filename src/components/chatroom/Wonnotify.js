import React, { Component } from "react";

class Wonnotify extends Component {
  render() {
    return (
      <div className="chatwonnotify">
        <div className="uppercase textalign" style={styles.notifytitle}>
          {this.props.title}
        </div>
        <div className="uppercase" style={styles.notifycon}>
          <i className="fa fa-star" style={{ color: "var(--clr125)" }}></i>{" "}
          <span style={{ color: "var(--clr125)" }}> 120 Kusti</span>{" "}
          {this.props.children}
        </div>
      </div>
    );
  }
}

const styles = {
  notifytitle: {
    color: "var(--mainclr)",
    fontSize: "0.6vw",
  },
  notifycon: {
    fontSize: "0.6vw",
  },
};

export default Wonnotify;

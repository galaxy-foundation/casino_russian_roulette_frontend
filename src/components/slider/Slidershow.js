import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/slidershow.css";

class Slidershow extends Component {
  constructor() {
    super();
    this.state = {
      swidth: 60,
    };
  }
  render() {
    return (
      <div className="slidermenu" style={styles.main}>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="sliderdiv1" style={styles.slider1}>
            <div className="uppercase textalign slidermobilefont-lvl">
              level{" "}
              {this.props.auth.user.userlevel
                ? this.props.auth.user.userlevel
                : 0}{" "}
              <i
                className="fa fa-star slidermobilefont"
                style={{ color: "rgb(205,83,52)", fontSize: "1.4vh" }}
              ></i>
            </div>
            <div style={{ flex: 10, display: "flex", flexDirection: "row" }}>
              <div className="trapezium">
                <div className="now_real"></div>
              </div>
              <div className="trapezium">
                <div className="now_real"></div>
              </div>
              <div className="trapezium">
                <div className="now_real"></div>
              </div>
              <div className="trapezium">
                <div className="now_real"></div>
              </div>
              <div className="trapezium">
                <div className="now_real"></div>
              </div>
              <div className="trapezium">
                <div className="now_real"></div>
              </div>
              <div className="trapezium">
                <div className="now_real"></div>
              </div>
              <div className="trapezium">
                <div className="now_real"></div>
              </div>
              <div className="trapezium">
                <div className="now_real"></div>
              </div>
              <div className="trapezium"></div>
            </div>
            <div
              className="uppercase textalign slidermobilefont-lvl"
              style={{ color: "var(--mainclr)" }}
            >
              <i
                className="fa fa-star slidermobilefont"
                style={{ color: "var(--mainclr)", fontSize: "1.4vh" }}
              ></i>{" "}
              Level{" "}
              {this.props.auth.user.userlevel
                ? this.props.auth.user.userlevel + 1
                : 0}
            </div>
          </div>
          <div className="sliderdiv2">
            <div
              className="textalign slidermobilefont"
              style={{ flex: 0.8, display: "flex", flexDirection: "column" }}
            >
              <p className="slidermobilefont">200%</p>
              <p className="uppercase slidermobilefontsm">current xp</p>
            </div>
            <div
              style={{
                flex: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 9.8, display: "flex", flexDirection: "row" }}>
                <div className="bonusbar1"></div>
                <div className="bonusbar1"></div>
                <div className="bonusbar1"></div>
                <div className="bonusbar1"></div>
                <div className="bonusbar1"></div>
                <div className="bonusbar1"></div>
                <div className="bonusbar1"></div>
                <div className="bonusbar1"></div>
                <div className="bonusbar1"></div>
                <div className="bonusbar1"></div>
              </div>
              <div
                className="textalign"
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <p className="slidermobilefontsm1">250%</p>
                <p className="uppercase slidermobilefontsm">bonus xp</p>
              </div>
              <div style={{ flex: 10, display: "flex", flexDirection: "row" }}>
                <div className="bonusbar2"></div>
                <div className="bonusbar2"></div>
                <div className="bonusbar2"></div>
                <div className="bonusbar2"></div>
                <div className="bonusbar2"></div>
              </div>
            </div>
            <div
              className="textalign"
              style={{ flex: 0.7, display: "flex", flexDirection: "column" }}
            >
              <p className="slidermobilefont">5</p>
              <p className="uppercase slidermobilefontsm">streak</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    height: "7vh",
    backgroundImage: "linear-gradient(rgb(15,18,21), rgb(28,33,39))",
    display: "flex",
    // flexDirection: "column",
  },
  slider1: {
    height: "3.5vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

Slidershow.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(withRouter(Slidershow));

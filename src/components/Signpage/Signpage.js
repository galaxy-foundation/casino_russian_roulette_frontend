import React, { Component } from "react";
import { Box, Container, Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import "./login.css";
import Formlogin from "./Formlogin";
import FormReg from "./FormReg";

const AntTabs = withStyles({
  root: {
    borderBottom: "2px solid rgb(60, 63, 66)",
  },
  indicator: {
    height: "2px",
    backgroundColor: "var(--mainclr)",
  },
  flexContainer: {
    justifyContent: "center",
  },
})(Tabs);

const AntTab = withStyles({
  root: {
    textTransform: "none",
    minWidth: "50px",
  },
  wrapper: {
    color: "white",
    fontSize: "14px !important",
    "&:focus": {
      color: "var(--mainclr)",
    },
    "&:hover": {
      color: "var(--mainclr)",
    },
  },
  selected: {
    "& > span": {
      color: "var(--mainclr)",
    },
  },
})((props) => <Tab disableRipple {...props} />);

class Signpage extends Component {
  constructor() {
    super();
    this.state = {
      isWriteErr: true,
      value: 0,
      isReg: false,
      isLog: true,
      isEye: true,
      isRegEye: true,
      isRegConEye: true,
    };
  }

  handletabChange = (event, newValue) => {
    if (newValue === 0) {
      this.setState({
        value: newValue,
        isLog: true,
        isReg: false,
      });
    } else {
      this.setState({
        value: newValue,
        isLog: false,
        isReg: true,
      });
    }
  };

  render() {
    return (
      <Box
        className="loginmainbox"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {this.props.children}
        <Container
          maxWidth="xs"
          style={{
            backgroundColor: "var(--logmodalbackclr)",
            borderRadius: "0.5vw",
            position: "relative",
          }}
        >
          <div className="loginlogotitle">
            <Link to="/">
              <img className="loginlogoimg" src="img/logo.png" alt="logo"></img>
            </Link>
          </div>
          <AntTabs
            value={this.state.value}
            onChange={this.handletabChange}
            aria-label="SignpageTab"
          >
            <AntTab label="Log In" />
            <AntTab label="Register" />
          </AntTabs>
          {this.state.value === 0 ? (
            <Formlogin></Formlogin>
          ) : (
            <FormReg></FormReg>
          )}
          <div className="loginortext">Or continue with</div>
          <div className="loginbtns">
            <div className="loginbtn">
              <i className="fa fa-steam"></i>
            </div>

            <div className="loginbtn" style={{ margin: "0px 4%" }}>
              <i className="fa fa-google"></i>
            </div>

            <div className="loginbtn">
              <i className="fa fa-facebook"></i>
            </div>
          </div>
          {this.state.isLog ? (
            <div className="loginortext">
              Forgot your password? <span>Reset Password</span>
            </div>
          ) : (
            <></>
          )}
          {this.state.isLog ? (
            <div className="loginreghere">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  this.setState({
                    value: 1,
                    isLog: false,
                    isReg: true,
                  });
                }}
              >
                Register Here
              </span>
            </div>
          ) : (
            <></>
          )}
          {this.state.isReg ? (
            <div className="loginreghere">
              Already have an account?{" "}
              <span
                onClick={() => {
                  this.setState({
                    value: 0,
                    isLog: true,
                    isReg: false,
                  });
                }}
              >
                Login here
              </span>
            </div>
          ) : (
            <></>
          )}
        </Container>
      </Box>
    );
  }
}

export default Signpage;

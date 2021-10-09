import React, { Component } from "react";
import { Box, Container, Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./profile.css";

import Security from "./Security";
import Transaction from "./Transaction";
import Stats from "./Stats";

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

class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  handletabChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };
  render() {
    return (
      <Box
        className="myaccountmainbox"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "600px !important",
          width: "600px",
        }}
      >
        {this.props.children}
        <Container
          maxWidth="md"
          style={{
            backgroundColor: "var(--logmodalbackclr)",
            borderRadius: "0.5vw",
            position: "relative",
          }}
        >
          <div className="Accmodaltitle uppercase">Account</div>
          <div>
            <AntTabs
              value={this.state.value}
              onChange={this.handletabChange}
              aria-label="AccountpageTab"
            >
              <AntTab label="Security" />
              <AntTab label="Transactions" />
              <AntTab label="2FA" />
            </AntTabs>
          </div>
          {this.state.value === 0 && (
            <div>
              <Security></Security>
            </div>
          )}
          {this.state.value === 1 && (
            <div>
              <Transaction></Transaction>
            </div>
          )}
          {this.state.value === 2 && (
            <div>
              <Stats></Stats>
            </div>
          )}
        </Container>
      </Box>
    );
  }
}

export default MyAccount;

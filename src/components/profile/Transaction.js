import React, { Component } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Betstbllist from "./Betstbllist";

const AntTabs = withStyles({
  root: {
    width: "fit-content",
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
    minWidth: "40px",
    padding: 0,
    margin: 0,
  },
  wrapper: {
    color: "white",
    fontSize: "10px !important",
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

class Transaction extends Component {
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
      <div>
        <div className="trans-edit">
          <div className="trans-edit-title">Ebts</div>
          <div className="trans-edit-act">25,000</div>
        </div>
        <div className="trans-edit">
          <div className="trans-edit-title">Total Wagreed</div>
          <div className="trans-edit-act">25,000</div>
        </div>
        <div className="trans-edit">
          <div className="trans-edit-title">Net Profit</div>
          <div className="trans-edit-act mainclr mainclrmainclr">
            25,000 <i className="fa fa-diamond"></i>
          </div>
        </div>
        <div className="trans-edit">
          <div className="trans-edit-title">Profit(All-Time High)</div>
          <div className="trans-edit-act mainclr">
            25,000 <i className="fa fa-diamond"></i>
          </div>
        </div>
        <div className="trans-line"></div>
        <div className="trans-edit">
          <div className="trans-edit-title">Hide stats from public</div>
          <div className="trans-edit-act mainclr">
            <input type="checkbox" className="trans-edit-act-checkbox"></input>
          </div>
        </div>
        <div className="trans-line"></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AntTabs
            value={this.state.value}
            onChange={this.handletabChange}
            aria-label="Transactiontag"
          >
            <AntTab label="Bets" />
            <AntTab label="Transactions" />
          </AntTabs>
        </div>
        {this.state.value === 0 && <Betstbllist></Betstbllist>}
      </div>
    );
  }
}

export default Transaction;

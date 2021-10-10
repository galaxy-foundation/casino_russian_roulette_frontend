import React, { Component } from "react";
import Bonusbtnsm from "./Bonusbtnsm";
import socketIOClient from "socket.io-client";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { prev_roll_save } from "../../actions/maingameAction";
import isFixedNumber from "../../validation/isFixedNumber";

import "../../styles/maingamble.css";
const SERVER = "http://192.168.113.155:8080";

class Maingamble extends Component {
  constructor() {
    super();
    this.state = {
      isPlayed: true,
      ammoCount: 0,
      midStatus: false,
      previousRollList: [],
      betcost: 0,
      betpayout: 0,
      betrangeval: 0,
      bet_fit_status: true,
      paymode_status: true,
    };
  }
  socket;
  componentDidMount() {
    this.playfunc();
  }
  playfunc = () => {
    const socket = socketIOClient(SERVER);

    socket.emit("get-play-time");
    socket.on("show-bonus-rollList", (res) => {
      this.setState({ previousRollList: res });
    });
    socket.on("show-play-time", (res) => {
      this.setState({
        isPlayed: true,
        midStatus: false,
      });
      document.getElementById("main-gamb-over-counter").style.opacity = 1;
      document.getElementById("main-gamb-over-sec1").innerHTML =
        res.p_seconds + ".";
      document.getElementById("main-gamb-over-sec2").innerHTML =
        res.p_miseconds;
      if (res.p_seconds === 0) {
        document.getElementById("main-gamb-over-counter").style.opacity = 0;
        this.setState({
          isPlayed: false,
          midStatus: true,
        });
      }
    });
    socket.emit("get-ammo-count");
    socket.on("show-ammo-count", (res) => {
      this.setState({
        ammoCount: res.ammoCount,
      });
    });
    socket.emit("get-anima-card");
    socket.on("show-anima-card", async (res) => {
      if (res.random_pos !== 0) {
        let w_width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        let sub_width = 0;
        if (w_width > 1280) {
          sub_width = (((((w_width / 100) * 86.8) / 100) * 62.9) / 7) * 5;
        } else if (w_width <= 1280 && w_width > 968) {
          sub_width = (((w_width / 100) * 62.9) / 7) * 5;
        } else if (w_width <= 968) {
          sub_width = (w_width / 7) * 5;
        }
        let back_pos = sub_width * 30 + (sub_width / 100) * res.random_pos;
        await this.init_pos(back_pos);
        await setTimeout(() => {
          this.reduce_pos((sub_width / 100) * res.random_pos);
        }, 50);
        await setTimeout(() => {
          this.setState({
            previousRollList: res.rollList,
          });
        }, 7050);
      }
    });

    this.socket = socket;
  };
  init_pos = (back_pos) => {
    document
      .getElementById("mainscroll-card")
      .setAttribute("style", "background-position: " + back_pos + "px center");
  };
  reduce_pos = (res) => {
    document
      .getElementById("mainscroll-card")
      .setAttribute(
        "style",
        "background-position: " +
          res +
          "px center;transition: all 7s ease-out 0s;"
      );
  };
  return_pos = () => {
    document
      .getElementById("mainscroll-card")
      .setAttribute(
        "style",
        "background-position: 0px center;transition: all 200ms ease-out 0s;"
      );
  };

  onclk_play = () => {
    if (!this.props.auth.isAuthenticated) {
      document.getElementById("login-modal-btn").click();
    } else {
      if (this.state.betcost > 0 && this.state.betpayout > 0) {
        this.socket.emit("req-bet-data", {
          betcost: isFixedNumber(this.state.betcost),
          betpayout: isFixedNumber(this.state.betpayout),
          username: this.props.auth.user.name,
          userid: this.props.auth.user.id,
          userlevel: this.props.auth.user.userlevel,
        });
      }
    }
  };

  clk_base = () => {
    this.setState({
      paymode_status: true,
    });
  };

  clk_bonus = () => {
    this.setState({
      paymode_status: false,
    });
  };

  render() {
    return (
      <div className="gamblingmain">
        <div className="gambtopbonus">
          <div className="logosec">
            <img className="gambtopimg" src="img/logo.png" alt="logo1"></img>
          </div>
          <div id="mainscroll-card" className="mainscroll-card">
            <div
              className={
                this.state.midStatus ? "mid_stick" : "mid_stick shw_op"
              }
            ></div>
          </div>
          <div className="logosec">
            <img className="gambtopimg" src="img/logo.png" alt="logo1"></img>
          </div>
        </div>
        <div className="video-container">
          <img alt="mockup" src="img/mockup.png" className="main-gamb-img" />
          <div className="main-gamb-over-ammoCountRoll">
            <div
              className={
                this.state.ammoCount > 0 ? "each_ammo full_ammo" : "each_ammo"
              }
            ></div>
            <div
              className={
                this.state.ammoCount > 1 ? "each_ammo full_ammo" : "each_ammo"
              }
            ></div>
            <div
              className={
                this.state.ammoCount > 2 ? "each_ammo full_ammo" : "each_ammo"
              }
            ></div>
            <div
              className={
                this.state.ammoCount > 3 ? "each_ammo full_ammo" : "each_ammo"
              }
            ></div>
            <div
              className={
                this.state.ammoCount > 4 ? "each_ammo full_ammo" : "each_ammo"
              }
            ></div>
            <div
              className={
                this.state.ammoCount > 5 ? "each_ammo full_ammo" : "each_ammo"
              }
            ></div>
          </div>
          <div
            id="main-gamb-over-counter"
            className="main-gamb-over-counter fadeIn"
          >
            <span
              id="main-gamb-over-sec1"
              className="main-gamb-over-sec1"
            ></span>
            <span
              id="main-gamb-over-sec2"
              className="main-gamb-over-sec2"
            ></span>
          </div>
        </div>
        <div className="gambbottombonus">
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            {this.state.previousRollList
              .map((list, index) => (
                <Bonusbtnsm
                  bkcolor={list.bkcolor}
                  title={list.b_title}
                  val={list.val}
                  key={index}
                ></Bonusbtnsm>
              ))
              .reverse()}
          </div>
        </div>
        <div className="gambplaysec">
          <div className="gambplaysecleft">
            <div className="gamb-play-sec-left-1">
              <div className="uppercase textalign bold gambplaysecleftsub">
                <i
                  className="fa fa-diamond"
                  style={{ fontSize: "1vh", color: "var(--mainclr)" }}
                ></i>{" "}
                5.00 profit on win
              </div>
            </div>
            <div className="gamb-play-sec-left-2">
              <div
                style={{
                  flex: 6,
                  backgroundColor: "rgb(28,33,39)",
                  marginRight: "0.3vh",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    flex: 2,
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: "1vh",
                    alignItems: "center",
                    fontSize: "1.2vh",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    this.setState({
                      bet_fit_status: !this.state.bet_fit_status,
                    });
                  }}
                >
                  {this.state.bet_fit_status ? "Bet" : "Profit"}
                  &nbsp;
                  <i
                    className={
                      this.state.bet_fit_status
                        ? "fa fa-caret-down chg_bet_fit chg_bet_rot"
                        : "fa fa-caret-down chg_bet_fit chg_fit_rot"
                    }
                  ></i>
                </div>
                <div
                  className="gamb-play-sec-left-2-recom"
                  style={{
                    flex: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2vh",
                  }}
                >
                  <input
                    id="betcost"
                    type="text"
                    className="bet-gamb-input"
                    value={isFixedNumber(this.state.betcost)}
                    onChange={(e) => {
                      this.setState({
                        betcost: isFixedNumber(e.target.value),
                      });
                    }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fa fa-diamond"
                    style={{ color: "var(--mainclr)", fontSize: "1.3vh" }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "rgb(28,33,39)",
                  marginRight: "0.3vh",
                  display: "flex",
                  fontSize: "1.2vh",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({
                    betcost: isFixedNumber(this.state.betcost / 2),
                  });
                }}
              >
                1/2
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "rgb(28,33,39)",
                  display: "flex",
                  fontSize: "1.2vh",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({
                    betcost: isFixedNumber(this.state.betcost * 3),
                  });
                }}
              >
                x3
              </div>
            </div>
            <div className="gamb-play-sec-left-3">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="0"
                className="rangeright"
                onInput={(e) => {
                  e.target.style.backgroundSize = e.target.value + "% 100%";
                  this.setState({
                    betrangeval: e.target.value,
                    betcost: e.target.value,
                  });
                }}
              />
              <div className="range-blk range-blk1">
                <div
                  className={
                    this.state.betrangeval >= 0 ? "blk range-selected" : "blk"
                  }
                ></div>
              </div>
              <div className="range-blk range-blk2">
                <div
                  className={
                    this.state.betrangeval >= 25 ? "blk range-selected" : "blk"
                  }
                ></div>
              </div>
              <div className="range-blk range-blk3">
                <div
                  className={
                    this.state.betrangeval >= 50 ? "blk range-selected" : "blk"
                  }
                ></div>
              </div>
              <div className="range-blk range-blk4">
                <div
                  className={
                    this.state.betrangeval >= 75 ? "blk range-selected" : "blk"
                  }
                ></div>
              </div>
              <div className="range-blk range-blk5">
                <div
                  className={
                    this.state.betrangeval === 100
                      ? "blk range-selected"
                      : "blk"
                  }
                ></div>
              </div>
            </div>
          </div>
          <div className="gambplaysecmid">
            <div className="gambplaysecfootbtn">
              <div className="gambplaysecfootsubbtn">
                <div
                  className="uppercase gambplaysecbtn1"
                  style={{
                    backgroundColor: this.state.isPlayed
                      ? "var(--mainclr)"
                      : "rgb(163, 160, 155)",
                    borderColor: this.state.isPlayed
                      ? "var(--mainshwclr)"
                      : "rgb(106, 106, 106)",
                  }}
                >
                  <span className="gambplayactsecfont">max</span>
                  <span className="gambplayactsecfont">bet</span>
                </div>
                <div
                  className="uppercase gambplaysecbtn2"
                  style={{
                    backgroundColor: this.state.isPlayed
                      ? "var(--mainclr)"
                      : "rgb(163, 160, 155)",
                    borderColor: this.state.isPlayed
                      ? "var(--mainshwclr)"
                      : "rgb(106, 106, 106)",
                    pointerEvents: this.state.isPlayed ? "all" : "none",
                  }}
                  onClick={this.onclk_play}
                >
                  play
                </div>
                <div
                  className="gambplaysecbtn3"
                  style={{
                    backgroundColor: this.state.isPlayed
                      ? "var(--mainclr)"
                      : "rgb(163, 160, 155)",
                    borderColor: this.state.isPlayed
                      ? "var(--mainshwclr)"
                      : "rgb(106, 106, 106)",
                  }}
                >
                  <i className="fa fa-refresh" style={{ color: "black" }}></i>
                </div>
              </div>
            </div>
            <div
              className="gambplaysecmidfoot"
              style={{ flex: 2, padding: "0px 0.5vh", display: "flex" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  marginBottom: "0.5vh",
                }}
              >
                <div
                  className="uppercase"
                  style={{
                    flex: 1,
                    display: "flex",
                    backgroundColor: "rgb(23,28,34)",
                    marginRight: "0.3vh",
                    borderTopLeftRadius: "0.5vh",
                    borderBottomLeftRadius: "0.5vh",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1vh",
                    cursor: "pointer",
                  }}
                >
                  activate bet-list
                </div>
                <div
                  className="uppercase"
                  style={{
                    flex: 1,
                    display: "flex",
                    backgroundColor: "rgb(23,28,34)",
                    borderTopRightRadius: "0.5vh",
                    borderBottomRightRadius: "0.5vh",
                    flexDirection: "row",
                    fontSize: "1vh",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  view bet-list (Total:&nbsp;
                  <i
                    className="fa fa-diamond"
                    style={{ color: "var(--mainclr)", fontSize: "0.9vh" }}
                  ></i>
                  &nbsp;5.00)
                </div>
              </div>
            </div>
          </div>
          <div className="gambplaysecright">
            <div className="gamb-play-sec-left-1">
              <div
                className={
                  this.state.paymode_status
                    ? "uppercase textalign bold game-play-sec-base"
                    : "uppercase textalign bold game-play-sec-base game-play-sec-base-sel"
                }
                onClick={this.clk_base}
              >
                Base
              </div>
              <div
                className={
                  this.state.paymode_status
                    ? "uppercase textalign bold game-play-sec-bonus"
                    : "uppercase textalign bold game-play-sec-bonus game-play-sec-bonus-sel"
                }
                onClick={this.clk_bonus}
              >
                Bonus
              </div>
            </div>
            <div className="gamb-play-sec-left-2">
              <div
                style={{
                  flex: 6,
                  backgroundColor: "rgb(28,33,39)",
                  marginRight: "0.3vh",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    flex: 2,
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: "1vh",
                    alignItems: "center",
                    fontSize: "1.2vh",
                  }}
                >
                  Payout&nbsp;
                  <i
                    className="fa fa-caret-down"
                    style={{ cursor: "pointer", fontSize: "1.2vh" }}
                  ></i>
                </div>
                <div
                  className="gamb-play-sec-left-2-recom"
                  style={{
                    flex: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2vh",
                  }}
                >
                  <input
                    id="betpayout"
                    type="text"
                    className="bet-gamb-input"
                    value={isFixedNumber(this.state.betpayout)}
                    onChange={(e) => {
                      this.setState({
                        betpayout: isFixedNumber(e.target.value),
                      });
                    }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fa fa-times"
                    style={{ color: "var(--mainclr)", fontSize: "1.3vh" }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "rgb(28,33,39)",
                  marginRight: "0.3vh",
                  display: "flex",
                  fontSize: "1.2vh",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({
                    betpayout: isFixedNumber(this.state.betpayout / 2),
                  });
                }}
              >
                1/2
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "rgb(28,33,39)",
                  display: "flex",
                  fontSize: "1.2vh",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({
                    betpayout: isFixedNumber(this.state.betpayout * 2),
                  });
                }}
              >
                x2
              </div>
            </div>
            <div className="gamb-play-sec-left-3">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="0"
                className="rangeright"
                onInput={(e) => {
                  e.target.style.backgroundSize = e.target.value + "% 100%";
                  this.setState({
                    betpayout: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Maingamble.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { prev_roll_save })(
  withRouter(Maingamble)
);

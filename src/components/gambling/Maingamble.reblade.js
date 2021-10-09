import React, { Component } from "react";
import Bonusbtn from "./Bonusbtn";
import Bonusbtnsm from "./Bonusbtnsm";
import socketIOClient from "socket.io-client";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../../styles/maingamble.css";
const SERVER = "http://192.168.113.155:8080";

let speed = 0;

class Maingamble extends Component {
  constructor() {
    super();
    this.state = {
      isPlayed: true,
      ammoCount: 0,
    };
  }

  componentDidMount() {
    this.playfunc();
  }
  playfunc = () => {
    const socket = socketIOClient(SERVER);
    socket.emit("get-play-time");
    socket.on("show-play-time", (res) => {
      this.setState({
        isPlayed: true,
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
        });
      }
    });
    socket.emit("get-ammo-count");
    socket.on("show-ammo-count", (res) => {
      this.setState({
        ammoCount: res.ammoCount,
      });
    });
  };

  // startTime = (duration, display1, display2) => {
  //   document.getElementById("main-gamb-over-counter").style.opacity = 1;
  //   var start = Date.now(),
  //     diff,
  //     seconds,
  //     miseconds;
  //   const timer = () => {
  //     diff = duration - (((Date.now() - start) / 10) | 0);
  //     seconds = (diff / 100) | 0;
  //     miseconds = diff % 100 | 0;
  //     miseconds = miseconds < 10 ? "0" + miseconds : miseconds;
  //     display1.textContent = seconds + ".";
  //     display2.textContent = miseconds;
  //     if (diff <= 90) {
  //       document.getElementById("main-gamb-over-counter").style.opacity = 0;
  //     }
  //     if (diff <= 0) {
  //       clearInterval(interval);
  //       this.setState({
  //         isPlayed: true,
  //       });
  //       return false;
  //     }
  //   };
  //   timer();
  //   var interval = setInterval(timer, 10);
  // };

  // playfunc = () => {
  //   this.setState({
  //     isPlayed: false,
  //   });
  //   const startTimeCount = () => {
  //     const fiveMinutes = 500;
  //     const display1 = document.querySelector("#main-gamb-over-sec1");
  //     const display2 = document.querySelector("#main-gamb-over-sec2");
  //     this.startTime(fiveMinutes, display1, display2);
  //   };
  //   startTimeCount();
  //   // setInterval(startTimeCount, 10000);
  // };

  // componentDidMount() {
  //   console.log(this.props.MagicScroll);
  // }

  reducespeedscroll = () => {
    speed += 200;
    document
      .getElementById("MagicScroll")
      .setAttribute("data-options", `step:0; speed:${speed}`);
  };

  render() {
    return (
      <div className="gamblingmain">
        <div className="gambtopbonus">
          <div className="logosec">
            <img className="gambtopimg" src="img/logo.png" alt="logo1"></img>
          </div>
          <div
            style={{
              position: "absolute",
              width: "calc(100% / 7 * 5)",
              height: "100%",
              top: 0,
              zIndex: 10,
            }}
          ></div>
          <div
            id="MagicScroll"
            className="MagicScroll"
            data-options="step: 0; speed: 500;"
          >
            <Bonusbtn
              bkcolor="rgb(175, 96, 248)"
              val="200.5"
              title=""
            ></Bonusbtn>
            <Bonusbtn
              bkcolor="rgb(41, 149, 189)"
              val="25.55"
              title=""
            ></Bonusbtn>
            <Bonusbtn
              bkcolor="rgb(248, 191, 96)"
              val="2.75"
              title="bonus"
            ></Bonusbtn>
            <Bonusbtn bkcolor="#fff" val="7.25" title=""></Bonusbtn>
            <Bonusbtn
              bkcolor="rgb(41, 136, 84)"
              val="75.84"
              title=""
            ></Bonusbtn>
            <Bonusbtn
              bkcolor="rgb(175, 96, 248)"
              val="200.5"
              title=""
            ></Bonusbtn>
            <Bonusbtn
              bkcolor="rgb(41, 149, 189)"
              val="25.55"
              title=""
            ></Bonusbtn>
            <Bonusbtn
              bkcolor="rgb(248, 191, 96)"
              val="2.75"
              title="bonus"
            ></Bonusbtn>
            <Bonusbtn bkcolor="#fff" val="7.25" title=""></Bonusbtn>
            <Bonusbtn
              bkcolor="rgb(41, 136, 84)"
              val="75.84"
              title=""
            ></Bonusbtn>
          </div>
          <div className="logosec">
            <img className="gambtopimg" src="img/logo.png" alt="logo1"></img>
          </div>
        </div>
        <div className="video-container">
          {/* <video autoPlay muted loop className="mainvideo">
            <source
              className="videosource"
              src="video/mockup.mp4"
              type="video/mp4"
            />
          </video> */}
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
          <Bonusbtnsm bkcolor="#fff" val="2.75" title="">
            1
          </Bonusbtnsm>
          <Bonusbtnsm bkcolor="rgb(41, 136, 84)" val="8.42" title="">
            1
          </Bonusbtnsm>
          <Bonusbtnsm bkcolor="rgb(41, 136, 84)" val="5.76" title="">
            1
          </Bonusbtnsm>
          <Bonusbtnsm bkcolor="#fff" val="9.77" title="">
            1
          </Bonusbtnsm>
          <Bonusbtnsm bkcolor="#fff" val="3.25" title="">
            1
          </Bonusbtnsm>
          <Bonusbtnsm bkcolor="#fff" val="4.98" title="">
            1
          </Bonusbtnsm>
          <Bonusbtnsm bkcolor="rgb(40, 156, 190)" val="25.25" title="">
            1
          </Bonusbtnsm>
          <Bonusbtnsm bkcolor="#fff" val="1.71" title="">
            1
          </Bonusbtnsm>
          <Bonusbtnsm bkcolor="#fff" val="2.62" title="">
            1
          </Bonusbtnsm>
          <Bonusbtnsm bkcolor="var(--mainclr)" val="500.25" title="bonus">
            1
          </Bonusbtnsm>
        </div>
        <div className="gambplaysec">
          <div className="gambplaysecleft">
            <div className="gamb-play-sec-left-1">
              <div className="uppercase textalign bold gambplaysecleftsub">
                <i
                  className="fa fa-diamond"
                  style={{ fontSize: "1.1vh", color: "var(--mainclr)" }}
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
                  }}
                >
                  Bet&nbsp;
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
                  10
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
                }}
              >
                x3
              </div>
            </div>
            <div className="gamb-play-sec-left-3">
              <input type="range" min="1" max="100" className="rangeright" />
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
                  onClick={this.reducespeedscroll}
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
                    marginRight: "0.5vh",
                    borderTopLeftRadius: "0.5vh",
                    borderBottomLeftRadius: "0.5vh",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.1vh",
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
                    fontSize: "1.1vh",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  view bet-list&nbsp;
                  <i
                    className="fa fa-diamond"
                    style={{ color: "var(--mainclr)", fontSize: "1.1vh" }}
                  ></i>
                  &nbsp;5.00
                </div>
              </div>
            </div>
          </div>
          <div className="gambplaysecright">
            <div className="gamb-play-sec-left-1">
              <div
                className="uppercase textalign bold"
                style={{
                  flex: 1,
                  backgroundColor: "var(--mainclr)",
                  color: "black",
                  fontSize: "1.1vh",
                  padding: "0.1vh 0px",
                  borderBottomLeftRadius: "0.5vh",
                  borderTopLeftRadius: "0.5vh",
                  borderWidth: "0.4vh",
                  borderStyle: "none none solid none",
                  borderColor: "rgb(146,120,76)",
                  cursor: "pointer",
                }}
              >
                Base
              </div>
              <div
                className="uppercase textalign bold"
                style={{
                  flex: 1,
                  backgroundColor: "rgb(28,33,39)",
                  fontSize: "1.1vh",
                  padding: "0.1vh 0px",
                  borderBottomRigthRadius: "0.5vh",
                  borderTopRightRadius: "0.5vh",
                  borderWidth: "0.4vh",
                  borderStyle: "none none solid none",
                  borderColor: "rgb(33,38,44)",
                  cursor: "pointer",
                }}
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
                  1.50
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
                }}
              >
                x2
              </div>
            </div>
            <div className="gamb-play-sec-left-3">
              <input type="range" min="1" max="100" className="rangeright" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Maingamble;

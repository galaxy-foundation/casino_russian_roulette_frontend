import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Signpage from "../Signpage/Signpage";
import MyAccount from "../profile/MyAccount";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import { Avatar } from "@material-ui/core";
import isNumber from "../../validation/isNumber";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      isAccShowModal: false,
      showMenu: false,
    };
  }
  onShowMenu = (e) => {
    e.preventDefault();
    this.setState({
      showMenu: true,
    });
    document.addEventListener("click", this.closeMenu);
  };
  closeMenu = (e) => {
    // if (!this.dropdownMenu.contains(e.target)) {
    this.setState({
      showMenu: false,
    });
    document.removeEventListener("click", this.closeMenu);
    // }
  };
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  handlemodalopen = () => {
    this.setState({
      isShowModal: true,
    });
  };
  handleaccmodalopen = () => {
    this.setState({
      isAccShowModal: true,
    });
  };
  handlemodalclose = () => {
    this.setState({
      isShowModal: false,
    });
  };
  handleaccmodalclose = () => {
    this.setState({
      isAccShowModal: false,
    });
  };
  render() {
    return (
      <div className="headmaindiv" style={styles.main}>
        <div className="logo-img-div">
          <Link to="/">
            <img
              className="headmainimg"
              src="img/logo.png"
              style={styles.img}
              alt="logo"
            ></img>
          </Link>
        </div>
        {this.props.auth.isAuthenticated ? (
          <div className="walletdiv">
            <div className="pricedrop">
              {isNumber(10000000)}{" "}
              <i
                className="fa fa-diamond"
                style={{ color: "var(--mainclr)", fontSize: "1.5vh" }}
              ></i>{" "}
              <i
                className="fa fa-caret-down"
                style={{
                  color: "var(--white)",
                  fontSize: "1.5vh",
                }}
              ></i>
            </div>
            <div style={styles.walletbtn} className="uppercase">
              wallet
            </div>
          </div>
        ) : (
          <div className="walletdiv"></div>
        )}

        <div className="userregico">
          {this.props.auth.isAuthenticated ? (
            <>
              <div className="user-info-block">
                <span onClick={this.onShowMenu} className="user-info-name">
                  {this.props.auth.user.name}
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa fa-caret-down user-info-down"
                  onClick={this.onShowMenu}
                ></i>
                {this.state.showMenu ? (
                  <div className="user-info-menu-block">
                    <div
                      className="user-info-menu-item"
                      onClick={this.handleaccmodalopen}
                    >
                      <Avatar
                        alt="User Avatar"
                        src={this.props.auth.user.avatar}
                        style={{ width: "3vh", height: "3vh" }}
                      ></Avatar>
                      &nbsp;&nbsp;
                      {this.props.auth.user.email}
                    </div>
                    <div
                      className="user-info-menu-item"
                      onClick={this.onLogoutClick}
                    >
                      Sign Out
                    </div>
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <div
              className="login-modal-btn"
              id="login-modal-btn"
              onClick={this.handlemodalopen}
            >
              <i
                className="fa fa-user"
                style={{ color: "var(--white)", fontSize: "1.5vh" }}
              ></i>
            </div>
          )}
        </div>
        <Dialog
          className="SignDialog"
          open={this.state.isShowModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handlemodalclose}
          style={{
            backgroundColor: "transparent",
            height: "auto",
          }}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <>
            <Signpage>
              <div
                id="SignDialogClosebtn"
                className="SignDialogClosebtn"
                onClick={this.handlemodalclose}
              >
                <i className="fa fa-close"></i>
              </div>
            </Signpage>
          </>
        </Dialog>
        <Dialog
          className="AccountDialog"
          open={this.state.isAccShowModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleaccmodalclose}
          style={{
            backgroundColor: "transparent",
            height: "auto",
            width: "100%",
          }}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <>
            <MyAccount>
              <div
                className="SignDialogClosebtn"
                onClick={this.handleaccmodalclose}
              >
                <i className="fa fa-close"></i>
              </div>
            </MyAccount>
          </>
        </Dialog>
      </div>
    );
  }
}

const styles = {
  main: {
    height: "5vh",
    backgroundColor: "var(--headclr)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    marginLeft: "1vh",
    height: "3.4vh",
    verticalAlign: "middle",
  },
  walletbtn: {
    backgroundColor: "var(--mainclr)",
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    paddingRight: "1.5vh",
    paddingLeft: "1vh",
    fontSize: "1.3vh",
    color: "var(--black)",
    cursor: "pointer",
    borderBottom: "0.5vh solid var(--headshwclr)",
    borderBottomRightRadius: "0.5vh",
    borderTopRightRadius: "0.5vh",
  },
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Header));

import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import Home from "./components/Home";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

// import socketIOClient from "socket.io-client";
// const SERVER = "http://192.168.113.155:8080";
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  // componentDidMount() {
  //   this.firstfunc();
  // }

  // firstfunc = () => {
  //   const socket = socketIOClient(SERVER);
  //   socket.on("receive-first-req", (m) => {
  //     NotificationManager.success(m, "", 0);
  //   });
  //   socket.emit("send-first-req", new Date());
  // };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
        <NotificationContainer />
      </Provider>
    );
  }
}

export default App;
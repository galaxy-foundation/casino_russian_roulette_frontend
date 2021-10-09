import axios from "axios";
import { NotificationManager } from "react-notifications";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import socketClient from "socket.io-client";

import { GET_ERRORS, SET_CURRENT_USER, USER_CONNECTION } from "./types";

const SERVER = "http://192.168.113.155:8080";
const socket = socketClient(SERVER);

// Register User
export const registerUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));

      socket.emit("user-connected");
      socket.on("user-connect", (user_connect) => {
        dispatch({
          type: USER_CONNECTION,
          payload: user_connect,
        });
      });

      NotificationManager.success("WELCOME TO BET", "", 3000);
    })
    .catch((err) => {
      NotificationManager.error(err.response.data.email, "", 3000);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Login - Get User Token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));

      socket.emit("user-connected");
      socket.on("user-connect", (user_connect) => {
        dispatch({
          type: USER_CONNECTION,
          payload: user_connect,
        });
      });

      NotificationManager.success("WELCOME TO BET", "", 3000);
    })
    .catch((err) => {
      if (err.response.data.email) {
        NotificationManager.error(err.response.data.email, "", 3000);
      } else if (err.response.data.password) {
        NotificationManager.error(err.response.data.password, "", 3000);
      }
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));

  socket.emit("user-disconnected");
  socket.on("user-connect", (user_connect) => {
    dispatch({
      type: USER_CONNECTION,
      payload: user_connect,
    });
  });
};

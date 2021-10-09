import axios from "axios";
import { NotificationManager } from "react-notifications";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Change Pass
export const changePassFunc = (chgData) => (dispatch) => {
  axios
    .post("/api/accounts/chgpass", chgData)
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
      NotificationManager.success("Password was changed", "", 3000);
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

// Change Email
export const changeEmailFunc = (chgData) => (dispatch) => {
  axios
    .post("/api/accounts/chgemail", chgData)
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
      NotificationManager.success("Email was changed", "", 3000);
    })
    .catch((err) => {
      if (err.response.data.email) {
        NotificationManager.error(err.response.data.email, "", 3000);
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

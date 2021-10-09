import { USER_CONNECTION } from "./types";

// Change Pass
export const user_connections = (u_cons) => (dispatch) => {
  dispatch({
    type: USER_CONNECTION,
    payload: u_cons,
  });
};

import axios from "axios";

// Save roll list
export const prev_roll_save = (newData) => (dispatch) => {
  axios
    .post("/api/mainbet/rollsave", newData)
    .then((res) => {})
    .catch((err) => {});
};

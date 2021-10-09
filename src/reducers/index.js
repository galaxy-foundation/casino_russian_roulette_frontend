import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userconReducer from "./userconReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  usercon: userconReducer,
});

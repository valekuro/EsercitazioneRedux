import loginReducer from "../reducers/LoginSlice";
import registerReducer from "../reducers/RegSlice";
import { combineReducers } from "redux";

export default combineReducers({
  registerReducer,
  loginReducer,
});

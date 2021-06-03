import loginReducer from "../reducers/LoginSlice";
import registerReducer from "../reducers/RegSlice";
import commentsReducer from "../reducers/CommentSlice";
import { combineReducers } from "redux";

export default combineReducers({
  registerReducer,
  loginReducer,
  commentsReducer,
});

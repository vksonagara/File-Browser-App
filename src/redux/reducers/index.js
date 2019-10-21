import { combineReducers } from "redux";
import fileTree from "./fileTree";
import visibilityFilter from "./visibilityFilter";
import history from "./history";

export default combineReducers({
  fileTree,
  visibilityFilter,
  history
});

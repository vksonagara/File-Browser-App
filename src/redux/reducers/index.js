import { combineReducers } from "redux";
import fileTree from "./fileTree";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  fileTree,
  visibilityFilter
});

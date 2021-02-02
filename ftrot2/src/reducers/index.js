import { combineReducers } from "redux";
import auth from "./AuthReducers/auth";
import message from "./MessageReducers/message";
import tasks from "./EngineerReducers/tasks";

export default combineReducers({
  auth,
  message,
  tasks,
});

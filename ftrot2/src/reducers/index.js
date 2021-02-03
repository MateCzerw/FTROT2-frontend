import { combineReducers } from "redux";
import auth from "./AuthReducers/auth";
import message from "./MessageReducers/message";
import tasks from "./EngineerReducers/tasks";
import workpackages from "./TechnicalProjectManagerReducers/workpackages";
import leadEngineer from "./LeadEngineerReducers/leadEngineer";

export default combineReducers({
  auth,
  message,
  tasks,
  workpackages,
  leadEngineer,
});

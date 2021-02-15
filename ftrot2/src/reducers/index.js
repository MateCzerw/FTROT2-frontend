import { combineReducers } from "redux";
import auth from "./AuthReducers/auth";
import message from "./MessageReducers/message";
import engineer from "./EngineerReducers/engineerReducer";
import workpackages from "./TechnicalProjectManagerReducers/workpackages";
import leadEngineer from "./LeadEngineerReducers/leadEngineer";
import teamLeader from "./TeamLeaderReducers/teamLeaderReducer";

export default combineReducers({
  auth,
  message,
  engineer,
  workpackages,
  leadEngineer,
  teamLeader,
});

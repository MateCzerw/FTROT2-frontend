import { uuid } from "uuidv4";
import moment from "moment";
import {
  CREATE_WORKPACKAGE,
  EDIT_WORKPACKAGE,
  DELETE_WORKPACKAGE,
  GET_WORKPACKAGES,
} from "../../actions/types";

const initialState = {
  workpackages: [],
  userInfo: {
    name: "Maciej",
    surname: "Pszczoła",
    picture:
      "https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo",
    role: "Technical Project Manager",
    team: "DLSC2",
    supervisor: "Łukasz Biernatowski",
    joinedAt: moment(Date.now()).calendar(),
    finishedWorkpackages: 25,
    unFinishedWorkpackages: 5,
    workPackages: [
      { name: "HMC", tasksStatus: 0.5, dueTo: moment(Date.now()).calendar() },
      { name: "BMC", tasksStatus: 0.5, dueTo: moment(Date.now()).calendar() },
      {
        name: "Volvo",
        tasksStatus: 0.5,
        dueTo: moment(Date.now()).calendar(),
      },
      { name: "Daf", tasksStatus: 0.5, dueTo: moment(Date.now()).calendar() },
      {
        name: "Iveco",
        tasksStatus: 0.5,
        dueTo: moment(Date.now()).calendar(),
      },
    ],
  },
};

const technicalProjectManagerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WORKPACKAGES:
      return {
        ...state,
        workpackages: payload,
      };
    case CREATE_WORKPACKAGE:
      return {
        ...state,
        workpackages: [...state.workpackages, payload],
      };
    case EDIT_WORKPACKAGE:
      return {
        ...state,
        workpackages: state.workpackages.map((item) => {
          if (item.id === payload.id) return payload.workpackage;
          else return item;
        }),
      };
    case DELETE_WORKPACKAGE:
      return {
        ...state,
        workpackages: state.workpackages.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};

export default technicalProjectManagerReducer;

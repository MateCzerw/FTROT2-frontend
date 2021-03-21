import moment from "moment";
import {
  GET_LEAD_ENGINEER_BOARD_INFO,
  GET_LEAD_ENGINEER_BOARD_WORKPACKAGES,
  GET_LEAD_ENGINEER_BOARD_GRAPH_DETAILS,
  ADD_LEAD_ENGINEER_TASK,
  EDIT_LEAD_ENGINEER_TASK,
  DELETE_LEAD_ENGINEER_TASK,
  GET_LEAD_ENGINEER_WORKPACKAGES,
  UPLOAD_PICTURE,
} from "../../actions/types";

const initialState = {
  workpackages: [],
  userInfo: {
    pictureUrl: "",

    workPackages: [],
    statusOfWorkpackages: [],
  },
};

const leadEngineer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LEAD_ENGINEER_BOARD_INFO:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          name: payload.name,
          surname: payload.surname,
          team: payload.team,
          role: payload.role,
          finishedWorkPackages: payload.finishedWorkPackages,
          joinedAt: payload.joinedAt,
          unfinishedWorkPackages: payload.unfinishedWorkPackages,
          supervisor: payload.supervisor,
          pictureUrl: payload.pictureUrl,
        },
      };

    case UPLOAD_PICTURE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          pictureUrl: payload,
        },
      };

    case GET_LEAD_ENGINEER_BOARD_WORKPACKAGES:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          workPackages: payload.workPackages,
        },
      };

    case GET_LEAD_ENGINEER_BOARD_GRAPH_DETAILS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          statusOfWorkpackages: payload,
        },
      };

    case GET_LEAD_ENGINEER_WORKPACKAGES:
      return {
        ...state,
        workpackages: payload,
      };
    case ADD_LEAD_ENGINEER_TASK:
      return {
        ...state,
        workpackages: state.workpackages.map((workpackage) => {
          if (workpackage.id === payload.workpackageId) {
            return {
              ...workpackage,
              tasks: [...workpackage.tasks, payload.task],
            };
          }
          return workpackage;
        }),
      };
    case DELETE_LEAD_ENGINEER_TASK:
      return {
        ...state,
        workpackages: state.workpackages.map((workpackage) => {
          if (workpackage.id === payload.workpackageId)
            return {
              ...workpackage,
              tasks: workpackage.tasks.filter(
                (task) => task.id !== payload.taskId
              ),
            };
          return workpackage;
        }),
      };
    case EDIT_LEAD_ENGINEER_TASK:
      return {
        ...state,
        workpackages: state.workpackages.map((workpackage) => {
          if (workpackage.id === payload.workpackageId) {
            return {
              ...workpackage,
              tasks: workpackage.tasks.map((task) => {
                if (task.id === payload.taskId) return payload.editedTask;
                return task;
              }),
            };
          }
          return workpackage;
        }),
      };

    default:
      return state;
  }
};

export default leadEngineer;

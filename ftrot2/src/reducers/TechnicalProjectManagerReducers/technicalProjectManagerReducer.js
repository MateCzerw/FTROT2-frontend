import {
  GET_TECHNICAL_PROJECT_MANAGER_BOARD_INFO,
  GET_TECHNICAL_PROJECT_MANAGER_BOARD_WORKPACKAGES,
  GET_TECHNICAL_PROJECT_MANAGER_BOARD_GRAPH_DETAILS,
  CREATE_WORKPACKAGE,
  EDIT_WORKPACKAGE,
  DELETE_WORKPACKAGE,
  GET_WORKPACKAGES,
  GET_LEAD_ENGINEERS,
  UPLOAD_PICTURE,
} from "../../actions/types";

const initialState = {
  workpackages: [],
  userInfo: {
    workPackages: [],
    statusOfWorkpackages: [],
    pictureUrl: "",
  },
  leadEngineers: [],
};

const technicalProjectManagerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TECHNICAL_PROJECT_MANAGER_BOARD_INFO:
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
    case GET_TECHNICAL_PROJECT_MANAGER_BOARD_WORKPACKAGES:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          workPackages: payload.workPackages,
        },
      };

    case GET_TECHNICAL_PROJECT_MANAGER_BOARD_GRAPH_DETAILS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          statusOfWorkpackages: payload,
        },
      };
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
          if (item.id === payload.id)
            return {
              ...item,
              ...payload.workpackageEditedValues,
            };
          else return item;
        }),
      };
    case DELETE_WORKPACKAGE:
      return {
        ...state,
        workpackages: state.workpackages.filter((item) => item.id !== payload),
      };

    case GET_LEAD_ENGINEERS:
      return {
        ...state,
        leadEngineers: payload,
      };

    default:
      return state;
  }
};

export default technicalProjectManagerReducer;

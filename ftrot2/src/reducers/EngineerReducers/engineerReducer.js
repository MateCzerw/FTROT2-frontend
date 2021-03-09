import { uuid } from "uuidv4";
import moment from "moment";
import {
  GET_TASKS,
  SET_TASK_DONE,
  CHANGE_TASK_STATUS,
  SET_TASK_HOLD,
  GET_USER_INFO,
  GET_USER_TASKS,
  GET_USER_WEEK,
  GET_USER_GRAPH_DETAILS,
} from "../../actions/types";

const userInfo = {
  name: "Mateusz",
  surname: "Czerwiński",
  team: "DLSC2",
  role: "Lead Eangineer",
  supervisor: "Wojciech Zabiegło",
  joinedAt: moment(Date.now()).calendar(),
  picture: "",
  reworkRatio: 0.05,
  unfinishedTasks: 10,
  currentTasks: [],
};

const initialState = {
  schedule: {},
  userInfo: {},
  reworkHours: [5, 6, 7, 8, 5, 4, 3, 2, 5, 9, 12, 11],
  statusOfWorkInCurrentWeek: [0, 40, 0],
};

const engineerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          name: payload.name,
          surname: payload.surname,
          team: payload.team,
          role: payload.role,
          supervisor: payload.supervisor,
          joinedAt: payload.joinedAt,
          reworkRatio: payload.reworkRatio,
          unfinishedTasks: payload.unfinishedTasks,
        },
      };

    case GET_USER_TASKS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          currentTasks: payload.currentTasks,
        },
      };
    case GET_USER_GRAPH_DETAILS:
      return {
        ...state,
        statusOfWorkInCurrentWeek: payload,
      };
    case GET_TASKS:
      return { ...state };
    case GET_USER_WEEK:
      return { ...state, schedule: payload.data };
    case SET_TASK_DONE:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          days: state.schedule.days.map((day) => {
            if (day.id === payload.dayId) {
              day.tasks.map((task) => {
                if (task.id === payload.taskId) {
                  task.isDone = !task.isDone;
                  task.status = 1;
                  return task;
                }
                return task;
              });
            }
            return day;
          }),
        },
      };
    case SET_TASK_HOLD:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          days: state.schedule.days.map((day) => {
            if (day.id === payload.dayId) {
              day.tasks.map((task) => {
                if (task.id === payload.taskId) {
                  task.isOnHold = !task.isOnHold;
                  return task;
                }
                return task;
              });
            }
            return day;
          }),
        },
      };
    case CHANGE_TASK_STATUS:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          days: state.schedule.days.map((day) => {
            if (day.id === payload.dayId) {
              day.tasks.map((task) => {
                if (task.id === payload.taskId) {
                  task.status = payload.status;
                  if (payload.status === 1) task.isDone = true;
                  return task;
                }
                return task;
              });
            }
            return day;
          }),
        },
      };

    default:
      return state;
  }
};

export default engineerReducer;

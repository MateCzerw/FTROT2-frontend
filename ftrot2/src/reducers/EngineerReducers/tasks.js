import { uuid } from "uuidv4";
import {
  GET_TASKS,
  SET_TASK_DONE,
  CHANGE_TASK_STATUS,
  SET_TASK_HOLD,
} from "../../actions/types";

const initialTasksMonday = [
  {
    id: uuid(),
    name: "CAD model of pedal",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "FEM of housing",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "DFMEA",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Design review",
    workpackage: "DAF",
    duration: 10,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Meeting with supplier",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
];
const initialTasksTuesday = [
  {
    id: uuid(),
    name: "CAD model of pedal",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "FEM of housing",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "DFMEA",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Design review",
    workpackage: "DAF",
    duration: 10,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Meeting with supplier",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
];
const initialTasksWednesday = [
  {
    id: uuid(),
    name: "CAD model of pedal",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "FEM of housing",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "DFMEA",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Design review",
    workpackage: "DAF",
    duration: 10,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Meeting with supplier",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
];
const initialTasksThursday = [
  {
    id: uuid(),
    name: "CAD model of pedal",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "FEM of housing",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "DFMEA",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Design review",
    workpackage: "DAF",
    duration: 10,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Meeting with supplier",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
];
const initialTasksFriday = [
  {
    id: uuid(),
    name: "CAD model of pedal",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "FEM of housing",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "DFMEA",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Design review",
    workpackage: "DAF",
    duration: 10,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
  {
    id: uuid(),
    name: "Meeting with supplier",
    workpackage: "DAF",
    duration: 2,
    status: 0.5,
    isDone: false,
    isOnHold: false,
  },
];

const week = {
  id: uuid(),
  week: "CW02",
  roster: [
    {
      id: uuid(),
      dayName: "Monday",
      date: "27.01.2021",
      tasks: initialTasksMonday,
    },
    {
      id: uuid(),
      dayName: "Thuesday",
      date: "28.01.2021",
      tasks: initialTasksTuesday,
    },
    {
      id: uuid(),
      dayName: "Wednesday",
      date: "29.01.2021",
      tasks: initialTasksWednesday,
    },
    {
      id: uuid(),
      dayName: "Thursday",
      date: "30.01.2021",
      tasks: initialTasksThursday,
    },
    {
      id: uuid(),
      dayName: "Friday",
      date: "31.01.2021",
      tasks: initialTasksFriday,
    },
  ],
};

const initialState = {
  schedule: week,
};

const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TASKS:
      return { ...state };
    case SET_TASK_DONE:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          roster: state.schedule.roster.map((day) => {
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
          roster: state.schedule.roster.map((day) => {
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
          roster: state.schedule.roster.map((day) => {
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

export default tasksReducer;

import moment from "moment";
import {
  ADD_TO_BACKLOG,
  ADD_TO_DAY_ID,
  ADD_TO_UNFINISHED_TASKS,
  ASSIGN_TASK,
  DELETE_FROM_BACKLOG,
  DELETE_FROM_DAY_ID,
  DELETE_FROM_UNFINISHED_TASKS,
  GET_COLUMNS,
  GET_WEEK_WITH_TASKS_FOR_TEAM_LEADER,
} from "../../actions/types";

const userInfo = {
  name: "Wojciech",
  surname: "Zabiegło",
  picture:
    "https://yt3.ggpht.com/yti/ANoDKi6wK_UXTj-paYQq980Ia30B623dBP5hTFc9Fnsciw=s88-c-k-c0x00ffffff-no-rj-mo",
  role: "Team Leader",
  team: "DLSC2",
  supervisor: "Łukasz Szczuplak",
  joinedAt: moment(Date.now()).calendar(),
  teamMembersQuantity: 8,
  workPackagesInProgress: 12,
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
  statusOfWorkpackages: [160, 20, 10],
};

const initialState = {
  columns: {
    unassignedTasks: [],
    engineers: [
      {
        week: [],
      },
    ],
  },
  userInfo,
};

const teamLeader = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COLUMNS:
      return {
        ...state,
        columns: payload,
      };

    case ASSIGN_TASK:
      return {
        ...state,
        columns: state.columns.map((column) => {
          payload.forEach((element) => {
            if (column.rowId === element.rowId) column = element;
          });
          // if (column.rowId === payload[0].rowId) return payload[0];
          return column;
        }),
      };

    case GET_WEEK_WITH_TASKS_FOR_TEAM_LEADER:
      return {
        ...state,
        columns: {
          ...state.columns,
          engineers: state.columns.engineers.map((engineer) => {
            if (engineer.id === payload.engineerId)
              return { ...engineer, week: payload.data };
            return engineer;
          }),
        },
      };

    case DELETE_FROM_UNFINISHED_TASKS: {
      return {
        ...state,
        columns: {
          ...state.columns,
          unassignedTasks: state.columns.unassignedTasks.splice(
            payload.index,
            1
          ),
        },
      };
    }
    case DELETE_FROM_BACKLOG: {
      return {
        ...state,
        columns: {
          ...state.columns,
          engineers: state.columns.engineers.map((engineer) => {
            if (engineer.id === payload.engineerId)
              return {
                ...engineer,
                backlog: engineer.backlog.filter(
                  (task, index) => index !== payload.index
                ),
              };
            return engineer;
          }),
        },
      };
    }
    case DELETE_FROM_DAY_ID: {
      return {
        ...state,
        columns: {
          ...state.columns,
          engineers: state.columns.engineers.map((engineer) => {
            if (engineer.id === payload.engineerId) {
              return {
                ...engineer,
                week: {
                  ...engineer.week,
                  days: engineer.week.days.map((day) => {
                    if (day.id === payload.dayId)
                      return {
                        ...day,
                        tasks: day.tasks.filter(
                          (task, index) => index !== payload.index
                        ),
                      };
                    return day;
                  }),
                },
              };
            }
            return engineer;
          }),
        },
      };
    }

    case ADD_TO_UNFINISHED_TASKS: {
      return {
        ...state,
        columns: {
          ...state.columns,
          unassignedTasks: state.columns.unassignedTasks.splice(
            payload.index,
            0,
            payload.task
          ),
        },
      };
    }
    case ADD_TO_BACKLOG: {
      return {
        ...state,
        columns: {
          ...state.columns,
          engineers: state.columns.engineers.map((engineer) => {
            if (engineer.id === payload.engineerId)
              return {
                ...engineer,
                backlog: addTask(engineer.backlog, payload.task, payload.index), //.splice(payload.index,0,payload.task),
              };
            return engineer;
          }),
        },
      };
    }
    case ADD_TO_DAY_ID: {
      return {
        ...state,
        columns: {
          ...state.columns,
          engineers: state.columns.engineers.map((engineer) => {
            if (engineer.id === payload.engineerId) {
              return {
                ...engineer,
                week: {
                  ...engineer.week,
                  days: engineer.week.days.map((day) => {
                    if (day.id === payload.dayId)
                      return {
                        ...day,
                        tasks: addTask(day.tasks, payload.task, payload.index), //day.tasks.splice(payload.index, 0, payload.task),
                      };
                    return day;
                  }),
                },
              };
            }
            return engineer;
          }),
        },
      };
    }

    default:
      return state;
  }
};

const addTask = (tasks, task, index) => {
  const copiedTasks = [...tasks];
  copiedTasks.splice(index, 0, task);
  return copiedTasks;
};

export default teamLeader;

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
  GET_TEAM_LEADER_BOARD_GRAPH_DETAILS,
  GET_TEAM_LEADER_BOARD_INFO,
  GET_TEAM_LEADER_BOARD_WORKPACKAGES,
  GET_WEEK_WITH_TASKS_FOR_TEAM_LEADER,
  UPLOAD_PICTURE,
} from "../../actions/types";

const userInfo = {
  pictureUrl: "",

  workPackages: [],
  statusOfWorkpackages: [],
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
  userInfo: {
    pictureUrl: "",
  },
};

const teamLeader = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TEAM_LEADER_BOARD_INFO:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          name: payload.name,
          surname: payload.surname,
          team: payload.team,
          role: payload.role,
          teamMembersQuantity: payload.teamMembers,
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
    case GET_TEAM_LEADER_BOARD_WORKPACKAGES:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          workPackages: payload.workPackages,
        },
      };

    case GET_TEAM_LEADER_BOARD_GRAPH_DETAILS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          statusOfWorkpackages: [payload, 10, 10],
        },
      };

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
          unassignedTasks: state.columns.unassignedTasks.filter(
            (task, index) => index !== payload.index
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
          unassignedTasks: addTask(
            state.columns.unassignedTasks,
            payload.task,
            payload.index
          ), // state.columns.unassignedTasks.splice(
          //   payload.index,
          //   0,
          //   payload.task
          // ),
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

import axios from "axios";
import authHeader from "../../services/auth-header";
import {
  ASSIGN_TASK,
  CLEAR_MESSAGE,
  GET_COLUMNS,
  SET_MESSAGE,
  GET_WEEK_WITH_TASKS_FOR_TEAM_LEADER,
  DELETE_FROM_UNFINISHED_TASKS,
  DELETE_FROM_BACKLOG,
  DELETE_FROM_DAY_ID,
  ADD_TO_UNFINISHED_TASKS,
  ADD_TO_BACKLOG,
  ADD_TO_DAY_ID,
} from "../types";

const API_URL = "http://localhost:8080/api/v1/team-leader/";

export const getColumns = () => async (dispatch) => {
  axios
    .get(API_URL + "assign-tasks/data", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_COLUMNS,
        payload: data,
      });

      dispatch({
        type: CLEAR_MESSAGE,
      });

      return Promise.resolve();
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    });
};

export const getWeekWithTasksForTeamLeader = (
  weekNumber,
  yearNumber,
  engineerId
) => async (dispatch) => {
  axios
    .get(API_URL + "assign-tasks/weeks", {
      headers: authHeader(),
      params: {
        yearNumber,
        weekNumber,
        engineerId,
      },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_WEEK_WITH_TASKS_FOR_TEAM_LEADER,
        payload: { data, engineerId },
      });

      dispatch({
        type: CLEAR_MESSAGE,
      });

      return Promise.resolve();
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    });
};

const findColumn = (id, columns) => {
  let foundColumn = [];
  if (id === "unassignedTasks") return columns.unassignedTasks;
  if (id.substring(0, 8) === "backlog_") {
    columns.engineers.forEach((engineer) => {
      if (engineer.id === parseInt(id.substring(8), 10))
        foundColumn = engineer.backlog;
    });
  }

  if (id.substring(0, 4) === "day_") {
    for (let engineer of columns.engineers) {
      if (
        engineer.week.days.some(
          (day) => day.id === parseInt(id.substring(4), 10)
        )
      ) {
        let column = engineer.week.days.find(
          (day) => day.id === parseInt(id.substring(4), 10)
        );
        foundColumn = column.tasks;
        break;
      }
    }
  }

  return foundColumn;
};

const findEngineerId = (id, columns) => {
  for (let engineer of columns.engineers) {
    if (
      id.substring(0, 4) === "day_" &&
      engineer.week.days.some((day) => day.id === parseInt(id.substring(4), 10))
    )
      return engineer.id;
    if (
      id.substring(0, 8) === "backlog_" &&
      engineer.id === parseInt(id.substring(8), 10)
    )
      return engineer.id;
  }
};

export const setNewColumnForTasks = (
  source,
  destination,
  // sourceColumnId,
  // sourceTaskIndex,
  // destinationColumnId,
  // destinationIndex,
  // sourceColumn,
  // destinationColumn,
  columns
) => async (dispatch) => {
  // find task with source column

  const sourceColumn = findColumn(source.droppableId, columns);

  const task = sourceColumn[source.index];

  //delete task from 1 column
  if (source.droppableId === "unassignedTasks")
    dispatch({
      type: DELETE_FROM_UNFINISHED_TASKS,
      payload: {
        index: source.index,
      },
    });
  if (source.droppableId.substring(0, 8) === "backlog_")
    dispatch({
      type: DELETE_FROM_BACKLOG,
      payload: {
        engineerId: findEngineerId(source.droppableId, columns),
        index: source.index,
      },
    });
  if (source.droppableId.substring(0, 4) === "day_")
    dispatch({
      type: DELETE_FROM_DAY_ID,
      payload: {
        engineerId: findEngineerId(source.droppableId, columns),
        dayId: parseInt(source.droppableId.substring(4), 10),
        index: source.index,
      },
    });

  //add task to 1 column
  if (destination.droppableId === "unassignedTasks")
    dispatch({
      type: ADD_TO_UNFINISHED_TASKS,
      payload: {
        index: destination.index,
        task,
      },
    });
  if (destination.droppableId.substring(0, 8) === "backlog_")
    dispatch({
      type: ADD_TO_BACKLOG,
      payload: {
        engineerId: findEngineerId(destination.droppableId, columns),
        index: destination.index,
        task,
      },
    });
  if (destination.droppableId.substring(0, 4) === "day_")
    dispatch({
      type: ADD_TO_DAY_ID,
      payload: {
        engineerId: findEngineerId(destination.droppableId, columns),
        dayId: parseInt(destination.droppableId.substring(4), 10),
        index: destination.index,
        task,
      },
    });
};
// const findColumn = (id) => {
//   let foundColumn = [];
//   columns.forEach((eachEngineer) => {
//     let tempTasks = eachEngineer.days.find(
//       (column) => column.columnId === id
//     );
//     if (tempTasks !== undefined) foundColumn = tempTasks;
//   });

//   return foundColumn;
// };

// const sourceColumn = findColumn(source.droppableId);
// const destinationColumn = findColumn(destination.droppableId);
// const sourceColumnId = source.droppableId;
// const destinationColumnId = destination.droppableId;

// if (sourceColumnId !== destinationColumnId) {
//   const sourceTasks = [...sourceColumn.tasks];
//   const destinationTasks = [...destinationColumn.tasks];
//   const [removed] = sourceTasks.splice(sourceTaskIndex, 1);
//   destinationTasks.splice(destinationIndex, 0, removed);
//   sourceColumn.tasks = sourceTasks;
//   destinationColumn.tasks = destinationTasks;

//   let source = columns.find((eachEngineer) =>
//     eachEngineer.schedule.some((column) => column.columnId === sourceColumnId)
//   );

//   let destination = columns.find((eachEngineer) =>
//     eachEngineer.schedule.some(
//       (column) => column.columnId === destinationColumnId
//     )
//   );

//   source = {
//     ...source,
//     schedule: source.schedule.map((column) => {
//       if (column.columnId === sourceColumnId) return sourceColumn;
//       else return column;
//     }),
//   };

//   destination = {
//     ...destination,
//     schedule: destination.schedule.map((column) => {
//       if (column.columnId === destinationColumnId) return destinationColumn;
//       else return column;
//     }),
//   };

//   dispatch({
//     type: ASSIGN_TASK,
//     payload: [source, destination],
//   });
// } else {
//   const sourceTasks = [...sourceColumn.tasks];
//   const copiedItems = [...sourceTasks];
//   const [removed] = copiedItems.splice(sourceTaskIndex, 1);
//   copiedItems.splice(destinationIndex, 0, removed);
//   sourceColumn.tasks = copiedItems;

//   let source = columns.find((eachEngineer) =>
//     eachEngineer.schedule.some((column) => column.columnId === sourceColumnId)
//   );

//   source = {
//     ...source,
//     schedule: source.schedule.map((column) => {
//       if (column.columnId === sourceColumnId) return sourceColumn;
//       else return column;
//     }),
//   };
//   dispatch({
//     type: ASSIGN_TASK,
//     payload: [source],
//   });

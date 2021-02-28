import axios from "axios";
import authHeader from "../../services/auth-header";
import {
  ASSIGN_TASK,
  CLEAR_MESSAGE,
  GET_COLUMNS,
  SET_MESSAGE,
  GET_WEEK_WITH_TASKS_FOR_TEAM_LEADER,
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

export const setNewColumnForTasks = (
  sourceColumnId,
  sourceTaskIndex,
  destinationColumnId,
  destinationIndex,
  sourceColumn,
  destinationColumn,
  columns
) => async (dispatch) => {
  if (sourceColumnId !== destinationColumnId) {
    const sourceTasks = [...sourceColumn.tasks];
    const destinationTasks = [...destinationColumn.tasks];
    const [removed] = sourceTasks.splice(sourceTaskIndex, 1);
    destinationTasks.splice(destinationIndex, 0, removed);
    sourceColumn.tasks = sourceTasks;
    destinationColumn.tasks = destinationTasks;

    let source = columns.find((eachEngineer) =>
      eachEngineer.schedule.some((column) => column.columnId === sourceColumnId)
    );

    let destination = columns.find((eachEngineer) =>
      eachEngineer.schedule.some(
        (column) => column.columnId === destinationColumnId
      )
    );

    source = {
      ...source,
      schedule: source.schedule.map((column) => {
        if (column.columnId === sourceColumnId) return sourceColumn;
        else return column;
      }),
    };

    destination = {
      ...destination,
      schedule: destination.schedule.map((column) => {
        if (column.columnId === destinationColumnId) return destinationColumn;
        else return column;
      }),
    };

    dispatch({
      type: ASSIGN_TASK,
      payload: [source, destination],
    });
  } else {
    const sourceTasks = [...sourceColumn.tasks];
    const copiedItems = [...sourceTasks];
    const [removed] = copiedItems.splice(sourceTaskIndex, 1);
    copiedItems.splice(destinationIndex, 0, removed);
    sourceColumn.tasks = copiedItems;

    let source = columns.find((eachEngineer) =>
      eachEngineer.schedule.some((column) => column.columnId === sourceColumnId)
    );

    source = {
      ...source,
      schedule: source.schedule.map((column) => {
        if (column.columnId === sourceColumnId) return sourceColumn;
        else return column;
      }),
    };
    dispatch({
      type: ASSIGN_TASK,
      payload: [source],
    });
  }
};

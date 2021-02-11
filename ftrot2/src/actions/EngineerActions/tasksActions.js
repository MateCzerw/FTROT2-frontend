import axios from "axios";
import {
  GET_TASKS,
  SET_TASK_DONE,
  SET_TASK_HOLD,
  CHANGE_TASK_STATUS,
} from "../types";

export const getWeek = () => async (dispatch) => {
  dispatch({
    type: GET_TASKS,
    payload: {},
  });
};

export const setTaskDoneAction = (dayId, taskId) => async (dispatch) => {
  //setTimeout(() => {}, 2000);
  dispatch({
    type: SET_TASK_DONE,
    payload: {
      taskId,
      dayId,
    },
  });
};

export const setTaskOnHold = (dayId, taskId) => async (dispatch) => {
  //setTimeout(() => {}, 2000);
  dispatch({
    type: SET_TASK_HOLD,
    payload: {
      taskId,
      dayId,
    },
  });
};

export const ChangeTaskStatusAction = (dayId, taskId, status) => async (
  dispatch
) => {
  //setTimeout(() => {}, 2000);
  dispatch({
    type: CHANGE_TASK_STATUS,
    payload: {
      taskId,
      dayId,
      status,
    },
  });
};

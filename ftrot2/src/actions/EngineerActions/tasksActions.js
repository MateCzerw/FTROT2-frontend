import axios from "axios";
import { GET_TASKS, SET_TASK_DONE } from "../types";

export const getWeek = () => async (dispatch) => {
  dispatch({
    type: GET_TASKS,
    payload: {},
  });
};

export const setTaskDoneAction = (dayId, taskId) => async (dispatch) => {
  dispatch({
    type: SET_TASK_DONE,
    payload: {
      taskId,
      dayId,
    },
  });
};

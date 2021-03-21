import axios from "axios";
import authHeader from "../../services/auth-header";
import {
  GET_TASKS,
  SET_TASK_DONE,
  SET_TASK_HOLD,
  CHANGE_TASK_STATUS,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  GET_USER_WEEK,
} from "../types";
const API_URL = "http://localhost:8080/api/v1/engineer/tasks";

export const getCurrentWeekWithTasks = () => async (dispatch) => {
  axios
    .get(API_URL, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: GET_USER_WEEK,
        payload: { data },
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

export const getNextWeekWithTasks = (weekNumber, yearNumber) => async (
  dispatch
) => {
  axios
    .get(API_URL + "/next-week", {
      headers: authHeader(),
      params: {
        yearNumber,
        weekNumber,
      },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: GET_USER_WEEK,
        payload: { data },
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

export const getPreviousWeekWithTasks = (weekNumber, yearNumber) => async (
  dispatch
) => {
  axios
    .get(API_URL + "/previous-week", {
      headers: authHeader(),
      params: {
        yearNumber,
        weekNumber,
      },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: GET_USER_WEEK,
        payload: { data },
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
export const setTaskDoneAction = (dayId, taskId) => async (dispatch) => {
  //setTimeout(() => {}, 2000);
  axios
    .patch(
      `${API_URL}/${taskId}`,
      {},
      {
        headers: authHeader(),
        params: {
          status: 1,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: SET_TASK_DONE,
        payload: {
          taskId,
          dayId,
        },
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
  axios
    .patch(
      API_URL + "/" + taskId,
      {},
      {
        params: {
          status,
        },
        headers: authHeader(),
      }
    )
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: CHANGE_TASK_STATUS,
        payload: {
          taskId,
          dayId,
          status,
        },
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

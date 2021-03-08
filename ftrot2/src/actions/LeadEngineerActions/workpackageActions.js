import axios from "axios";
import {
  ADD_LEAD_ENGINEER_TASK,
  EDIT_LEAD_ENGINEER_TASK,
  DELETE_LEAD_ENGINEER_TASK,
  GET_LEAD_ENGINEER_WORKPACKAGES,
  CLEAR_MESSAGE,
  SET_MESSAGE,
} from "../types";
import authHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/v1/lead-engineer/";

export const getWorkPackagesForLeadEngineer = () => async (dispatch) => {
  axios
    .get(API_URL + "work-packages", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_LEAD_ENGINEER_WORKPACKAGES,
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

export const addTaskAction = (workpackageId, task) => async (dispatch) => {
  axios
    .post(API_URL + "work-packages/" + workpackageId + "/tasks", task, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: ADD_LEAD_ENGINEER_TASK,
        payload: {
          workpackageId,
          task,
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

export const deleteTaskAction = (workpackageId, taskId) => async (dispatch) => {
  axios
    .delete(API_URL + "work-packages/" + workpackageId + "/tasks/" + taskId, {
      headers: authHeader(),
    })
    .then(
      dispatch({
        type: DELETE_LEAD_ENGINEER_TASK,
        payload: {
          workpackageId,
          taskId,
        },
      })
    )
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

export const editTaskAction = (workpackageId, taskId, editedTask) => async (
  dispatch
) => {
  axios
    .put(
      API_URL + "work-packages/" + workpackageId + "/tasks/" + taskId,
      editedTask,
      {
        headers: authHeader(),
      }
    )
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: EDIT_LEAD_ENGINEER_TASK,
        payload: {
          workpackageId,
          taskId,
          editedTask,
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
  //setTimeout(() => {}, 2000);
};

import axios from "axios";
import authHeader from "../../services/auth-header";
import {
  CLEAR_MESSAGE,
  GET_USER_GRAPH_DETAILS,
  GET_USER_INFO,
  GET_USER_TASKS,
  SET_MESSAGE,
} from "../types";
const API_URL = "http://localhost:8080/api/v1/engineer/board/";

export const getUserInfo = () => async (dispatch) => {
  axios
    .get(API_URL + "user-info", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_USER_INFO,
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

export const getUserTasks = () => async (dispatch) => {
  axios
    .get(API_URL + "tasks", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_USER_TASKS,
        payload: { currentTasks: data },
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

export const getGraphDetails = () => async (dispatch) => {
  axios
    .get(API_URL + "graph-details", {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_USER_GRAPH_DETAILS,
        payload: [
          data,
          40 - data > 0 ? 40 - data : 0,
          data - 40 > 0 ? data - 40 : 0,
        ],
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

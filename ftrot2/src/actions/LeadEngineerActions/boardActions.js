import axios from "axios";
import authHeader from "../../services/auth-header";
import {
  GET_LEAD_ENGINEER_BOARD_INFO,
  GET_LEAD_ENGINEER_BOARD_WORKPACKAGES,
  GET_LEAD_ENGINEER_BOARD_GRAPH_DETAILS,
  CLEAR_MESSAGE,
  SET_MESSAGE,
} from "../types";
const API_URL = "http://localhost:8080/api/v1/lead-engineer/board/";

export const getLeadEngineerInfo = () => async (dispatch) => {
  axios
    .get(API_URL + "user-info", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_LEAD_ENGINEER_BOARD_INFO,
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

export const getLeadEngineerWorkpackages = () => async (dispatch) => {
  axios
    .get(API_URL + "work-packages", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_LEAD_ENGINEER_BOARD_WORKPACKAGES,
        payload: { workPackages: data },
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

export const getLeadEngineerWorkPackagesStatus = (
  weekNumber,
  yearNumber
) => async (dispatch) => {
  axios
    .get(API_URL + "work-packages-status", {
      headers: authHeader(),
      params: { weekNumber, yearNumber },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_LEAD_ENGINEER_BOARD_GRAPH_DETAILS,
        payload: [data.onTime, data.stopped, data.delayed],
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

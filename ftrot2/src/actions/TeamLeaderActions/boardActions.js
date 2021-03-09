import axios from "axios";
import authHeader from "../../services/auth-header";
import {
  GET_TEAM_LEADER_BOARD_INFO,
  GET_TEAM_LEADER_BOARD_WORKPACKAGES,
  GET_TEAM_LEADER_BOARD_GRAPH_DETAILS,
  CLEAR_MESSAGE,
  SET_MESSAGE,
} from "../types";
const API_URL = "http://localhost:8080/api/v1/team-leader/board/";

export const getTeamLeaderBoardInfo = () => async (dispatch) => {
  axios
    .get(API_URL + "user-info", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_TEAM_LEADER_BOARD_INFO,
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

export const getTeamLeaderWorkpackages = () => async (dispatch) => {
  axios
    .get(API_URL + "work-packages", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_TEAM_LEADER_BOARD_WORKPACKAGES,
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

export const getTeamLeaderAssignedHours = (weekNumber, yearNumber) => async (
  dispatch
) => {
  axios
    .get(API_URL + "assigned-work-hours", {
      headers: authHeader(),
      params: { weekNumber, yearNumber },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_TEAM_LEADER_BOARD_GRAPH_DETAILS,
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

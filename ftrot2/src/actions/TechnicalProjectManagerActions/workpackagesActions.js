import axios from "axios";
import authHeader from "../../services/auth-header";
import {
  CREATE_WORKPACKAGE,
  EDIT_WORKPACKAGE,
  DELETE_WORKPACKAGE,
  GET_WORKPACKAGES,
  GET_LEAD_ENGINEERS,
  CLEAR_MESSAGE,
  SET_MESSAGE,
} from "../types";

const API_URL = "http://localhost:8080/api/v1/technical-project-manager/";

export const getWorkPackages = () => async (dispatch) => {
  axios
    .get(API_URL + "work-packages", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_WORKPACKAGES,
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

export const createWorkpackage = (workpackage) => async (dispatch) => {
  axios
    .post(API_URL + "work-packages", workpackage, { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: CREATE_WORKPACKAGE,
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

export const editWorkpackage = (id, workpackage) => async (dispatch) => {
  axios
    .put(API_URL + "work-packages/" + id, workpackage, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: EDIT_WORKPACKAGE,
        payload: {
          id,
          workpackage,
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

export const deleteWorkpackage = (id) => async (dispatch) => {
  axios
    .delete(API_URL + "work-packages/" + id, {
      headers: authHeader(),
    })
    .then(
      dispatch({
        type: DELETE_WORKPACKAGE,
        payload: id,
      })
    );
};

export const getLeadEngineers = () => async (dispatch) => {
  axios
    .get(API_URL + "work-packages/lead-engineers", {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_LEAD_ENGINEERS,
        payload: data,
      });
    });
};

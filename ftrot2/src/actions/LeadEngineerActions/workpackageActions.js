import axios from "axios";
import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  GET_WORKPACKAGES_FOR_TEAM_LEADER,
  CLEAR_MESSAGE,
  GET_WORKPACKAGES,
  SET_MESSAGE,
} from "../types";
import authHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/v1/lead-engineer/";

export const getWorkPackagesForTeamLeader = () => async (dispatch) => {
  axios
    .get(API_URL + "work-packages", { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: GET_WORKPACKAGES_FOR_TEAM_LEADER,
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
  //setTimeout(() => {}, 2000);
  dispatch({
    type: ADD_TASK,
    payload: {
      workpackageId,
      task,
    },
  });
};

export const deleteTaskAction = (workpackageId, taskId) => async (dispatch) => {
  axios
    .delete(API_URL + "work-packages/" + workpackageId + "/tasks/" + taskId, {
      headers: authHeader(),
    })
    .then(
      dispatch({
        type: DELETE_TASK,
        payload: {
          workpackageId,
          taskId,
        },
      })
    );
};

export const editTaskAction = (workpackageId, taskId, editedTask) => async (
  dispatch
) => {
  //setTimeout(() => {}, 2000);
  dispatch({
    type: EDIT_TASK,
    payload: {
      workpackageId,
      taskId,
      editedTask,
    },
  });
};

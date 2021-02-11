import axios from "axios";
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../types";

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
  //setTimeout(() => {}, 2000);
  dispatch({
    type: DELETE_TASK,
    payload: {
      workpackageId,
      taskId,
    },
  });
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

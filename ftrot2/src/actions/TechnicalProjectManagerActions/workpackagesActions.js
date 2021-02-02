import axios from "axios";
import {
  CREATE_WORKPACKAGE,
  EDIT_WORKPACKAGE,
  DELETE_WORKPACKAGE,
} from "../types";

export const createWorkpackage = (workpackage) => async (dispatch) => {
  dispatch({
    type: CREATE_WORKPACKAGE,
    payload: { workpackage },
  });
};

export const editWorkpackage = (id, workpackage) => async (dispatch) => {
  //setTimeout(() => {}, 2000);
  dispatch({
    type: EDIT_WORKPACKAGE,
    payload: {
      id,
      workpackage,
    },
  });
};

export const deleteWorkpackage = (id) => async (dispatch) => {
  //setTimeout(() => {}, 2000);
  dispatch({
    type: DELETE_WORKPACKAGE,
    payload: {
      id,
    },
  });
};

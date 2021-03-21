import axios from "axios";
import authHeader from "../../services/auth-header";
import { UPLOAD_PICTURE, SET_MESSAGE, CLEAR_MESSAGE } from "../types";
const API_URL = "http://localhost:8080/api/v1/account";

export const uploadPicture = (image) => async (dispatch) => {
  const formData = new FormData();
  formData.append("image", image);

  axios
    .post(API_URL + "/image", formData, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: UPLOAD_PICTURE,
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

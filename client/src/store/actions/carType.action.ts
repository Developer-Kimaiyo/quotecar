import {
  CAR_MAKE_REQUEST,
  CAR_MAKE_SUCCESS,
  CAR_MAKE_FAIL,
  CAR_MODEL_REQUEST,
  CAR_MODEL_SUCCESS,
  CAR_MODEL_FAIL,
} from "../types";
import Axios from "axios";
export const carMakeAction = () => async (dispatch) => {
  dispatch({
    type: CAR_MAKE_REQUEST,
  });
  try {
    const { data } = await Axios.get("http://127.0.0.1:5000/api");
    dispatch({ type: CAR_MAKE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAR_MAKE_FAIL, payload: error.message });
  }
};

export const carModelAction = (make) => async (dispatch) => {
  dispatch({
    type: CAR_MODEL_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `http://127.0.0.1:5000/api/model?category=${make}`
    );
    dispatch({ type: CAR_MODEL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAR_MODEL_FAIL, payload: error.message });
  }
};

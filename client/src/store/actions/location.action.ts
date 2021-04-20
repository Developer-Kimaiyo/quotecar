import {
  DROPOFF_LOCATION_REQUEST,
  DROPOFF_LOCATION_SUCCESS,
  DROPOFF_LOCATION_FAIL,
  PICKUP_LOCATION_REQUEST,
  PICKUP_LOCATION_SUCCESS,
  PICKUP_LOCATION_FAIL,
  CAR_LOCATION_REQUEST,
  CAR_LOCATION_SUCCESS,
  CAR_LOCATION_FAIL,
} from "../types";
import Axios from "axios";
export const getLocationAction = () => async (dispatch) => {
  dispatch({
    type: CAR_LOCATION_REQUEST,
  });
  try {
    const { data } = await Axios.get("http://127.0.0.1:5000/location");
    dispatch({ type: CAR_LOCATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAR_LOCATION_FAIL, payload: error.message });
  }
};
export const getPickUpAction = (suburb) => async (dispatch) => {
  dispatch({
    type: PICKUP_LOCATION_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `http://127.0.0.1:5000/location/pickUp?category=${suburb}`
    );
    dispatch({ type: PICKUP_LOCATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PICKUP_LOCATION_FAIL, payload: error.message });
  }
};
export const getDropOffAction = (dropOff) => async (dispatch) => {
  dispatch({
    type: DROPOFF_LOCATION_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `http://127.0.0.1:5000/location/dropOff?category=${dropOff}`
    );
    dispatch({ type: DROPOFF_LOCATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DROPOFF_LOCATION_FAIL, payload: error.message });
  }
};

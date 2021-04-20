import {
  VEHICLEINFOR_SAVE_FAIL,
  VEHICLEINFOR_SAVE_REQUEST,
  VEHICLEINFOR_SAVE_SUCCESS,
} from "../types";
import Axios from "axios";

export const createVehicleInfor = (reference, color, reg, goods) => async (
  dispatch
) => {
  dispatch({
    type: VEHICLEINFOR_SAVE_REQUEST,
    payload: {
      reference,
      color,
      reg,
      goods,
    },
  });
  try {
    const { data } = await Axios.post("http://127.0.0.1:5000/vehicleInfo", {
      reference,
      color,
      reg,
      goods,
    });
    dispatch({ type: VEHICLEINFOR_SAVE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: VEHICLEINFOR_SAVE_FAIL, error: message });
  }
};

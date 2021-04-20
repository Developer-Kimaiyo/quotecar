import {
  ADDRESS_SAVE_FAIL,
  ADDRESS_SAVE_REQUEST,
  ADDRESS_SAVE_SUCCESS,
} from "../types";
import Axios from "axios";

export const createAddresss = (
  reference,
  pickUpFname,
  pickUpLname,
  pickUpMobile,
  pickUpInstructions,
  pickUpAddress,
  pickUpCode,
  datePickup,
  dropOffFname,
  dropOffLname,
  dropOffMobile,
  DropOffInstructions,
  dateDropOff,
  dropOffAddress,
  dropOffCode
) => async (dispatch) => {
  dispatch({
    type: ADDRESS_SAVE_REQUEST,
    payload: {
      reference,
      pickUpFname,
      pickUpLname,
      pickUpMobile,
      pickUpInstructions,
      pickUpAddress,
      pickUpCode,
      datePickup,
      dropOffFname,
      dropOffLname,
      dropOffMobile,
      DropOffInstructions,
      dateDropOff,
      dropOffAddress,
      dropOffCode,
    },
  });
  try {
    const { data } = await Axios.post("http://127.0.0.1:5000/address", {
      reference,
      pickUpFname,
      pickUpLname,
      pickUpMobile,
      pickUpInstructions,
      pickUpAddress,
      pickUpCode,
      datePickup,
      dropOffFname,
      dropOffLname,
      dropOffMobile,
      DropOffInstructions,
      dateDropOff,
      dropOffAddress,
      dropOffCode,
    });
    dispatch({ type: ADDRESS_SAVE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ADDRESS_SAVE_FAIL, error: message });
  }
};

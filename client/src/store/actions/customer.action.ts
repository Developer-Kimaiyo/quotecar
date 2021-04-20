import {
  CUSTOMER_SAVE_FAIL,
  CUSTOMER_SAVE_REQUEST,
  CUSTOMER_SAVE_SUCCESS,
} from "../types";
import Axios from "axios";

export const createCustomer = (
  reference,
  fname,
  lname,
  Useremail,
  postCode,
  bAdress1,
  bAdress2,
  bname,
  suburb,
  state,
  credit,
  price,
  type
) => async (dispatch) => {
  dispatch({
    type: CUSTOMER_SAVE_REQUEST,
    payload: {
      reference,
      fname,
      lname,
      Useremail,
      postCode,
      bAdress1,
      bAdress2,
      bname,
      suburb,
      state,
      credit,
      price,
      type,
    },
  });
  try {
    const { data } = await Axios.post("http://127.0.0.1:5000/customer", {
      reference,
      fname,
      lname,
      Useremail,
      postCode,
      bAdress1,
      bAdress2,
      bname,
      suburb,
      state,
      credit,
      price,
      type,
    });
    dispatch({ type: CUSTOMER_SAVE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CUSTOMER_SAVE_FAIL, error: message });
  }
};

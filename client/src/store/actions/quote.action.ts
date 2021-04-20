import {
  CAR_QUOTE_REQUEST,
  CAR_QUOTE_SUCCESS,
  CAR_QUOTE_FAIL,
  QUOTE_DETAILS_FAIL,
  QUOTE_DETAILS_REQUEST,
  QUOTE_DETAILS_SUCCESS,
} from "../types";
import Axios from "axios";

export const createQuote = (
  reference,
  carMake,
  carModel,
  pickUp,
  dropOff,
  name,
  email,
  phone
) => async (dispatch) => {
  dispatch({
    type: CAR_QUOTE_REQUEST,
    payload: {
      reference,
      carMake,
      carModel,
      pickUp,
      dropOff,
      name,
      email,
      phone,
    },
  });
  try {
    const { data } = await Axios.post("http://127.0.0.1:5000/quote", {
      reference,
      carMake,
      carModel,
      pickUp,
      dropOff,
      name,
      email,
      phone,
    });
    dispatch({ type: CAR_QUOTE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CAR_QUOTE_FAIL, error: message });
  }
};

export const detailsQuote = (quoteId) => async (dispatch) => {
  dispatch({ type: QUOTE_DETAILS_REQUEST, payload: quoteId });
  try {
    const { data } = await Axios.get(
      `http://127.0.0.1:5000/quote/find/?category=${quoteId}`
    );
    dispatch({ type: QUOTE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: QUOTE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

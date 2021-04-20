import {
  CAR_QUOTE_REQUEST,
  CAR_QUOTE_SUCCESS,
  CAR_QUOTE_FAIL,
  QUOTE_DETAILS_FAIL,
  QUOTE_DETAILS_REQUEST,
  QUOTE_DETAILS_SUCCESS,
} from "../types";
import { Quote } from "../../interfaces";

interface State {
  quote: Quote[];
  error: any;
  loading: boolean;
}

const initialState: State = {
  quote: [],
  error: "",
  loading: true,
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAR_QUOTE_REQUEST:
      return { loading: true };
    case CAR_QUOTE_SUCCESS:
      return {
        loading: false,
        quote: action.payload,
      };
    case CAR_QUOTE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const quoteDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case QUOTE_DETAILS_REQUEST:
      return { loading: true };
    case QUOTE_DETAILS_SUCCESS:
      return { loading: false, quoteDetail: action.payload };
    case QUOTE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

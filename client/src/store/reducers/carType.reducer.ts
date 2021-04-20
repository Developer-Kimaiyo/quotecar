import {
  CAR_MAKE_REQUEST,
  CAR_MAKE_SUCCESS,
  CAR_MAKE_FAIL,
  CAR_MODEL_REQUEST,
  CAR_MODEL_SUCCESS,
  CAR_MODEL_FAIL,
} from "../types";
import { Vehicle } from "../../interfaces";

interface State {
  makes: Vehicle[];
  error: any;
  loading: boolean;
  models: Vehicle[];
  errors: any;
  loadings: boolean;
}

const initialState: State = {
  makes: [],
  error: "",
  loading: true,
  models: [],
  errors: "",
  loadings: true,
};

export const carMakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAR_MAKE_REQUEST:
      return { load: true };
    case CAR_MAKE_SUCCESS:
      return {
        load: false,
        makes: action.payload,
      };
    case CAR_MAKE_FAIL:
      return { load: false, error: action.payload };
    default:
      return state;
  }
};
export const carModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAR_MODEL_REQUEST:
      return { loadings: true };
    case CAR_MODEL_SUCCESS:
      return {
        loadings: false,
        models: action.payload,
      };
    case CAR_MODEL_FAIL:
      return { loadings: false, errors: action.payload };
    default:
      return state;
  }
};

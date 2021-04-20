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
import { Location } from "../../interfaces";

interface State {
  locations: Location[];
  locError: any;
  locLoading: boolean;
  log: Location[];
  logError: any;
  logLoading: boolean;
  lat: Location[];
  latError: any;
  latLoading: boolean;
}

const initialState: State = {
  locations: [],
  locError: "",
  locLoading: true,
  log: [],
  logError: "",
  logLoading: true,
  lat: [],
  latError: "",
  latLoading: true,
};

export const getLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAR_LOCATION_REQUEST:
      return { locLoading: true };
    case CAR_LOCATION_SUCCESS:
      return {
        locLoading: false,
        locations: action.payload,
      };
    case CAR_LOCATION_FAIL:
      return { locLoading: false, locError: action.payload };
    default:
      return state;
  }
};

export const getDropOffReducer = (state = { dropOffLoading: true }, action) => {
  switch (action.type) {
    case DROPOFF_LOCATION_REQUEST:
      return { dropOffLoading: true };
    case DROPOFF_LOCATION_SUCCESS:
      return {
        dropOffLoading: false,
        dropOffData: action.payload,
      };
    case DROPOFF_LOCATION_FAIL:
      return { dropOffLoading: false, dropOffError: action.payload };
    default:
      return state;
  }
};
export const getPickUpReducer = (state = { pickUpLoading: true }, action) => {
  switch (action.type) {
    case PICKUP_LOCATION_REQUEST:
      return { pickUpLoading: true };
    case PICKUP_LOCATION_SUCCESS:
      return {
        pickUpLoading: false,
        pickUpData: action.payload,
      };
    case PICKUP_LOCATION_FAIL:
      return { pickUpLoading: false, pickUpError: action.payload };
    default:
      return state;
  }
};

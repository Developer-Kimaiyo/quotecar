import {
  VEHICLEINFOR_SAVE_FAIL,
  VEHICLEINFOR_SAVE_REQUEST,
  VEHICLEINFOR_SAVE_SUCCESS,
} from "../types";

export const vehicleInforReducer = (
  state = { vehicleInforLoading: true, vehicleInfor: [] },
  action
) => {
  switch (action.type) {
    case VEHICLEINFOR_SAVE_SUCCESS:
      return { vehicleInforLoading: true };
    case VEHICLEINFOR_SAVE_REQUEST:
      return {
        vehicleInforLoading: false,
        vehicleInfor: action.payload,
      };
    case VEHICLEINFOR_SAVE_FAIL:
      return { vehicleInforLoading: false, vehicleInforError: action.payload };
    default:
      return state;
  }
};

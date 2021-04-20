import {
  ADDRESS_SAVE_FAIL,
  ADDRESS_SAVE_REQUEST,
  ADDRESS_SAVE_SUCCESS,
} from "../types";

export const addressReducer = (
  state = { addressLoading: true, address: [] },
  action
) => {
  switch (action.type) {
    case ADDRESS_SAVE_REQUEST:
      return { addressLoading: true };
    case ADDRESS_SAVE_SUCCESS:
      return {
        addressLoading: false,
        address: action.payload,
      };
    case ADDRESS_SAVE_FAIL:
      return { addressLoading: false, addressError: action.payload };
    default:
      return state;
  }
};

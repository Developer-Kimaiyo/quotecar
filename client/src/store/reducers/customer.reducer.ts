import {
  CUSTOMER_SAVE_FAIL,
  CUSTOMER_SAVE_REQUEST,
  CUSTOMER_SAVE_SUCCESS,
} from "../types";

export const customerReducer = (
  state = { customerLoading: true, customer: [] },
  action
) => {
  switch (action.type) {
    case CUSTOMER_SAVE_SUCCESS:
      return { customerLoading: true };
    case CUSTOMER_SAVE_REQUEST:
      return {
        customerLoading: false,
        customer: action.payload,
      };
    case CUSTOMER_SAVE_FAIL:
      return { customerLoading: false, customerError: action.payload };
    default:
      return state;
  }
};

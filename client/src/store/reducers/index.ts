import { combineReducers } from "redux";
import { carMakeReducer, carModelReducer } from "./carType.reducer";

import {
  getDropOffReducer,
  getPickUpReducer,
  getLocationReducer,
} from "./location.reducer";
import { quoteReducer, quoteDetailsReducer } from "./quote.reducer";
import { addressReducer } from "./address.reducer";
import { customerReducer } from "./customer.reducer";
import { vehicleInforReducer } from "./vehicleInfor.reducer";

export default combineReducers({
  make: carMakeReducer,
  model: carModelReducer,
  location: getLocationReducer,
  dropOffReducer: getDropOffReducer,
  pickUpReducer: getPickUpReducer,
  quote: quoteReducer,
  quoteDetails: quoteDetailsReducer,
  addressData: addressReducer,
  vehicleInfor: vehicleInforReducer,
  customer: customerReducer,
});

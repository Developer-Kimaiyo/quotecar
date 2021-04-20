import mongoose from "mongoose";
const addressSchema = new mongoose.Schema(
  {
    reference: String,
    pickUpFname: String,
    pickUpLname: String,
    pickUpMobile: String,
    pickUpInstructions: String,
    pickUpAddress: String,
    pickUpCode: String,
    datePickup: String,
    dropOffFname: String,
    dropOffLname: String,
    dropOffMobile: String,
    DropOffInstructions: String,
    dateDropOff: String,
    dropOffAddress: String,
    dropOffCode: String,
  },
  {
    timestamps: true,
  }
);
const Address = mongoose.model("address", addressSchema);

export default Address;

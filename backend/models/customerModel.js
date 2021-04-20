import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    reference: String,
    fname: String,
    lname: String,
    Useremail: String,
    postCode: String,
    bAdress1: String,
    bAdress2: String,
    bname: String,
    suburb: String,
    state: String,
    credit: Boolean,
    price: String,
    type: String,
  },
  {
    timestamps: true,
  }
);
const Customer = mongoose.model("customer", CustomerSchema);

export default Customer;

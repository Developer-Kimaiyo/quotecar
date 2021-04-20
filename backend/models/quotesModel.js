import mongoose from "mongoose";

const quotesSchema = new mongoose.Schema(
  {
    reference: String,
    carMake: String,
    carModel: String,
    pickUp: String,
    dropOff: String,
    name: String,
    email: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);
const Quotes = mongoose.model("quotes", quotesSchema);
export default Quotes;

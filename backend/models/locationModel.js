import mongoose from "mongoose";
const locationSchema = new mongoose.Schema({
  postcode: String,
  suburb: String,
  state: String,
  dc: String,
  type: String,
  lat: String,
  lon: String,
});

const Location = mongoose.model("location", locationSchema);

export default Location;

import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    model_make_id: String,
    model_name: String,
  },
  {
    timestamps: true,
  }
);
const vehicle = mongoose.model("vehicles", vehicleSchema);
export default vehicle;

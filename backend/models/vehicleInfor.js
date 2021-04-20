import mongoose from "mongoose";

const vehicleInfoSchema = new mongoose.Schema(
  {
    reference: String,
    color: String,
    reg: String,
    goods: Boolean,
  },
  {
    timestamps: true,
  }
);
const VehicleInfo = mongoose.model("vehicleInfo", vehicleInfoSchema);
export default VehicleInfo;

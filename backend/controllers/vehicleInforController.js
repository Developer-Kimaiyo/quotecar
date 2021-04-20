import expressAsyncHandler from "express-async-handler";
import VehicleInfo from "../models/vehicleInfor.js";

export const vehicleInfoSave = expressAsyncHandler(async (req, res) => {
  const data = req.body;
  const vehicleInfo = new VehicleInfo({
    reference: data.reference,
    color: data.color,
    reg: data.reg,
    goods: data.goods,
  });
  await vehicleInfo.save();
});
export const vehicleInfoGet = expressAsyncHandler(async (req, res) => {
  try {
    const category = req.query.category || "";
    const query = { reference: category };
    const vehicleInfo = await VehicleInfo.findOne(query);
    res.send(vehicleInfo);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});


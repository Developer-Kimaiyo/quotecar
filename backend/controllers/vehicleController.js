import expressAsyncHandler from "express-async-handler";
import Vehicle from "../models/vehicleModel.js";

export const makeGet = expressAsyncHandler(async (req, res) => {
  try {
    const vehicle = await Vehicle.find({}).distinct("model_make_id");
    res.send(vehicle);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

export const modelGet = expressAsyncHandler(async (req, res) => {
  const category = req.query.category || "";
  const query = { model_make_id: category };
  try {
    const vehicle = await Vehicle.find(query).distinct("model_name");
    res.send(vehicle);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

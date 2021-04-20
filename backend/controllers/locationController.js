import expressAsyncHandler from "express-async-handler";
import Location from "../models/locationModel.js";

export const findAll = expressAsyncHandler(async (req, res) => {
  try {
    const location = await Location.find({}).distinct("suburb");
   
    res.send(location);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

export const findPickUp = expressAsyncHandler(async (req, res) => {
  const category = req.query.category || "";
  const query = { suburb: category };
  console.log(query);

  try {
    const location = await Location.findOne(query);
    res.send(location);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});
export const findDropOff = expressAsyncHandler(async (req, res) => {
  const category = req.query.category || "";
  const query = { suburb: category };

  try {
    const location = await Location.findOne(query)
    res.send(location);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

export const findDC = expressAsyncHandler(async (req, res) => {
  try {
    const location = await Location.find({}).distinct("dc");
    res.send(location);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

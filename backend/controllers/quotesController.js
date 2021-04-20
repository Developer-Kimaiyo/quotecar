import expressAsyncHandler from "express-async-handler";
import Quotes from "../models/quotesModel.js";

export const quoteSave = expressAsyncHandler(async (req, res) => {
  const data = req.body;
  const quotes = new Quotes({
    reference: data.reference,
    carMake: data.carMake,
    carModel: data.carModel,
    pickUp: data.pickUp,
    dropOff: data.dropOff,
    name: data.name,
    email: data.email,
    phone: data.phone,
  });
  await quotes.save();
});
export const quoteGet = expressAsyncHandler(async (req, res) => {
  try {
    const category = req.query.category || "";
    const query = { reference: category };
    const quotes = await Quotes.findOne(query);
    res.send(quotes);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

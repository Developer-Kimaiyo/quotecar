import expressAsyncHandler from "express-async-handler";
import Address from "../models/addressModel.js";

export const addressSave = expressAsyncHandler(async (req, res) => {
  const address = new Address({
    reference: data.reference,
    pickUpFname: data.pickUpFname,
    pickUpLname: data.pickUpLname,
    pickUpMobile: data.pickUpMobile,
    pickUpInstructions: data.pickUpInstructions,
    pickUpAddress: data.pickUpAddress,
    pickUpCode: data.pickUpCode,
    datePickup: data.datePickup,
    dropOffFname: data.dropOffFname,
    dropOffLname: data.dropOffLname,
    dropOffMobile: data.dropOffMobile,
    DropOffInstructions: data.DropOffInstructions,
    dateDropOff: data.dateDropOff,
    dropOffAddress: data.dropOffAddress,
    dropOffCode: data.dropOffCode,
  });
  await address.save();
});

export const addressGet = expressAsyncHandler(async (req, res) => {
  try {
    const category = req.query.category || "";
    const query = { reference: category };
    const address = await Address.findOne(query);
    res.send(address);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

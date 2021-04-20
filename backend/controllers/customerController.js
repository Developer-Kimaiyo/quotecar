import expressAsyncHandler from "express-async-handler";
import Customer from "../models/customerModel.js";

export const customerSave = expressAsyncHandler(async (req, res) => {
  const data = req.body;
  const customer = new Customer({
    reference: data.reference,
    fname: data.fname,
    lname: data.lname,
    Useremail: data.Useremail,
    postCode: data.postCode,
    bAdress1: data.bAdress1,
    bAdress2: data.bAdress2,
    bname: data.bname,
    suburb: data.suburb,
    state: data.state,
    credit: data.credit,
    price: data.price,
    type: data.type,
  });
  await customer.save();
});
export const customerGet = expressAsyncHandler(async (req, res) => {
  try {
    const category = req.query.category || "";
    const query = { reference: category };
    const customer = await Customer.findOne(query);
    res.send(customer);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

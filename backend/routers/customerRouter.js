import express from "express";
import {
  customerSave,
  customerGet,
} from "../controllers/customerController.js";
const customerRouter = express.Router();

customerRouter.post("/", customerSave);
customerRouter.get("/find", customerGet);

export default customerRouter;

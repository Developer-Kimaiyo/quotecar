import express from "express";
import {
  findAll,
  findPickUp,
  findDropOff,
  findDC,
} from "../controllers/locationController.js";
const locationRouter = express.Router();

locationRouter.get("/", findAll);
locationRouter.get("/pickUp", findPickUp);
locationRouter.get("/dropOff", findDropOff);
locationRouter.get("/dc", findDC);

export default locationRouter;

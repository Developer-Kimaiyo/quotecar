import express from "express";

import {
  vehicleInfoSave,
  vehicleInfoGet,
} from "../controllers/vehicleInforController.js";

const vehicleInfoRouter = express.Router();

vehicleInfoRouter.post("/", vehicleInfoSave);
vehicleInfoRouter.get("/find", vehicleInfoGet);

export default vehicleInfoRouter;

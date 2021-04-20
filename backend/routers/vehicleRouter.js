import express from "express";
import { makeGet, modelGet } from "../controllers/vehicleController.js";

const vehicleRouter = express.Router();

vehicleRouter.get("/", makeGet);
vehicleRouter.get("/model", modelGet);

export default vehicleRouter;

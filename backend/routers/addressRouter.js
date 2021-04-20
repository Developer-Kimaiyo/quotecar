import express from "express";
import { addressSave, addressGet } from "../controllers/address.controller.js";

const addressRouter = express.Router();

addressRouter.post("/", addressSave);
addressRouter.get("/ref", addressGet);

export default addressRouter;

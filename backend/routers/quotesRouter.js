import express from "express";
import { quoteSave, quoteGet } from "../controllers/quotesController.js";
const quoteRouter = express.Router();

quoteRouter.post("/", quoteSave);
quoteRouter.get("/find", quoteGet);
export default quoteRouter;

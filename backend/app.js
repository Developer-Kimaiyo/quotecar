import express from "express";
import dotenv from "dotenv";
import path from "path";
import locationRouter from "./routers/locationRouter.js";
import vehicleInfoRouter from "./routers/vehicleInforRouter.js";
import vehicleRouter from "./routers/vehicleRouter.js";
import addressRouter from "./routers/addressRouter.js";
import quoteRouter from "./routers/quotesRouter.js";
import customerRouter from "./routers/customerRouter.js";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
// import csvtojson from "csvtojson";
// import Vehicle from "./models/vehicleModel.js";

const inputFile = "./backend/data/vehicl.csv";

dotenv.config({ path: "backend/config/config.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

app.use("/address", addressRouter);
app.use("/customer", customerRouter);
app.use("/location", locationRouter);
app.use("/quote", quoteRouter);
app.use("/vehicleInfo", vehicleInfoRouter);
app.use("/api", vehicleRouter);

if (process.env.NODE_ENV || "PRODUCTION" === "PRODUCTION") {
  const __dirname = path.resolve();
  app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "/client/build/index.html"))
  );
}

//  const upload = async () => {
//   csvtojson()
//     .fromFile(inputFile)
//     .then((csvData) => {
//       Vehicle.insertMany(JSON.parse(JSON.stringify(csvData)), function (err) {
//         if (err) {
//           console.error(`Failed to insert documents:`);
//         } else {
//           console.log(`Successfully inserted items!`);
//         }
//       });
//     });
// };
//  upload();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

export default app;

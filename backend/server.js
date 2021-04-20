import dotenv from "dotenv";
import app from "./app.js";
import connectDatabase from "./config/database.js";

dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

app.listen(process.env.PORT || 8080, "127.0.0.1", () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${
      process.env.NODE_ENV || "PRODUCTION"
    } mode.`
  );
});

//134.209.72.232

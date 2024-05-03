// require("dotenv").config({ path: "./env" });

import connectDB from "./db/index.js ";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR : ", error);
      throw error;
    });
    app.listen(4001, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGOODB CONECCTION FAILED FROM src/index.js", err);
  });

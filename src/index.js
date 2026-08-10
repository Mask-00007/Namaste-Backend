// require('dotenv').config({path: './env'})
import dotenv from "dotenv"; // We have to config this to use it....

// import mongoose from " mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

// Config.... dotenv
dotenv.config({
  path: "./env",
});

connectDB();

//* First approcah to connect database with server
/* import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("APP IS NOT ABLE TO CONNECT: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
})(); */

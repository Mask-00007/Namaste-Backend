import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// * Mostly the data came from URL will be passed through "req.params"
// * Another, we will be using "req.body "
// * Most of the time, we use "app.use" for the middlewares...
// * Let's talk about their configuration (middlewares). Most of the time, they will be configured after the app will be ready....

// * Configuration for "cors"
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// * Configuration for middlewares (for JSON)
app.use(express.json({ limit: "16kb" }));

// * Configuration for "URL"
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// * Configuration for "static" (for PDF, FOLDER, IMAGES)
app.use(express.static("public"));

// * Configuration for "cookies"
app.use(cookieParser());

export { app };

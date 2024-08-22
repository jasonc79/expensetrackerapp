import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from 'express';
import authRouter from "./routers/auth.js";
import indexRouter from "./routers/index.js";
dotenv.config()

import mongoose from "mongoose";
// connecting to the database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection is established successfully! 🎉");
  });

const port = process.env.PORT || 8080;
const app = express();

// Adding middleware to parse the cookies and more
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

// Adding the routes
app.use("/", indexRouter);
app.use("/auth", authRouter);
// Starting the server
app.listen(port, function() {
    console.log(`Listening on port ${port}`)
});
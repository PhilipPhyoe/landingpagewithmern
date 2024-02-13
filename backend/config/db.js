//import mongoose from "mongoose";
import mysql from "mysql";
import dotenv from "dotenv";
/*
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/hectorMyanmar");
    console.log("Successfully connected to mongo DB");
  } catch (error) {
    console.error(`Error message: ${error.message}`);
    process.exit(1);
  }
};
*/
dotenv.config();

const connectDB = async () => {
  try {
    mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    console.log("Successfully connected to hector.");
  } catch (error) {
    console.error(`Error message: ${error}`);
    process.exit(1);
  }
};

export default connectDB;

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

const connectDB = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "hector",
});

export default connectDB;

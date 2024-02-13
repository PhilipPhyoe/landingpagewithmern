//import visitor from "../Models/visitorModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import connectDB from "../config/db.js";
import mysql from "mysql";

const getVisitors = asyncHandler(async (req, res) => {
  let sql = "SELECT * FROM inquiries";
  connectDB.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

const createVisitor = asyncHandler(async (req, res) => {
  const values = [req.body.name, req.body.email, req.body.phone]; //javascript array
  let sql = "INSERT INTO inquiries (name, email, phone) VALUES (?)";
  connectDB.query(sql, [values], (error, result) => {
    if (error) throw error;
    res.status(201).json(result);
  });

  /*
  const newVisitor = new visitor({
    name: name,
    email: email,
    phone: phone,
  });
  try {
    await newVisitor.save();
    res.status(201).json({
      _id: newVisitor._id,
      name: newVisitor.name,
      email: newVisitor.email,
      phone: newVisitor.phone,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
  */
});
export { getVisitors, createVisitor };

import visitor from "../Models/visitorModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createVisitor = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    throw new Error("Please input all fields.");
  }

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
export { createVisitor };

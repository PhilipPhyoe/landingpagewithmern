import mongoose, { Schema } from "mongoose";

const visitorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const visitor = mongoose.model("visitor", visitorSchema);
export default visitor;

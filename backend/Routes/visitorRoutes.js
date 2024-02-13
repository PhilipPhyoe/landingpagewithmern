import express from "express";
import {
  createVisitor,
  getVisitors,
} from "../Controllers/visitorController.js";

const router = express.Router();
router.route("/").get(getVisitors);
router.route("/").post(createVisitor);

export default router;

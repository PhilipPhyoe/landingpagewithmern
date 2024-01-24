import express from "express";
import { createVisitor } from "../Controllers/visitorController.js";

const router = express.Router();

router.route("/").post(createVisitor);

export default router;

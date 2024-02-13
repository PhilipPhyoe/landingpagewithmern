import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import visitorRoutes from "./Routes/visitorRoutes.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => res.send("Up and running!"));
app.use("/api/visitors", visitorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

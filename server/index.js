import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./db.js";
import authRouter from "./user.route.js";
config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRouter);

connectDB();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is listening at port ${port}`));

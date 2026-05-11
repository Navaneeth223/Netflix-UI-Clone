import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); // allows us to parse req.body
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
	console.log(`Server started at http://localhost:${PORT}`);
	connectDB();
});

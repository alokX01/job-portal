import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../backend/utils/db.js";

import userRoute from "../backend/routes/user.route.js";
import companyRoute from "../backend/routes/company.route.js";
import jobRoute from "../backend/routes/job.route.js";
import applicationRoute from "../backend/routes/application.route.js";

dotenv.config();

const app = express();

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

/* ---------------- ROOT ROUTE (REQUIRED) ---------------- */
app.get("/", (req, res) => {
  res.send("Backend running");
});

/* ---------------- ROUTES ---------------- */
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

/* ---------------- DB ---------------- */
connectDB();

/* ---------------- EXPORT FOR VERCEL ---------------- */
export default app;

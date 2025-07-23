import express from "express";
const router = express.Router();
import studentRouter from "./bookRoutes.js";
import authRoutes from "./authRoutes.js";

router.use("/students", studentRouter);
router.use("/auth", authRoutes);
export default router;

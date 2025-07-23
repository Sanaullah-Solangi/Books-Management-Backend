import express from "express";
const router = express.Router();
import authRoutes from "./authRoutes.js";
import booksRoutes from "./booksRoutes.js";
import userRoutes from "./userRoutes.js";

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/books", booksRoutes);
export default router;

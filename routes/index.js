import express from "express";
const router = express.Router();
import authRoutes from "./authRoutes.js";
import booksRouter from "./booksRoutes.js";

router.use("/auth", authRoutes);
router.use("/books", booksRouter);
export default router;

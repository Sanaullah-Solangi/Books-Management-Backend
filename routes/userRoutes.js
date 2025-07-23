import express from "express";
import { getMyInfoController } from "../controllers/userControlles.js";
import validateToken from "../middlewares/validateToken.js";
const router = express.Router();

router.get("/my-info", validateToken, getMyInfoController);

export default router;

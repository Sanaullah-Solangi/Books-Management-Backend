import express from "express";

import {
  loginValidations,
  registerValidations,
} from "../validations/authValidations.js";

import validateRequest from "../middlewares/validateRequest.js";

import {
  loginUserController,
  registerUserController,
} from "../controllers/authController.js";

const router = express.Router();

router.post(
  "/register",
  registerValidations,
  validateRequest,
  registerUserController
);
router.post("/login", loginValidations, validateRequest, loginUserController);

export default router;

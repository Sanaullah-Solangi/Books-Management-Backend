import mongoose from "mongoose";
import { check } from "express-validator";
import { otpValidations } from "./passwordValidations.js";

const userIdValidations = [
  check("userId")
    .notEmpty()
    .withMessage("User Id is required")
    .trim()
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid User Id"),
];

// resend-otp
const resendOtpValidations = [
  ...userIdValidations,
  check("tokenType").notEmpty().withMessage("Token Type is required").trim(),
];

// verify-otp
const verifyOtpValidations = [...userIdValidations, ...otpValidations];

export { resendOtpValidations, verifyOtpValidations };

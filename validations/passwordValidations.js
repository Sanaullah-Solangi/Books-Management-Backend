import { check } from "express-validator";
import { passwordValidations } from "./index.js";

const otpValidations = [
  check("otp")
    .notEmpty()
    .isLength({ min: 6, max: 6 })
    .withMessage("OTP must be exactly 6 digits")
    .trim()
    .isNumeric()
    .withMessage("OTP must contain only numbers"),
];

const resetPasswordValidations = [...passwordValidations, ...otpValidations];

export { resetPasswordValidations, otpValidations };

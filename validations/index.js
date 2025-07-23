import { check } from "express-validator";

const emailValidations = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),
];

const passwordValidations = [
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isStrongPassword({ minLength: 3, maxLength: 8 })
    .withMessage(
      "Password must be 3 to 8 characters long and must be an strong password"
    ),
];
export { emailValidations, passwordValidations };

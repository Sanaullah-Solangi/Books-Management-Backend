import { check } from "express-validator";
import { emailValidations, passwordValidations } from "./index.js";
const authValidations = [...emailValidations, ...passwordValidations];

const registerValidations = [
  ...authValidations,
  check("username")
    .notEmpty()
    .withMessage("Username is required")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
];
const loginValidations = [...authValidations];

export { registerValidations, loginValidations };

import { check } from "express-validator";

const booksValidations = [
  check("title").notEmpty().withMessage("Book title is required").trim(),
  check("author").notEmpty().withMessage("Author name is required").trim(),
  check("description").notEmpty().withMessage("Description is required").trim(),
  check("genre").notEmpty().withMessage("genre is required").trim(),
  // check("createdBy").notEmpty().withMessage("Publisher Id is required").trim(),
];
export default booksValidations;

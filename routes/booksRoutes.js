import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import {
  addBookController,
  deleteBookController,
  getBookDetailController,
  getBooksController,
  updateBookController,
} from "../controllers/bookControllers.js";
import validateToken from "../middlewares/validateToken.js";
import booksValidations from "../validations/booksValidations.js";
const booksRouter = express.Router();

booksRouter.get("/", getBooksController);

booksRouter.get("/:id", getBookDetailController);

booksRouter.post(
  "/",
  validateToken,
  booksValidations,
  validateRequest,
  addBookController
);

booksRouter.put("/:id", validateToken, updateBookController);

booksRouter.delete("/:id", validateToken, deleteBookController);

export default booksRouter;

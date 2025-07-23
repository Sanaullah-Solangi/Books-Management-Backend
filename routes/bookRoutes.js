import express from "express";
import { getBooksController } from "../controllers/bookControllers.js";
const booksRouter = express.Router();

booksRouter.get("/", getBooksController);

export default booksRouter;

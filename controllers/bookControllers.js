import sendResponse from "../helpers/sendResponse.js";
import {
  addBookService,
  deleteBookService,
  getBooksService,
  updateBookService,
} from "../services/booksServices.js";

// get all books
const getBooksController = async (req, res, next) => {
  try {
    const result = await getBooksService(req);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("Error In Register Controller =>", error);
    next(error);
  }
};

// add book
const addBookController = async (req, res, next) => {
  try {
    const result = await addBookService(req);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("Error In Register Controller =>", error);
    next(error);
  }
};

// update book
const updateBookController = async (req, res, next) => {
  try {
    const result = await updateBookService(req);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("Error In Register Controller =>", error);
    next(error);
  }
};

// delete book
const deleteBookController = async (req, res, next) => {
  try {
    const result = await deleteBookService(req);
    if (result) sendResponse(res, result);
  } catch (error) {
    console.log("Error In Register Controller =>", error);
    next(error);
  }
};
export {
  getBooksController,
  addBookController,
  updateBookController,
  deleteBookController,
};

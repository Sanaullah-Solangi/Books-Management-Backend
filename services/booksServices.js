import {
  addBook,
  deleteBook,
  getAllBooks,
  getBookDetail,
  updateBook,
} from "../db/books.js";
import serviceResponse from "../helpers/serviceResponse.js";

const getBooksService = async (payload) => {
  try {
    const books = await getAllBooks();
    return serviceResponse(200, false, books, "Books fetched successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getBookDetailService = async (payload) => {
  try {
    const { id } = payload.params;
    const books = await getBookDetail(id);
    return serviceResponse(
      200,
      false,
      books,
      "Book's Details fetched successfully"
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const addBookService = async (req) => {
  try {
    const payload = req.body;
    const book = await addBook({ ...payload, createdBy: req.user._id });
    return serviceResponse(200, false, book, "Book added successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateBookService = async (req) => {
  try {
    const bookId = req.params.id;
    console.log("book id=>", bookId);
    const updateData = req.body;
    const book = await updateBook(bookId, updateData);
    return serviceResponse(200, false, book, "Book updated successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteBookService = async (req) => {
  try {
    const bookId = req.params.id;
    const book = await deleteBook(bookId);
    return serviceResponse(200, false, null, "Book deleted successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export {
  getBooksService,
  getBookDetailService,
  addBookService,
  updateBookService,
  deleteBookService,
};

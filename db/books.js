import BooksModel from "../models/bookModel.js";

const getAllBooks = async () => {
  return await BooksModel.find();
};

const getBookDetail = async (id) => {
  return await BooksModel.find({ _id: id });
};

const addBook = async (payload) => {
  return BooksModel.create({ ...payload }).then((book) =>
    book ? book.toObject() : null
  );
};

const updateBook = async (id, payload) => {
  return await BooksModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
};

const deleteBook = async (id) => {
  return await BooksModel.findOneAndDelete({ _id: id });
};
export { getAllBooks, getBookDetail, addBook, updateBook, deleteBook };

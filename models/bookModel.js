import mongoose from "mongoose";
const { Schema } = mongoose;
const booksSchema = Schema({
  title: { type: String },
  author: { type: String },
  description: { type: String },
  genre: { type: String },
  publishedYear: { type: Date },
  createdBy: {
    type: mongoose.Schema.type.ObjectId,
    required: true,
    ref: "Users",
  },
});

return mongoose.models.Books || mongoose.model("Books", booksSchema);

export default getStudentModel;

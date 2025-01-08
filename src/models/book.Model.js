import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  copies: {
    type: Number,
    default: 1,
  },
});

const BookModel =  mongoose.model("Book", bookSchema);
export default BookModel;

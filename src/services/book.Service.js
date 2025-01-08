import BookModel from "../models/book.Model.js";
import Book from "../models/book.Model.js";

class BookService {
  constructor() {
    this.bookModel = BookModel;
  }
  async getAllBooks() {
    return await Book.find().populate("author");
  }

  async addBook(bookData) {
    const book = new Book(bookData);
    await book.save();
    return await book.populate("author");
  }
  async getBookStats() {
    return await Book.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
          totalCopies: { $sum: "$copies" },
          availableCopies: { $sum: "$copies" },
        },
      },
    ]);
  }
}
export default BookService;

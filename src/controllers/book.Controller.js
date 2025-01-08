import BookService from "../services/book.Service.js";

class BookController {
  constructor() {
    this.bookService = new BookService();
  }
  getBooks = async (req, res) => {
    try {
      const books = await this.bookService.getAllBooks();
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  addBook = async (req, res) => {
    try {
      const book = await this.bookService.addBook(req.body);
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  getBookStats = async (req, res) => {
    try {
      const stats = await this.bookService.getBookStats();
      res.json(stats);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
export default BookController;

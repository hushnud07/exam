import BookService from "../services/book.Service.js";

class BookController {
  constructor() {
    this.bookService = new BookService();
  }
  getBooks = async (req, res) => {
    try {
      const books = await this.bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  addBook = async (req, res) => {
    try {
      const book = await this.bookService.addBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getBookStats = async (req, res) => {
    try {
      const stats = await this.bookService.getBookStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
export default BookController;

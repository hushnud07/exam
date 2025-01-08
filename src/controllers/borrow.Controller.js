import BorrowService from "../services/borrow.Service.js";

class BorrowController {
  constructor() {
    this.borrowService = new BorrowService();
  }
  borrowBook = async (req, res) => {
    try {
      const result = await this.borrowService.borrowBook(
        req.user.userId,
        req.params.bookId
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  getMyBooks = async (req, res) => {
    try {
      const books = await this.borrowService.getMyBooks(req.user.userId);
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  getBorrowStats = async (req, res) => {
    try {
      const stats = await this.borrowService.getBorrowStats();
      res.json(stats);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
export default BorrowController;

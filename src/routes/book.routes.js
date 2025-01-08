import { Router } from "express";
import BookController from "../controllers/book.Controller.js";
import { auth, adminAuth } from "../middleware/auth.js";
const bookRouter = Router();
const bookControl = new BookController();
bookRouter.get("/books", auth, (req, res) => {
  bookControl.getBooks(req, res);
});
bookRouter.post("/books", auth, adminAuth, (req, res) => {
  bookControl.addBook(req, res);
});
bookRouter.get("/books/stats", auth, (req, res) => {
  bookControl.getBookStats(req, res);
});
export default bookRouter;

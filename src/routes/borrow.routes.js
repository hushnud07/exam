import { Router } from "express";
import BorrowController from "../controllers/borrow.Controller.js";
import { auth, adminAuth } from "../middleware/auth.js";
const borrowRouter = Router();
const borrowControl = new BorrowController();
borrowRouter.post("/borrow/:bookId", auth, (req, res) => {
  borrowControl.borrowBook(req, res);
});
borrowRouter.get("/my-books", auth, (req, res) => {
  borrowControl.getMyBooks(req, res);
});
borrowRouter.get("/borrows/stats", auth, adminAuth, (req, res) => {
  borrowControl.getBorrowStats(req, res);
});
export default borrowRouter;

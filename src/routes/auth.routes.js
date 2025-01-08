import { Router } from "express";
import AuthController from "../controllers/auth.Controller.js";

const authRouter = Router();
const authControl = new AuthController();
authRouter.post("/auth/register", (req, res) => {
  authControl.register(req, res);
});
authRouter.post("/auth/login", (req, res) => {
  authControl.login(req, res);
});
export default authRouter;

import authRouter from "./auth.routes.js";
import bookRouter from "./book.routes.js";
import borrowRouter from "./borrow.routes.js";

const Routes = () => {
  return [authRouter, bookRouter, borrowRouter];
};
export default Routes;

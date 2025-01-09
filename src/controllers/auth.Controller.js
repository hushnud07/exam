import AuthService from "../services/auth.Service.js";
class AuthController {
  constructor() {
    this.authService = new AuthService();
  }
  register = async (req, res) => {
    try {
      const result = await this.authService.register(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  login = async (req, res) => {
    try {
      const result = await this.authService.login(req.body);
      res.json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  };
}
export default AuthController;

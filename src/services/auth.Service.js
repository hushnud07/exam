import User from "../models/user.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthModel from "../models/author.Model.js";
import UserModel from "../models/user.Model.js";

class AuthService {
  constructor() {
    this.authModel = AuthModel;
  }
  async register(userData) {
    const { username, password, role } = userData;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      role,
    });
    await user.save();

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET_KEY
    );

    return { token, user };
  }

  async login(credentials) {
    const { username, password } = credentials;

    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET_KEY
    );

    return { token, user };
  }
}
export default AuthService;

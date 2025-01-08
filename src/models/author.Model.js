import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const AuthModel =  mongoose.model("Author", authorSchema);
export default AuthModel;

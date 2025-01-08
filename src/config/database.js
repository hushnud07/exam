import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGO_URL;
    await mongoose.connect(dbUrl, {
      dbName: "exam",
    });
  } catch (error) {
    console.error(error.message);
  }
};
export default connectDB;

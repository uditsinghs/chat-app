import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.MONGOURI || "mongodb://localhost:27017/chat-app";

export const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

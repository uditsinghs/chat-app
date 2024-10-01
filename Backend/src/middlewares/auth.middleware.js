import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization"); // Use 'Authorization' instead of 'token'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const jwtToken = token.replace("Bearer ", "").trim(); // Extract the token by removing 'Bearer '

    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    req.user = user; // Attach user information to the request

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

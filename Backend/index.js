import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./src/db/db.js";
import userRoute from "./src/routes/user.route.js"
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// middleware--userCreated
app.use('/api/v1/users',userRoute)

connectDB();
app.listen(PORT, () => {
  console.log(`The server is running on ${PORT} Port`);
});
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
  
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (!user.isModified("password")) return;

//   const salt = await bcryptjs.genSalt(10);
//   user.password = await bcryptjs.hash(user.password, salt);
//   next();
// });

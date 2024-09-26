import { User } from "../models/user.model.js";
import { hashPassword, comparePassword } from "../Helper/auth.utils.js";
import jwt from "jsonwebtoken";
const validateFields = (fields, res) => {
  for (const field in fields) {
    if (!fields[field]) {
      return res.status(400).json({
        message: `${field} is required`,
      });
    }
  }
};

// Signup Controller
export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validate fields
    const validationError = validateFields(
      { name, email, password, confirmPassword },
      res
    );
    if (validationError) return validationError;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate fields
    const validationError = validateFields({ email, password }, res);
    if (validationError) return validationError;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    // Compare password
    const isMatch = await comparePassword(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
      }
    );

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Logout Controller
// export const logoutUser = async (req, res) => {
//   try {
//     res.clearCookie("jwt");
//     res.status(200).json({
//       success: true,
//       message: "User logged out successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

// get all users

export const getAllusers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
      success: false,
    });
  }
};

// get Login user
export const loginUser = async (req, res) => {
  try {
    const id = req.user._id;
    const userData = await User.findById(id).select("-password");
    res.status(200).json({
      userData,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error while get LoginUser data",
    });
  }
};

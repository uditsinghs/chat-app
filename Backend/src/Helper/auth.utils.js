import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
// hashPssword
export const hashPassword = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  return hashedPassword;
};

// compare password

export const comparePassword = async ( password,hashedPassword,) => {
  return await bcryptjs.compare(password,hashedPassword);
};

// generateToken
export const generateTokenAndsaveCookie = async (userId, res) => {
  const token = await jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "10d",
    }
  );
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};

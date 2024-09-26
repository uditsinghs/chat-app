import bcryptjs from "bcryptjs";

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


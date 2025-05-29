import jwt from "jsonwebtoken";

export const generateToken = (userId: string): string => {
  const secret = process.env.JWT_SECRET || "default_secret";
  return jwt.sign({ userId }, secret, { expiresIn: "1d" });
};

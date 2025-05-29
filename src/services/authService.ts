import bcrypt from "bcrypt";
import User from "../models/user.model";
import { generateToken } from "../utils/generateToken";

export const registerUser = async (username: string, password: string): Promise<{ message: string }> => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw { status: 403, message: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();

  return { message: "Signed up" };
};

export const authenticateUser = async (username: string, password: string): Promise<{ token: string }> => {
  const user = await User.findOne({ username });
  if (!user) {
    throw { status: 403, message: "Wrong username or password" };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw { status: 403, message: "Wrong username or password" };
  }

  const token = generateToken(user._id.toString());
  return { token };
};

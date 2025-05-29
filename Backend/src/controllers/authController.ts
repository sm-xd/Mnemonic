import { Request, Response } from "express";
import { registerUser, authenticateUser } from "../services/authService";

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const result = await registerUser(username, password);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message || "Server error" });
  }
};

export const signin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const result = await authenticateUser(username, password);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message || "Internal server error" });
  }
};

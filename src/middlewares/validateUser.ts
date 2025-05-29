import { Request, Response, NextFunction } from "express";

export const validateSignupInput = (req: Request, res: Response, next: NextFunction): void => {
  const { username, password } = req.body;
  const usernameRegex = /^[a-zA-Z0-9]{3,10}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,20}$/;

if (!usernameRegex.test(username)) {
    res.status(411).json({ 
        message: "Invalid username format", 
        details: "Username must be 3-10 characters long and contain only letters and numbers."
    });
    return;
}

if (!passwordRegex.test(password)) {
    res.status(411).json({ 
        message: "Invalid password format", 
        details: "Password must be 6-20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, #, &)."
    });
    return;
}

  next();
};
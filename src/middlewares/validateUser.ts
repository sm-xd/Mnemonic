import { Request, Response, NextFunction } from "express";

export const validateSignupInput = (req: Request, res: Response, next: NextFunction): void => {
  const { username, password } = req.body;
  const usernameRegex = /^[a-zA-Z0-9]{3,10}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,20}$/;

  if (!usernameRegex.test(username) || !passwordRegex.test(password)) {
      res.status(411).json({ message: "Invalid input format" });
      return; 
  }

  next();
};

// export const validateSignupInput = (req: Request, res: Response, next: NextFunction): void => {
//   // Validation logic...
//   if (validationFailed) {
//     res.status(400).json({ error: 'Validation error' });
//     return;
//   }
//   next();
// };
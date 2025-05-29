import express from "express";
import { signup, signin } from "../controllers/authController";
import { validateSignupInput } from "../middlewares/validateUser";

const router = express.Router();

router.post("/signup", validateSignupInput, signup);
router.post("/signin", signin);

export default router;

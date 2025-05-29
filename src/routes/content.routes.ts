import express from "express";
import { handleAddContent, handleDeleteContent, handleGetContent } from "../controllers/contentController";
import { verifyToken } from "../middlewares/verifyToken";

const router = express.Router();

router.post("/", verifyToken, handleAddContent);
router.get("/", verifyToken, handleGetContent);
router.delete("/", verifyToken, handleDeleteContent);

export default router;
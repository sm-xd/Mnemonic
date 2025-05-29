import express from "express";
import { verifyToken } from "../middlewares/verifyToken";
import { createShareLink, getSharedBrain } from "../controllers/brainController";

const router = express.Router();

router.post("/share", verifyToken, createShareLink);
router.get("/:shareLink", getSharedBrain);

export default router;

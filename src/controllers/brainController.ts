import { Request, Response } from "express";
import { enableSharing, disableSharing, getSharedBrainData } from "../services/brainService";

export const createShareLink = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const { share } = req.body;
    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    if (typeof share !== "boolean") {
      res.status(400).json({ message: "'share' must be a boolean." });
      return;
    }
    if (share) {
      const hash = await enableSharing(userId);
      res.status(200).json({ link: hash });
    } else {
      await disableSharing(userId);
      res.status(200).json({ message: "Sharing disabled." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSharedBrain = async (req: Request, res: Response) => {
  const { shareLink } = req.params;

  try {
    const result = await getSharedBrainData(shareLink);
    if (!result){
        res.status(404).json({ message: "Invalid or expired share link." });
        return;
    }
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching shared brain:", error);
    res.status(500).json({ message: "Server error." });
  }
};

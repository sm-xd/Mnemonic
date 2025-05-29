import { Request, Response } from "express";
import { ContentSchema, DeleteContentSchema } from "../validators/content.schema";
import { addContent, deleteContent, getAllContent } from "../services/contentService";

export const handleAddContent = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    if(!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    const parsed = ContentSchema.parse(req.body);
    const content = await addContent(userId, parsed);
    res.status(200).json({ content });
  } catch (err: any) {
    if (err.name === "ZodError") {
        res.status(411).json({ error: err.errors });
        return; 
    }
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const handleGetContent = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    if(!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    const content = await getAllContent(userId);
    res.status(200).json({ content });
  } catch (err) {
    res.status(500).json({ error: "Error fetching content" });
  }
};

export const handleDeleteContent = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    if(!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    const { contentId } = DeleteContentSchema.parse(req.body);
    const result = await deleteContent(userId, contentId);
    if (!result) {
      res.status(403).json({ error: "Not authorized to delete this content" });
      return;
    }
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err: any) {
    if (err.name === "ZodError") {
      res.status(411).json({ error: err.errors });
      return;
    }
    console.error(err);
    res.status(500).json({ error: "Error deleting content" });
  }
};

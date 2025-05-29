import Content from "../models/content.model";
import { ContentInput } from "../validators/content.schema";
import { findOrCreateTags } from "./tagService";

export const addContent = async (userId: string, data: ContentInput) => {
  const { type, link, title, tags } = data;
  const tagDocs = await findOrCreateTags(tags);
  const content = new Content({
    userId,
    type,
    link,
    title,
    tags: tagDocs.map((tag) => tag._id),
  });

  await content.save();
  return content;
};

export const getAllContent = async (userId: string) => {
  return await Content.find({ userId }).populate("tags");
};

export const deleteContent = async (userId: string, contentId: string) => {
  const content = await Content.findById(contentId);
  if (!content || content.userId.toString() !== userId) return null;
  await Content.findByIdAndDelete(contentId);
  return true;
};

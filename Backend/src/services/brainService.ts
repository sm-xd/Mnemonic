import Link from "../models/link.model";
import User from "../models/user.model";
import Content from "../models/content.model";
import { generateShareLink } from "../utils/generateShareLink";

export const enableSharing = async (userId: string): Promise<string> => {
  let linkDoc = await Link.findOne({ userId });

  if (!linkDoc) {
    const hash = generateShareLink();
    linkDoc = await Link.create({ userId, hash });
  }

  return linkDoc.hash;
};

export const disableSharing = async (userId: string): Promise<void> => {
  await Link.deleteOne({ userId });
};

export const getSharedBrainData = async (hash: string) => {
  const linkDoc = await Link.findOne({ hash }).populate("userId");

  if (!linkDoc || !linkDoc.userId) return null;

  const content = await Content.find({ userId: linkDoc.userId._id }).populate(
    "tags",
    "name"
  );
  
  return {
    username: (linkDoc.userId as typeof User.prototype).username,
    content: content.map((item) => ({
      id: item._id,
      type: item.type,
      link: item.link,
      title: item.title,
      tags: item.tags.map((tag: any) => tag.name),
    })),
  };
};

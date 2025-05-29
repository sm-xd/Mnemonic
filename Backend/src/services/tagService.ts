import Tag from "../models/tag.model";

export const findOrCreateTags = async (tags: string[]) => {
  const tagDocs = await Promise.all(
    tags.map(async (name) => {
      let tag = await Tag.findOne({ name });
      if (!tag) {
        console.log(`Creating new tag: ${name}`);
        tag = new Tag({ name });
        await tag.save();
      }
      return tag;
    })
  );
  return tagDocs;
};

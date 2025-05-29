import { z } from "zod";

export const ContentSchema = z.object({
  type: z.enum(["document", "tweet", "youtube", "link"]),
  link: z.string().url({ message: "Invalid URL format" }),
  title: z.string().min(3).max(100),
  tags: z.array(z.string().min(1)).default([]) // simple string tags
});

export const DeleteContentSchema = z.object({
  contentId: z.string().min(1)
});

export type ContentInput = z.infer<typeof ContentSchema>;
export type DeleteContentInput = z.infer<typeof DeleteContentSchema>;

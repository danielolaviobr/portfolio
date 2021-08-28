import { Comment as PrismaComment } from "@prisma/client";

export type PostMeta = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
  category?: "draft" | "project" | "post";
  image?: string;
  alt?: string;
};

export type Post = {
  meta: PostMeta;
  code?: any;
};

export interface Comment extends PrismaComment {
  createdAt: string;
  children: Comment[];
}

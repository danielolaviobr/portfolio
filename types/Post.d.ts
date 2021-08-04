import { Comment as PrismaComment } from "@prisma/client";

export type PostMeta = {
  title: string;
  publishedAt: any;
  description: string;
  slug?: any;
  category?: "draft" | "project" | "post";
  image?: string;
  alt?: string;
  source?: string;
};

export type Post = {
  meta: PostMeta;
  code?: any;
  comments: string;
};

export interface Comment extends PrismaComment {
  createdAt: string;
  children: Comment[];
}

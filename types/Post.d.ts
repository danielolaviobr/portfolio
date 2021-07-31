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
};

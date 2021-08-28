import React from "react";
import { GetStaticProps } from "next";
import { getAllPostsMeta } from "utils/mdx";
import PostPreview from "components/PostPreview";
import { PostMeta } from "types/Post";
import { format } from "date-fns";

interface BlogProps {
  posts: PostMeta[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <div>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.publishedAt}
          description={post.description}
          image={{ path: post.image || "", alt: post.alt as string }}
          url={`/blog/${post.slug}`}
        />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPostsMeta("post");

  posts.forEach((post) => {
    post.publishedAt = format(new Date(post.publishedAt), "dd/MM/yyyy");
  });

  return {
    props: { posts },
  };
};

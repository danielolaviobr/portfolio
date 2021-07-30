import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import type { Post } from "types/Post";
import { getAllPostsMeta, getPostBySlug } from "utils/mdx";
import { format } from "date-fns";
import { getMDXComponent } from "mdx-bundler/client";
import { components } from "components/MdxComponents";

export default function PostPage({ meta, code }: Post) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div>
      <Component components={components as any} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const posts = getAllPostsMeta();
  const paths = posts.map((slug) => ({ params: { ...slug } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const post = await getPostBySlug(slug);

  post.meta.publishedAt = format(new Date(post.meta.publishedAt), "dd/MM/yyyy");

  // console.log(post);
  return {
    props: {
      meta: post.meta,
      code: post.code,
    },
  };
};

import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import type { Post } from "types/Post";
import { getAllPostsMeta, getPostBySlug } from "utils/mdx";
import { format } from "date-fns";
import { getMDXComponent } from "mdx-bundler/client";
import { components } from "components/MdxComponents";
import Image from "next/image";
import { useClipboard } from "@chakra-ui/hooks";
import { useToast } from "hooks/toast";
import slugify from "utils/slugfy";

export default function PostPage({ meta, code }: Post) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const { addToast } = useToast();
  const { onCopy } = useClipboard(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}blog/${meta.slug}/#${slugify(
      meta.title
    )}`
  );

  const handleCopy = () => {
    try {
      onCopy();
      addToast("Link Copied", "success");
    } catch (err) {
      addToast("Error when copying the link", "error");
    }
  };

  return (
    <div className="antialiased">
      <h1
        id={slugify(meta.title)}
        className="mt-4 mb-6 text-2xl font-semibold group">
        <button onClick={handleCopy} className="mr-2 -ml-6 focus:outline-none">
          <Image
            src="/hashtag.svg"
            width={17}
            height={18}
            alt={meta.title}
            className="opacity-0 group-hover:opacity-100"
          />
        </button>
        {meta.title}
      </h1>
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

  console.log(post.meta);
  return {
    props: {
      meta: post.meta,
      code: post.code,
    },
  };
};

import { GetStaticProps } from "next";
import React, { useRef, useState } from "react";
import type { Post, Comment as CommentData } from "types/Post";
import { getAllPostsMeta, getPostBySlug } from "utils/mdx";
import { format, parseISO } from "date-fns";
import { getMDXComponent } from "mdx-bundler/client";
import { components } from "components/MdxComponents";
import Image from "next/image";
import { useClipboard } from "@chakra-ui/hooks";
import { useToast } from "hooks/toast";
import slugify from "utils/slugfy";
import prisma from "utils/prisma";
import { commentsFetcher } from "utils/fetch";
import { QueryClient, useMutation, useQuery } from "react-query";
import { queryClient } from "utils/react-query";
import Comment from "components/Comment";
import commentParser, { addToComments } from "utils/commentParser";
import { NextSeo } from "next-seo";
import { dehydrate } from "react-query/hydration";
import mt from "date-fns/esm/locale/mt/index.js";

interface MutationProps {
  comment: string;
  parentId: string;
}

export default function PostPage({ meta, code }: Post) {
  const [selectedCommentId, setSelectedCommentId] = useState<string>();
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const { addToast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>();
  const { onCopy } = useClipboard(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}blog/${meta.slug}/#${slugify(
      meta.title
    )}`
  );
  const { data, isError, isLoading, error } = useQuery<
    Promise<CommentData | CommentData[]>,
    Error,
    CommentData[]
  >("comments", () => commentsFetcher({ slug: meta.slug, method: "GET" }), {
    cacheTime: 30000,
  });
  const { mutate } = useMutation(
    ({ comment, parentId }: MutationProps) =>
      commentsFetcher({
        slug: meta.slug,
        method: "POST",
        commentData: { comment, parentId },
      }),
    {
      mutationKey: "comments",
      retry: 2,
      onSuccess: (comment: CommentData) => {
        const updatedData = addToComments(data, comment);
        queryClient.setQueryData("comments", updatedData);
      },
    }
  );

  const handleCopy = () => {
    try {
      onCopy();
      addToast("Link Copied", "success");
    } catch (err) {
      addToast("Error when copying the link", "error");
    }
  };

  const handleSubmitComment = async (
    ref: React.MutableRefObject<HTMLTextAreaElement>,
    parentId = ""
  ) => {
    if (ref.current) {
      mutate({ comment: ref.current.value, parentId });
      ref.current.value = "";
      handleReply("");
    }
  };

  const handleReply = (commentId: string) => {
    if (commentId === selectedCommentId) {
      setSelectedCommentId("");
    } else {
      setSelectedCommentId(commentId);
    }
  };

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={`https://www.danielolavio.dev/blog/${meta.slug}`}
        openGraph={{
          title: meta.title,
          description: meta.description,
          url: "https://www.example.com/articles/article-title",
          type: "article",
          site_name: "Daniel Olavio",
          article: {
            publishedTime: meta.publishedAt,
            tags: [meta.category],
          },
          images: [
            {
              url: meta.image,
              width: 850,
              height: 650,
              alt: meta.title,
            },
            {
              url: meta.image,
              alt: meta.title,
            }
          ],
        }}
        twitter={{
          handle: "@danielolaviobr",
          cardType: 'summary_large_image'
        }}
      />
      <div className="px-4 mx-4 antialiased md:mx-0">
        <h1
          id={slugify(meta.title)}
          className="mt-4 mb-2 text-4xl font-bold group">
          <button
            onClick={handleCopy}
            className="mr-2 -ml-6 focus:outline-none">
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
        <div className="flex items-center">
          <Image
            src="/profile.jpg"
            width={32}
            height={32}
            alt="Daniel Olavio Ferreira"
            className="rounded-full"
            priority
          />
          <div className="flex ml-2 text-gray-600 text-md">
            Daniel Olavio Ferreira <div className="mx-2 text-gray-300">•</div>{" "}
            {meta.publishedAt}
          </div>
        </div>
        {meta.image && (
          <div className="mt-10 overflow-hidden rounded-2xl">
            <Image
              src={meta.image}
              width={1920}
              height={960}
              alt={meta.alt}
              className="object-cover"
            />
          </div>
        )}
        <Component components={components as any} />
        <div className="w-full h-px my-8 bg-black-DEAFAULT" />
        <section className="flex flex-col">
          <h1 className="mb-4 text-2xl font-semibold">Comments</h1>
          <textarea
            className="flex-1 p-2 border rounded resize-none bg-gray-50 "
            placeholder="Start typing"
            ref={textareaRef}
          />
          <button
            className="self-start mt-2 primary-button"
            onClick={() => handleSubmitComment(textareaRef)}>
            Send
          </button>
          <section className="flex flex-col mt-6">
            {data.map((comment) => (
              <div className="mt-6" key={comment.id}>
                <Comment
                  comment={comment}
                  handleSubmitComment={handleSubmitComment}
                  handleReply={handleReply}
                  selectedCommentId={selectedCommentId}
                  ref={textareaRef}
                />
              </div>
            ))}
          </section>
        </section>
      </div>
    </>
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

  post.meta.publishedAt = format(
    new Date(post.meta.publishedAt),
    "MMMM dd, yyyy"
  );

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("comments", async () => {
    const comments = await prisma.comment.findMany({
      where: { post: { slug } },
      select: {
        id: true,
        text: true,
        createdAt: true,
        parentId: true,
      },
    });

    const serializedComments = comments.map((comment) => ({
      ...comment,
      createdAt: format(comment.createdAt, "dd/MM/yyyy"),
    }));

    const parsedComments = commentParser(serializedComments as CommentData[]);

    return parsedComments;
  });

  return {
    props: {
      meta: post.meta,
      code: post.code,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
};

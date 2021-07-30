import About from "components/About";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import PostPreview from "components/PostPreview";
import nextPagination from "../public/blog.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel</title>
      </Head>
      <main className="flex-1 px-4">
        <About />
        <section onClick={() => {}}>
          <h2 className="mt-8 text-2xl font-semibold">
            <Link href="/blog">
              <a>Recent Posts </a>
            </Link>
          </h2>
          <PostPreview
            image={{ path: nextPagination, alt: "Next pagination" }}
          />
          <PostPreview
            image={{ path: nextPagination, alt: "Next pagination" }}
          />
          <PostPreview
            image={{ path: nextPagination, alt: "Next pagination" }}
          />
          <PostPreview
            image={{ path: nextPagination, alt: "Next pagination" }}
          />
          <PostPreview
            image={{ path: nextPagination, alt: "Next pagination" }}
          />
        </section>
      </main>
    </>
  );
}

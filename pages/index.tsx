import About from "components/About";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import PostPreview from "components/PostPreview";
import { format } from "date-fns";
import { GetServerSideProps, GetStaticProps } from "next";
import { getAllPostsMeta } from "utils/mdx";
import type { PostMeta } from "types/Post";
import Image from "next/image";
import { useQuery } from "react-query";
import { spotifyFetcher } from "utils/fetch";
import type { Song } from "types/Song";
import getToken from "utils/spotify";
import axios from "axios";
import SongCard from "components/SongCard";
import prisma from "utils/prisma";
import getSongs from "utils/getSongs";

interface HomeProps {
  posts: PostMeta[];
  songs: Song[];
}

export default function Home({ posts = [], songs = [] }: HomeProps) {
  return (
    <>
      <main className="flex-1 px-4">
        <About />
        <section onClick={() => {}}>
          <h2 className="mt-8 text-2xl font-semibold">
            <Link href="/blog">
              <a className="hover:underline">Recent Posts</a>
            </Link>
          </h2>
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
        </section>
        <section>
          <h2 className="mt-12 text-2xl font-semibold">
            Here is some great music
          </h2>
          <div className="flex flex-wrap items-center mt-6 md:justify-evenly lg:justify-between">
            {songs.map((song) => (
              <SongCard song={song} key={song.id} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getAllPostsMeta("post");

  posts.forEach((post) => {
    post.publishedAt = format(new Date(post.publishedAt), "MMMM dd, yyyy");
  });

  const songs = await getSongs();

  return {
    props: { posts, songs },
  };
};

// ! Generate the spotify on build time

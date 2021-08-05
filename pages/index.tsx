import About from "components/About";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import PostPreview from "components/PostPreview";
import { format } from "date-fns";
import { GetStaticProps } from "next";
import { getAllPostsMeta } from "utils/mdx";
import type { PostMeta } from "types/Post";
import Image from "next/image";
import { useQuery } from "react-query";
import { spotifyFetcher } from "utils/fetch";
import type { Song } from "types/Song";
import getToken from "utils/spotify";
import axios from "axios";

interface HomeProps {
  posts: PostMeta[];
}

export default function Home({ posts = [] }: HomeProps) {
  const {
    data = [],
    isError,
    isLoading,
    error,
  } = useQuery<Promise<Song[]>, Error, Song[]>(
    "songs",
    () => spotifyFetcher({ limit: 4, type: "tracks" }),
    {
      cacheTime: 30000,
    }
  );
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
              <a>Recent Posts</a>
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
            {data.map((song) => (
              <Link href={song.link} key={song.id}>
                <a className="flex flex-1 min-w-full md:flex-none md:min-w-0 md:w-64">
                  <div className="flex items-center justify-start flex-1 min-w-full p-2 mb-6 border border-gray-100 rounded-md md:w-64 hover:border-gray-300 xl:mb-0">
                    <Link href={song.album.link}>
                      <a>
                        <Image
                          src={song.album.cover}
                          width={64}
                          height={64}
                          alt={song.album.name}
                          className="rounded-full"
                          layout="fixed"
                        />
                      </a>
                    </Link>
                    <div className="ml-4">
                      <Link href={song.link}>
                        <a>
                          <h3 className="font-semibold text-green-500 hover:underline line-clamp-1">
                            {song.name}
                          </h3>
                        </a>
                      </Link>
                      <Link href={song.artist.link}>
                        <a>
                          <span className="font-medium text-gray-200 hover:underline line-clamp-1">
                            {song.artist.name}
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </a>
              </Link>
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
    post.publishedAt = format(new Date(post.publishedAt), "dd/MM/yyyy");
  });

  const token = await getToken();

  const limit = "4";
  const type = "tracks";

  const { data } = await axios(
    `https://api.spotify.com/v1/me/top/${type}?limit=${limit}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const songs = data.items.map((item) => ({
    artist: {
      name: item.artists[0].name,
      link: item.artists[0].external_urls.spotify,
    },
    album: {
      name: item.album.name,
      link: item.album.external_urls.spotify,
      cover: item.album.images[2].url,
    },
    name: item.name,
    link: item.external_urls.spotify,
    id: item.id,
  }));

  return {
    props: { posts, songs },
  };
};

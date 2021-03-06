import axios from "axios";
import publicIp from "public-ip";
import { FetcherCommets, FetcherSpotify, PostFetcher } from "types/Fetcher";
import type { Comment } from "types/Post";

export async function commentsFetcher({
  method,
  commentData,
  slug,
}: FetcherCommets): Promise<Comment[] | Comment> {
  const ip = await publicIp.v4();
  const { data } = await axios(
    `${
      process.env.VERCEL_URL || process.env.NEXT_PUBLIC_LOCAL_URL
    }/api/comment`,
    {
      headers: { "x-forwarded-for": ip },
      params: slug ? { slug: slug } : {},
      method: method,
      data: commentData,
    }
  );
  return data;
}

export async function spotifyFetcher({
  limit = 4,
  type = "tracks",
}: FetcherSpotify) {
  const { data } = await axios(
    `${process.env.VERCEL_URL || process.env.NEXT_PUBLIC_LOCAL_URL}/api/songs`,
    {
      method: "GET",
      params: {
        limit,
        type,
      },
    }
  );
  return data;
}

export async function postsFetcher({ limit = 4, type = "post" }: PostFetcher) {
  const { data } = await axios(
    `${process.env.VERCEL_URL || process.env.NEXT_PUBLIC_LOCAL_URL}/api/posts`,
    {
      method: "GET",
      params: {
        limit,
        type,
      },
    }
  );
  return data;
}

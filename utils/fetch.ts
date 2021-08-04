import axios from "axios";
import publicIp from "public-ip";
import { FetcherCommets } from "types/Fetcher";
import type { Comment } from "types/Post";

export async function commentsFetcher({
  method,
  commentData,
  slug,
}: FetcherCommets): Promise<Comment[] | Comment> {
  const ip = await publicIp.v4();
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/comment`,
    {
      headers: { "x-forwarded-for": ip },
      params: slug ? { slug: slug } : {},
      method: method,
      data: commentData,
    }
  );
  return data;
}

import { AxiosRequestConfig } from "axios";

type FetcherCommets = {
  method: AxiosRequestConfig["method"];
  commentData?: { comment: string; parentId: string };
  slug?: string;
};

type FetcherSpotify = {
  limit?: number;
  type?: "tracks" | "artists";
};

type PostFetcher = {
  limit?: number;
  type?: "post" | "project";
};

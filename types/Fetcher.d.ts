import { AxiosRequestConfig } from "axios";

type FetcherCommets = {
  method: AxiosRequestConfig["method"];
  commentData?: { comment: string; parentId: string };
  slug?: string;
};
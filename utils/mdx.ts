import path from "path";
import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import slugPlugin from "remark-slug";
import gfmPlugin from "remark-gfm";
import type { PostMeta } from "types/Post";
import glob from "glob";
import matter from "gray-matter";
import prisma from "./prisma";

const ROOT_PATH = process.cwd();
export const MDX_PATH = path.join(ROOT_PATH, "mdx");

export const getAllPostsMeta = (category?: PostMeta["category"]) => {
  const PATH = path.join(MDX_PATH);

  const paths = glob.sync(`${PATH}/**/*.mdx`);

  const parsedPaths = paths.map((filePath): PostMeta => {
    const source = fs.readFileSync(path.join(filePath), "utf8");

    const slug = path.basename(filePath).replace(".mdx", "");
    const data = matter(source).data as Omit<PostMeta, "slug">;

    return {
      ...data,
      slug,
    };
  });

  const filteredPaths = parsedPaths.filter((post) => {
    if (!category) return true;

    return post.category === category;
  });

  const sortedPaths = filteredPaths.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return sortedPaths;
};

export const getPostBySlug = async (slug: string) => {
  const filePath = path.join(MDX_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: MDX_PATH,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        slugPlugin,
        gfmPlugin,
      ];
      return options;
    },
  });

  const meta = {
    ...frontmatter,
    slug,
  } as PostMeta;

  return {
    meta,
    code,
  };
};

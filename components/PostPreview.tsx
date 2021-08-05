import Link from "next/link";
import Image from "next/image";
import React from "react";

interface PostProps {
  title?: string;
  description?: string;
  date?: string;
  image?: { path: string | StaticImageData; alt: string };
  url?: string;
}

export default function PostPreview({
  title = "Lorem Ipsum dolor sit ame",
  date = "01/01/2021",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac fringilla magna. Etiam ultricies sem velit, eu sodales eros faucibus nec. Donec volutpat orci augue. Nunc dui dolor, pharetra ut volutpat id, consequat feugiat massa.",
  image = { path: "/blog.webp", alt: "Next.js pagination" },
  url = "#",
}: PostProps) {
  return (
    <div className="flex flex-col my-8 lg:flex-row">
      <Link href={url} aria-label={title}>
        <a>
          <Image
            src={image.path}
            width={480}
            height={280}
            objectFit="cover"
            alt={image.alt}
            className="rounded-md"
            placeholder={typeof image.path === "string" ? "empty" : "blur"}
          />
        </a>
      </Link>
      <div className="flex flex-col max-w-sm mt-8 lg:ml-12 lg:mt-0">
        <h3 className="mb-2 text-lg font-medium hover:underline">
          <Link href={url} aria-label={title}>
            <a>{title}</a>
          </Link>
        </h3>
        <span className="mb-4 text-sm text-gray-400">{date}</span>
        <p className="line-clamp-4">{description}</p>
        <span className="mt-auto mb-4 font-medium hover:underline">
          <Link href={url} aria-label={title}>
            <a>Read more</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

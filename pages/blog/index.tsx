import React from "react";
import { GetStaticProps } from "next";
import { getAllPostsMeta } from "utils/mdx";
import PostPreview from "components/PostPreview";
import { PostMeta } from "types/Post";
import { format } from "date-fns";

interface BlogProps {
	posts: PostMeta[];
}

export default function Blog({ posts }: BlogProps) {
	return (
		<div>
			{posts.map((post) => (
				<PostPreview
					key={post.slug}
					title={post.title}
					date={post.publishedAt}
					description={post.description}
					image={{ path: post.image || "", alt: post.alt as string }}
				/>
			))}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const posts = getAllPostsMeta("post");
	posts.forEach((post) => {
		post.publishedAt = format(post.publishedAt, "dd/MM/yyyy");
	});
	//console.log(posts);

	return {
		props: { posts },
	};
};

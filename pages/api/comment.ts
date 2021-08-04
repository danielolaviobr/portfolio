import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "utils/prisma";
import { hash } from "bcryptjs";
import { format } from "date-fns";
import commentParser from "utils/commentParser";
import type { Comment } from "types/Post";

interface CommentNextApiRequest extends NextApiRequest {
  body: { comment: string; parentId?: string };
  headers: { "x-forwarded-for": string };
  query: { slug: string };
}

export default async (req: CommentNextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const ip = req.headers["x-forwarded-for"];
    const { slug } = req.query;
    const { comment, parentId } = req.body;

    const salt = 8;
    const hashedIp = await hash(ip, salt);

    let newComment = await prisma.comment.create({
      data: {
        text: comment,
        author: {
          connectOrCreate: {
            create: { ip: hashedIp },
            where: { ip: hashedIp },
          },
        },
        post: {
          connectOrCreate: {
            create: { slug },
            where: { slug },
          },
        },
      },
      select: {
        id: true,
        text: true,
        createdAt: true,
        parentId: true,
      },
    });

    if (parentId) {
      newComment = await prisma.comment.update({
        where: { id: newComment.id },
        data: {
          parent: { connect: { id: parentId } },
        },
      });
    }

    const serializedComment = {
      ...newComment,
      createdAt: format(newComment.createdAt, "dd/MM/yyyy"),
    };

    return res.status(200).json(serializedComment);
  } else if (req.method === "GET") {
    const { slug } = req.query;
    const comments = await prisma.comment.findMany({
      where: { post: { slug } },
      select: {
        id: true,
        text: true,
        createdAt: true,
        parentId: true,
      },
    });

    const serializedComments = comments.map((comment) => ({
      ...comment,
      createdAt: format(comment.createdAt, "dd/MM/yyyy"),
    }));

    const parsedComments = commentParser(serializedComments as Comment[]);

    res.status(200).json(parsedComments);
  }
  res.status(200).json({ name: "Wrong method" });
};

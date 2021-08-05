import type { Comment } from "types/Post";

const commentParser = (comments: Comment[]): Comment[] => {
  const commentMap = {};

  comments.forEach((comment) => {
    commentMap[comment.id] = comment;
    commentMap[comment.id].children = [];
  });

  comments.forEach((comment) => {
    if (comment.parentId !== null) {
      const parent = commentMap[comment.parentId];
      parent.children.push(comment);
    }
  });

  return comments.filter((comment) => comment.parentId === null);
};

export const addToComments = (
  comments: Comment[],
  comment: Comment
): Comment[] => {
  if (comment.parentId === null) {
    if (!comment.children) {
      comment.children = [];
    }
    comments.push(comment);
  } else {
    comments.forEach((c) => {
      if (c.id === comment.parentId) {
        c.children.push(comment);
      } else {
        addToComments(c.children, comment);
      }
    });
  }
  return comments;
};

export default commentParser;

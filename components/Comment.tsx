import React, { useRef } from "react";
import { FaReply } from "react-icons/fa";
import type { Comment as CommentData } from "types/Post";

interface CommentProps {
  selectedCommentId: string;
  comment: CommentData;
  className?: string;
  handleReply: (commentId: string) => void;
  handleSubmitComment: (
    ref: React.MutableRefObject<HTMLTextAreaElement>,
    commentId: string
  ) => void;
}

const Comment = React.forwardRef(
  (
    {
      comment,
      handleReply,
      handleSubmitComment,
      selectedCommentId,
      className,
    }: CommentProps,
    ref: React.MutableRefObject<HTMLTextAreaElement>
  ) => {
    const nestedComments = (comment.children || []).map((childComment) => (
      <Comment
        className="ml-4 min-w-min"
        comment={childComment}
        handleSubmitComment={handleSubmitComment}
        handleReply={handleReply}
        selectedCommentId={selectedCommentId}
        ref={ref}
      />
    ));

    return (
      <div
        key={comment.id}
        className={`flex flex-col pt-4 pl-2 border-l border-gray-300 ${className}`}>
        <p>{comment.text}</p>
        <div className="flex items-center mt-2 mb-4">
          <span className="mr-4 text-xs">{comment.createdAt}</span>
          <button
            className="flex items-center self-end justify-center px-2 py-1 text-sm font-semibold text-gray-600 rounded hover:bg-gray-100 bg-opacity-10"
            onClick={() => handleReply(comment.id)}>
            <FaReply className="mr-2" />
            Reply
          </button>
        </div>
        {selectedCommentId === comment.id && (
          <div className="flex flex-col mb-6">
            <textarea
              className="flex-1 p-2 border rounded resize-none bg-gray-50 "
              placeholder="Reply to this"
              ref={ref}
            />
            <button
              className="self-start mt-2 primary-button"
              onClick={() => handleSubmitComment(ref, comment.id)}>
              Send
            </button>
          </div>
        )}
        {nestedComments}
      </div>
    );
  }
);

export default Comment;

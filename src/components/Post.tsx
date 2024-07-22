import { useState } from "react";
import { PostData } from "../utils/types";
import CommentBubble from "../assets/images/chat-bubble.svg";
import HorizontalEllipsis from "../assets/images/ horizontal-ellipsis.svg";
import { formatTimeAgo } from "../utils/helpers";
import { Comments } from "./Comments";

export const Post = ({ data }: { data: PostData }) => {
  const {
    comments,
    commentsCount,
    content,
    dateAndTime,
    isEdited,
    moodIcon,
    name,
    profilePicture,
  } = data;

  const [areCommentsVisible, setAreCommentsVisible] = useState(false);
  const [visibleComments, setVisibleComments] = useState(3);

  const handleViewMore = () => {
    setVisibleComments((prevVisibleComments) =>
      Math.min(prevVisibleComments + 3, commentsCount ?? 0)
    );
  };

  // Function to toggle comments visibility
  const handleToggleComments = () => {
    setAreCommentsVisible(!areCommentsVisible);
  };

  // Function to format comments into a displayable list
  const displayComments = comments?.slice(0, visibleComments);

  return (
    <div className="bg-darkA border-2 rounded-lg py-6 px-5 border-gray mt-10">
      <div className="flex items-center mb-2 justify-between">
        <div className="flex items-center">
          <img
            src={profilePicture}
            alt={name}
            className="w-11 h-11 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="font-medium text-base text-lightGray">{name}</p>
            <p className="font-medium text-sm text-silver">
              {formatTimeAgo(dateAndTime)} {isEdited ? "• Edited" : ""}
            </p>
          </div>
        </div>
        <div className="cursor-pointer">
          <img src={HorizontalEllipsis} alt="options" className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-5 bg-darker p-4 rounded-lg flex items-center">
        <div className="bg-darkA h-12 w-12 rounded-full flex items-center justify-center shrink-0">
          {moodIcon}
        </div>
        <p className="text-silver font-normal text-base ml-4">{content}</p>
      </div>

      <div className="flex items-center text-gray-400 mt-3 cursor-pointer">
        <img src={CommentBubble} alt="comments" className="mr-2" />
        <p
          className="font-medium text-sm text-silver"
          onClick={handleToggleComments}
        >
          {commentsCount ?? 0} comments
        </p>
      </div>

      {areCommentsVisible && (
        <div className="mt-3">
          {displayComments?.map((comment) => (
            <Comments comment={comment} key={comment.id} />
          ))}

          {visibleComments < (commentsCount ?? 0) && (
            <button
              onClick={handleViewMore}
              className="text-blue-500 font-normal mt-2 underline text-sm"
            >
              View More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

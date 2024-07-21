import { PostData } from "../utils/types";
import CommentBubble from "../assets/images/chat-bubble.svg";
import HorizontalEllipsis from "../assets/images/ horizontal-ellipsis.svg";
import { formatTimeAgo } from "../utils/helpers";

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
  return (
    <div className="bg-darkA border-2 rounded-lg py-6 px-5 border-gray mt-10">
      <div className="flex items-center mb-2 justify-between">
        <div className="flex ">
          <img
            src={profilePicture}
            alt={name}
            className="w-11 h-11 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="font-medium text-base text-lightGray">{name}</p>
            <p className="font-medium text-sm text-silver">
              {formatTimeAgo(dateAndTime)}
            </p>
          </div>
        </div>
        <div className="cursor-pointer">
          <img src={HorizontalEllipsis} alt="comment icon" className="mr-2" />
        </div>
      </div>
      <div className="mt-5 bg-darker p-4 rounded-lg flex items-center">
        <div className="bg-darkA h-12 w-12 rounded-full flex items-center justify-center shrink-0">
          {moodIcon}
        </div>
        <p className="text-silver font-normal text-base ml-4">{content}</p>
      </div>

      <div className="flex items-center text-gray-400 mt-3 cursor-pointer">
        <img src={CommentBubble} alt="comment icon" className="mr-2" />
        <p className="font-medium text-sm text-silver">
          {commentsCount} comments
        </p>
      </div>
    </div>
  );
};

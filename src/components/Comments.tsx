import { formatTimeAgo } from "../utils/helpers";
import { CommentsData } from "../utils/types";

export const Comments = ({ comment }: { comment: CommentsData }) => {
  return (
    <div className="flex items-center mb-2 ">
      <img
        src={comment.profilePicture}
        alt={comment.name}
        className="w-8 h-8 rounded-full mr-2 object-cover"
      />
      <div className="flex-1">
        <p className="font-medium text-sm text-lightGray">{comment.name}</p>
        <p className="text-silver text-sm">{comment.comment}</p>
      </div>
      <p className="text-gray-500 text-xs ml-2">
        {formatTimeAgo(comment.dateAndTime)}
      </p>
    </div>
  );
};

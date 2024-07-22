export type CommentsData = {
  id: string;
  name: string;
  comment: string;
  profilePicture: string;
  dateAndTime: string;
};

export type PostData = {
  id: string;
  name: string;
  isEdited: boolean;
  profilePicture: string;
  dateAndTime: string;
  moodIcon: string;
  content: string;
  commentsCount: number;
  comments: Array<CommentsData>;
};

export type HomeData = {
  // Keeping this field optional for now, as this is not BE driven for the assignment
  userName?: string;
  dailyMessage: string;
  postData: PostData[];
};

export type SendPostData = {
  id: string;
  name: string;
  // Adding this so that on submitting post, picture is visible
  profilePicture: string;
  dateAndTime: string;
  moodIcon: string;
  content: string;
};

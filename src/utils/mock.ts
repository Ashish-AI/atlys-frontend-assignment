import { HomeData } from "./types";

export const dummyData: HomeData = {
  userName: "John Doe",
  dailyMessage:
    "How are you doing today? Would you like to share something with the community 🤗",
  postData: [
    {
      id: "post1",
      name: "Alice Johnson",
      isEdited: false,
      profilePicture:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg",
      dateAndTime: "2024-07-21T14:55:00Z",
      moodIcon: "😊",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      commentsCount: 3,
      comments: [
        {
          id: "comment1",
          name: "Bob Smith",
          comment: "Looks delicious!",
          profilePicture:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
          dateAndTime: "2024-07-20T10:05:00Z",
        },
        {
          id: "comment2",
          name: "Charlie Brown",
          comment: "I need to try this place!",
          profilePicture:
            "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg",
          dateAndTime: "2024-07-20T10:15:00Z",
        },
        {
          id: "comment3",
          name: "Daisy Wilson",
          comment: "What did you have?",
          profilePicture:
            "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
          dateAndTime: "2024-07-20T10:25:00Z",
        },
      ],
    },
    {
      id: "post2",
      name: "Bob Smith",
      isEdited: true,
      profilePicture:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      dateAndTime: "2024-07-20T12:30:00Z",
      moodIcon: "😎",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      commentsCount: 2,
      comments: [
        {
          id: "comment4",
          name: "Alice Johnson",
          comment: "Have a great trip!",
          profilePicture:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
          dateAndTime: "2024-07-20T12:35:00Z",
        },
        {
          id: "comment5",
          name: "Daisy Wilson",
          comment: "Where are you going?",
          profilePicture:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
          dateAndTime: "2024-07-20T12:40:00Z",
        },
      ],
    },
    {
      id: "post3",
      name: "Charlie Brown",
      isEdited: false,
      profilePicture:
        "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg",
      dateAndTime: "2024-07-20T15:45:00Z",
      moodIcon: "🎨",
      content: "Just finished painting this new piece. What do you think?",
      commentsCount: 4,
      comments: [
        {
          id: "comment6",
          name: "Bob Smith",
          comment: "Amazing artwork!",
          profilePicture:
            "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg",
          dateAndTime: "2024-07-20T15:50:00Z",
        },
        {
          id: "comment7",
          name: "Alice Johnson",
          comment: "I love the colors!",
          profilePicture:
            "https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg",
          dateAndTime: "2024-07-20T15:55:00Z",
        },
        {
          id: "comment8",
          name: "Daisy Wilson",
          comment: "So talented!",
          profilePicture:
            "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
          dateAndTime: "2024-07-20T16:00:00Z",
        },
        {
          id: "comment9",
          name: "Emily Clark",
          comment: "Beautiful piece!",
          profilePicture:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
          dateAndTime: "2024-07-20T16:05:00Z",
        },
      ],
    },
  ],
};

export const emoticons = [
  " 🗿",
  " 😀",
  " 😁",
  " 😂",
  " 😃",
  " 😄",
  " 😅",
  " 😍",
  " 💗",
  " 🚀",
  " 🚁",
  " 🚂",
  " 🚃",
  " 🚄",
  " 👮",
  " 👯",
  " 👰",
  " 👱",
  " 👲",
];

import { HomeData } from "./types";

export const dummyData: HomeData = {
  userName: "John Doe",
  dailyMessage: "Good morning! Here’s what’s new today:",
  postData: [
    {
      id: "post1",
      name: "Alice Johnson",
      isEdited: false,
      profilePicture:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg",
      dateAndTime: "2024-07-20T10:00:00Z",
      moodIcon: "😊",
      content: "Just had a great breakfast at the new cafe in town!",
      commentsCount: 3,
      comments: [
        {
          id: "comment1",
          name: "Bob Smith",
          comment: "Looks delicious!",
          profilePicture:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
        },
        {
          id: "comment2",
          name: "Charlie Brown",
          comment: "I need to try this place!",
          profilePicture:
            "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg",
        },
        {
          id: "comment3",
          name: "Daisy Wilson",
          comment: "What did you have?",
          profilePicture:
            "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
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
      content: "Excited for the weekend getaway! 🚗🌄",
      commentsCount: 2,
      comments: [
        {
          id: "comment4",
          name: "Alice Johnson",
          comment: "Have a great trip!",
          profilePicture:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        },
        {
          id: "comment5",
          name: "Daisy Wilson",
          comment: "Where are you going?",
          profilePicture:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
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
        },
        {
          id: "comment7",
          name: "Alice Johnson",
          comment: "I love the colors!",
          profilePicture:
            "https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg",
        },
        {
          id: "comment8",
          name: "Daisy Wilson",
          comment: "So talented!",
          profilePicture:
            "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
        },
        {
          id: "comment9",
          name: "Emily Clark",
          comment: "Beautiful piece!",
          profilePicture:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
        },
      ],
    },
  ],
};

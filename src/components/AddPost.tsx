import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { SendPostData } from "../utils/types";

export const AddPost = () => {
  const [showEmoticons, setShowEmoticons] = useState(false);
  const emoticons = ["😊", "😂", "❤️", "🙌", "🎉"]; // List of emoticons
  const [selectedEmoticon, setSelectedEmoticon] = useState<string>("💬");

  const [postData, setPostData] = useState<SendPostData | undefined>({
    id: "",
    name: "",
    profilePicture: "",
    dateAndTime: "",
    moodIcon: "",
    content: "",
  });

  const leadingElement = (
    <div>
      <div className="bg-darkA h-12 w-12 rounded-full flex items-center justify-center shrink-0">
        {selectedEmoticon}
      </div>
    </div>
  );

  const handleEmoticonClick = (emoticon: string) => {
    setSelectedEmoticon(emoticon);
    setShowEmoticons(false);
  };

  return (
    <div className="bg-darkA border-2 rounded-lg py-10 px-6 border-gray mt-10 relative">
      <h1 className="mb-4">Create post</h1>
      <div className="flex items-center mb-2">
        <div className="w-full relative">
          {" "}
          <Input
            placeholder="How are you feeling today?"
            type="text"
            leadingElement={leadingElement}
            mode="dark"
            onLeadingElementPressed={() => {
              setShowEmoticons((prev) => !prev);
            }}
          />
          {showEmoticons && (
            <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
              <div className="p-2 grid grid-cols-5 gap-2">
                {emoticons.map((emoticon) => (
                  <div
                    key={emoticon}
                    className="text-center text-xl cursor-pointer"
                    onClick={() => handleEmoticonClick(emoticon)}
                  >
                    {emoticon}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end items-center mt-4">
        <Button label="Post" onClick={() => {}} variant="autoWidth" />
      </div>
    </div>
  );
};

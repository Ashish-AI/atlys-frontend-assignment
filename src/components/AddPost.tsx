import { useState } from "react";
import Button, { ButtonState } from "./Button";
import Input from "./Input";
import { PostData } from "../utils/types";
import localStorageUtil from "../utils/localStorage";
import { isNil } from "../utils/helpers";
import { emoticons } from "../utils/mock";
import { useModal } from "../Contexts/ModalContext";
import { Login } from "./Login";
import SignUp from "../pages/Signup";

export const AddPost = ({
  setHomePostData,
}: {
  setHomePostData: React.Dispatch<React.SetStateAction<PostData[]>>;
}) => {
  const [showEmoticons, setShowEmoticons] = useState(false);
  const userData = localStorageUtil.getItem("user-data");

  const [postData, setPostData] = useState<{
    selectedEmoticon: string;
    content: string;
  }>({ selectedEmoticon: "💬", content: "" });

  const { showModal } = useModal();

  const leadingElement = (
    <div>
      <div className="bg-darkA h-12 w-12 rounded-full flex items-center justify-center shrink-0">
        {postData.selectedEmoticon}
      </div>
    </div>
  );

  const handleEmoticonClick = (emoticon: string) => {
    setPostData((prev) => ({ ...prev, selectedEmoticon: emoticon }));
    setShowEmoticons(false);
  };

  const handleOnPress = () => {
    if (userData) {
      setPostData({ content: "", selectedEmoticon: "💬" });
      setHomePostData((prev) => [
        {
          id: "post" + (prev.length + 1).toString(),
          name: userData?.name,
          isEdited: false,
          profilePicture:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
          dateAndTime: new Date().toString(),
          moodIcon: postData.selectedEmoticon,
          content: postData?.content,
        },
        ...prev,
      ]);
    } else {
      showModal(<SignUp isModal={true} />);
    }
  };

  const getButtonState = (): ButtonState => {
    if (!isNil(postData.content)) {
      return "active";
    }
    return "disabled";
  };

  return (
    <div
      className={
        "bg-darkA border-2 rounded-lg py-10 px-6 border-gray mt-10 relative"
      }
    >
      <h1 className="mb-4">Create post</h1>
      <div className="flex items-center mb-2">
        <div className="w-full relative">
          <Input
            placeholder="How are you feeling today?"
            type="text"
            leadingElement={leadingElement}
            mode="dark"
            value={postData?.content}
            onChange={(e) => {
              setPostData((prev) => ({ ...prev, content: e.target.value }));
            }}
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
        <Button
          label="Post"
          onClick={() => handleOnPress()}
          variant="autoWidth"
          state={getButtonState()}
        />
      </div>
    </div>
  );
};

import { useState } from "react";
import { AddPost } from "../components/AddPost";
import { Post } from "../components/Post";
import localStorageUtil from "../utils/localStorage";
import { dummyData } from "../utils/mock";

const Home = () => {
  const { dailyMessage, postData } = dummyData;
  const userData = localStorageUtil.getItem("user-data");
  const [homePostData, setHomePostData] = useState(postData);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-medium text-lightGray text-3xl mb-3">
          {userData ? "Hello Jane" : "Hey there!"}
        </h1>
        <p className="mb-4 font-normal text-base text-silver">{dailyMessage}</p>
        <AddPost setHomePostData={setHomePostData} />
        {homePostData.map((item, index) => (
          <Post data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;

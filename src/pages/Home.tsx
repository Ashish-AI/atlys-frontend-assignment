import React from "react";
import { AddPost } from "../components/AddPost";

const Home = () => {
  const posts = [
    {
      id: 1,
      name: "Theresa Webb",
      time: "5 mins ago",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: 24,
      avatar: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Marvin McKinney",
      time: "8 mins ago",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: 0,
      avatar: "https://via.placeholder.com/150", // Replace with actual image URL
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto ">
        <h1 className="font-medium text-lightGray text-3xl mb-3">Hello Jane</h1>
        <p className="mb-4 font-normal text-base text-silver">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>

        <AddPost />

        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-darkA border-2 rounded-lg py-10 px-6 border-gray mt-10"
          >
            <div className="flex items-center mb-2">
              <img
                src={post.avatar}
                alt={post.name}
                className="w-11 h-11 rounded-full mr-4"
              />
              <div>
                <p className="font-medium text-base text-lightGray">
                  {post.name}
                </p>
                <p className="font-medium text-sm text-silver">{post.time}</p>
              </div>
            </div>
            <div className="mt-5 bg-darker p-4 rounded-lg flex ">
              <div className="bg-darkA  rounded-full flex items-center justify-center">
                😀
              </div>
              <p className="text-silver font-normal text-base ml-4">
                {post.content}
              </p>
            </div>
            <div className="flex items-center text-gray-400 mt-3">
              <span className="material-icons mr-2">chat_</span>
              <p className="font-medium text-sm text-silver">
                {post.comments} comments
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

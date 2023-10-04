import React from "react";
import { ICON_URL } from "../utils/constants";

const commentsData = [
  {
    name: "Shekar",
    text: "Welcome to my videos, Please do subscribe",
    replies: [
      {
        name: "Abhishek",
        text: "Welcome to my videos, Please do subscribe",
        replies: [
          {
            name: "Abhishek",
            text: "Welcome to my videos, Please do subscribe",
            replies: [
              {
                name: "Abhishek",
                text: "Welcome to my videos, Please do subscribe",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Maddy",
    text: "Welcome to my videos, Please do subscribe",
    replies: [
      {
        name: "Abhishek",
        text: "Welcome to my videos, Please do subscribe",
        replies: [
          {
            name: "Abhishek",
            text: "Welcome to my videos, Please do subscribe",
            replies: [
              {
                name: "Abhishek",
                text: "Welcome to my videos, Please do subscribe",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img className="w-12 h-12" alt="user" src={ICON_URL} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments?.map((comment, i) => {
    return (
      <div>
        <Comment key={i} data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

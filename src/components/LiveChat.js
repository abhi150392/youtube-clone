import React from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(15) + "🚀",
        })
      );
    }, 1000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((msg, i) => {
        return <ChatMessage key={i} name={msg.name} message={msg.message} />;
      })}
    </div>
  );
};

export default LiveChat;

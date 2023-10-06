import React from "react";
import { ICON_URL } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shawdow-sm p-2">
      <img className="h-8" alt="user-icon" src={ICON_URL} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;

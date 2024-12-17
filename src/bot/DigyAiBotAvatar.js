import React from "react";

import BotAvatar from "../assets/images/icons/logo-d.svg";

const DigyAiBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ backgroundColor: "transparent" }}
      >
        <img alt="DigyBotAvatar" src={BotAvatar} className="img-fluid" width={24} height={24} />
      </div>
    </div>
  );
};

export default DigyAiBotAvatar;

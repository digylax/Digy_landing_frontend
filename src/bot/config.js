import { createChatBotMessage } from 'react-chatbot-kit';
import DigyAiBotAvatar from './DigyAiBotAvatar';

const config = {
  lang: "no",
  botName: "DigyAIBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0d6efd"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
    createChatBotMessage(`Hi, hello, Welcome to our Digylax Pvt Ltd`),
    // createChatBotMessage(
    //   "Digylax Pvt Ltd.",
    // ), 
    createChatBotMessage(
      "How can I help with you... Type 'Hello'",
    )
  ],
  customComponents: { botAvatar: (props) => <DigyAiBotAvatar {...props} /> },
};

export default config;
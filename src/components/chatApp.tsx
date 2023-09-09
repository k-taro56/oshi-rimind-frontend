// App.tsx
import React, { useState } from "react";
import "./chatApp.css";

interface Message {
  text: string;
  sender: string;
}

enum AppMode {
  EnterUserName,
  Chat,
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [appMode, setAppMode] = useState(AppMode.EnterUserName);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "" && userName.trim() !== "") {
      const updatedMessages = [
        ...messages,
        { text: `${userName}: ${newMessage}`, sender: "user" },
      ];
      setMessages(updatedMessages);
      setNewMessage("");

      setTimeout(() => {
        const responseMessage = "これは仮の応答です。";
        const updatedMessagesWithResponse = [
          ...updatedMessages,
          { text: responseMessage, sender: "bot" },
        ];
        setMessages(updatedMessagesWithResponse);
      }, 1000);

      setAppMode(AppMode.Chat);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const renderContent = () => {
    return (
      <div className="chat-container">
        <h1>推しリマインド</h1>
        {appMode === AppMode.EnterUserName && (
          <div className="username-input">
            <input
              type="text"
              placeholder="ユーザ名を入力してください..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={() => setAppMode(AppMode.Chat)}>
              ユーザ名設定
            </button>
          </div>
        )}
        {appMode === AppMode.Chat && (
          <div className="message-container">
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </div>
        )}
        {appMode === AppMode.Chat && (
          <div className="input-container">
            <input
              type="text"
              placeholder="メッセージを入力してください..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSendMessage}>送信</button>
          </div>
        )}
      </div>
    );
  };

  return <div className="App">{renderContent()}</div>;
};

interface MessageProps {
  message: Message;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const iconSrc =
    message.sender === "user"
      ? "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png"
      : "https://1.bp.blogspot.com/-VthzAuEo8fc/X96mhYv33UI/AAAAAAABdBs/HXCc0J0WsHUMSuQ00UZ5UuLPUXatMIq-wCNcBGAsYHQ/s831/onepiece01_luffy2.png";

  return (
    <div className={`message ${message.sender}`}>
      <div className="bubble">
        <img className="icon" src={iconSrc} alt="Icon" />
        <p className={message.sender === "user" ? "userp" : "botp"}>
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default App;

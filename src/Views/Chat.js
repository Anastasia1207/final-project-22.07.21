import React, { useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import "./Chat.css";
import ChatForm from "../Components/ChatForm";

const breadcrumbPaths = [{ link: "/", title: "Home" }, { title: "Chat" }];

function Chat() {
  const [messages, setMessages] = useState([]);

  function handleChatFormSubmit(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumbs paths={breadcrumbPaths} />
          <h3>Chat</h3>
        </div>
      </div>
      <div className="row">
        <div className=".col-md-3 .offset-md-3" style={{ paddingLeft: "20px" }}>
          <div className="row">
            <div
              class="border border-secondary rounded"
              style={{
                backgroundColor: "#E9F7EF",
                height: 570,
                display: "flex",
                flexFlow: "column nowrap",
              }}
            >
              <div className="messages-container">
                {messages.map(({ message, username, timestamp }) => (
                  <div className="message">
                    <p>
                      {username}: {new Date(timestamp).toLocaleString()}
                    </p>
                    <p>{message}</p>
                  </div>
                ))}
              </div>
              <ChatForm onSubmit={handleChatFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

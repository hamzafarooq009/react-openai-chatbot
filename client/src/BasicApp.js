import React, { useState, useRef, useEffect } from "react";
import "./BasicApp.css";
import ChatMessage from "./BasicChatMessage";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Set your OpenAI API key in environment variables

function BasicApp() {
  // messages holds an array of chat messages
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  //   inputMessage holds the current input from the user.
  const [inputMessage, setInputMessage] = useState("");

  //   useRef is used to create inputRef, a reference to the input element, which can be used to programmatically focus it.
  const inputRef = useRef(null);

  //   useEffect is used to automatically focus the input element when the component is first rendered or re-rendered.
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  //   handleSend is an asynchronous function triggered when the user sends a message. It checks if the input message is not empty, creates a new message object, updates the messages state, clears the input field, and then processes the message to simulate interaction with ChatGPT.
  const handleSend = async () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      message: inputMessage.trim(),
      sentTime: new Date().toLocaleTimeString(),
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setInputMessage("");
    await processMessageToChatGPT(newMessage.message);
  };

  async function processMessageToChatGPT(userInput) {
    // Call OpenAI API here
    // For simplicity, the API call is omitted in this example
    // You would typically send a request to the OpenAI API and handle the response

    // Mock response from OpenAI
    const aiResponse = "This is a response from ChatGPT.";

    setMessages((messages) => [
      ...messages,
      {
        message: aiResponse,
        sentTime: new Date().toLocaleTimeString(),
        sender: "ChatGPT",
      },
    ]);
  }

  return (
    <div className="app-container">
      <h1 className="chat-title">AI-Chat Bot 3.5 Turbo</h1>
      <div className="messages-container">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          ref={inputRef}
        />
        <button type="button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default BasicApp;

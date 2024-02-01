import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function ChatMessage ({ message }){
    const messageClass = message.sender === 'ChatGPT' ? 'received' : 'sent';
    const alignClass = message.sender === 'ChatGPT' ? 'align-left' : 'align-right';
  
    return (
      <div className={`message ${messageClass} ${alignClass}`}>
        <div className={`message-bubble ${messageClass === 'received' ? 'received-bubble' : 'sent-bubble'}`}>
          <p className="mb-1">{message.message}</p>
          <span className="message-timestamp">{message.sentTime}</span>
        </div>
      </div>
    );
  };

  export default ChatMessage;

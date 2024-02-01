import React from 'react';
import './BasicApp.css';

function BasicChatMessage({ message }) {
  const messageClass = message.sender === 'ChatGPT' ? 'message-received' : 'message-sent';

  return (
    <div className={messageClass}>
      <p>{message.message}</p>
      <span>{message.sentTime}</span>
    </div>
  );
}

export default BasicChatMessage;
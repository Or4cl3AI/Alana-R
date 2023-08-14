import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch user id on component mount
    // This is a placeholder, replace with actual user id fetch
    setUserId('user_id_placeholder');
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = async () => {
    try {
      const response = await axios.post('/api/chat', { input, userId });
      setConversations([...conversations, response.data]);
      setInput('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {conversations.map((conversation, index) => (
          <div key={index} className="chat-message">
            <p>{conversation.text}</p>
            <audio src={conversation.audio} controls />
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
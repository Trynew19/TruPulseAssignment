// File: src/App.jsx
import React, { useState, useEffect } from 'react';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { parseMessage } from './utils/parser';
import { plugins } from './plugins';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (content) => {
    const userMsg = {
      id: uuidv4(),
      sender: 'user',
      content,
      type: 'text',
      timestamp: new Date().toISOString(),
    };
    setMessages((msgs) => [...msgs, userMsg]);

    const parsed = parseMessage(content);
    if (parsed) {
      const plugin = plugins[parsed.pluginName];
      if (plugin) {
        const data = await plugin.execute(parsed.args);
        const pluginMsg = {
          id: uuidv4(),
          sender: 'assistant',
          content: '',
          type: 'plugin',
          pluginName: parsed.pluginName,
          pluginData: data,
          timestamp: new Date().toISOString(),
        };
        setMessages((msgs) => [...msgs, pluginMsg]);
        return;
      }
    }

    const reply = {
      id: uuidv4(),
      sender: 'assistant',
      content: "I didn't understand that command.",
      type: 'text',
      timestamp: new Date().toISOString(),
    };
    setMessages((msgs) => [...msgs, reply]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">AI Chat Interface</h1>
        <MessageList messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;

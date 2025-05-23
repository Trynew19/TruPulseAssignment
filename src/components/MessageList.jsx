import React from 'react';

export const MessageList = ({ messages }) => {
  return (
    <div className="h-96 overflow-y-scroll space-y-4 mb-4">
      {messages.map((msg) => (
        <div key={msg.id} className={`p-3 rounded-xl ${msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}>
          {msg.type === 'plugin' ? (
            <div>
              <strong>{msg.pluginName.toUpperCase()}:</strong>
              <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(msg.pluginData, null, 2)}</pre>
            </div>
          ) : (
            <span>{msg.content}</span>
          )}
        </div>
      ))}
    </div>
  );
};
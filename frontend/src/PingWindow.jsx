import React, { useEffect, useRef } from 'react';

const PingWindow = ({ pings }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [pings]);

  return (
    <div style={{ 
      height: '500px', 
      overflowY: 'auto', 
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '8px'
    }}>
      {pings.map((ping) => (
        <div
          key={ping.id}
          style={{ 
            textAlign: ping.fromMe ? 'right' : 'left',
            margin: '8px 0'
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: '12px',
              backgroundColor: ping.fromMe ? '#0084ff' : '#e4e6eb',
              color: ping.fromMe ? 'white' : 'black',
              maxWidth: '70%',
              wordBreak: 'break-word'
            }}
          >
            {ping.text}
            <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>
              {new Date(ping.ts).toLocaleTimeString()}
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default PingWindow;
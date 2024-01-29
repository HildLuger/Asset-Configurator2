import React from 'react';

// MessageOverlay Component
export const MessageOverlay: React.FC = () => {
  return (
    <div className="absolute top-3/4 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-0  p-3  bg-white bg-opacity-5 border border-white shadow-lg hover:bg-opacity-15 focus:outline-none backdrop-blur text-white ">
      <div className="glass-effect">
        <p>Ring LODs </p>
      </div>
    </div>
  );
};

export default MessageOverlay;

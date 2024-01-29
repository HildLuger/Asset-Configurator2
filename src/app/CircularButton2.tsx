// CircularButton2.tsx
import React from 'react';

interface CircularButtonProps2 {
  onClick: () => void; // Ensuring onClick is a function type
}

const CircularButton2: React.FC<CircularButtonProps2> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-3/4 left-1/2 ml-10 transform -translate-x-1/2 -translate-y-1/2 z-0 w-12 h-12 rounded-full bg-white bg-opacity-5 border border-white flex items-center justify-center shadow-lg hover:bg-opacity-15 focus:outline-none backdrop-blur text-white"
      style={{ top: '80%', width: '60px', height: '60px' }}
    >
      <span>Seats</span>
    </button>
  );
};

export default CircularButton2;

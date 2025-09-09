import React from 'react';

export default function Scaleout() {
  return (
    <div
      className="w-10 h-10 mx-auto my-25 bg-gray-800 rounded-full"
      style={{
        animation: 'sk-scaleout 1.0s infinite ease-in-out'
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-scaleout {
            0% { 
              transform: scale(0);
            } 
            100% {
              transform: scale(1.0);
              opacity: 0;
            }
          }
        `
      }} />
    </div>
  );
}
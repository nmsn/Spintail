import React from 'react';

export default function Cube() {
  return (
    <div className="w-10 h-10 mx-auto my-25 relative">
      {/* 第一个立方体 */}
      <div
        className="bg-white w-4 h-4 absolute top-0 left-0"
        style={{
          animation: 'sk-cubemove 1.8s infinite ease-in-out'
        }}
      />

      {/* 第二个立方体 */}
      <div
        className="bg-white w-4 h-4 absolute top-0 left-0"
        style={{
          animation: 'sk-cubemove 1.8s infinite ease-in-out',
          animationDelay: '-0.9s'
        }}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-cubemove {
            25% { 
              transform: translateX(42px) rotate(-90deg) scale(0.5);
            } 
            50% { 
              transform: translateX(42px) translateY(42px) rotate(-179deg);
            } 
            50.1% { 
              transform: translateX(42px) translateY(42px) rotate(-180deg);
            } 
            75% { 
              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
            } 
            100% { 
              transform: rotate(-360deg);
            }
          }
        `
      }} />
    </div>
  );
}
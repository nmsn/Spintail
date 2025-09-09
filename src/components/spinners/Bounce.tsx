import React from 'react';

export default function Bounce() {
  return (
    <div
      className="w-10 h-10 mx-auto my-25 relative text-center"
      style={{
        animation: 'sk-rotate 2.0s infinite linear'
      }}
    >
      {/* 第一个点 */}
      <div
        className="w-3/5 h-3/5 inline-block absolute top-0 bg-gray-800 rounded-full"
        style={{
          animation: 'sk-bounce 2.0s infinite ease-in-out'
        }}
      />

      {/* 第二个点 */}
      <div
        className="w-3/5 h-3/5 inline-block absolute bottom-0 bg-gray-800 rounded-full"
        style={{
          animation: 'sk-bounce 2.0s infinite ease-in-out',
          animationDelay: '-1.0s'
        }}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-rotate { 
            100% { transform: rotate(360deg); }
          }
          
          @keyframes sk-bounce {
            0%, 100% { 
              transform: scale(0.0);
            } 
            50% { 
              transform: scale(1.0);
            }
          }
        `
      }} />
    </div>
  );
}
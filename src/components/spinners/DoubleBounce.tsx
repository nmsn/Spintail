import React from 'react';

export default function DoubleBounce() {
  return (
    <div className="w-10 h-10 relative mx-auto my-25">
      {/* 第一个弹跳圆 */}
      <div
        className="w-full h-full rounded-full bg-gray-800 opacity-60 absolute top-0 left-0"
        style={{
          animation: 'sk-bounce 2.0s infinite ease-in-out'
        }}
      />

      {/* 第二个弹跳圆 */}
      <div
        className="w-full h-full rounded-full bg-gray-800 opacity-60 absolute top-0 left-0"
        style={{
          animation: 'sk-bounce 2.0s infinite ease-in-out',
          animationDelay: '-1.0s'
        }}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
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
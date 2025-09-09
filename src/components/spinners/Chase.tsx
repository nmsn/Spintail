import React from 'react';

export default function Chase() {
  return (
    <div
      className="w-10 h-10 relative mx-auto my-25"
      style={{
        animation: 'sk-chase 2.5s infinite linear both'
      }}
    >
      {/* 生成 6 个追逐点 */}
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="w-full h-full absolute left-0 top-0"
          style={{
            animation: 'sk-chase-dot 2.0s infinite ease-in-out both',
            animationDelay: `${-1.1 + index * 0.1}s`
          }}
        >
          <div
            className="w-1/4 h-1/4 bg-white rounded-full block"
            style={{
              animation: 'sk-chase-dot-before 2.0s infinite ease-in-out both',
              animationDelay: `${-1.1 + index * 0.1}s`
            }}
          />
        </div>
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-chase {
            100% { transform: rotate(360deg); }
          }
          
          @keyframes sk-chase-dot {
            80%, 100% { transform: rotate(360deg); }
          }
          
          @keyframes sk-chase-dot-before {
            50% {
              transform: scale(0.4);
            } 
            100%, 0% {
              transform: scale(1.0);
            }
          }
        `
      }} />
    </div>
  );
}
import React from 'react';

export default function Rect() {
  return (
    <div className="mx-auto my-25 w-12 h-10 text-center text-xs">
      {/* 生成 5 个矩形条 */}
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className="bg-gray-800 h-full w-1.5 inline-block"
          style={{
            animation: 'sk-stretchdelay 1.2s infinite ease-in-out',
            animationDelay: `${-1.2 + index * 0.1}s`
          }}
        />
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-stretchdelay {
            0%, 40%, 100% { 
              transform: scaleY(0.4);
            }  
            20% { 
              transform: scaleY(1.0);
            }
          }
        `
      }} />
    </div>
  );
}
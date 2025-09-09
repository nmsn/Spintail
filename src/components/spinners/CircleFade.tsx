import React from 'react';

export default function CircleFade() {
  return (
    <div className="w-10 h-10 mx-auto my-25 relative">
      {/* 生成 12 个圆点 */}
      {Array.from({ length: 12 }, (_, index) => (
        <div
          key={index}
          className="w-full h-full absolute left-0 top-0"
          style={{
            transform: `rotate(${index * 30}deg)`
          }}
        >
          <div
            className="w-[15%] h-[15%] bg-white rounded-full block mx-auto"
            style={{
              animation: 'sk-circleFadeDelay 1.2s infinite ease-in-out both',
              animationDelay: `${-1.2 + index * 0.1}s`
            }}
          />
        </div>
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-circleFadeDelay {
            0%, 39%, 100% { opacity: 0; }
            40% { opacity: 1; }
          }
        `
      }} />
    </div>
  );
}
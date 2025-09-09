import React from 'react';

export default function BounceDelay() {
  const delays = [-0.32, -0.16, 0];

  return (
    <div className="mx-auto mt-25 w-18 text-center">
      {delays.map((delay, index) => (
        <div
          key={index}
          className="w-4.5 h-4.5 bg-gray-800 rounded-full inline-block"
          style={{
            animation: 'sk-bouncedelay 1.4s infinite ease-in-out both',
            animationDelay: `${delay}s`
          }}
        />
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-bouncedelay {
            0%, 80%, 100% { 
              transform: scale(0);
            } 
            40% { 
              transform: scale(1.0);
            }
          }
        `
      }} />
    </div>
  );
}
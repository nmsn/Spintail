import React from 'react';

export default function RotatePlane() {
  return (
    <div
      className="w-10 h-10 mx-auto my-25 bg-gray-800"
      style={{
        animation: 'spin3d 1.2s infinite ease-in-out',
        animationName: 'spin3d'
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin3d {
            0% { 
              transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            } 
            50% { 
              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
            } 
            100% { 
              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            }
          }
        `
      }} />
    </div>
  );
}
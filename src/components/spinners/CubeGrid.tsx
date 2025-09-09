import React from 'react';

export default function CubeGrid() {
  const delays = [0.2, 0.3, 0.4, 0.1, 0.2, 0.3, 0, 0.1, 0.2];

  return (
    <div className="w-10 h-10 mx-auto my-25 grid grid-cols-3 gap-0">
      {delays.map((delay, index) => (
        <div
          key={index}
          className="w-full h-full bg-gray-800"
          style={{
            animation: 'sk-cubeGridScaleDelay 1.3s infinite ease-in-out',
            animationDelay: `${delay}s`
          }}
        />
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-cubeGridScaleDelay {
            0%, 70%, 100% {
              transform: scale3D(1, 1, 1);
            } 
            35% {
              transform: scale3D(0, 0, 1);
            }
          }
        `
      }} />
    </div>
  );
}
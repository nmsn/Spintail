import React from 'react';

export default function FoldCube() {
  const cubes = [
    { rotation: 0, delay: 0 },
    { rotation: 90, delay: 0.3 },
    { rotation: 180, delay: 0.6 },
    { rotation: 270, delay: 0.9 }
  ];

  return (
    <div
      className="w-10 h-10 mx-auto my-5 relative"
      style={{
        transform: 'rotateZ(45deg)'
      }}
    >
      {cubes.map((cube, index) => (
        <div
          key={index}
          className="float-left w-1/2 h-1/2 relative"
          style={{
            transform: `scale(1.1) rotateZ(${cube.rotation}deg)`
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-white"
            style={{
              animation: 'sk-foldCubeAngle 2.4s infinite linear both',
              animationDelay: `${cube.delay}s`,
              transformOrigin: '100% 100%'
            }}
          />
        </div>
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sk-foldCubeAngle {
            0%, 10% {
              transform: perspective(140px) rotateX(-180deg);
              opacity: 0; 
            } 
            25%, 75% {
              transform: perspective(140px) rotateX(0deg);
              opacity: 1; 
            } 
            90%, 100% {
              transform: perspective(140px) rotateY(180deg);
              opacity: 0; 
            }
          }
        `
      }} />
    </div>
  );
}
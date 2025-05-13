import React from 'react';

const shapes = Array.from({ length: 25 });

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default function BackgroundShapes() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: -1, // Ensure it's behind other content
      pointerEvents: 'none',
    }}>
      {shapes.map((_, i) => {
        const size = random(8, 20);
        const shapeType = ['circle', 'triangle', 'star'][i % 3];
        const style = {
          position: 'absolute',
          top: `${random(0, 100)}%`,
          left: `${random(0, 100)}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'transparent', // Inside is transparent
          border: `2px solid var(--primary-color)`, // Border color
          opacity: 0.15, // Reduced opacity for subtle effect
          animation: `float${i % 3} ${random(5, 15)}s ease-in-out infinite`,
        };

        switch (shapeType) {
          case 'circle':
            style.borderRadius = '50%';
            break;
          case 'triangle':
            return (
              <div
                key={i}
                style={{
                  width: 0,
                  height: 0,
                  position: 'absolute',
                  top: `${random(0, 100)}%`,
                  left: `${random(0, 100)}%`,
                  borderLeft: `${size / 2}px solid transparent`,
                  borderRight: `${size / 2}px solid transparent`,
                  borderBottom: `${size}px solid transparent`,
                  borderBottomColor: 'var(--primary-color)', // Border color for triangle
                  opacity: 0.15,
                  animation: `float${i % 3} ${random(5, 15)}s ease-in-out infinite`,
                }}
              />
            );
          case 'star':
            return (
              <div
                key={i}
                style={{
                  ...style,
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}
              />
            );
          default:
            return <div key={i} style={style} />;
        }

        return <div key={i} style={style} />;
      })}
    </div>
  );
}

import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const inner = document.querySelector('.cursor-inner');
    const outer = document.querySelector('.cursor-outer');

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      inner.style.top = `${y}px`;
      inner.style.left = `${x}px`;
      outer.style.top = `${y}px`;
      outer.style.left = `${x}px`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div
        className="cursor-inner"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--primary-color)',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      ></div>
      <div
        className="cursor-outer"
        style={{
          width: '30px',
          height: '30px',
          border: '1px solid var(--primary-color)',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
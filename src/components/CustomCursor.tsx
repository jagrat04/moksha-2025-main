'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react';
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [visible, setVisible] = useState<boolean>(true);
  const [isMouseConnected, setIsMouseConnected] = useState<boolean>(false);

  const handleMouseMove = 
    (e: MouseEvent) => {
      setIsMouseConnected(true);
      if (!visible) setVisible(true);
      
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
    };

  const handleMouseOut = (e: MouseEvent) => {
    if (!e.relatedTarget) {
      setVisible(false);
    }
  };
  const handleMouseEnter = (e: MouseEvent) => {
    if (!e.relatedTarget) {
      setVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseMove]);

  if (!isMouseConnected) {
    return null;
  }

  return (
    <div
      style={{
        top: position.y + 48,
        left: position.x - 80,
        backgroundImage: `url(/assets/cursor/wand.gif)`,
        
        width: '250px',
        height: '140px',
        display: visible ? 'block' : 'none',
      }}
      ref={cursorRef}
      className="fixed pointer-events-none bg-cover transition-transform -translate-x-1/2 -translate-y-1/2 z-50"
    />
  );
};

export default CustomCursor;

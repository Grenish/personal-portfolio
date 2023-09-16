import React, { useState, useEffect, useRef } from "react";
import "./CustomCursor.css";

const Cursor = () => {
  const [cursorType, setCursorType] = useState("");
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setCursorType("default");
  };

  const handleMouseLeave = () => {
    setCursorType("hover");
  };

  

  useEffect(() => {
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);



    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      role="presentation"
      className={`custom-cursor ${cursorType}-cursor`}
    />
  );
};

export default Cursor;
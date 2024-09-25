import React, { useState, useEffect } from 'react';
import './ColorRandomizer.css'; // Đảm bảo tạo file CSS riêng cho ColorRandomizer

const ColorRandomizer = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
  const [currentColor, setCurrentColor] = useState('white');
  const [history, setHistory] = useState([]);
  const [isAuto, setIsAuto] = useState(false);

  // Hàm đổi màu ngẫu nhiên
  const randomColor = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setHistory((prev) => [...prev, color]);
    setCurrentColor(color);
  };

  // Tự động đổi màu
  useEffect(() => {
    let interval;
    if (isAuto) {
      interval = setInterval(randomColor, 1000);
    }
    return () => clearInterval(interval); // Dọn dẹp khi component unmount hoặc khi isAuto thay đổi
  }, [isAuto]);

  const handleAutoToggle = () => {
    setIsAuto((prev) => !prev);
    if (!isAuto) {
      randomColor(); // Đổi màu ngay khi bật tự động
    }
  };

  return (
    <div className="color-container" style={{ backgroundColor: currentColor }}>
      <h2>Random Color</h2>
      <button onClick={randomColor}>Random Color</button>
      <button onClick={handleAutoToggle}>
        {isAuto ? 'Stop Auto Change' : 'Start Auto Change'}
      </button>
      <div className="color-history">
        <h3>Color History: {history.join(', ')}</h3>
      </div>
    </div>
  );
};

export default ColorRandomizer;

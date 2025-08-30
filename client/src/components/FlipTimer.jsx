import React, { useState, useEffect } from 'react';
import "../styles/Homepage.css";

function FlipTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
  });

  const formatTime = (num) => num.toString().padStart(2, '0').split('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date('2025-09-01T09:00:00');
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setTimeLeft(prevTime => {
          const newTime = { hours, minutes };
          
          if (prevTime.hours !== hours || prevTime.minutes !== minutes) {
            document.querySelectorAll('.countdown-digit-box').forEach((box, index) => {
              setTimeout(() => {
                box.classList.add('flip-animation');
                setTimeout(() => box.classList.remove('flip-animation'), 800);
              }, index * 150);
            });
          }
          
          return newTime;
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);
    return () => clearInterval(timer);
  }, []); // ✅ Fixed: Empty dependency array

  return (
    <div className="countdown-container">
      <div className="countdown-hours">
        {formatTime(timeLeft.hours).map((digit, i) => (
          <div className="countdown-digit-box" key={`h${i}-${digit}`}>
            <div className="digit-top">
              <span className="hours-digit">{digit}</span>
            </div>
            <div className="digit-bottom">
              <span className="hours-digit">{digit}</span>
            </div>
            <div className="flip-panel">
              <span className="hours-digit">{digit}</span>
            </div>
            <div className="divider-line"></div>
          </div>
        ))}
      </div>

      <div className="countdown-minutes">
        {formatTime(timeLeft.minutes).map((digit, i) => (
          <div className="countdown-digit-box" key={`m${i}-${digit}`}>
            <div className="digit-top">
              <span className="minutes-digit">{digit}</span>
            </div>
            <div className="digit-bottom">
              <span className="minutes-digit">{digit}</span>
            </div>
            <div className="flip-panel">
              <span className="minutes-digit">{digit}</span>
            </div>
            <div className="divider-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlipTimer;

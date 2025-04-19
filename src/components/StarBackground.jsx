import React, { useEffect, useState } from 'react';
import '../styles/StarBackground.css';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 200;
    const colors = ['#F1C40F', '#3498DB', '#2ECC71', '#E74C3C', '#9B59B6'];

    const generateStars = () => {
      const newStars = Array.from({ length: starCount }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        color: Math.random() < 0.3 ? colors[Math.floor(Math.random() * colors.length)] : 'rgba(255, 255, 255, 0.8)',
        size: 1 + Math.random() * 2
      }));
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div className="star-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
            backgroundColor: star.color,
            boxShadow: star.color !== 'rgba(255, 255, 255, 0.8)' ? `0 0 5px ${star.color}` : 'none',
            width: `${star.size}px`,
            height: `${star.size}px`
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
